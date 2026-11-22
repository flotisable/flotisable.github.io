(require 'org)
(setq org-publish-project-alist
      `(("github-io" :components
         ("github-io-org"
          "github-io-assets"))
        ("github-io-org"
         :base-directory        "."
         :publishing-directory  "./html"
         :recursive             t
         :html-head             ,(concat
                                  "<link id=\"colorScheme\" rel=\"stylesheet\" type=\"text/css\" href=\"/styles/style.css\">\n"
                                  "<script defer src=\"/scripts/main.js\"></script>")
         :html-preamble-format  (("en"
                                  ,(concat
                                   "<form>\n"
                                   "  <button id=\"lightTheme\" name=\"lightTheme\" type=\"button\" value=\"true\">Light</button>\n"
                                   "  <button id=\"darkTheme\"  name=\"darkTheme\"  type=\"button\" value=\"true\">Dark</button>\n"
                                   "</form>"))))
        ("github-io-assets"
         :base-directory        "."
         :publishing-directory  "./html"
         :recursive             t
         :base-extension        "png\\|jpg\\|css\\|js"
         :exclude               "html"
         :publishing-function   org-publish-attachment)))

(org-publish "github-io" t)
