## 🚀 How to Use This Template for Your Own Portfolio

This project uses **Vite + React** for the frontend, **Decap CMS** for content management, and is configured to deploy the public site to **GitHub Pages** while handling authentication securely via **Vercel Serverless Functions**.

If you want to use this template, follow these exact steps to connect it to your own GitHub account and Vercel deployment.

### Step 1: Fork and Clone

1. Click the **Fork** button at the top right of this repository to create a copy in your GitHub account.
2. Clone your forked repository to your local machine:
   ```bash
   git clone https://github.com/fahimulkabir/academic-portfolio.git
   cd academic-portfolio
   npm install
   ```

### Step 2: Initial Vercel Deployment (To claim your URL)

Before configuring your code or authentication, you need to deploy the site to Vercel just to generate your live URL.

1. Go to [Vercel](https://vercel.com/) and click **Add New... -> Project**.
2. Import your newly forked GitHub repository.
3. Leave all settings as default and click **Deploy**.
4. Once it finishes, Vercel will give you a live domain (e.g., `https://my-portfolio.vercel.app`). **Copy this URL**, you will need it for the next steps! _(Note: The admin panel won't work just yet, we are fixing that now)._

### Step 3: Setup GitHub Authentication (OAuth)

To log into the `/admin` dashboard securely, you need to create a GitHub OAuth application using your new Vercel URL.

1. Go to your GitHub **Settings** -> **Developer settings** -> **OAuth Apps** -> **New OAuth App**.
2. **Application name:** Your Portfolio CMS
3. **Homepage URL:** `https://YOUR_VERCEL_APP_URL.vercel.app`
4. **Authorization callback URL:** `https://YOUR_VERCEL_APP_URL.vercel.app/api/callback`
5. Click **Register application** and then **Generate a new client secret**. Keep this tab open for the next step.

### Step 4: Add Environment Variables to Vercel

Vercel needs these GitHub keys to handle the secure login handshake.

1. Go back to your project dashboard in Vercel.
2. Navigate to **Settings -> Environment Variables**.
3. Add the following variables exactly as written:
   - `OAUTH_CLIENT_ID`: (Paste your Client ID from GitHub)
   - `OAUTH_CLIENT_SECRET`: (Paste your Client Secret from GitHub)
   - `COMPLETE_URL`: `https://YOUR_VERCEL_APP_URL.vercel.app/api/callback`
   - `ORIGIN`: `https://YOUR_VERCEL_APP_URL.vercel.app`

> ⚠️ **CRITICAL WARNING:** Do **NOT** add a trailing slash (`/`) at the end of the `COMPLETE_URL` or `ORIGIN` variables.
>
> - **Correct:** `https://my-site.vercel.app`
> - **Wrong:** `https://my-site.vercel.app/` _(This will break your login!)_

4. Once added, go to the Vercel **Deployments** tab, click the three dots (`...`) on your latest deployment, and select **Redeploy** to apply the variables.

### Step 5: Update CMS Configuration & Push Code

Now that you have your Vercel URL, you can safely update your CMS configuration file so it knows where to send your data for authentication. _(Note: You do not need to update Vite, it will automatically detect your repository name!)_

1. Open `public/admin/config.yml` in your code editor and update the authentication fields:

   ```yaml
   backend:
     name: github
     # MUST CHANGE to your exact GitHub username and repository name
     repo: YOUR_USERNAME/YOUR_REPO_NAME
     branch: main
     auth_scope: repo

     # Paste your Vercel URL here (No trailing slash)
     base_url: https://YOUR_VERCEL_APP_URL.vercel.app
     auth_endpoint: api/auth
   ```

### Step 6: Enable GitHub Pages

If you want your public site hosted at `github.io` (while keeping Vercel strictly for the Admin CMS login):

1. Because you forked this repository, GitHub has paused your automated workflows for security reasons. Go to the **Actions** tab at the top of your GitHub repository.
2. Click the green **"I understand my workflows, go ahead and enable them"** button.
3. Go to **Settings -> Pages**.
4. Under **Build and deployment**, change the _Source_ dropdown to **GitHub Actions**.
5. **Final Configuration Link:** Now that your GitHub Pages is active, open `public/admin/config.yml` one last time and update the `site_url` property at the bottom of the file so the CMS knows where your live site is:

   ```yaml
   # Update to your final public GitHub Pages URL
   site_url: https://YOUR_USERNAME.github.io/YOUR_REPO_NAME/
   ```

### Accessing Your Admin Panel

Once everything is deployed, visit `https://YOUR_VERCEL_APP_URL.vercel.app/admin/` to log in with GitHub and start adding your publications, news, and projects!
