window.SCAN_DATA = {
  "scanned_at": "2026-04-15",
  "source_repo": "kissflow-xg",
  "tool": "droast",
  "tool_version": "0.1.0",
  "files": [
    {
      "file": "admin/Dockerfile-job",
      "service": "admin",
      "total": 21,
      "errors": 1,
      "warnings": 10,
      "infos": 10,
      "findings": [
        {
          "rule": "DF036",
          "severity": "WARN",
          "line": 0,
          "message": "No CMD or ENTRYPOINT defined \u2014 the container has no default command",
          "roast": "No CMD or ENTRYPOINT? This container starts, does nothing, and immediately exits like an intern on their first day who didn't read the onboarding docs. Tell it what to run."
        },
        {
          "rule": "DF058",
          "severity": "WARN",
          "line": 0,
          "message": "Both wget and curl are used \u2014 pick one and use it consistently",
          "roast": "You're using both wget and curl in the same Dockerfile. They do the same thing. Pick one. Commit to it. Your image doesn't need two download tools any more than it needs two fire extinguishers."
        },
        {
          "rule": "DF033",
          "severity": "INFO",
          "line": 0,
          "message": "No .dockerignore file found in the same directory",
          "roast": "No .dockerignore? You're COPY-ing your entire build context including node_modules, .git, test fixtures, and possibly your diary. A .dockerignore takes 5 minutes to write and saves you from shipping your secrets to production."
        },
        {
          "rule": "DF001",
          "severity": "WARN",
          "line": 1,
          "message": "'kissflow/adminv2:latest' uses an unpinned image tag",
          "roast": "Pinning to 'latest' is like ordering 'whatever' at a restaurant and then complaining when your image breaks in prod. Use a real tag.",
          "line_text": "FROM kissflow/adminv2:latest"
        },
        {
          "rule": "DF002",
          "severity": "ERROR",
          "line": 5,
          "message": "Container is explicitly set to run as root",
          "roast": "Congratulations, you're running as root. Your security team is crying, your CISO is drafting a strongly-worded email, and a hacker somewhere just smiled.",
          "line_text": "USER root"
        },
        {
          "rule": "DF003",
          "severity": "WARN",
          "line": 7,
          "message": "8 consecutive RUN instructions could be merged into one",
          "roast": "8 separate RUN layers? Your image has more layers than a mid-2000s emo band. Combine them with && and save everyone's bandwidth.",
          "line_text": "RUN apt-get update -y"
        },
        {
          "rule": "DF056",
          "severity": "INFO",
          "line": 12,
          "message": "wget without --progress flag produces verbose progress output in build logs",
          "roast": "wget without --progress=dot:giga will spam your build logs with a progress bar that looks great locally and fills 50MB of CI log storage. Use --progress=dot:giga or -q to stay quiet.",
          "line_text": "RUN wget \"https://fastdl.mongodb.org/tools/db/mongodb-database-tools-ubuntu2404-x86_64-100.10.0.deb\""
        },
        {
          "rule": "DF004",
          "severity": "WARN",
          "line": 13,
          "message": "apt cache not cleaned after install \u2014 adds unnecessary layer size",
          "roast": "Not cleaning the apt cache is like finishing a meal and leaving all the wrappers in the container. Your image is now a trash can. A very expensive trash can stored in ECR.",
          "line_text": "RUN apt-get install -y ./mongodb-database-tools-ubuntu2404-x86_64-100.10.0.deb"
        },
        {
          "rule": "DF005",
          "severity": "INFO",
          "line": 13,
          "message": "apt-get install without pinned package versions",
          "roast": "Unpinned packages: a bold way to ensure your build is different every single time. 'It worked on my machine' is a lifestyle choice, not a deployment strategy.",
          "line_text": "RUN apt-get install -y ./mongodb-database-tools-ubuntu2404-x86_64-100.10.0.deb"
        },
        {
          "rule": "DF016",
          "severity": "INFO",
          "line": 13,
          "message": "apt-get install without --no-install-recommends installs extra packages",
          "roast": "Installing without --no-install-recommends? apt is now installing packages you didn't ask for, like a waiter who brings you a full bread basket when you said you're gluten-free. `--no-install-recommends` is right there.",
          "line_text": "RUN apt-get install -y ./mongodb-database-tools-ubuntu2404-x86_64-100.10.0.deb"
        },
        {
          "rule": "DF004",
          "severity": "WARN",
          "line": 17,
          "message": "apt cache not cleaned after install \u2014 adds unnecessary layer size",
          "roast": "Not cleaning the apt cache is like finishing a meal and leaving all the wrappers in the container. Your image is now a trash can. A very expensive trash can stored in ECR.",
          "line_text": "RUN apt-get install -y apt-transport-https ca-certificates gnupg curl sudo"
        },
        {
          "rule": "DF010",
          "severity": "WARN",
          "line": 17,
          "message": "sudo used inside a container \u2014 likely unnecessary",
          "roast": "sudo inside a Docker container? You're already root (probably). sudo is just a formality at this point, like putting a 'Wet Floor' sign in the ocean.",
          "line_text": "RUN apt-get install -y apt-transport-https ca-certificates gnupg curl sudo"
        },
        {
          "rule": "DF005",
          "severity": "INFO",
          "line": 17,
          "message": "apt-get install without pinned package versions",
          "roast": "Unpinned packages: a bold way to ensure your build is different every single time. 'It worked on my machine' is a lifestyle choice, not a deployment strategy.",
          "line_text": "RUN apt-get install -y apt-transport-https ca-certificates gnupg curl sudo"
        },
        {
          "rule": "DF016",
          "severity": "INFO",
          "line": 17,
          "message": "apt-get install without --no-install-recommends installs extra packages",
          "roast": "Installing without --no-install-recommends? apt is now installing packages you didn't ask for, like a waiter who brings you a full bread basket when you said you're gluten-free. `--no-install-recommends` is right there.",
          "line_text": "RUN apt-get install -y apt-transport-https ca-certificates gnupg curl sudo"
        },
        {
          "rule": "DF004",
          "severity": "WARN",
          "line": 18,
          "message": "apt cache not cleaned after install \u2014 adds unnecessary layer size",
          "roast": "Not cleaning the apt cache is like finishing a meal and leaving all the wrappers in the container. Your image is now a trash can. A very expensive trash can stored in ECR.",
          "line_text": "RUN echo \"deb [signed-by=/usr/share/keyrings/cloud.google.gpg] https://packages.cloud.google.com/apt cloud-sdk main\" | tee -a /etc/apt/sources.list.d/google-cloud-sdk.list && curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo gpg --dearmor -o /usr/share/keyrings/cloud.google.gpg && apt-get update -y && apt-get install google-cloud-cli -y"
        },
        {
          "rule": "DF010",
          "severity": "WARN",
          "line": 18,
          "message": "sudo used inside a container \u2014 likely unnecessary",
          "roast": "sudo inside a Docker container? You're already root (probably). sudo is just a formality at this point, like putting a 'Wet Floor' sign in the ocean.",
          "line_text": "RUN echo \"deb [signed-by=/usr/share/keyrings/cloud.google.gpg] https://packages.cloud.google.com/apt cloud-sdk main\" | tee -a /etc/apt/sources.list.d/google-cloud-sdk.list && curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo gpg --dearmor -o /usr/share/keyrings/cloud.google.gpg && apt-get update -y && apt-get install google-cloud-cli -y"
        },
        {
          "rule": "DF057",
          "severity": "WARN",
          "line": 18,
          "message": "RUN with pipe but no pipefail \u2014 failed commands in the pipe are silently ignored",
          "roast": "A pipe in RUN without `set -o pipefail`. If the left side of that pipe fails, bash shrugs and moves on. The exit code is whatever the last command returns. Add `set -o pipefail` at the start of the RUN.",
          "line_text": "RUN echo \"deb [signed-by=/usr/share/keyrings/cloud.google.gpg] https://packages.cloud.google.com/apt cloud-sdk main\" | tee -a /etc/apt/sources.list.d/google-cloud-sdk.list && curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo gpg --dearmor -o /usr/share/keyrings/cloud.google.gpg && apt-get update -y && apt-get install google-cloud-cli -y"
        },
        {
          "rule": "DF005",
          "severity": "INFO",
          "line": 18,
          "message": "apt-get install without pinned package versions",
          "roast": "Unpinned packages: a bold way to ensure your build is different every single time. 'It worked on my machine' is a lifestyle choice, not a deployment strategy.",
          "line_text": "RUN echo \"deb [signed-by=/usr/share/keyrings/cloud.google.gpg] https://packages.cloud.google.com/apt cloud-sdk main\" | tee -a /etc/apt/sources.list.d/google-cloud-sdk.list && curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo gpg --dearmor -o /usr/share/keyrings/cloud.google.gpg && apt-get update -y && apt-get install google-cloud-cli -y"
        },
        {
          "rule": "DF035",
          "severity": "INFO",
          "line": 18,
          "message": "curl without --fail \u2014 HTTP errors won't cause the RUN step to fail",
          "roast": "curl without --fail means a 404 or 500 response silently succeeds. Your build will happily continue after downloading an error page and treating it as a binary. Add --fail and save yourself a 2am debugging session.",
          "line_text": "RUN echo \"deb [signed-by=/usr/share/keyrings/cloud.google.gpg] https://packages.cloud.google.com/apt cloud-sdk main\" | tee -a /etc/apt/sources.list.d/google-cloud-sdk.list && curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo gpg --dearmor -o /usr/share/keyrings/cloud.google.gpg && apt-get update -y && apt-get install google-cloud-cli -y"
        },
        {
          "rule": "DF016",
          "severity": "INFO",
          "line": 18,
          "message": "apt-get install without --no-install-recommends installs extra packages",
          "roast": "Installing without --no-install-recommends? apt is now installing packages you didn't ask for, like a waiter who brings you a full bread basket when you said you're gluten-free. `--no-install-recommends` is right there.",
          "line_text": "RUN echo \"deb [signed-by=/usr/share/keyrings/cloud.google.gpg] https://packages.cloud.google.com/apt cloud-sdk main\" | tee -a /etc/apt/sources.list.d/google-cloud-sdk.list && curl https://packages.cloud.google.com/apt/doc/apt-key.gpg | sudo gpg --dearmor -o /usr/share/keyrings/cloud.google.gpg && apt-get update -y && apt-get install google-cloud-cli -y"
        },
        {
          "rule": "DF056",
          "severity": "INFO",
          "line": 22,
          "message": "wget without --progress flag produces verbose progress output in build logs",
          "roast": "wget without --progress=dot:giga will spam your build logs with a progress bar that looks great locally and fills 50MB of CI log storage. Use --progress=dot:giga or -q to stay quiet.",
          "line_text": "RUN wget \"https://awscli.amazonaws.com/awscli-exe-linux-x86_64.zip\""
        }
      ]
    },
    {
      "file": "automation/account_clone/Dockerfile",
      "service": "automation/account_clone",
      "total": 12,
      "errors": 1,
      "warnings": 8,
      "infos": 3,
      "findings": [
        {
          "rule": "DF036",
          "severity": "WARN",
          "line": 0,
          "message": "No CMD or ENTRYPOINT defined \u2014 the container has no default command",
          "roast": "No CMD or ENTRYPOINT? This container starts, does nothing, and immediately exits like an intern on their first day who didn't read the onboarding docs. Tell it what to run."
        },
        {
          "rule": "DF033",
          "severity": "INFO",
          "line": 0,
          "message": "No .dockerignore file found in the same directory",
          "roast": "No .dockerignore? You're COPY-ing your entire build context including node_modules, .git, test fixtures, and possibly your diary. A .dockerignore takes 5 minutes to write and saves you from shipping your secrets to production."
        },
        {
          "rule": "DF001",
          "severity": "WARN",
          "line": 2,
          "message": "'kissflow/base${BASE_IMAGE_VERSION}:latest' uses an unpinned image tag",
          "roast": "Pinning to 'latest' is like ordering 'whatever' at a restaurant and then complaining when your image breaks in prod. Use a real tag.",
          "line_text": "FROM kissflow/base${BASE_IMAGE_VERSION}:latest AS base"
        },
        {
          "rule": "DF062",
          "severity": "ERROR",
          "line": 16,
          "message": "ENV variable 'BUILD_NUMBER' references itself in the same statement",
          "roast": "ENV BUILD_NUMBER=${BUILD_NUMBER} \u2014 you're defining a variable using itself. It hasn't been set yet at this point in the same ENV instruction. The result will be an empty string. Split it into two ENV statements.",
          "line_text": "ENV BUILD_NUMBER=$BUILD_NUMBER"
        },
        {
          "rule": "DF003",
          "severity": "WARN",
          "line": 18,
          "message": "7 consecutive RUN instructions could be merged into one",
          "roast": "7 separate RUN layers? Your image has more layers than a mid-2000s emo band. Combine them with && and save everyone's bandwidth.",
          "line_text": "RUN apt-get update"
        },
        {
          "rule": "DF057",
          "severity": "WARN",
          "line": 20,
          "message": "RUN with pipe but no pipefail \u2014 failed commands in the pipe are silently ignored",
          "roast": "A pipe in RUN without `set -o pipefail`. If the left side of that pipe fails, bash shrugs and moves on. The exit code is whatever the last command returns. Add `set -o pipefail` at the start of the RUN.",
          "line_text": "RUN wget -qO - https://www.mongodb.org/static/pgp/server-4.4.asc | apt-key add -"
        },
        {
          "rule": "DF057",
          "severity": "WARN",
          "line": 21,
          "message": "RUN with pipe but no pipefail \u2014 failed commands in the pipe are silently ignored",
          "roast": "A pipe in RUN without `set -o pipefail`. If the left side of that pipe fails, bash shrugs and moves on. The exit code is whatever the last command returns. Add `set -o pipefail` at the start of the RUN.",
          "line_text": "RUN echo \"deb [ arch=amd64,arm64 ] http://repo.mongodb.org/apt/ubuntu xenial/mongodb-org/4.4 multiverse\" | tee /etc/apt/sources.list.d/mongodb-org-4.4.list"
        },
        {
          "rule": "DF028",
          "severity": "WARN",
          "line": 22,
          "message": "apt-get update in a separate RUN from apt-get install causes cache poisoning",
          "roast": "Splitting `apt-get update` and `apt-get install` into separate RUN layers is a classic mistake. Docker caches the update layer and your install may use a stale index. Combine them with && or enjoy mysterious 404 errors.",
          "line_text": "RUN apt-get update"
        },
        {
          "rule": "DF004",
          "severity": "WARN",
          "line": 23,
          "message": "apt cache not cleaned after install \u2014 adds unnecessary layer size",
          "roast": "Not cleaning the apt cache is like finishing a meal and leaving all the wrappers in the container. Your image is now a trash can. A very expensive trash can stored in ECR.",
          "line_text": "RUN apt-get install -y mongodb-org-tools"
        },
        {
          "rule": "DF005",
          "severity": "INFO",
          "line": 23,
          "message": "apt-get install without pinned package versions",
          "roast": "Unpinned packages: a bold way to ensure your build is different every single time. 'It worked on my machine' is a lifestyle choice, not a deployment strategy.",
          "line_text": "RUN apt-get install -y mongodb-org-tools"
        },
        {
          "rule": "DF016",
          "severity": "INFO",
          "line": 23,
          "message": "apt-get install without --no-install-recommends installs extra packages",
          "roast": "Installing without --no-install-recommends? apt is now installing packages you didn't ask for, like a waiter who brings you a full bread basket when you said you're gluten-free. `--no-install-recommends` is right there.",
          "line_text": "RUN apt-get install -y mongodb-org-tools"
        },
        {
          "rule": "DF064",
          "severity": "WARN",
          "line": 25,
          "message": "useradd without -l flag \u2014 high UIDs create oversized /var/log/lastlog entries",
          "roast": "useradd without -l (--no-log-init): with a high UID, this creates a sparse file in /var/log/lastlog that can balloon your image size by gigabytes. Add -l or use --no-log-init.",
          "line_text": "RUN useradd -u 1001 kissflow && chown -R kissflow:kissflow /build && chown -R kissflow:kissflow /mnt"
        }
      ]
    },
    {
      "file": "analyticsmigration/Dockerfile",
      "service": "analyticsmigration",
      "total": 11,
      "errors": 1,
      "warnings": 5,
      "infos": 5,
      "findings": [
        {
          "rule": "DF036",
          "severity": "WARN",
          "line": 0,
          "message": "No CMD or ENTRYPOINT defined \u2014 the container has no default command",
          "roast": "No CMD or ENTRYPOINT? This container starts, does nothing, and immediately exits like an intern on their first day who didn't read the onboarding docs. Tell it what to run."
        },
        {
          "rule": "DF033",
          "severity": "INFO",
          "line": 0,
          "message": "No .dockerignore file found in the same directory",
          "roast": "No .dockerignore? You're COPY-ing your entire build context including node_modules, .git, test fixtures, and possibly your diary. A .dockerignore takes 5 minutes to write and saves you from shipping your secrets to production."
        },
        {
          "rule": "DF001",
          "severity": "WARN",
          "line": 2,
          "message": "'kissflow/base${BASE_IMAGE_VERSION}:latest' uses an unpinned image tag",
          "roast": "Pinning to 'latest' is like ordering 'whatever' at a restaurant and then complaining when your image breaks in prod. Use a real tag.",
          "line_text": "FROM kissflow/base${BASE_IMAGE_VERSION}:latest AS base"
        },
        {
          "rule": "DF004",
          "severity": "WARN",
          "line": 18,
          "message": "apt cache not cleaned after install \u2014 adds unnecessary layer size",
          "roast": "Not cleaning the apt cache is like finishing a meal and leaving all the wrappers in the container. Your image is now a trash can. A very expensive trash can stored in ECR.",
          "line_text": "RUN apt-get update && \\"
        },
        {
          "rule": "DF005",
          "severity": "INFO",
          "line": 18,
          "message": "apt-get install without pinned package versions",
          "roast": "Unpinned packages: a bold way to ensure your build is different every single time. 'It worked on my machine' is a lifestyle choice, not a deployment strategy.",
          "line_text": "RUN apt-get update && \\"
        },
        {
          "rule": "DF016",
          "severity": "INFO",
          "line": 18,
          "message": "apt-get install without --no-install-recommends installs extra packages",
          "roast": "Installing without --no-install-recommends? apt is now installing packages you didn't ask for, like a waiter who brings you a full bread basket when you said you're gluten-free. `--no-install-recommends` is right there.",
          "line_text": "RUN apt-get update && \\"
        },
        {
          "rule": "DF015",
          "severity": "ERROR",
          "line": 24,
          "message": "apt-get install without -y flag will hang waiting for user input",
          "roast": "apt-get install without -y? Your build is going to sit there, patiently waiting for a 'yes' that will never come, like a golden retriever waiting for an owner who's on a cruise ship.",
          "line_text": "RUN apt-get update && \\"
        },
        {
          "rule": "DF004",
          "severity": "WARN",
          "line": 24,
          "message": "apt cache not cleaned after install \u2014 adds unnecessary layer size",
          "roast": "Not cleaning the apt cache is like finishing a meal and leaving all the wrappers in the container. Your image is now a trash can. A very expensive trash can stored in ECR.",
          "line_text": "RUN apt-get update && \\"
        },
        {
          "rule": "DF005",
          "severity": "INFO",
          "line": 24,
          "message": "apt-get install without pinned package versions",
          "roast": "Unpinned packages: a bold way to ensure your build is different every single time. 'It worked on my machine' is a lifestyle choice, not a deployment strategy.",
          "line_text": "RUN apt-get update && \\"
        },
        {
          "rule": "DF016",
          "severity": "INFO",
          "line": 24,
          "message": "apt-get install without --no-install-recommends installs extra packages",
          "roast": "Installing without --no-install-recommends? apt is now installing packages you didn't ask for, like a waiter who brings you a full bread basket when you said you're gluten-free. `--no-install-recommends` is right there.",
          "line_text": "RUN apt-get update && \\"
        },
        {
          "rule": "DF064",
          "severity": "WARN",
          "line": 36,
          "message": "useradd without -l flag \u2014 high UIDs create oversized /var/log/lastlog entries",
          "roast": "useradd without -l (--no-log-init): with a high UID, this creates a sparse file in /var/log/lastlog that can balloon your image size by gigabytes. Add -l or use --no-log-init.",
          "line_text": "RUN useradd -u 1001 kissflow && chown -R kissflow:kissflow /build"
        }
      ]
    },
    {
      "file": "automation/automation/Dockerfile",
      "service": "automation/automation",
      "total": 5,
      "errors": 1,
      "warnings": 3,
      "infos": 1,
      "findings": [
        {
          "rule": "DF036",
          "severity": "WARN",
          "line": 0,
          "message": "No CMD or ENTRYPOINT defined \u2014 the container has no default command",
          "roast": "No CMD or ENTRYPOINT? This container starts, does nothing, and immediately exits like an intern on their first day who didn't read the onboarding docs. Tell it what to run."
        },
        {
          "rule": "DF033",
          "severity": "INFO",
          "line": 0,
          "message": "No .dockerignore file found in the same directory",
          "roast": "No .dockerignore? You're COPY-ing your entire build context including node_modules, .git, test fixtures, and possibly your diary. A .dockerignore takes 5 minutes to write and saves you from shipping your secrets to production."
        },
        {
          "rule": "DF001",
          "severity": "WARN",
          "line": 2,
          "message": "'kissflow/base${BASE_IMAGE_VERSION}:latest' uses an unpinned image tag",
          "roast": "Pinning to 'latest' is like ordering 'whatever' at a restaurant and then complaining when your image breaks in prod. Use a real tag.",
          "line_text": "FROM kissflow/base${BASE_IMAGE_VERSION}:latest AS base"
        },
        {
          "rule": "DF062",
          "severity": "ERROR",
          "line": 7,
          "message": "ENV variable 'BUILD_NUMBER' references itself in the same statement",
          "roast": "ENV BUILD_NUMBER=${BUILD_NUMBER} \u2014 you're defining a variable using itself. It hasn't been set yet at this point in the same ENV instruction. The result will be an empty string. Split it into two ENV statements.",
          "line_text": "ENV BUILD_NUMBER=$BUILD_NUMBER"
        },
        {
          "rule": "DF064",
          "severity": "WARN",
          "line": 18,
          "message": "useradd without -l flag \u2014 high UIDs create oversized /var/log/lastlog entries",
          "roast": "useradd without -l (--no-log-init): with a high UID, this creates a sparse file in /var/log/lastlog that can balloon your image size by gigabytes. Add -l or use --no-log-init.",
          "line_text": "RUN useradd -u 1001 kissflow && chown -R kissflow:kissflow /build"
        }
      ]
    },
    {
      "file": "base/Dockerfile",
      "service": "base",
      "total": 6,
      "errors": 1,
      "warnings": 2,
      "infos": 3,
      "findings": [
        {
          "rule": "DF036",
          "severity": "WARN",
          "line": 0,
          "message": "No CMD or ENTRYPOINT defined \u2014 the container has no default command",
          "roast": "No CMD or ENTRYPOINT? This container starts, does nothing, and immediately exits like an intern on their first day who didn't read the onboarding docs. Tell it what to run."
        },
        {
          "rule": "DF033",
          "severity": "INFO",
          "line": 0,
          "message": "No .dockerignore file found in the same directory",
          "roast": "No .dockerignore? You're COPY-ing your entire build context including node_modules, .git, test fixtures, and possibly your diary. A .dockerignore takes 5 minutes to write and saves you from shipping your secrets to production."
        },
        {
          "rule": "DF062",
          "severity": "ERROR",
          "line": 7,
          "message": "ENV variable 'PATH' references itself in the same statement",
          "roast": "ENV PATH=${PATH} \u2014 you're defining a variable using itself. It hasn't been set yet at this point in the same ENV instruction. The result will be an empty string. Split it into two ENV statements.",
          "line_text": "ENV PATH=\"$VIRTUAL_ENV/bin:$PATH\""
        },
        {
          "rule": "DF005",
          "severity": "INFO",
          "line": 9,
          "message": "apt-get install without pinned package versions",
          "roast": "Unpinned packages: a bold way to ensure your build is different every single time. 'It worked on my machine' is a lifestyle choice, not a deployment strategy.",
          "line_text": "RUN apt-get update -y --fix-missing && \\"
        },
        {
          "rule": "DF016",
          "severity": "INFO",
          "line": 9,
          "message": "apt-get install without --no-install-recommends installs extra packages",
          "roast": "Installing without --no-install-recommends? apt is now installing packages you didn't ask for, like a waiter who brings you a full bread basket when you said you're gluten-free. `--no-install-recommends` is right there.",
          "line_text": "RUN apt-get update -y --fix-missing && \\"
        },
        {
          "rule": "DF049",
          "severity": "WARN",
          "line": 15,
          "message": "COPY --from=ghcr.io/astral-sh/uv:0.9.8 references an undefined build stage",
          "roast": "COPY --from=ghcr.io/astral-sh/uv:0.9.8 and there's no FROM ... AS ghcr.io/astral-sh/uv:0.9.8 anywhere above. Copying from thin air. Docker will reject this.",
          "line_text": "COPY --from=ghcr.io/astral-sh/uv:0.9.8 /uv /uvx /bin/"
        }
      ]
    },
    {
      "file": "batchuser/Dockerfile",
      "service": "batchuser",
      "total": 5,
      "errors": 1,
      "warnings": 2,
      "infos": 2,
      "findings": [
        {
          "rule": "DF022",
          "severity": "INFO",
          "line": 0,
          "message": "No EXPOSE instruction \u2014 consider documenting which ports this service uses",
          "roast": "No EXPOSE? Your container is a mystery box. Is it a web server? A database? A very slow random number generator? EXPOSE is documentation \u2014 it tells the next developer which port to knock on."
        },
        {
          "rule": "DF033",
          "severity": "INFO",
          "line": 0,
          "message": "No .dockerignore file found in the same directory",
          "roast": "No .dockerignore? You're COPY-ing your entire build context including node_modules, .git, test fixtures, and possibly your diary. A .dockerignore takes 5 minutes to write and saves you from shipping your secrets to production."
        },
        {
          "rule": "DF001",
          "severity": "WARN",
          "line": 2,
          "message": "'kissflow/base${BASE_IMAGE_VERSION}:latest' uses an unpinned image tag",
          "roast": "Pinning to 'latest' is like ordering 'whatever' at a restaurant and then complaining when your image breaks in prod. Use a real tag.",
          "line_text": "FROM kissflow/base${BASE_IMAGE_VERSION}:latest AS base"
        },
        {
          "rule": "DF062",
          "severity": "ERROR",
          "line": 17,
          "message": "ENV variable 'BUILD_NUMBER' references itself in the same statement",
          "roast": "ENV BUILD_NUMBER=${BUILD_NUMBER} \u2014 you're defining a variable using itself. It hasn't been set yet at this point in the same ENV instruction. The result will be an empty string. Split it into two ENV statements.",
          "line_text": "ENV BUILD_NUMBER=$BUILD_NUMBER"
        },
        {
          "rule": "DF064",
          "severity": "WARN",
          "line": 18,
          "message": "useradd without -l flag \u2014 high UIDs create oversized /var/log/lastlog entries",
          "roast": "useradd without -l (--no-log-init): with a high UID, this creates a sparse file in /var/log/lastlog that can balloon your image size by gigabytes. Add -l or use --no-log-init.",
          "line_text": "RUN useradd -u 1001 kissflow && chown -R kissflow:kissflow /build"
        }
      ]
    },
    {
      "file": "externalconnection/Dockerfile",
      "service": "externalconnection",
      "total": 19,
      "errors": 0,
      "warnings": 9,
      "infos": 10,
      "findings": [
        {
          "rule": "DF022",
          "severity": "INFO",
          "line": 0,
          "message": "No EXPOSE instruction \u2014 consider documenting which ports this service uses",
          "roast": "No EXPOSE? Your container is a mystery box. Is it a web server? A database? A very slow random number generator? EXPOSE is documentation \u2014 it tells the next developer which port to knock on."
        },
        {
          "rule": "DF033",
          "severity": "INFO",
          "line": 0,
          "message": "No .dockerignore file found in the same directory",
          "roast": "No .dockerignore? You're COPY-ing your entire build context including node_modules, .git, test fixtures, and possibly your diary. A .dockerignore takes 5 minutes to write and saves you from shipping your secrets to production."
        },
        {
          "rule": "DF001",
          "severity": "WARN",
          "line": 2,
          "message": "'kissflow/base${BASE_IMAGE_VERSION}:latest' uses an unpinned image tag",
          "roast": "Pinning to 'latest' is like ordering 'whatever' at a restaurant and then complaining when your image breaks in prod. Use a real tag.",
          "line_text": "FROM kissflow/base${BASE_IMAGE_VERSION}:latest AS base"
        },
        {
          "rule": "DF003",
          "severity": "WARN",
          "line": 12,
          "message": "10 consecutive RUN instructions could be merged into one",
          "roast": "10 separate RUN layers? Your image has more layers than a mid-2000s emo band. Combine them with && and save everyone's bandwidth.",
          "line_text": "RUN --mount=type=cache,id=uv-cache,target=/var/lib/jenkins/builds/.cache/uv \\"
        },
        {
          "rule": "DF004",
          "severity": "WARN",
          "line": 19,
          "message": "apt cache not cleaned after install \u2014 adds unnecessary layer size",
          "roast": "Not cleaning the apt cache is like finishing a meal and leaving all the wrappers in the container. Your image is now a trash can. A very expensive trash can stored in ECR.",
          "line_text": "RUN apt-get install -y curl"
        },
        {
          "rule": "DF005",
          "severity": "INFO",
          "line": 19,
          "message": "apt-get install without pinned package versions",
          "roast": "Unpinned packages: a bold way to ensure your build is different every single time. 'It worked on my machine' is a lifestyle choice, not a deployment strategy.",
          "line_text": "RUN apt-get install -y curl"
        },
        {
          "rule": "DF016",
          "severity": "INFO",
          "line": 19,
          "message": "apt-get install without --no-install-recommends installs extra packages",
          "roast": "Installing without --no-install-recommends? apt is now installing packages you didn't ask for, like a waiter who brings you a full bread basket when you said you're gluten-free. `--no-install-recommends` is right there.",
          "line_text": "RUN apt-get install -y curl"
        },
        {
          "rule": "DF057",
          "severity": "WARN",
          "line": 20,
          "message": "RUN with pipe but no pipefail \u2014 failed commands in the pipe are silently ignored",
          "roast": "A pipe in RUN without `set -o pipefail`. If the left side of that pipe fails, bash shrugs and moves on. The exit code is whatever the last command returns. Add `set -o pipefail` at the start of the RUN.",
          "line_text": "RUN curl https://packages.microsoft.com/keys/microsoft.asc | tee /etc/apt/trusted.gpg.d/microsoft.asc"
        },
        {
          "rule": "DF035",
          "severity": "INFO",
          "line": 20,
          "message": "curl without --fail \u2014 HTTP errors won't cause the RUN step to fail",
          "roast": "curl without --fail means a 404 or 500 response silently succeeds. Your build will happily continue after downloading an error page and treating it as a binary. Add --fail and save yourself a 2am debugging session.",
          "line_text": "RUN curl https://packages.microsoft.com/keys/microsoft.asc | tee /etc/apt/trusted.gpg.d/microsoft.asc"
        },
        {
          "rule": "DF057",
          "severity": "WARN",
          "line": 21,
          "message": "RUN with pipe but no pipefail \u2014 failed commands in the pipe are silently ignored",
          "roast": "A pipe in RUN without `set -o pipefail`. If the left side of that pipe fails, bash shrugs and moves on. The exit code is whatever the last command returns. Add `set -o pipefail` at the start of the RUN.",
          "line_text": "RUN curl https://packages.microsoft.com/config/ubuntu/20.04/prod.list | tee /etc/apt/sources.list.d/mssql-release.list"
        },
        {
          "rule": "DF035",
          "severity": "INFO",
          "line": 21,
          "message": "curl without --fail \u2014 HTTP errors won't cause the RUN step to fail",
          "roast": "curl without --fail means a 404 or 500 response silently succeeds. Your build will happily continue after downloading an error page and treating it as a binary. Add --fail and save yourself a 2am debugging session.",
          "line_text": "RUN curl https://packages.microsoft.com/config/ubuntu/20.04/prod.list | tee /etc/apt/sources.list.d/mssql-release.list"
        },
        {
          "rule": "DF028",
          "severity": "WARN",
          "line": 22,
          "message": "apt-get update in a separate RUN from apt-get install causes cache poisoning",
          "roast": "Splitting `apt-get update` and `apt-get install` into separate RUN layers is a classic mistake. Docker caches the update layer and your install may use a stale index. Combine them with && or enjoy mysterious 404 errors.",
          "line_text": "RUN apt-get update"
        },
        {
          "rule": "DF004",
          "severity": "WARN",
          "line": 23,
          "message": "apt cache not cleaned after install \u2014 adds unnecessary layer size",
          "roast": "Not cleaning the apt cache is like finishing a meal and leaving all the wrappers in the container. Your image is now a trash can. A very expensive trash can stored in ECR.",
          "line_text": "RUN ACCEPT_EULA=Y apt-get install -y msodbcsql18"
        },
        {
          "rule": "DF005",
          "severity": "INFO",
          "line": 23,
          "message": "apt-get install without pinned package versions",
          "roast": "Unpinned packages: a bold way to ensure your build is different every single time. 'It worked on my machine' is a lifestyle choice, not a deployment strategy.",
          "line_text": "RUN ACCEPT_EULA=Y apt-get install -y msodbcsql18"
        },
        {
          "rule": "DF016",
          "severity": "INFO",
          "line": 23,
          "message": "apt-get install without --no-install-recommends installs extra packages",
          "roast": "Installing without --no-install-recommends? apt is now installing packages you didn't ask for, like a waiter who brings you a full bread basket when you said you're gluten-free. `--no-install-recommends` is right there.",
          "line_text": "RUN ACCEPT_EULA=Y apt-get install -y msodbcsql18"
        },
        {
          "rule": "DF004",
          "severity": "WARN",
          "line": 31,
          "message": "apt cache not cleaned after install \u2014 adds unnecessary layer size",
          "roast": "Not cleaning the apt cache is like finishing a meal and leaving all the wrappers in the container. Your image is now a trash can. A very expensive trash can stored in ECR.",
          "line_text": "RUN apt-get install -y unixodbc-dev"
        },
        {
          "rule": "DF005",
          "severity": "INFO",
          "line": 31,
          "message": "apt-get install without pinned package versions",
          "roast": "Unpinned packages: a bold way to ensure your build is different every single time. 'It worked on my machine' is a lifestyle choice, not a deployment strategy.",
          "line_text": "RUN apt-get install -y unixodbc-dev"
        },
        {
          "rule": "DF016",
          "severity": "INFO",
          "line": 31,
          "message": "apt-get install without --no-install-recommends installs extra packages",
          "roast": "Installing without --no-install-recommends? apt is now installing packages you didn't ask for, like a waiter who brings you a full bread basket when you said you're gluten-free. `--no-install-recommends` is right there.",
          "line_text": "RUN apt-get install -y unixodbc-dev"
        },
        {
          "rule": "DF064",
          "severity": "WARN",
          "line": 37,
          "message": "useradd without -l flag \u2014 high UIDs create oversized /var/log/lastlog entries",
          "roast": "useradd without -l (--no-log-init): with a high UID, this creates a sparse file in /var/log/lastlog that can balloon your image size by gigabytes. Add -l or use --no-log-init.",
          "line_text": "RUN useradd -u 1001 kissflow && chown -R kissflow:kissflow /build"
        }
      ]
    },
    {
      "file": "automation/mongo_backup/Dockerfile",
      "service": "automation/mongo_backup",
      "total": 13,
      "errors": 0,
      "warnings": 7,
      "infos": 6,
      "findings": [
        {
          "rule": "DF022",
          "severity": "INFO",
          "line": 0,
          "message": "No EXPOSE instruction \u2014 consider documenting which ports this service uses",
          "roast": "No EXPOSE? Your container is a mystery box. Is it a web server? A database? A very slow random number generator? EXPOSE is documentation \u2014 it tells the next developer which port to knock on."
        },
        {
          "rule": "DF033",
          "severity": "INFO",
          "line": 0,
          "message": "No .dockerignore file found in the same directory",
          "roast": "No .dockerignore? You're COPY-ing your entire build context including node_modules, .git, test fixtures, and possibly your diary. A .dockerignore takes 5 minutes to write and saves you from shipping your secrets to production."
        },
        {
          "rule": "DF001",
          "severity": "WARN",
          "line": 1,
          "message": "'ubuntu:latest' uses an unpinned image tag",
          "roast": "Pinning to 'latest' is like ordering 'whatever' at a restaurant and then complaining when your image breaks in prod. Use a real tag.",
          "line_text": "FROM ubuntu:latest"
        },
        {
          "rule": "DF003",
          "severity": "WARN",
          "line": 3,
          "message": "6 consecutive RUN instructions could be merged into one",
          "roast": "6 separate RUN layers? Your image has more layers than a mid-2000s emo band. Combine them with && and save everyone's bandwidth.",
          "line_text": "RUN apt-get update"
        },
        {
          "rule": "DF028",
          "severity": "WARN",
          "line": 7,
          "message": "apt-get update in a separate RUN from apt-get install causes cache poisoning",
          "roast": "Splitting `apt-get update` and `apt-get install` into separate RUN layers is a classic mistake. Docker caches the update layer and your install may use a stale index. Combine them with && or enjoy mysterious 404 errors.",
          "line_text": "RUN apt-get update -y --fix-missing"
        },
        {
          "rule": "DF004",
          "severity": "WARN",
          "line": 8,
          "message": "apt cache not cleaned after install \u2014 adds unnecessary layer size",
          "roast": "Not cleaning the apt cache is like finishing a meal and leaving all the wrappers in the container. Your image is now a trash can. A very expensive trash can stored in ECR.",
          "line_text": "RUN apt-get install -y python3-pip python3-dev build-essential"
        },
        {
          "rule": "DF005",
          "severity": "INFO",
          "line": 8,
          "message": "apt-get install without pinned package versions",
          "roast": "Unpinned packages: a bold way to ensure your build is different every single time. 'It worked on my machine' is a lifestyle choice, not a deployment strategy.",
          "line_text": "RUN apt-get install -y python3-pip python3-dev build-essential"
        },
        {
          "rule": "DF016",
          "severity": "INFO",
          "line": 8,
          "message": "apt-get install without --no-install-recommends installs extra packages",
          "roast": "Installing without --no-install-recommends? apt is now installing packages you didn't ask for, like a waiter who brings you a full bread basket when you said you're gluten-free. `--no-install-recommends` is right there.",
          "line_text": "RUN apt-get install -y python3-pip python3-dev build-essential"
        },
        {
          "rule": "DF051",
          "severity": "WARN",
          "line": 9,
          "message": "pip install without version pinning \u2014 use package==version for reproducibility",
          "roast": "pip install with no version pins. Every build pulls 'latest' and one day something breaks and you spend three hours bisecting which transitive dependency changed. Use package==version.",
          "line_text": "RUN pip3 install --upgrade pip"
        },
        {
          "rule": "DF030",
          "severity": "INFO",
          "line": 9,
          "message": "pip install without --no-cache-dir wastes space in the image layer",
          "roast": "pip install without --no-cache-dir? You're carrying around a pip cache in your production image like a tourist with a suitcase full of hotel shampoos. You don't need those. Add --no-cache-dir.",
          "line_text": "RUN pip3 install --upgrade pip"
        },
        {
          "rule": "DF030",
          "severity": "INFO",
          "line": 16,
          "message": "pip install without --no-cache-dir wastes space in the image layer",
          "roast": "pip install without --no-cache-dir? You're carrying around a pip cache in your production image like a tourist with a suitcase full of hotel shampoos. You don't need those. Add --no-cache-dir.",
          "line_text": "RUN pip3 install -r requirements.txt"
        },
        {
          "rule": "DF007",
          "severity": "WARN",
          "line": 19,
          "message": "COPY . copies the entire build context \u2014 consider a .dockerignore file",
          "roast": "COPY . \u2014 dumping your entire project including node_modules, .git history, and that .env file with the production database password into the image. Bold. Reckless. Very DevOps of you.",
          "line_text": "COPY . /backup"
        },
        {
          "rule": "DF064",
          "severity": "WARN",
          "line": 22,
          "message": "useradd without -l flag \u2014 high UIDs create oversized /var/log/lastlog entries",
          "roast": "useradd without -l (--no-log-init): with a high UID, this creates a sparse file in /var/log/lastlog that can balloon your image size by gigabytes. Add -l or use --no-log-init.",
          "line_text": "RUN useradd -u 1001 kissflow && chown -R kissflow:kissflow /backup"
        }
      ]
    },
    {
      "file": "apidocs/Dockerfile",
      "service": "apidocs",
      "total": 6,
      "errors": 0,
      "warnings": 3,
      "infos": 3,
      "findings": [
        {
          "rule": "DF022",
          "severity": "INFO",
          "line": 0,
          "message": "No EXPOSE instruction \u2014 consider documenting which ports this service uses",
          "roast": "No EXPOSE? Your container is a mystery box. Is it a web server? A database? A very slow random number generator? EXPOSE is documentation \u2014 it tells the next developer which port to knock on."
        },
        {
          "rule": "DF033",
          "severity": "INFO",
          "line": 0,
          "message": "No .dockerignore file found in the same directory",
          "roast": "No .dockerignore? You're COPY-ing your entire build context including node_modules, .git, test fixtures, and possibly your diary. A .dockerignore takes 5 minutes to write and saves you from shipping your secrets to production."
        },
        {
          "rule": "DF001",
          "severity": "WARN",
          "line": 2,
          "message": "'kissflow/base${BASE_IMAGE_VERSION}:latest' uses an unpinned image tag",
          "roast": "Pinning to 'latest' is like ordering 'whatever' at a restaurant and then complaining when your image breaks in prod. Use a real tag.",
          "line_text": "FROM kissflow/base${BASE_IMAGE_VERSION}:latest"
        },
        {
          "rule": "DF051",
          "severity": "WARN",
          "line": 9,
          "message": "pip install without version pinning \u2014 use package==version for reproducibility",
          "roast": "pip install with no version pins. Every build pulls 'latest' and one day something breaks and you spend three hours bisecting which transitive dependency changed. Use package==version.",
          "line_text": "RUN pip3 install ."
        },
        {
          "rule": "DF030",
          "severity": "INFO",
          "line": 9,
          "message": "pip install without --no-cache-dir wastes space in the image layer",
          "roast": "pip install without --no-cache-dir? You're carrying around a pip cache in your production image like a tourist with a suitcase full of hotel shampoos. You don't need those. Add --no-cache-dir.",
          "line_text": "RUN pip3 install ."
        },
        {
          "rule": "DF064",
          "severity": "WARN",
          "line": 16,
          "message": "useradd without -l flag \u2014 high UIDs create oversized /var/log/lastlog entries",
          "roast": "useradd without -l (--no-log-init): with a high UID, this creates a sparse file in /var/log/lastlog that can balloon your image size by gigabytes. Add -l or use --no-log-init.",
          "line_text": "RUN useradd -u 1001 kissflow && chown -R kissflow:kissflow /apidocs"
        }
      ]
    },
    {
      "file": "admin/Dockerfile",
      "service": "admin",
      "total": 5,
      "errors": 0,
      "warnings": 3,
      "infos": 2,
      "findings": [
        {
          "rule": "DF020",
          "severity": "WARN",
          "line": 0,
          "message": "No USER instruction found \u2014 container will run as root by default",
          "roast": "No USER set? Bold strategy. Running everything as root in prod is a great way to ensure job security \u2014 for your incident response team."
        },
        {
          "rule": "DF022",
          "severity": "INFO",
          "line": 0,
          "message": "No EXPOSE instruction \u2014 consider documenting which ports this service uses",
          "roast": "No EXPOSE? Your container is a mystery box. Is it a web server? A database? A very slow random number generator? EXPOSE is documentation \u2014 it tells the next developer which port to knock on."
        },
        {
          "rule": "DF033",
          "severity": "INFO",
          "line": 0,
          "message": "No .dockerignore file found in the same directory",
          "roast": "No .dockerignore? You're COPY-ing your entire build context including node_modules, .git, test fixtures, and possibly your diary. A .dockerignore takes 5 minutes to write and saves you from shipping your secrets to production."
        },
        {
          "rule": "DF001",
          "severity": "WARN",
          "line": 2,
          "message": "'kissflow/base${BASE_IMAGE_VERSION}:latest' uses an unpinned image tag",
          "roast": "Pinning to 'latest' is like ordering 'whatever' at a restaurant and then complaining when your image breaks in prod. Use a real tag.",
          "line_text": "FROM kissflow/base${BASE_IMAGE_VERSION}:latest AS base"
        },
        {
          "rule": "DF064",
          "severity": "WARN",
          "line": 18,
          "message": "useradd without -l flag \u2014 high UIDs create oversized /var/log/lastlog entries",
          "roast": "useradd without -l (--no-log-init): with a high UID, this creates a sparse file in /var/log/lastlog that can balloon your image size by gigabytes. Add -l or use --no-log-init.",
          "line_text": "RUN useradd -u 1001 kissflow && chown -R kissflow:kissflow /build"
        }
      ]
    },
    {
      "file": "lowcode/Dockerfile",
      "service": "lowcode",
      "total": 5,
      "errors": 0,
      "warnings": 2,
      "infos": 3,
      "findings": [
        {
          "rule": "DF012",
          "severity": "INFO",
          "line": 0,
          "message": "No HEALTHCHECK defined",
          "roast": "No HEALTHCHECK? Your container is basically on the honor system. 'It's fine, I'm sure it's fine.' Meanwhile Kubernetes is just restarting it every 30 seconds wondering what went wrong."
        },
        {
          "rule": "DF022",
          "severity": "INFO",
          "line": 0,
          "message": "No EXPOSE instruction \u2014 consider documenting which ports this service uses",
          "roast": "No EXPOSE? Your container is a mystery box. Is it a web server? A database? A very slow random number generator? EXPOSE is documentation \u2014 it tells the next developer which port to knock on."
        },
        {
          "rule": "DF011",
          "severity": "WARN",
          "line": 1,
          "message": "Single-stage build with a heavy build image \u2014 consider multi-stage builds",
          "roast": "Shipping your entire build toolchain to production? Your 2GB Go image is basically a free gift to anyone who gets shell access. Multi-stage builds exist. They're fantastic. Use them.",
          "line_text": "FROM node:22"
        },
        {
          "rule": "DF064",
          "severity": "WARN",
          "line": 58,
          "message": "useradd without -l flag \u2014 high UIDs create oversized /var/log/lastlog entries",
          "roast": "useradd without -l (--no-log-init): with a high UID, this creates a sparse file in /var/log/lastlog that can balloon your image size by gigabytes. Add -l or use --no-log-init.",
          "line_text": "RUN useradd -u 1001 kissflow && chown -R kissflow:kissflow /lowcode && chown -R kissflow:kissflow /lowcode/_cacache"
        },
        {
          "rule": "DF031",
          "severity": "INFO",
          "line": 63,
          "message": "npm install used \u2014 consider npm ci for reproducible builds",
          "roast": "`npm install` in a Dockerfile: non-deterministic, slower than `npm ci`, and potentially installs different versions than your lockfile specifies. `npm ci` exists specifically for CI/CD and containers. Use it.",
          "line_text": "RUN npm install"
        }
      ]
    },
    {
      "file": "accounts/Dockerfile",
      "service": "accounts",
      "total": 4,
      "errors": 0,
      "warnings": 2,
      "infos": 2,
      "findings": [
        {
          "rule": "DF022",
          "severity": "INFO",
          "line": 0,
          "message": "No EXPOSE instruction \u2014 consider documenting which ports this service uses",
          "roast": "No EXPOSE? Your container is a mystery box. Is it a web server? A database? A very slow random number generator? EXPOSE is documentation \u2014 it tells the next developer which port to knock on."
        },
        {
          "rule": "DF033",
          "severity": "INFO",
          "line": 0,
          "message": "No .dockerignore file found in the same directory",
          "roast": "No .dockerignore? You're COPY-ing your entire build context including node_modules, .git, test fixtures, and possibly your diary. A .dockerignore takes 5 minutes to write and saves you from shipping your secrets to production."
        },
        {
          "rule": "DF001",
          "severity": "WARN",
          "line": 2,
          "message": "'kissflow/base${BASE_IMAGE_VERSION}:latest' uses an unpinned image tag",
          "roast": "Pinning to 'latest' is like ordering 'whatever' at a restaurant and then complaining when your image breaks in prod. Use a real tag.",
          "line_text": "FROM kissflow/base${BASE_IMAGE_VERSION}:latest AS base"
        },
        {
          "rule": "DF064",
          "severity": "WARN",
          "line": 19,
          "message": "useradd without -l flag \u2014 high UIDs create oversized /var/log/lastlog entries",
          "roast": "useradd without -l (--no-log-init): with a high UID, this creates a sparse file in /var/log/lastlog that can balloon your image size by gigabytes. Add -l or use --no-log-init.",
          "line_text": "RUN useradd -u 1001 kissflow && chown -R kissflow:kissflow /build"
        }
      ]
    },
    {
      "file": "analytics/Dockerfile",
      "service": "analytics",
      "total": 4,
      "errors": 0,
      "warnings": 2,
      "infos": 2,
      "findings": [
        {
          "rule": "DF022",
          "severity": "INFO",
          "line": 0,
          "message": "No EXPOSE instruction \u2014 consider documenting which ports this service uses",
          "roast": "No EXPOSE? Your container is a mystery box. Is it a web server? A database? A very slow random number generator? EXPOSE is documentation \u2014 it tells the next developer which port to knock on."
        },
        {
          "rule": "DF033",
          "severity": "INFO",
          "line": 0,
          "message": "No .dockerignore file found in the same directory",
          "roast": "No .dockerignore? You're COPY-ing your entire build context including node_modules, .git, test fixtures, and possibly your diary. A .dockerignore takes 5 minutes to write and saves you from shipping your secrets to production."
        },
        {
          "rule": "DF001",
          "severity": "WARN",
          "line": 2,
          "message": "'kissflow/base${BASE_IMAGE_VERSION}:latest' uses an unpinned image tag",
          "roast": "Pinning to 'latest' is like ordering 'whatever' at a restaurant and then complaining when your image breaks in prod. Use a real tag.",
          "line_text": "FROM kissflow/base${BASE_IMAGE_VERSION}:latest AS base"
        },
        {
          "rule": "DF064",
          "severity": "WARN",
          "line": 22,
          "message": "useradd without -l flag \u2014 high UIDs create oversized /var/log/lastlog entries",
          "roast": "useradd without -l (--no-log-init): with a high UID, this creates a sparse file in /var/log/lastlog that can balloon your image size by gigabytes. Add -l or use --no-log-init.",
          "line_text": "RUN useradd -u 1001 kissflow && chown -R kissflow:kissflow /build && find /build/base/base/messages -type d -exec chown -R kissflow:kissflow {} +"
        }
      ]
    },
    {
      "file": "analyticssyncworker/Dockerfile",
      "service": "analyticssyncworker",
      "total": 4,
      "errors": 0,
      "warnings": 2,
      "infos": 2,
      "findings": [
        {
          "rule": "DF022",
          "severity": "INFO",
          "line": 0,
          "message": "No EXPOSE instruction \u2014 consider documenting which ports this service uses",
          "roast": "No EXPOSE? Your container is a mystery box. Is it a web server? A database? A very slow random number generator? EXPOSE is documentation \u2014 it tells the next developer which port to knock on."
        },
        {
          "rule": "DF033",
          "severity": "INFO",
          "line": 0,
          "message": "No .dockerignore file found in the same directory",
          "roast": "No .dockerignore? You're COPY-ing your entire build context including node_modules, .git, test fixtures, and possibly your diary. A .dockerignore takes 5 minutes to write and saves you from shipping your secrets to production."
        },
        {
          "rule": "DF001",
          "severity": "WARN",
          "line": 2,
          "message": "'kissflow/base${BASE_IMAGE_VERSION}:latest' uses an unpinned image tag",
          "roast": "Pinning to 'latest' is like ordering 'whatever' at a restaurant and then complaining when your image breaks in prod. Use a real tag.",
          "line_text": "FROM kissflow/base${BASE_IMAGE_VERSION}:latest AS base"
        },
        {
          "rule": "DF064",
          "severity": "WARN",
          "line": 18,
          "message": "useradd without -l flag \u2014 high UIDs create oversized /var/log/lastlog entries",
          "roast": "useradd without -l (--no-log-init): with a high UID, this creates a sparse file in /var/log/lastlog that can balloon your image size by gigabytes. Add -l or use --no-log-init.",
          "line_text": "RUN useradd -u 1001 kissflow && chown -R kissflow:kissflow /build"
        }
      ]
    },
    {
      "file": "application/Dockerfile",
      "service": "application",
      "total": 4,
      "errors": 0,
      "warnings": 2,
      "infos": 2,
      "findings": [
        {
          "rule": "DF022",
          "severity": "INFO",
          "line": 0,
          "message": "No EXPOSE instruction \u2014 consider documenting which ports this service uses",
          "roast": "No EXPOSE? Your container is a mystery box. Is it a web server? A database? A very slow random number generator? EXPOSE is documentation \u2014 it tells the next developer which port to knock on."
        },
        {
          "rule": "DF033",
          "severity": "INFO",
          "line": 0,
          "message": "No .dockerignore file found in the same directory",
          "roast": "No .dockerignore? You're COPY-ing your entire build context including node_modules, .git, test fixtures, and possibly your diary. A .dockerignore takes 5 minutes to write and saves you from shipping your secrets to production."
        },
        {
          "rule": "DF001",
          "severity": "WARN",
          "line": 2,
          "message": "'kissflow/base${BASE_IMAGE_VERSION}:latest' uses an unpinned image tag",
          "roast": "Pinning to 'latest' is like ordering 'whatever' at a restaurant and then complaining when your image breaks in prod. Use a real tag.",
          "line_text": "FROM kissflow/base${BASE_IMAGE_VERSION}:latest AS base"
        },
        {
          "rule": "DF064",
          "severity": "WARN",
          "line": 17,
          "message": "useradd without -l flag \u2014 high UIDs create oversized /var/log/lastlog entries",
          "roast": "useradd without -l (--no-log-init): with a high UID, this creates a sparse file in /var/log/lastlog that can balloon your image size by gigabytes. Add -l or use --no-log-init.",
          "line_text": "RUN useradd -u 1001 kissflow && chown -R kissflow:kissflow /build"
        }
      ]
    },
    {
      "file": "appstore/Dockerfile",
      "service": "appstore",
      "total": 4,
      "errors": 0,
      "warnings": 2,
      "infos": 2,
      "findings": [
        {
          "rule": "DF022",
          "severity": "INFO",
          "line": 0,
          "message": "No EXPOSE instruction \u2014 consider documenting which ports this service uses",
          "roast": "No EXPOSE? Your container is a mystery box. Is it a web server? A database? A very slow random number generator? EXPOSE is documentation \u2014 it tells the next developer which port to knock on."
        },
        {
          "rule": "DF033",
          "severity": "INFO",
          "line": 0,
          "message": "No .dockerignore file found in the same directory",
          "roast": "No .dockerignore? You're COPY-ing your entire build context including node_modules, .git, test fixtures, and possibly your diary. A .dockerignore takes 5 minutes to write and saves you from shipping your secrets to production."
        },
        {
          "rule": "DF001",
          "severity": "WARN",
          "line": 2,
          "message": "'kissflow/base${BASE_IMAGE_VERSION}:latest' uses an unpinned image tag",
          "roast": "Pinning to 'latest' is like ordering 'whatever' at a restaurant and then complaining when your image breaks in prod. Use a real tag.",
          "line_text": "FROM kissflow/base${BASE_IMAGE_VERSION}:latest AS base"
        },
        {
          "rule": "DF064",
          "severity": "WARN",
          "line": 16,
          "message": "useradd without -l flag \u2014 high UIDs create oversized /var/log/lastlog entries",
          "roast": "useradd without -l (--no-log-init): with a high UID, this creates a sparse file in /var/log/lastlog that can balloon your image size by gigabytes. Add -l or use --no-log-init.",
          "line_text": "RUN useradd -u 1001 kissflow && chown -R kissflow:kissflow /build"
        }
      ]
    },
    {
      "file": "assist/Dockerfile",
      "service": "assist",
      "total": 4,
      "errors": 0,
      "warnings": 2,
      "infos": 2,
      "findings": [
        {
          "rule": "DF022",
          "severity": "INFO",
          "line": 0,
          "message": "No EXPOSE instruction \u2014 consider documenting which ports this service uses",
          "roast": "No EXPOSE? Your container is a mystery box. Is it a web server? A database? A very slow random number generator? EXPOSE is documentation \u2014 it tells the next developer which port to knock on."
        },
        {
          "rule": "DF033",
          "severity": "INFO",
          "line": 0,
          "message": "No .dockerignore file found in the same directory",
          "roast": "No .dockerignore? You're COPY-ing your entire build context including node_modules, .git, test fixtures, and possibly your diary. A .dockerignore takes 5 minutes to write and saves you from shipping your secrets to production."
        },
        {
          "rule": "DF001",
          "severity": "WARN",
          "line": 2,
          "message": "'kissflow/base${BASE_IMAGE_VERSION}:latest' uses an unpinned image tag",
          "roast": "Pinning to 'latest' is like ordering 'whatever' at a restaurant and then complaining when your image breaks in prod. Use a real tag.",
          "line_text": "FROM kissflow/base${BASE_IMAGE_VERSION}:latest AS base"
        },
        {
          "rule": "DF064",
          "severity": "WARN",
          "line": 19,
          "message": "useradd without -l flag \u2014 high UIDs create oversized /var/log/lastlog entries",
          "roast": "useradd without -l (--no-log-init): with a high UID, this creates a sparse file in /var/log/lastlog that can balloon your image size by gigabytes. Add -l or use --no-log-init.",
          "line_text": "RUN useradd -u 1001 kissflow && chown -R kissflow:kissflow /build"
        }
      ]
    },
    {
      "file": "async/Dockerfile",
      "service": "async",
      "total": 4,
      "errors": 0,
      "warnings": 2,
      "infos": 2,
      "findings": [
        {
          "rule": "DF022",
          "severity": "INFO",
          "line": 0,
          "message": "No EXPOSE instruction \u2014 consider documenting which ports this service uses",
          "roast": "No EXPOSE? Your container is a mystery box. Is it a web server? A database? A very slow random number generator? EXPOSE is documentation \u2014 it tells the next developer which port to knock on."
        },
        {
          "rule": "DF033",
          "severity": "INFO",
          "line": 0,
          "message": "No .dockerignore file found in the same directory",
          "roast": "No .dockerignore? You're COPY-ing your entire build context including node_modules, .git, test fixtures, and possibly your diary. A .dockerignore takes 5 minutes to write and saves you from shipping your secrets to production."
        },
        {
          "rule": "DF001",
          "severity": "WARN",
          "line": 2,
          "message": "'kissflow/base${BASE_IMAGE_VERSION}:latest' uses an unpinned image tag",
          "roast": "Pinning to 'latest' is like ordering 'whatever' at a restaurant and then complaining when your image breaks in prod. Use a real tag.",
          "line_text": "FROM kissflow/base${BASE_IMAGE_VERSION}:latest AS base"
        },
        {
          "rule": "DF064",
          "severity": "WARN",
          "line": 16,
          "message": "useradd without -l flag \u2014 high UIDs create oversized /var/log/lastlog entries",
          "roast": "useradd without -l (--no-log-init): with a high UID, this creates a sparse file in /var/log/lastlog that can balloon your image size by gigabytes. Add -l or use --no-log-init.",
          "line_text": "RUN useradd -u 1001 kissflow && chown -R kissflow:kissflow /build"
        }
      ]
    },
    {
      "file": "auditlog/Dockerfile",
      "service": "auditlog",
      "total": 4,
      "errors": 0,
      "warnings": 2,
      "infos": 2,
      "findings": [
        {
          "rule": "DF022",
          "severity": "INFO",
          "line": 0,
          "message": "No EXPOSE instruction \u2014 consider documenting which ports this service uses",
          "roast": "No EXPOSE? Your container is a mystery box. Is it a web server? A database? A very slow random number generator? EXPOSE is documentation \u2014 it tells the next developer which port to knock on."
        },
        {
          "rule": "DF033",
          "severity": "INFO",
          "line": 0,
          "message": "No .dockerignore file found in the same directory",
          "roast": "No .dockerignore? You're COPY-ing your entire build context including node_modules, .git, test fixtures, and possibly your diary. A .dockerignore takes 5 minutes to write and saves you from shipping your secrets to production."
        },
        {
          "rule": "DF001",
          "severity": "WARN",
          "line": 2,
          "message": "'kissflow/base${BASE_IMAGE_VERSION}:latest' uses an unpinned image tag",
          "roast": "Pinning to 'latest' is like ordering 'whatever' at a restaurant and then complaining when your image breaks in prod. Use a real tag.",
          "line_text": "FROM kissflow/base${BASE_IMAGE_VERSION}:latest AS base"
        },
        {
          "rule": "DF064",
          "severity": "WARN",
          "line": 18,
          "message": "useradd without -l flag \u2014 high UIDs create oversized /var/log/lastlog entries",
          "roast": "useradd without -l (--no-log-init): with a high UID, this creates a sparse file in /var/log/lastlog that can balloon your image size by gigabytes. Add -l or use --no-log-init.",
          "line_text": "RUN apt-get update"
        }
      ]
    },
    {
      "file": "bot/Dockerfile",
      "service": "bot",
      "total": 4,
      "errors": 0,
      "warnings": 2,
      "infos": 2,
      "findings": [
        {
          "rule": "DF022",
          "severity": "INFO",
          "line": 0,
          "message": "No EXPOSE instruction \u2014 consider documenting which ports this service uses",
          "roast": "No EXPOSE? Your container is a mystery box. Is it a web server? A database? A very slow random number generator? EXPOSE is documentation \u2014 it tells the next developer which port to knock on."
        },
        {
          "rule": "DF033",
          "severity": "INFO",
          "line": 0,
          "message": "No .dockerignore file found in the same directory",
          "roast": "No .dockerignore? You're COPY-ing your entire build context including node_modules, .git, test fixtures, and possibly your diary. A .dockerignore takes 5 minutes to write and saves you from shipping your secrets to production."
        },
        {
          "rule": "DF001",
          "severity": "WARN",
          "line": 2,
          "message": "'kissflow/base${BASE_IMAGE_VERSION}:latest' uses an unpinned image tag",
          "roast": "Pinning to 'latest' is like ordering 'whatever' at a restaurant and then complaining when your image breaks in prod. Use a real tag.",
          "line_text": "FROM kissflow/base${BASE_IMAGE_VERSION}:latest AS base"
        },
        {
          "rule": "DF064",
          "severity": "WARN",
          "line": 17,
          "message": "useradd without -l flag \u2014 high UIDs create oversized /var/log/lastlog entries",
          "roast": "useradd without -l (--no-log-init): with a high UID, this creates a sparse file in /var/log/lastlog that can balloon your image size by gigabytes. Add -l or use --no-log-init.",
          "line_text": "RUN useradd -u 1001 kissflow && chown -R kissflow:kissflow /build"
        }
      ]
    },
    {
      "file": "botproxy/Dockerfile",
      "service": "botproxy",
      "total": 4,
      "errors": 0,
      "warnings": 2,
      "infos": 2,
      "findings": [
        {
          "rule": "DF022",
          "severity": "INFO",
          "line": 0,
          "message": "No EXPOSE instruction \u2014 consider documenting which ports this service uses",
          "roast": "No EXPOSE? Your container is a mystery box. Is it a web server? A database? A very slow random number generator? EXPOSE is documentation \u2014 it tells the next developer which port to knock on."
        },
        {
          "rule": "DF033",
          "severity": "INFO",
          "line": 0,
          "message": "No .dockerignore file found in the same directory",
          "roast": "No .dockerignore? You're COPY-ing your entire build context including node_modules, .git, test fixtures, and possibly your diary. A .dockerignore takes 5 minutes to write and saves you from shipping your secrets to production."
        },
        {
          "rule": "DF001",
          "severity": "WARN",
          "line": 2,
          "message": "'kissflow/base${BASE_IMAGE_VERSION}:latest' uses an unpinned image tag",
          "roast": "Pinning to 'latest' is like ordering 'whatever' at a restaurant and then complaining when your image breaks in prod. Use a real tag.",
          "line_text": "FROM kissflow/base${BASE_IMAGE_VERSION}:latest AS base"
        },
        {
          "rule": "DF064",
          "severity": "WARN",
          "line": 18,
          "message": "useradd without -l flag \u2014 high UIDs create oversized /var/log/lastlog entries",
          "roast": "useradd without -l (--no-log-init): with a high UID, this creates a sparse file in /var/log/lastlog that can balloon your image size by gigabytes. Add -l or use --no-log-init.",
          "line_text": "RUN useradd -u 1001 kissflow && chown -R kissflow:kissflow /build"
        }
      ]
    },
    {
      "file": "buildscripts/templates/service_template/Dockerfile",
      "service": "buildscripts/templates/service_template",
      "total": 4,
      "errors": 0,
      "warnings": 2,
      "infos": 2,
      "findings": [
        {
          "rule": "DF022",
          "severity": "INFO",
          "line": 0,
          "message": "No EXPOSE instruction \u2014 consider documenting which ports this service uses",
          "roast": "No EXPOSE? Your container is a mystery box. Is it a web server? A database? A very slow random number generator? EXPOSE is documentation \u2014 it tells the next developer which port to knock on."
        },
        {
          "rule": "DF033",
          "severity": "INFO",
          "line": 0,
          "message": "No .dockerignore file found in the same directory",
          "roast": "No .dockerignore? You're COPY-ing your entire build context including node_modules, .git, test fixtures, and possibly your diary. A .dockerignore takes 5 minutes to write and saves you from shipping your secrets to production."
        },
        {
          "rule": "DF001",
          "severity": "WARN",
          "line": 2,
          "message": "'kissflow/base${BASE_IMAGE_VERSION}:latest' uses an unpinned image tag",
          "roast": "Pinning to 'latest' is like ordering 'whatever' at a restaurant and then complaining when your image breaks in prod. Use a real tag.",
          "line_text": "FROM kissflow/base${BASE_IMAGE_VERSION}:latest AS base"
        },
        {
          "rule": "DF064",
          "severity": "WARN",
          "line": 19,
          "message": "useradd without -l flag \u2014 high UIDs create oversized /var/log/lastlog entries",
          "roast": "useradd without -l (--no-log-init): with a high UID, this creates a sparse file in /var/log/lastlog that can balloon your image size by gigabytes. Add -l or use --no-log-init.",
          "line_text": "RUN useradd -u 1001 kissflow && chown -R kissflow:kissflow /build"
        }
      ]
    },
    {
      "file": "buildscripts/templates/worker_template/Dockerfile",
      "service": "buildscripts/templates/worker_template",
      "total": 4,
      "errors": 0,
      "warnings": 2,
      "infos": 2,
      "findings": [
        {
          "rule": "DF022",
          "severity": "INFO",
          "line": 0,
          "message": "No EXPOSE instruction \u2014 consider documenting which ports this service uses",
          "roast": "No EXPOSE? Your container is a mystery box. Is it a web server? A database? A very slow random number generator? EXPOSE is documentation \u2014 it tells the next developer which port to knock on."
        },
        {
          "rule": "DF033",
          "severity": "INFO",
          "line": 0,
          "message": "No .dockerignore file found in the same directory",
          "roast": "No .dockerignore? You're COPY-ing your entire build context including node_modules, .git, test fixtures, and possibly your diary. A .dockerignore takes 5 minutes to write and saves you from shipping your secrets to production."
        },
        {
          "rule": "DF001",
          "severity": "WARN",
          "line": 2,
          "message": "'kissflow/base${BASE_IMAGE_VERSION}:latest' uses an unpinned image tag",
          "roast": "Pinning to 'latest' is like ordering 'whatever' at a restaurant and then complaining when your image breaks in prod. Use a real tag.",
          "line_text": "FROM kissflow/base${BASE_IMAGE_VERSION}:latest AS base"
        },
        {
          "rule": "DF064",
          "severity": "WARN",
          "line": 19,
          "message": "useradd without -l flag \u2014 high UIDs create oversized /var/log/lastlog entries",
          "roast": "useradd without -l (--no-log-init): with a high UID, this creates a sparse file in /var/log/lastlog that can balloon your image size by gigabytes. Add -l or use --no-log-init.",
          "line_text": "RUN useradd -u 1001 kissflow && chown -R kissflow:kissflow /build"
        }
      ]
    },
    {
      "file": "case/Dockerfile",
      "service": "case",
      "total": 4,
      "errors": 0,
      "warnings": 2,
      "infos": 2,
      "findings": [
        {
          "rule": "DF022",
          "severity": "INFO",
          "line": 0,
          "message": "No EXPOSE instruction \u2014 consider documenting which ports this service uses",
          "roast": "No EXPOSE? Your container is a mystery box. Is it a web server? A database? A very slow random number generator? EXPOSE is documentation \u2014 it tells the next developer which port to knock on."
        },
        {
          "rule": "DF033",
          "severity": "INFO",
          "line": 0,
          "message": "No .dockerignore file found in the same directory",
          "roast": "No .dockerignore? You're COPY-ing your entire build context including node_modules, .git, test fixtures, and possibly your diary. A .dockerignore takes 5 minutes to write and saves you from shipping your secrets to production."
        },
        {
          "rule": "DF001",
          "severity": "WARN",
          "line": 2,
          "message": "'kissflow/base${BASE_IMAGE_VERSION}:latest' uses an unpinned image tag",
          "roast": "Pinning to 'latest' is like ordering 'whatever' at a restaurant and then complaining when your image breaks in prod. Use a real tag.",
          "line_text": "FROM kissflow/base${BASE_IMAGE_VERSION}:latest AS base"
        },
        {
          "rule": "DF064",
          "severity": "WARN",
          "line": 39,
          "message": "useradd without -l flag \u2014 high UIDs create oversized /var/log/lastlog entries",
          "roast": "useradd without -l (--no-log-init): with a high UID, this creates a sparse file in /var/log/lastlog that can balloon your image size by gigabytes. Add -l or use --no-log-init.",
          "line_text": "RUN useradd -u 1001 kissflow && chown -R kissflow:kissflow /build && chown -R kissflow:kissflow /mnt"
        }
      ]
    },
    {
      "file": "casereport/Dockerfile",
      "service": "casereport",
      "total": 4,
      "errors": 0,
      "warnings": 2,
      "infos": 2,
      "findings": [
        {
          "rule": "DF022",
          "severity": "INFO",
          "line": 0,
          "message": "No EXPOSE instruction \u2014 consider documenting which ports this service uses",
          "roast": "No EXPOSE? Your container is a mystery box. Is it a web server? A database? A very slow random number generator? EXPOSE is documentation \u2014 it tells the next developer which port to knock on."
        },
        {
          "rule": "DF033",
          "severity": "INFO",
          "line": 0,
          "message": "No .dockerignore file found in the same directory",
          "roast": "No .dockerignore? You're COPY-ing your entire build context including node_modules, .git, test fixtures, and possibly your diary. A .dockerignore takes 5 minutes to write and saves you from shipping your secrets to production."
        },
        {
          "rule": "DF001",
          "severity": "WARN",
          "line": 2,
          "message": "'kissflow/base${BASE_IMAGE_VERSION}:latest' uses an unpinned image tag",
          "roast": "Pinning to 'latest' is like ordering 'whatever' at a restaurant and then complaining when your image breaks in prod. Use a real tag.",
          "line_text": "FROM kissflow/base${BASE_IMAGE_VERSION}:latest AS base"
        },
        {
          "rule": "DF064",
          "severity": "WARN",
          "line": 22,
          "message": "useradd without -l flag \u2014 high UIDs create oversized /var/log/lastlog entries",
          "roast": "useradd without -l (--no-log-init): with a high UID, this creates a sparse file in /var/log/lastlog that can balloon your image size by gigabytes. Add -l or use --no-log-init.",
          "line_text": "RUN useradd -u 1001 kissflow && chown -R kissflow:kissflow /build && chown -R kissflow:kissflow /mnt"
        }
      ]
    },
    {
      "file": "changestream/Dockerfile",
      "service": "changestream",
      "total": 4,
      "errors": 0,
      "warnings": 2,
      "infos": 2,
      "findings": [
        {
          "rule": "DF022",
          "severity": "INFO",
          "line": 0,
          "message": "No EXPOSE instruction \u2014 consider documenting which ports this service uses",
          "roast": "No EXPOSE? Your container is a mystery box. Is it a web server? A database? A very slow random number generator? EXPOSE is documentation \u2014 it tells the next developer which port to knock on."
        },
        {
          "rule": "DF033",
          "severity": "INFO",
          "line": 0,
          "message": "No .dockerignore file found in the same directory",
          "roast": "No .dockerignore? You're COPY-ing your entire build context including node_modules, .git, test fixtures, and possibly your diary. A .dockerignore takes 5 minutes to write and saves you from shipping your secrets to production."
        },
        {
          "rule": "DF001",
          "severity": "WARN",
          "line": 2,
          "message": "'kissflow/base${BASE_IMAGE_VERSION}:latest' uses an unpinned image tag",
          "roast": "Pinning to 'latest' is like ordering 'whatever' at a restaurant and then complaining when your image breaks in prod. Use a real tag.",
          "line_text": "FROM kissflow/base${BASE_IMAGE_VERSION}:latest AS base"
        },
        {
          "rule": "DF064",
          "severity": "WARN",
          "line": 17,
          "message": "useradd without -l flag \u2014 high UIDs create oversized /var/log/lastlog entries",
          "roast": "useradd without -l (--no-log-init): with a high UID, this creates a sparse file in /var/log/lastlog that can balloon your image size by gigabytes. Add -l or use --no-log-init.",
          "line_text": "RUN useradd -u 1001 kissflow && chown -R kissflow:kissflow /build"
        }
      ]
    },
    {
      "file": "comment/Dockerfile",
      "service": "comment",
      "total": 4,
      "errors": 0,
      "warnings": 2,
      "infos": 2,
      "findings": [
        {
          "rule": "DF022",
          "severity": "INFO",
          "line": 0,
          "message": "No EXPOSE instruction \u2014 consider documenting which ports this service uses",
          "roast": "No EXPOSE? Your container is a mystery box. Is it a web server? A database? A very slow random number generator? EXPOSE is documentation \u2014 it tells the next developer which port to knock on."
        },
        {
          "rule": "DF033",
          "severity": "INFO",
          "line": 0,
          "message": "No .dockerignore file found in the same directory",
          "roast": "No .dockerignore? You're COPY-ing your entire build context including node_modules, .git, test fixtures, and possibly your diary. A .dockerignore takes 5 minutes to write and saves you from shipping your secrets to production."
        },
        {
          "rule": "DF001",
          "severity": "WARN",
          "line": 2,
          "message": "'kissflow/base${BASE_IMAGE_VERSION}:latest' uses an unpinned image tag",
          "roast": "Pinning to 'latest' is like ordering 'whatever' at a restaurant and then complaining when your image breaks in prod. Use a real tag.",
          "line_text": "FROM kissflow/base${BASE_IMAGE_VERSION}:latest AS base"
        },
        {
          "rule": "DF064",
          "severity": "WARN",
          "line": 16,
          "message": "useradd without -l flag \u2014 high UIDs create oversized /var/log/lastlog entries",
          "roast": "useradd without -l (--no-log-init): with a high UID, this creates a sparse file in /var/log/lastlog that can balloon your image size by gigabytes. Add -l or use --no-log-init.",
          "line_text": "RUN useradd -u 1001 kissflow && chown -R kissflow:kissflow /build"
        }
      ]
    },
    {
      "file": "common/Dockerfile",
      "service": "common",
      "total": 4,
      "errors": 0,
      "warnings": 2,
      "infos": 2,
      "findings": [
        {
          "rule": "DF022",
          "severity": "INFO",
          "line": 0,
          "message": "No EXPOSE instruction \u2014 consider documenting which ports this service uses",
          "roast": "No EXPOSE? Your container is a mystery box. Is it a web server? A database? A very slow random number generator? EXPOSE is documentation \u2014 it tells the next developer which port to knock on."
        },
        {
          "rule": "DF033",
          "severity": "INFO",
          "line": 0,
          "message": "No .dockerignore file found in the same directory",
          "roast": "No .dockerignore? You're COPY-ing your entire build context including node_modules, .git, test fixtures, and possibly your diary. A .dockerignore takes 5 minutes to write and saves you from shipping your secrets to production."
        },
        {
          "rule": "DF001",
          "severity": "WARN",
          "line": 2,
          "message": "'kissflow/base${BASE_IMAGE_VERSION}:latest' uses an unpinned image tag",
          "roast": "Pinning to 'latest' is like ordering 'whatever' at a restaurant and then complaining when your image breaks in prod. Use a real tag.",
          "line_text": "FROM kissflow/base${BASE_IMAGE_VERSION}:latest AS base"
        },
        {
          "rule": "DF064",
          "severity": "WARN",
          "line": 17,
          "message": "useradd without -l flag \u2014 high UIDs create oversized /var/log/lastlog entries",
          "roast": "useradd without -l (--no-log-init): with a high UID, this creates a sparse file in /var/log/lastlog that can balloon your image size by gigabytes. Add -l or use --no-log-init.",
          "line_text": "RUN useradd -u 1001 kissflow && chown -R kissflow:kissflow /build"
        }
      ]
    },
    {
      "file": "connector/Dockerfile",
      "service": "connector",
      "total": 4,
      "errors": 0,
      "warnings": 2,
      "infos": 2,
      "findings": [
        {
          "rule": "DF022",
          "severity": "INFO",
          "line": 0,
          "message": "No EXPOSE instruction \u2014 consider documenting which ports this service uses",
          "roast": "No EXPOSE? Your container is a mystery box. Is it a web server? A database? A very slow random number generator? EXPOSE is documentation \u2014 it tells the next developer which port to knock on."
        },
        {
          "rule": "DF033",
          "severity": "INFO",
          "line": 0,
          "message": "No .dockerignore file found in the same directory",
          "roast": "No .dockerignore? You're COPY-ing your entire build context including node_modules, .git, test fixtures, and possibly your diary. A .dockerignore takes 5 minutes to write and saves you from shipping your secrets to production."
        },
        {
          "rule": "DF001",
          "severity": "WARN",
          "line": 2,
          "message": "'kissflow/base${BASE_IMAGE_VERSION}:latest' uses an unpinned image tag",
          "roast": "Pinning to 'latest' is like ordering 'whatever' at a restaurant and then complaining when your image breaks in prod. Use a real tag.",
          "line_text": "FROM kissflow/base${BASE_IMAGE_VERSION}:latest AS base"
        },
        {
          "rule": "DF064",
          "severity": "WARN",
          "line": 16,
          "message": "useradd without -l flag \u2014 high UIDs create oversized /var/log/lastlog entries",
          "roast": "useradd without -l (--no-log-init): with a high UID, this creates a sparse file in /var/log/lastlog that can balloon your image size by gigabytes. Add -l or use --no-log-init.",
          "line_text": "RUN useradd -u 1001 kissflow && chown -R kissflow:kissflow /build"
        }
      ]
    },
    {
      "file": "dataset/Dockerfile",
      "service": "dataset",
      "total": 4,
      "errors": 0,
      "warnings": 2,
      "infos": 2,
      "findings": [
        {
          "rule": "DF022",
          "severity": "INFO",
          "line": 0,
          "message": "No EXPOSE instruction \u2014 consider documenting which ports this service uses",
          "roast": "No EXPOSE? Your container is a mystery box. Is it a web server? A database? A very slow random number generator? EXPOSE is documentation \u2014 it tells the next developer which port to knock on."
        },
        {
          "rule": "DF033",
          "severity": "INFO",
          "line": 0,
          "message": "No .dockerignore file found in the same directory",
          "roast": "No .dockerignore? You're COPY-ing your entire build context including node_modules, .git, test fixtures, and possibly your diary. A .dockerignore takes 5 minutes to write and saves you from shipping your secrets to production."
        },
        {
          "rule": "DF001",
          "severity": "WARN",
          "line": 2,
          "message": "'kissflow/base${BASE_IMAGE_VERSION}:latest' uses an unpinned image tag",
          "roast": "Pinning to 'latest' is like ordering 'whatever' at a restaurant and then complaining when your image breaks in prod. Use a real tag.",
          "line_text": "FROM kissflow/base${BASE_IMAGE_VERSION}:latest AS base"
        },
        {
          "rule": "DF064",
          "severity": "WARN",
          "line": 33,
          "message": "useradd without -l flag \u2014 high UIDs create oversized /var/log/lastlog entries",
          "roast": "useradd without -l (--no-log-init): with a high UID, this creates a sparse file in /var/log/lastlog that can balloon your image size by gigabytes. Add -l or use --no-log-init.",
          "line_text": "RUN useradd -u 1001 kissflow && chown -R kissflow:kissflow /build && chown -R kissflow:kissflow /mnt"
        }
      ]
    },
    {
      "file": "decisiontable/Dockerfile",
      "service": "decisiontable",
      "total": 4,
      "errors": 0,
      "warnings": 2,
      "infos": 2,
      "findings": [
        {
          "rule": "DF022",
          "severity": "INFO",
          "line": 0,
          "message": "No EXPOSE instruction \u2014 consider documenting which ports this service uses",
          "roast": "No EXPOSE? Your container is a mystery box. Is it a web server? A database? A very slow random number generator? EXPOSE is documentation \u2014 it tells the next developer which port to knock on."
        },
        {
          "rule": "DF033",
          "severity": "INFO",
          "line": 0,
          "message": "No .dockerignore file found in the same directory",
          "roast": "No .dockerignore? You're COPY-ing your entire build context including node_modules, .git, test fixtures, and possibly your diary. A .dockerignore takes 5 minutes to write and saves you from shipping your secrets to production."
        },
        {
          "rule": "DF001",
          "severity": "WARN",
          "line": 2,
          "message": "'kissflow/base${BASE_IMAGE_VERSION}:latest' uses an unpinned image tag",
          "roast": "Pinning to 'latest' is like ordering 'whatever' at a restaurant and then complaining when your image breaks in prod. Use a real tag.",
          "line_text": "FROM kissflow/base${BASE_IMAGE_VERSION}:latest AS base"
        },
        {
          "rule": "DF064",
          "severity": "WARN",
          "line": 33,
          "message": "useradd without -l flag \u2014 high UIDs create oversized /var/log/lastlog entries",
          "roast": "useradd without -l (--no-log-init): with a high UID, this creates a sparse file in /var/log/lastlog that can balloon your image size by gigabytes. Add -l or use --no-log-init.",
          "line_text": "RUN useradd -u 1001 kissflow && chown -R kissflow:kissflow /build && chown -R kissflow:kissflow /mnt"
        }
      ]
    },
    {
      "file": "eventsubscription/Dockerfile",
      "service": "eventsubscription",
      "total": 4,
      "errors": 0,
      "warnings": 2,
      "infos": 2,
      "findings": [
        {
          "rule": "DF022",
          "severity": "INFO",
          "line": 0,
          "message": "No EXPOSE instruction \u2014 consider documenting which ports this service uses",
          "roast": "No EXPOSE? Your container is a mystery box. Is it a web server? A database? A very slow random number generator? EXPOSE is documentation \u2014 it tells the next developer which port to knock on."
        },
        {
          "rule": "DF033",
          "severity": "INFO",
          "line": 0,
          "message": "No .dockerignore file found in the same directory",
          "roast": "No .dockerignore? You're COPY-ing your entire build context including node_modules, .git, test fixtures, and possibly your diary. A .dockerignore takes 5 minutes to write and saves you from shipping your secrets to production."
        },
        {
          "rule": "DF001",
          "severity": "WARN",
          "line": 2,
          "message": "'kissflow/base${BASE_IMAGE_VERSION}:latest' uses an unpinned image tag",
          "roast": "Pinning to 'latest' is like ordering 'whatever' at a restaurant and then complaining when your image breaks in prod. Use a real tag.",
          "line_text": "FROM kissflow/base${BASE_IMAGE_VERSION}:latest AS base"
        },
        {
          "rule": "DF064",
          "severity": "WARN",
          "line": 16,
          "message": "useradd without -l flag \u2014 high UIDs create oversized /var/log/lastlog entries",
          "roast": "useradd without -l (--no-log-init): with a high UID, this creates a sparse file in /var/log/lastlog that can balloon your image size by gigabytes. Add -l or use --no-log-init.",
          "line_text": "RUN useradd -u 1001 kissflow && chown -R kissflow:kissflow /build"
        }
      ]
    },
    {
      "file": "eventworker/Dockerfile",
      "service": "eventworker",
      "total": 4,
      "errors": 0,
      "warnings": 2,
      "infos": 2,
      "findings": [
        {
          "rule": "DF022",
          "severity": "INFO",
          "line": 0,
          "message": "No EXPOSE instruction \u2014 consider documenting which ports this service uses",
          "roast": "No EXPOSE? Your container is a mystery box. Is it a web server? A database? A very slow random number generator? EXPOSE is documentation \u2014 it tells the next developer which port to knock on."
        },
        {
          "rule": "DF033",
          "severity": "INFO",
          "line": 0,
          "message": "No .dockerignore file found in the same directory",
          "roast": "No .dockerignore? You're COPY-ing your entire build context including node_modules, .git, test fixtures, and possibly your diary. A .dockerignore takes 5 minutes to write and saves you from shipping your secrets to production."
        },
        {
          "rule": "DF001",
          "severity": "WARN",
          "line": 2,
          "message": "'kissflow/base${BASE_IMAGE_VERSION}:latest' uses an unpinned image tag",
          "roast": "Pinning to 'latest' is like ordering 'whatever' at a restaurant and then complaining when your image breaks in prod. Use a real tag.",
          "line_text": "FROM kissflow/base${BASE_IMAGE_VERSION}:latest AS base"
        },
        {
          "rule": "DF064",
          "severity": "WARN",
          "line": 16,
          "message": "useradd without -l flag \u2014 high UIDs create oversized /var/log/lastlog entries",
          "roast": "useradd without -l (--no-log-init): with a high UID, this creates a sparse file in /var/log/lastlog that can balloon your image size by gigabytes. Add -l or use --no-log-init.",
          "line_text": "RUN useradd -u 1001 kissflow && chown -R kissflow:kissflow /build"
        }
      ]
    },
    {
      "file": "externaldata/Dockerfile",
      "service": "externaldata",
      "total": 4,
      "errors": 0,
      "warnings": 2,
      "infos": 2,
      "findings": [
        {
          "rule": "DF022",
          "severity": "INFO",
          "line": 0,
          "message": "No EXPOSE instruction \u2014 consider documenting which ports this service uses",
          "roast": "No EXPOSE? Your container is a mystery box. Is it a web server? A database? A very slow random number generator? EXPOSE is documentation \u2014 it tells the next developer which port to knock on."
        },
        {
          "rule": "DF033",
          "severity": "INFO",
          "line": 0,
          "message": "No .dockerignore file found in the same directory",
          "roast": "No .dockerignore? You're COPY-ing your entire build context including node_modules, .git, test fixtures, and possibly your diary. A .dockerignore takes 5 minutes to write and saves you from shipping your secrets to production."
        },
        {
          "rule": "DF001",
          "severity": "WARN",
          "line": 2,
          "message": "'kissflow/base${BASE_IMAGE_VERSION}:latest' uses an unpinned image tag",
          "roast": "Pinning to 'latest' is like ordering 'whatever' at a restaurant and then complaining when your image breaks in prod. Use a real tag.",
          "line_text": "FROM kissflow/base${BASE_IMAGE_VERSION}:latest AS base"
        },
        {
          "rule": "DF064",
          "severity": "WARN",
          "line": 23,
          "message": "useradd without -l flag \u2014 high UIDs create oversized /var/log/lastlog entries",
          "roast": "useradd without -l (--no-log-init): with a high UID, this creates a sparse file in /var/log/lastlog that can balloon your image size by gigabytes. Add -l or use --no-log-init.",
          "line_text": "RUN useradd -u 1001 kissflow && chown -R kissflow:kissflow /build"
        }
      ]
    },
    {
      "file": "filetransferworker/Dockerfile",
      "service": "filetransferworker",
      "total": 4,
      "errors": 0,
      "warnings": 2,
      "infos": 2,
      "findings": [
        {
          "rule": "DF022",
          "severity": "INFO",
          "line": 0,
          "message": "No EXPOSE instruction \u2014 consider documenting which ports this service uses",
          "roast": "No EXPOSE? Your container is a mystery box. Is it a web server? A database? A very slow random number generator? EXPOSE is documentation \u2014 it tells the next developer which port to knock on."
        },
        {
          "rule": "DF033",
          "severity": "INFO",
          "line": 0,
          "message": "No .dockerignore file found in the same directory",
          "roast": "No .dockerignore? You're COPY-ing your entire build context including node_modules, .git, test fixtures, and possibly your diary. A .dockerignore takes 5 minutes to write and saves you from shipping your secrets to production."
        },
        {
          "rule": "DF001",
          "severity": "WARN",
          "line": 2,
          "message": "'kissflow/base${BASE_IMAGE_VERSION}:latest' uses an unpinned image tag",
          "roast": "Pinning to 'latest' is like ordering 'whatever' at a restaurant and then complaining when your image breaks in prod. Use a real tag.",
          "line_text": "FROM kissflow/base${BASE_IMAGE_VERSION}:latest AS base"
        },
        {
          "rule": "DF064",
          "severity": "WARN",
          "line": 16,
          "message": "useradd without -l flag \u2014 high UIDs create oversized /var/log/lastlog entries",
          "roast": "useradd without -l (--no-log-init): with a high UID, this creates a sparse file in /var/log/lastlog that can balloon your image size by gigabytes. Add -l or use --no-log-init.",
          "line_text": "RUN useradd -u 1001 kissflow && chown -R kissflow:kissflow /build"
        }
      ]
    },
    {
      "file": "flow/Dockerfile",
      "service": "flow",
      "total": 4,
      "errors": 0,
      "warnings": 2,
      "infos": 2,
      "findings": [
        {
          "rule": "DF022",
          "severity": "INFO",
          "line": 0,
          "message": "No EXPOSE instruction \u2014 consider documenting which ports this service uses",
          "roast": "No EXPOSE? Your container is a mystery box. Is it a web server? A database? A very slow random number generator? EXPOSE is documentation \u2014 it tells the next developer which port to knock on."
        },
        {
          "rule": "DF033",
          "severity": "INFO",
          "line": 0,
          "message": "No .dockerignore file found in the same directory",
          "roast": "No .dockerignore? You're COPY-ing your entire build context including node_modules, .git, test fixtures, and possibly your diary. A .dockerignore takes 5 minutes to write and saves you from shipping your secrets to production."
        },
        {
          "rule": "DF001",
          "severity": "WARN",
          "line": 2,
          "message": "'kissflow/base${BASE_IMAGE_VERSION}:latest' uses an unpinned image tag",
          "roast": "Pinning to 'latest' is like ordering 'whatever' at a restaurant and then complaining when your image breaks in prod. Use a real tag.",
          "line_text": "FROM kissflow/base${BASE_IMAGE_VERSION}:latest AS base"
        },
        {
          "rule": "DF064",
          "severity": "WARN",
          "line": 17,
          "message": "useradd without -l flag \u2014 high UIDs create oversized /var/log/lastlog entries",
          "roast": "useradd without -l (--no-log-init): with a high UID, this creates a sparse file in /var/log/lastlog that can balloon your image size by gigabytes. Add -l or use --no-log-init.",
          "line_text": "RUN useradd -u 1001 kissflow && chown -R kissflow:kissflow /build"
        }
      ]
    },
    {
      "file": "form/Dockerfile",
      "service": "form",
      "total": 4,
      "errors": 0,
      "warnings": 2,
      "infos": 2,
      "findings": [
        {
          "rule": "DF022",
          "severity": "INFO",
          "line": 0,
          "message": "No EXPOSE instruction \u2014 consider documenting which ports this service uses",
          "roast": "No EXPOSE? Your container is a mystery box. Is it a web server? A database? A very slow random number generator? EXPOSE is documentation \u2014 it tells the next developer which port to knock on."
        },
        {
          "rule": "DF033",
          "severity": "INFO",
          "line": 0,
          "message": "No .dockerignore file found in the same directory",
          "roast": "No .dockerignore? You're COPY-ing your entire build context including node_modules, .git, test fixtures, and possibly your diary. A .dockerignore takes 5 minutes to write and saves you from shipping your secrets to production."
        },
        {
          "rule": "DF001",
          "severity": "WARN",
          "line": 2,
          "message": "'kissflow/base${BASE_IMAGE_VERSION}:latest' uses an unpinned image tag",
          "roast": "Pinning to 'latest' is like ordering 'whatever' at a restaurant and then complaining when your image breaks in prod. Use a real tag.",
          "line_text": "FROM kissflow/base${BASE_IMAGE_VERSION}:latest AS base"
        },
        {
          "rule": "DF064",
          "severity": "WARN",
          "line": 40,
          "message": "useradd without -l flag \u2014 high UIDs create oversized /var/log/lastlog entries",
          "roast": "useradd without -l (--no-log-init): with a high UID, this creates a sparse file in /var/log/lastlog that can balloon your image size by gigabytes. Add -l or use --no-log-init.",
          "line_text": "RUN useradd -u 1001 kissflow && chown -R kissflow:kissflow /build && chown -R kissflow:kissflow /mnt"
        }
      ]
    },
    {
      "file": "formreport/Dockerfile",
      "service": "formreport",
      "total": 4,
      "errors": 0,
      "warnings": 2,
      "infos": 2,
      "findings": [
        {
          "rule": "DF022",
          "severity": "INFO",
          "line": 0,
          "message": "No EXPOSE instruction \u2014 consider documenting which ports this service uses",
          "roast": "No EXPOSE? Your container is a mystery box. Is it a web server? A database? A very slow random number generator? EXPOSE is documentation \u2014 it tells the next developer which port to knock on."
        },
        {
          "rule": "DF033",
          "severity": "INFO",
          "line": 0,
          "message": "No .dockerignore file found in the same directory",
          "roast": "No .dockerignore? You're COPY-ing your entire build context including node_modules, .git, test fixtures, and possibly your diary. A .dockerignore takes 5 minutes to write and saves you from shipping your secrets to production."
        },
        {
          "rule": "DF001",
          "severity": "WARN",
          "line": 2,
          "message": "'kissflow/base${BASE_IMAGE_VERSION}:latest' uses an unpinned image tag",
          "roast": "Pinning to 'latest' is like ordering 'whatever' at a restaurant and then complaining when your image breaks in prod. Use a real tag.",
          "line_text": "FROM kissflow/base${BASE_IMAGE_VERSION}:latest AS base"
        },
        {
          "rule": "DF064",
          "severity": "WARN",
          "line": 22,
          "message": "useradd without -l flag \u2014 high UIDs create oversized /var/log/lastlog entries",
          "roast": "useradd without -l (--no-log-init): with a high UID, this creates a sparse file in /var/log/lastlog that can balloon your image size by gigabytes. Add -l or use --no-log-init.",
          "line_text": "RUN useradd -u 1001 kissflow && chown -R kissflow:kissflow /build && chown -R kissflow:kissflow /mnt"
        }
      ]
    },
    {
      "file": "gateway/Dockerfile",
      "service": "gateway",
      "total": 4,
      "errors": 0,
      "warnings": 2,
      "infos": 2,
      "findings": [
        {
          "rule": "DF020",
          "severity": "WARN",
          "line": 0,
          "message": "No USER instruction found \u2014 container will run as root by default",
          "roast": "No USER set? Bold strategy. Running everything as root in prod is a great way to ensure job security \u2014 for your incident response team."
        },
        {
          "rule": "DF012",
          "severity": "INFO",
          "line": 0,
          "message": "No HEALTHCHECK defined",
          "roast": "No HEALTHCHECK? Your container is basically on the honor system. 'It's fine, I'm sure it's fine.' Meanwhile Kubernetes is just restarting it every 30 seconds wondering what went wrong."
        },
        {
          "rule": "DF033",
          "severity": "INFO",
          "line": 0,
          "message": "No .dockerignore file found in the same directory",
          "roast": "No .dockerignore? You're COPY-ing your entire build context including node_modules, .git, test fixtures, and possibly your diary. A .dockerignore takes 5 minutes to write and saves you from shipping your secrets to production."
        },
        {
          "rule": "DF001",
          "severity": "WARN",
          "line": 1,
          "message": "'nginx:latest' uses an unpinned image tag",
          "roast": "Pinning to 'latest' is like ordering 'whatever' at a restaurant and then complaining when your image breaks in prod. Use a real tag.",
          "line_text": "FROM nginx:latest"
        }
      ]
    },
    {
      "file": "gateway/analytics/Dockerfile-local",
      "service": "gateway/analytics",
      "total": 4,
      "errors": 0,
      "warnings": 2,
      "infos": 2,
      "findings": [
        {
          "rule": "DF020",
          "severity": "WARN",
          "line": 0,
          "message": "No USER instruction found \u2014 container will run as root by default",
          "roast": "No USER set? Bold strategy. Running everything as root in prod is a great way to ensure job security \u2014 for your incident response team."
        },
        {
          "rule": "DF012",
          "severity": "INFO",
          "line": 0,
          "message": "No HEALTHCHECK defined",
          "roast": "No HEALTHCHECK? Your container is basically on the honor system. 'It's fine, I'm sure it's fine.' Meanwhile Kubernetes is just restarting it every 30 seconds wondering what went wrong."
        },
        {
          "rule": "DF033",
          "severity": "INFO",
          "line": 0,
          "message": "No .dockerignore file found in the same directory",
          "roast": "No .dockerignore? You're COPY-ing your entire build context including node_modules, .git, test fixtures, and possibly your diary. A .dockerignore takes 5 minutes to write and saves you from shipping your secrets to production."
        },
        {
          "rule": "DF001",
          "severity": "WARN",
          "line": 1,
          "message": "'nginx:latest' uses an unpinned image tag",
          "roast": "Pinning to 'latest' is like ordering 'whatever' at a restaurant and then complaining when your image breaks in prod. Use a real tag.",
          "line_text": "FROM nginx:latest"
        }
      ]
    },
    {
      "file": "gateway/case/Dockerfile-case",
      "service": "gateway/case",
      "total": 4,
      "errors": 0,
      "warnings": 2,
      "infos": 2,
      "findings": [
        {
          "rule": "DF020",
          "severity": "WARN",
          "line": 0,
          "message": "No USER instruction found \u2014 container will run as root by default",
          "roast": "No USER set? Bold strategy. Running everything as root in prod is a great way to ensure job security \u2014 for your incident response team."
        },
        {
          "rule": "DF012",
          "severity": "INFO",
          "line": 0,
          "message": "No HEALTHCHECK defined",
          "roast": "No HEALTHCHECK? Your container is basically on the honor system. 'It's fine, I'm sure it's fine.' Meanwhile Kubernetes is just restarting it every 30 seconds wondering what went wrong."
        },
        {
          "rule": "DF033",
          "severity": "INFO",
          "line": 0,
          "message": "No .dockerignore file found in the same directory",
          "roast": "No .dockerignore? You're COPY-ing your entire build context including node_modules, .git, test fixtures, and possibly your diary. A .dockerignore takes 5 minutes to write and saves you from shipping your secrets to production."
        },
        {
          "rule": "DF001",
          "severity": "WARN",
          "line": 1,
          "message": "'nginx:latest' uses an unpinned image tag",
          "roast": "Pinning to 'latest' is like ordering 'whatever' at a restaurant and then complaining when your image breaks in prod. Use a real tag.",
          "line_text": "FROM nginx:latest"
        }
      ]
    },
    {
      "file": "gateway/integration-local/Dockerfile-local",
      "service": "gateway/integration-local",
      "total": 4,
      "errors": 0,
      "warnings": 2,
      "infos": 2,
      "findings": [
        {
          "rule": "DF020",
          "severity": "WARN",
          "line": 0,
          "message": "No USER instruction found \u2014 container will run as root by default",
          "roast": "No USER set? Bold strategy. Running everything as root in prod is a great way to ensure job security \u2014 for your incident response team."
        },
        {
          "rule": "DF012",
          "severity": "INFO",
          "line": 0,
          "message": "No HEALTHCHECK defined",
          "roast": "No HEALTHCHECK? Your container is basically on the honor system. 'It's fine, I'm sure it's fine.' Meanwhile Kubernetes is just restarting it every 30 seconds wondering what went wrong."
        },
        {
          "rule": "DF033",
          "severity": "INFO",
          "line": 0,
          "message": "No .dockerignore file found in the same directory",
          "roast": "No .dockerignore? You're COPY-ing your entire build context including node_modules, .git, test fixtures, and possibly your diary. A .dockerignore takes 5 minutes to write and saves you from shipping your secrets to production."
        },
        {
          "rule": "DF001",
          "severity": "WARN",
          "line": 1,
          "message": "'nginx:latest' uses an unpinned image tag",
          "roast": "Pinning to 'latest' is like ordering 'whatever' at a restaurant and then complaining when your image breaks in prod. Use a real tag.",
          "line_text": "FROM nginx:latest"
        }
      ]
    },
    {
      "file": "gateway/integration-local/Dockerfile-mock",
      "service": "gateway/integration-local",
      "total": 4,
      "errors": 0,
      "warnings": 2,
      "infos": 2,
      "findings": [
        {
          "rule": "DF020",
          "severity": "WARN",
          "line": 0,
          "message": "No USER instruction found \u2014 container will run as root by default",
          "roast": "No USER set? Bold strategy. Running everything as root in prod is a great way to ensure job security \u2014 for your incident response team."
        },
        {
          "rule": "DF012",
          "severity": "INFO",
          "line": 0,
          "message": "No HEALTHCHECK defined",
          "roast": "No HEALTHCHECK? Your container is basically on the honor system. 'It's fine, I'm sure it's fine.' Meanwhile Kubernetes is just restarting it every 30 seconds wondering what went wrong."
        },
        {
          "rule": "DF033",
          "severity": "INFO",
          "line": 0,
          "message": "No .dockerignore file found in the same directory",
          "roast": "No .dockerignore? You're COPY-ing your entire build context including node_modules, .git, test fixtures, and possibly your diary. A .dockerignore takes 5 minutes to write and saves you from shipping your secrets to production."
        },
        {
          "rule": "DF001",
          "severity": "WARN",
          "line": 1,
          "message": "'nginx:latest' uses an unpinned image tag",
          "roast": "Pinning to 'latest' is like ordering 'whatever' at a restaurant and then complaining when your image breaks in prod. Use a real tag.",
          "line_text": "FROM nginx:latest"
        }
      ]
    },
    {
      "file": "gateway/lcnc/Dockerfile-local",
      "service": "gateway/lcnc",
      "total": 4,
      "errors": 0,
      "warnings": 2,
      "infos": 2,
      "findings": [
        {
          "rule": "DF020",
          "severity": "WARN",
          "line": 0,
          "message": "No USER instruction found \u2014 container will run as root by default",
          "roast": "No USER set? Bold strategy. Running everything as root in prod is a great way to ensure job security \u2014 for your incident response team."
        },
        {
          "rule": "DF012",
          "severity": "INFO",
          "line": 0,
          "message": "No HEALTHCHECK defined",
          "roast": "No HEALTHCHECK? Your container is basically on the honor system. 'It's fine, I'm sure it's fine.' Meanwhile Kubernetes is just restarting it every 30 seconds wondering what went wrong."
        },
        {
          "rule": "DF033",
          "severity": "INFO",
          "line": 0,
          "message": "No .dockerignore file found in the same directory",
          "roast": "No .dockerignore? You're COPY-ing your entire build context including node_modules, .git, test fixtures, and possibly your diary. A .dockerignore takes 5 minutes to write and saves you from shipping your secrets to production."
        },
        {
          "rule": "DF001",
          "severity": "WARN",
          "line": 1,
          "message": "'nginx:latest' uses an unpinned image tag",
          "roast": "Pinning to 'latest' is like ordering 'whatever' at a restaurant and then complaining when your image breaks in prod. Use a real tag.",
          "line_text": "FROM nginx:latest"
        }
      ]
    },
    {
      "file": "gateway/lcnc/Dockerfile-mock",
      "service": "gateway/lcnc",
      "total": 4,
      "errors": 0,
      "warnings": 2,
      "infos": 2,
      "findings": [
        {
          "rule": "DF020",
          "severity": "WARN",
          "line": 0,
          "message": "No USER instruction found \u2014 container will run as root by default",
          "roast": "No USER set? Bold strategy. Running everything as root in prod is a great way to ensure job security \u2014 for your incident response team."
        },
        {
          "rule": "DF012",
          "severity": "INFO",
          "line": 0,
          "message": "No HEALTHCHECK defined",
          "roast": "No HEALTHCHECK? Your container is basically on the honor system. 'It's fine, I'm sure it's fine.' Meanwhile Kubernetes is just restarting it every 30 seconds wondering what went wrong."
        },
        {
          "rule": "DF033",
          "severity": "INFO",
          "line": 0,
          "message": "No .dockerignore file found in the same directory",
          "roast": "No .dockerignore? You're COPY-ing your entire build context including node_modules, .git, test fixtures, and possibly your diary. A .dockerignore takes 5 minutes to write and saves you from shipping your secrets to production."
        },
        {
          "rule": "DF001",
          "severity": "WARN",
          "line": 1,
          "message": "'nginx:latest' uses an unpinned image tag",
          "roast": "Pinning to 'latest' is like ordering 'whatever' at a restaurant and then complaining when your image breaks in prod. Use a real tag.",
          "line_text": "FROM nginx:latest"
        }
      ]
    },
    {
      "file": "gateway/mock/Dockerfile-mock",
      "service": "gateway/mock",
      "total": 4,
      "errors": 0,
      "warnings": 2,
      "infos": 2,
      "findings": [
        {
          "rule": "DF020",
          "severity": "WARN",
          "line": 0,
          "message": "No USER instruction found \u2014 container will run as root by default",
          "roast": "No USER set? Bold strategy. Running everything as root in prod is a great way to ensure job security \u2014 for your incident response team."
        },
        {
          "rule": "DF012",
          "severity": "INFO",
          "line": 0,
          "message": "No HEALTHCHECK defined",
          "roast": "No HEALTHCHECK? Your container is basically on the honor system. 'It's fine, I'm sure it's fine.' Meanwhile Kubernetes is just restarting it every 30 seconds wondering what went wrong."
        },
        {
          "rule": "DF033",
          "severity": "INFO",
          "line": 0,
          "message": "No .dockerignore file found in the same directory",
          "roast": "No .dockerignore? You're COPY-ing your entire build context including node_modules, .git, test fixtures, and possibly your diary. A .dockerignore takes 5 minutes to write and saves you from shipping your secrets to production."
        },
        {
          "rule": "DF001",
          "severity": "WARN",
          "line": 1,
          "message": "'nginx:latest' uses an unpinned image tag",
          "roast": "Pinning to 'latest' is like ordering 'whatever' at a restaurant and then complaining when your image breaks in prod. Use a real tag.",
          "line_text": "FROM nginx:latest"
        }
      ]
    },
    {
      "file": "gateway/process/Dockerfile-process",
      "service": "gateway/process",
      "total": 4,
      "errors": 0,
      "warnings": 2,
      "infos": 2,
      "findings": [
        {
          "rule": "DF020",
          "severity": "WARN",
          "line": 0,
          "message": "No USER instruction found \u2014 container will run as root by default",
          "roast": "No USER set? Bold strategy. Running everything as root in prod is a great way to ensure job security \u2014 for your incident response team."
        },
        {
          "rule": "DF012",
          "severity": "INFO",
          "line": 0,
          "message": "No HEALTHCHECK defined",
          "roast": "No HEALTHCHECK? Your container is basically on the honor system. 'It's fine, I'm sure it's fine.' Meanwhile Kubernetes is just restarting it every 30 seconds wondering what went wrong."
        },
        {
          "rule": "DF033",
          "severity": "INFO",
          "line": 0,
          "message": "No .dockerignore file found in the same directory",
          "roast": "No .dockerignore? You're COPY-ing your entire build context including node_modules, .git, test fixtures, and possibly your diary. A .dockerignore takes 5 minutes to write and saves you from shipping your secrets to production."
        },
        {
          "rule": "DF001",
          "severity": "WARN",
          "line": 1,
          "message": "'nginx:latest' uses an unpinned image tag",
          "roast": "Pinning to 'latest' is like ordering 'whatever' at a restaurant and then complaining when your image breaks in prod. Use a real tag.",
          "line_text": "FROM nginx:latest"
        }
      ]
    },
    {
      "file": "governance/Dockerfile",
      "service": "governance",
      "total": 4,
      "errors": 0,
      "warnings": 2,
      "infos": 2,
      "findings": [
        {
          "rule": "DF022",
          "severity": "INFO",
          "line": 0,
          "message": "No EXPOSE instruction \u2014 consider documenting which ports this service uses",
          "roast": "No EXPOSE? Your container is a mystery box. Is it a web server? A database? A very slow random number generator? EXPOSE is documentation \u2014 it tells the next developer which port to knock on."
        },
        {
          "rule": "DF033",
          "severity": "INFO",
          "line": 0,
          "message": "No .dockerignore file found in the same directory",
          "roast": "No .dockerignore? You're COPY-ing your entire build context including node_modules, .git, test fixtures, and possibly your diary. A .dockerignore takes 5 minutes to write and saves you from shipping your secrets to production."
        },
        {
          "rule": "DF001",
          "severity": "WARN",
          "line": 2,
          "message": "'kissflow/base${BASE_IMAGE_VERSION}:latest' uses an unpinned image tag",
          "roast": "Pinning to 'latest' is like ordering 'whatever' at a restaurant and then complaining when your image breaks in prod. Use a real tag.",
          "line_text": "FROM kissflow/base${BASE_IMAGE_VERSION}:latest AS base"
        },
        {
          "rule": "DF064",
          "severity": "WARN",
          "line": 19,
          "message": "useradd without -l flag \u2014 high UIDs create oversized /var/log/lastlog entries",
          "roast": "useradd without -l (--no-log-init): with a high UID, this creates a sparse file in /var/log/lastlog that can balloon your image size by gigabytes. Add -l or use --no-log-init.",
          "line_text": "RUN useradd -u 1001 kissflow && chown -R kissflow:kissflow /build"
        }
      ]
    },
    {
      "file": "indexmanager/Dockerfile",
      "service": "indexmanager",
      "total": 4,
      "errors": 0,
      "warnings": 2,
      "infos": 2,
      "findings": [
        {
          "rule": "DF022",
          "severity": "INFO",
          "line": 0,
          "message": "No EXPOSE instruction \u2014 consider documenting which ports this service uses",
          "roast": "No EXPOSE? Your container is a mystery box. Is it a web server? A database? A very slow random number generator? EXPOSE is documentation \u2014 it tells the next developer which port to knock on."
        },
        {
          "rule": "DF033",
          "severity": "INFO",
          "line": 0,
          "message": "No .dockerignore file found in the same directory",
          "roast": "No .dockerignore? You're COPY-ing your entire build context including node_modules, .git, test fixtures, and possibly your diary. A .dockerignore takes 5 minutes to write and saves you from shipping your secrets to production."
        },
        {
          "rule": "DF001",
          "severity": "WARN",
          "line": 2,
          "message": "'kissflow/base${BASE_IMAGE_VERSION}:latest' uses an unpinned image tag",
          "roast": "Pinning to 'latest' is like ordering 'whatever' at a restaurant and then complaining when your image breaks in prod. Use a real tag.",
          "line_text": "FROM kissflow/base${BASE_IMAGE_VERSION}:latest AS base"
        },
        {
          "rule": "DF064",
          "severity": "WARN",
          "line": 17,
          "message": "useradd without -l flag \u2014 high UIDs create oversized /var/log/lastlog entries",
          "roast": "useradd without -l (--no-log-init): with a high UID, this creates a sparse file in /var/log/lastlog that can balloon your image size by gigabytes. Add -l or use --no-log-init.",
          "line_text": "RUN useradd -u 1001 kissflow && chown -R kissflow:kissflow /build"
        }
      ]
    },
    {
      "file": "integration/Dockerfile",
      "service": "integration",
      "total": 4,
      "errors": 0,
      "warnings": 2,
      "infos": 2,
      "findings": [
        {
          "rule": "DF022",
          "severity": "INFO",
          "line": 0,
          "message": "No EXPOSE instruction \u2014 consider documenting which ports this service uses",
          "roast": "No EXPOSE? Your container is a mystery box. Is it a web server? A database? A very slow random number generator? EXPOSE is documentation \u2014 it tells the next developer which port to knock on."
        },
        {
          "rule": "DF033",
          "severity": "INFO",
          "line": 0,
          "message": "No .dockerignore file found in the same directory",
          "roast": "No .dockerignore? You're COPY-ing your entire build context including node_modules, .git, test fixtures, and possibly your diary. A .dockerignore takes 5 minutes to write and saves you from shipping your secrets to production."
        },
        {
          "rule": "DF001",
          "severity": "WARN",
          "line": 2,
          "message": "'kissflow/base${BASE_IMAGE_VERSION}:latest' uses an unpinned image tag",
          "roast": "Pinning to 'latest' is like ordering 'whatever' at a restaurant and then complaining when your image breaks in prod. Use a real tag.",
          "line_text": "FROM kissflow/base${BASE_IMAGE_VERSION}:latest AS base"
        },
        {
          "rule": "DF064",
          "severity": "WARN",
          "line": 20,
          "message": "useradd without -l flag \u2014 high UIDs create oversized /var/log/lastlog entries",
          "roast": "useradd without -l (--no-log-init): with a high UID, this creates a sparse file in /var/log/lastlog that can balloon your image size by gigabytes. Add -l or use --no-log-init.",
          "line_text": "RUN useradd -u 1001 kissflow && chown -R kissflow:kissflow /build"
        }
      ]
    },
    {
      "file": "maileventworker/Dockerfile",
      "service": "maileventworker",
      "total": 4,
      "errors": 0,
      "warnings": 2,
      "infos": 2,
      "findings": [
        {
          "rule": "DF022",
          "severity": "INFO",
          "line": 0,
          "message": "No EXPOSE instruction \u2014 consider documenting which ports this service uses",
          "roast": "No EXPOSE? Your container is a mystery box. Is it a web server? A database? A very slow random number generator? EXPOSE is documentation \u2014 it tells the next developer which port to knock on."
        },
        {
          "rule": "DF033",
          "severity": "INFO",
          "line": 0,
          "message": "No .dockerignore file found in the same directory",
          "roast": "No .dockerignore? You're COPY-ing your entire build context including node_modules, .git, test fixtures, and possibly your diary. A .dockerignore takes 5 minutes to write and saves you from shipping your secrets to production."
        },
        {
          "rule": "DF001",
          "severity": "WARN",
          "line": 2,
          "message": "'kissflow/base${BASE_IMAGE_VERSION}:latest' uses an unpinned image tag",
          "roast": "Pinning to 'latest' is like ordering 'whatever' at a restaurant and then complaining when your image breaks in prod. Use a real tag.",
          "line_text": "FROM kissflow/base${BASE_IMAGE_VERSION}:latest AS base"
        },
        {
          "rule": "DF064",
          "severity": "WARN",
          "line": 16,
          "message": "useradd without -l flag \u2014 high UIDs create oversized /var/log/lastlog entries",
          "roast": "useradd without -l (--no-log-init): with a high UID, this creates a sparse file in /var/log/lastlog that can balloon your image size by gigabytes. Add -l or use --no-log-init.",
          "line_text": "RUN useradd -u 1001 kissflow && chown -R kissflow:kissflow /build"
        }
      ]
    },
    {
      "file": "marketplace/Dockerfile",
      "service": "marketplace",
      "total": 4,
      "errors": 0,
      "warnings": 2,
      "infos": 2,
      "findings": [
        {
          "rule": "DF022",
          "severity": "INFO",
          "line": 0,
          "message": "No EXPOSE instruction \u2014 consider documenting which ports this service uses",
          "roast": "No EXPOSE? Your container is a mystery box. Is it a web server? A database? A very slow random number generator? EXPOSE is documentation \u2014 it tells the next developer which port to knock on."
        },
        {
          "rule": "DF033",
          "severity": "INFO",
          "line": 0,
          "message": "No .dockerignore file found in the same directory",
          "roast": "No .dockerignore? You're COPY-ing your entire build context including node_modules, .git, test fixtures, and possibly your diary. A .dockerignore takes 5 minutes to write and saves you from shipping your secrets to production."
        },
        {
          "rule": "DF001",
          "severity": "WARN",
          "line": 2,
          "message": "'kissflow/base${BASE_IMAGE_VERSION}:latest' uses an unpinned image tag",
          "roast": "Pinning to 'latest' is like ordering 'whatever' at a restaurant and then complaining when your image breaks in prod. Use a real tag.",
          "line_text": "FROM kissflow/base${BASE_IMAGE_VERSION}:latest AS base"
        },
        {
          "rule": "DF064",
          "severity": "WARN",
          "line": 16,
          "message": "useradd without -l flag \u2014 high UIDs create oversized /var/log/lastlog entries",
          "roast": "useradd without -l (--no-log-init): with a high UID, this creates a sparse file in /var/log/lastlog that can balloon your image size by gigabytes. Add -l or use --no-log-init.",
          "line_text": "RUN useradd -u 1001 kissflow && chown -R kissflow:kissflow /build"
        }
      ]
    },
    {
      "file": "metadata/Dockerfile",
      "service": "metadata",
      "total": 4,
      "errors": 0,
      "warnings": 2,
      "infos": 2,
      "findings": [
        {
          "rule": "DF022",
          "severity": "INFO",
          "line": 0,
          "message": "No EXPOSE instruction \u2014 consider documenting which ports this service uses",
          "roast": "No EXPOSE? Your container is a mystery box. Is it a web server? A database? A very slow random number generator? EXPOSE is documentation \u2014 it tells the next developer which port to knock on."
        },
        {
          "rule": "DF033",
          "severity": "INFO",
          "line": 0,
          "message": "No .dockerignore file found in the same directory",
          "roast": "No .dockerignore? You're COPY-ing your entire build context including node_modules, .git, test fixtures, and possibly your diary. A .dockerignore takes 5 minutes to write and saves you from shipping your secrets to production."
        },
        {
          "rule": "DF001",
          "severity": "WARN",
          "line": 2,
          "message": "'kissflow/base${BASE_IMAGE_VERSION}:latest' uses an unpinned image tag",
          "roast": "Pinning to 'latest' is like ordering 'whatever' at a restaurant and then complaining when your image breaks in prod. Use a real tag.",
          "line_text": "FROM kissflow/base${BASE_IMAGE_VERSION}:latest AS base"
        },
        {
          "rule": "DF064",
          "severity": "WARN",
          "line": 20,
          "message": "useradd without -l flag \u2014 high UIDs create oversized /var/log/lastlog entries",
          "roast": "useradd without -l (--no-log-init): with a high UID, this creates a sparse file in /var/log/lastlog that can balloon your image size by gigabytes. Add -l or use --no-log-init.",
          "line_text": "RUN useradd -u 1001 kissflow && chown -R kissflow:kissflow /build"
        }
      ]
    },
    {
      "file": "notification/Dockerfile",
      "service": "notification",
      "total": 4,
      "errors": 0,
      "warnings": 2,
      "infos": 2,
      "findings": [
        {
          "rule": "DF022",
          "severity": "INFO",
          "line": 0,
          "message": "No EXPOSE instruction \u2014 consider documenting which ports this service uses",
          "roast": "No EXPOSE? Your container is a mystery box. Is it a web server? A database? A very slow random number generator? EXPOSE is documentation \u2014 it tells the next developer which port to knock on."
        },
        {
          "rule": "DF033",
          "severity": "INFO",
          "line": 0,
          "message": "No .dockerignore file found in the same directory",
          "roast": "No .dockerignore? You're COPY-ing your entire build context including node_modules, .git, test fixtures, and possibly your diary. A .dockerignore takes 5 minutes to write and saves you from shipping your secrets to production."
        },
        {
          "rule": "DF001",
          "severity": "WARN",
          "line": 2,
          "message": "'kissflow/base${BASE_IMAGE_VERSION}:latest' uses an unpinned image tag",
          "roast": "Pinning to 'latest' is like ordering 'whatever' at a restaurant and then complaining when your image breaks in prod. Use a real tag.",
          "line_text": "FROM kissflow/base${BASE_IMAGE_VERSION}:latest AS base"
        },
        {
          "rule": "DF064",
          "severity": "WARN",
          "line": 18,
          "message": "useradd without -l flag \u2014 high UIDs create oversized /var/log/lastlog entries",
          "roast": "useradd without -l (--no-log-init): with a high UID, this creates a sparse file in /var/log/lastlog that can balloon your image size by gigabytes. Add -l or use --no-log-init.",
          "line_text": "RUN useradd -u 1001 kissflow && chown -R kissflow:kissflow /build"
        }
      ]
    },
    {
      "file": "portal/Dockerfile",
      "service": "portal",
      "total": 4,
      "errors": 0,
      "warnings": 2,
      "infos": 2,
      "findings": [
        {
          "rule": "DF022",
          "severity": "INFO",
          "line": 0,
          "message": "No EXPOSE instruction \u2014 consider documenting which ports this service uses",
          "roast": "No EXPOSE? Your container is a mystery box. Is it a web server? A database? A very slow random number generator? EXPOSE is documentation \u2014 it tells the next developer which port to knock on."
        },
        {
          "rule": "DF033",
          "severity": "INFO",
          "line": 0,
          "message": "No .dockerignore file found in the same directory",
          "roast": "No .dockerignore? You're COPY-ing your entire build context including node_modules, .git, test fixtures, and possibly your diary. A .dockerignore takes 5 minutes to write and saves you from shipping your secrets to production."
        },
        {
          "rule": "DF001",
          "severity": "WARN",
          "line": 2,
          "message": "'kissflow/base${BASE_IMAGE_VERSION}:latest' uses an unpinned image tag",
          "roast": "Pinning to 'latest' is like ordering 'whatever' at a restaurant and then complaining when your image breaks in prod. Use a real tag.",
          "line_text": "FROM kissflow/base${BASE_IMAGE_VERSION}:latest AS base"
        },
        {
          "rule": "DF064",
          "severity": "WARN",
          "line": 18,
          "message": "useradd without -l flag \u2014 high UIDs create oversized /var/log/lastlog entries",
          "roast": "useradd without -l (--no-log-init): with a high UID, this creates a sparse file in /var/log/lastlog that can balloon your image size by gigabytes. Add -l or use --no-log-init.",
          "line_text": "RUN useradd -u 1001 kissflow && chown -R kissflow:kissflow /build"
        }
      ]
    },
    {
      "file": "process/Dockerfile",
      "service": "process",
      "total": 4,
      "errors": 0,
      "warnings": 2,
      "infos": 2,
      "findings": [
        {
          "rule": "DF022",
          "severity": "INFO",
          "line": 0,
          "message": "No EXPOSE instruction \u2014 consider documenting which ports this service uses",
          "roast": "No EXPOSE? Your container is a mystery box. Is it a web server? A database? A very slow random number generator? EXPOSE is documentation \u2014 it tells the next developer which port to knock on."
        },
        {
          "rule": "DF033",
          "severity": "INFO",
          "line": 0,
          "message": "No .dockerignore file found in the same directory",
          "roast": "No .dockerignore? You're COPY-ing your entire build context including node_modules, .git, test fixtures, and possibly your diary. A .dockerignore takes 5 minutes to write and saves you from shipping your secrets to production."
        },
        {
          "rule": "DF001",
          "severity": "WARN",
          "line": 2,
          "message": "'kissflow/base${BASE_IMAGE_VERSION}:latest' uses an unpinned image tag",
          "roast": "Pinning to 'latest' is like ordering 'whatever' at a restaurant and then complaining when your image breaks in prod. Use a real tag.",
          "line_text": "FROM kissflow/base${BASE_IMAGE_VERSION}:latest AS base"
        },
        {
          "rule": "DF064",
          "severity": "WARN",
          "line": 38,
          "message": "useradd without -l flag \u2014 high UIDs create oversized /var/log/lastlog entries",
          "roast": "useradd without -l (--no-log-init): with a high UID, this creates a sparse file in /var/log/lastlog that can balloon your image size by gigabytes. Add -l or use --no-log-init.",
          "line_text": "RUN useradd -u 1001 kissflow && chown -R kissflow:kissflow /build && chown -R kissflow:kissflow /mnt"
        }
      ]
    },
    {
      "file": "processreport/Dockerfile",
      "service": "processreport",
      "total": 4,
      "errors": 0,
      "warnings": 2,
      "infos": 2,
      "findings": [
        {
          "rule": "DF022",
          "severity": "INFO",
          "line": 0,
          "message": "No EXPOSE instruction \u2014 consider documenting which ports this service uses",
          "roast": "No EXPOSE? Your container is a mystery box. Is it a web server? A database? A very slow random number generator? EXPOSE is documentation \u2014 it tells the next developer which port to knock on."
        },
        {
          "rule": "DF033",
          "severity": "INFO",
          "line": 0,
          "message": "No .dockerignore file found in the same directory",
          "roast": "No .dockerignore? You're COPY-ing your entire build context including node_modules, .git, test fixtures, and possibly your diary. A .dockerignore takes 5 minutes to write and saves you from shipping your secrets to production."
        },
        {
          "rule": "DF001",
          "severity": "WARN",
          "line": 2,
          "message": "'kissflow/base${BASE_IMAGE_VERSION}:latest' uses an unpinned image tag",
          "roast": "Pinning to 'latest' is like ordering 'whatever' at a restaurant and then complaining when your image breaks in prod. Use a real tag.",
          "line_text": "FROM kissflow/base${BASE_IMAGE_VERSION}:latest AS base"
        },
        {
          "rule": "DF064",
          "severity": "WARN",
          "line": 22,
          "message": "useradd without -l flag \u2014 high UIDs create oversized /var/log/lastlog entries",
          "roast": "useradd without -l (--no-log-init): with a high UID, this creates a sparse file in /var/log/lastlog that can balloon your image size by gigabytes. Add -l or use --no-log-init.",
          "line_text": "RUN useradd -u 1001 kissflow && chown -R kissflow:kissflow /build && chown -R kissflow:kissflow /mnt"
        }
      ]
    },
    {
      "file": "route/Dockerfile",
      "service": "route",
      "total": 4,
      "errors": 0,
      "warnings": 2,
      "infos": 2,
      "findings": [
        {
          "rule": "DF022",
          "severity": "INFO",
          "line": 0,
          "message": "No EXPOSE instruction \u2014 consider documenting which ports this service uses",
          "roast": "No EXPOSE? Your container is a mystery box. Is it a web server? A database? A very slow random number generator? EXPOSE is documentation \u2014 it tells the next developer which port to knock on."
        },
        {
          "rule": "DF033",
          "severity": "INFO",
          "line": 0,
          "message": "No .dockerignore file found in the same directory",
          "roast": "No .dockerignore? You're COPY-ing your entire build context including node_modules, .git, test fixtures, and possibly your diary. A .dockerignore takes 5 minutes to write and saves you from shipping your secrets to production."
        },
        {
          "rule": "DF001",
          "severity": "WARN",
          "line": 2,
          "message": "'kissflow/base${BASE_IMAGE_VERSION}:latest' uses an unpinned image tag",
          "roast": "Pinning to 'latest' is like ordering 'whatever' at a restaurant and then complaining when your image breaks in prod. Use a real tag.",
          "line_text": "FROM kissflow/base${BASE_IMAGE_VERSION}:latest AS base"
        },
        {
          "rule": "DF064",
          "severity": "WARN",
          "line": 18,
          "message": "useradd without -l flag \u2014 high UIDs create oversized /var/log/lastlog entries",
          "roast": "useradd without -l (--no-log-init): with a high UID, this creates a sparse file in /var/log/lastlog that can balloon your image size by gigabytes. Add -l or use --no-log-init.",
          "line_text": "RUN useradd -u 1001 kissflow && chown -R kissflow:kissflow /build"
        }
      ]
    },
    {
      "file": "scheduler/Dockerfile",
      "service": "scheduler",
      "total": 4,
      "errors": 0,
      "warnings": 2,
      "infos": 2,
      "findings": [
        {
          "rule": "DF022",
          "severity": "INFO",
          "line": 0,
          "message": "No EXPOSE instruction \u2014 consider documenting which ports this service uses",
          "roast": "No EXPOSE? Your container is a mystery box. Is it a web server? A database? A very slow random number generator? EXPOSE is documentation \u2014 it tells the next developer which port to knock on."
        },
        {
          "rule": "DF033",
          "severity": "INFO",
          "line": 0,
          "message": "No .dockerignore file found in the same directory",
          "roast": "No .dockerignore? You're COPY-ing your entire build context including node_modules, .git, test fixtures, and possibly your diary. A .dockerignore takes 5 minutes to write and saves you from shipping your secrets to production."
        },
        {
          "rule": "DF001",
          "severity": "WARN",
          "line": 2,
          "message": "'kissflow/base${BASE_IMAGE_VERSION}:latest' uses an unpinned image tag",
          "roast": "Pinning to 'latest' is like ordering 'whatever' at a restaurant and then complaining when your image breaks in prod. Use a real tag.",
          "line_text": "FROM kissflow/base${BASE_IMAGE_VERSION}:latest AS base"
        },
        {
          "rule": "DF064",
          "severity": "WARN",
          "line": 17,
          "message": "useradd without -l flag \u2014 high UIDs create oversized /var/log/lastlog entries",
          "roast": "useradd without -l (--no-log-init): with a high UID, this creates a sparse file in /var/log/lastlog that can balloon your image size by gigabytes. Add -l or use --no-log-init.",
          "line_text": "RUN useradd -u 1001 kissflow && chown -R kissflow:kissflow /build"
        }
      ]
    },
    {
      "file": "upload/Dockerfile",
      "service": "upload",
      "total": 4,
      "errors": 0,
      "warnings": 2,
      "infos": 2,
      "findings": [
        {
          "rule": "DF022",
          "severity": "INFO",
          "line": 0,
          "message": "No EXPOSE instruction \u2014 consider documenting which ports this service uses",
          "roast": "No EXPOSE? Your container is a mystery box. Is it a web server? A database? A very slow random number generator? EXPOSE is documentation \u2014 it tells the next developer which port to knock on."
        },
        {
          "rule": "DF033",
          "severity": "INFO",
          "line": 0,
          "message": "No .dockerignore file found in the same directory",
          "roast": "No .dockerignore? You're COPY-ing your entire build context including node_modules, .git, test fixtures, and possibly your diary. A .dockerignore takes 5 minutes to write and saves you from shipping your secrets to production."
        },
        {
          "rule": "DF001",
          "severity": "WARN",
          "line": 2,
          "message": "'kissflow/base${BASE_IMAGE_VERSION}:latest' uses an unpinned image tag",
          "roast": "Pinning to 'latest' is like ordering 'whatever' at a restaurant and then complaining when your image breaks in prod. Use a real tag.",
          "line_text": "FROM kissflow/base${BASE_IMAGE_VERSION}:latest AS base"
        },
        {
          "rule": "DF064",
          "severity": "WARN",
          "line": 25,
          "message": "useradd without -l flag \u2014 high UIDs create oversized /var/log/lastlog entries",
          "roast": "useradd without -l (--no-log-init): with a high UID, this creates a sparse file in /var/log/lastlog that can balloon your image size by gigabytes. Add -l or use --no-log-init.",
          "line_text": "RUN useradd -u 1001 kissflow && chown -R kissflow:kissflow /build"
        }
      ]
    },
    {
      "file": "user/Dockerfile",
      "service": "user",
      "total": 4,
      "errors": 0,
      "warnings": 2,
      "infos": 2,
      "findings": [
        {
          "rule": "DF022",
          "severity": "INFO",
          "line": 0,
          "message": "No EXPOSE instruction \u2014 consider documenting which ports this service uses",
          "roast": "No EXPOSE? Your container is a mystery box. Is it a web server? A database? A very slow random number generator? EXPOSE is documentation \u2014 it tells the next developer which port to knock on."
        },
        {
          "rule": "DF033",
          "severity": "INFO",
          "line": 0,
          "message": "No .dockerignore file found in the same directory",
          "roast": "No .dockerignore? You're COPY-ing your entire build context including node_modules, .git, test fixtures, and possibly your diary. A .dockerignore takes 5 minutes to write and saves you from shipping your secrets to production."
        },
        {
          "rule": "DF001",
          "severity": "WARN",
          "line": 2,
          "message": "'kissflow/base${BASE_IMAGE_VERSION}:latest' uses an unpinned image tag",
          "roast": "Pinning to 'latest' is like ordering 'whatever' at a restaurant and then complaining when your image breaks in prod. Use a real tag.",
          "line_text": "FROM kissflow/base${BASE_IMAGE_VERSION}:latest AS base"
        },
        {
          "rule": "DF064",
          "severity": "WARN",
          "line": 29,
          "message": "useradd without -l flag \u2014 high UIDs create oversized /var/log/lastlog entries",
          "roast": "useradd without -l (--no-log-init): with a high UID, this creates a sparse file in /var/log/lastlog that can balloon your image size by gigabytes. Add -l or use --no-log-init.",
          "line_text": "RUN useradd -u 1001 kissflow && chown -R kissflow:kissflow /build"
        }
      ]
    }
  ]
};
