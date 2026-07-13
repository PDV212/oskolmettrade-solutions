# Nginx redirect for /ru/company (REG.RU)

The production origin `https://www.xn-----llccbycikqb3afub.xn--p1ai`
reports `Server: nginx`. Netlify's `public/_redirects` file has no
effect there, and `public/.htaccess` is honoured only if the site is
served through Apache. To make `/ru/company` a permanent redirect on
the current nginx origin, one of the following must be configured
**server-side** (this repository cannot install nginx config remotely).

## Option A — direct nginx config (preferred)

Add to the `server { … }` block for the site (before the SPA `try_files`
fallback):

```nginx
location = /ru/company {
    return 301 /company;
}
location = /ru/company/ {
    return 301 /company;
}
```

Requirements:

- Exact-path match only. Do **not** use `location ^~ /ru/` — that would
  break `/ru/faq` and every other RU-prefixed alias we may add later.
- Must be evaluated **before** the SPA `try_files … /index.html;`
  fallback so nginx does not serve `dist/index.html` first.
- `/company`, `/en/company`, `/zh/company` must continue to return 200
  from their prerendered files.

## Option B — REG.RU control panel

If direct nginx access is not available, use REG.RU's "Redirects" /
"Перенаправления" section in the hosting control panel to add a
**permanent (301)** redirect from `/ru/company` to `/company`. REG.RU
generates the equivalent nginx rule for you.

## Option C — hosting support ticket

If neither A nor B is available, open a REG.RU support ticket asking
for a 301 redirect from the exact path `/ru/company` to `/company` on
this domain. Provide this file as the specification.

## What NOT to do

- Do not deploy an HTML page at `dist/ru/company/index.html` with a
  `<meta http-equiv="refresh">` or a JavaScript `location.replace()`.
  Neither is an HTTP 301 and both leave the alias indexable.
- Do not remove the `.htaccess` rule — it is a safe Apache fallback.
- Do not add `/ru/company` to `sitemap.xml` or to any `hreflang` group.

## Verification

After the redirect is live:

```
curl -sI https://www.xn-----llccbycikqb3afub.xn--p1ai/ru/company
```

must show `HTTP/… 301` and `Location: /company` (or the absolute
equivalent). The repository verifier script does the same check:

```
node scripts/verifyProduction.mjs
```
