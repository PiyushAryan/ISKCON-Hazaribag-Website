# CI/CD — Deploy to AWS S3

## How it works

Every push to `main` triggers a GitHub Actions workflow that:

1. Installs **Bun** and dependencies
2. Runs `bun run build` → produces `dist/`
3. Syncs `dist/` to your S3 bucket with smart cache headers
4. (Optional) Invalidates your CloudFront distribution

---

## One-time setup

### 1. Create an IAM user for deployments

In the AWS Console → **IAM → Users → Create user**:

- Username: `iskcon-hazaribag-deploy` (or anything)
- Attach this inline policy (replace `YOUR_BUCKET_NAME`):

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Effect": "Allow",
      "Action": ["s3:PutObject", "s3:GetObject", "s3:DeleteObject", "s3:ListBucket"],
      "Resource": [
        "arn:aws:s3:::YOUR_BUCKET_NAME",
        "arn:aws:s3:::YOUR_BUCKET_NAME/*"
      ]
    },
    {
      "Effect": "Allow",
      "Action": "cloudfront:CreateInvalidation",
      "Resource": "*"
    }
  ]
}
```

Generate **Access Keys** for this user (Access Key ID + Secret Access Key).

---

### 2. Add GitHub Secrets

Go to your repo → **Settings → Secrets and variables → Actions → New repository secret**:

| Secret name | Value |
|---|---|
| `AWS_ACCESS_KEY_ID` | Your IAM user's access key ID |
| `AWS_SECRET_ACCESS_KEY` | Your IAM user's secret access key |
| `AWS_REGION` | e.g. `ap-south-1` (Mumbai) or `us-east-1` |
| `S3_BUCKET_NAME` | Your bucket name (without `s3://`) |
| `CLOUDFRONT_DISTRIBUTION_ID` | Your distribution ID (leave blank if not using CloudFront) |

---

### 3. Configure your S3 bucket for SPA routing

Because the site uses **React Router** (client-side routing), S3 must redirect all 404s back to `index.html`.

In **S3 → Your Bucket → Properties → Static website hosting**:
- Index document: `index.html`
- **Error document: `index.html`** ← critical for `/checkout`, `/confirm`, etc.

---

### 4. Bucket policy (public read)

In **S3 → Your Bucket → Permissions → Bucket policy**:

```json
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicReadGetObject",
      "Effect": "Allow",
      "Principal": "*",
      "Action": "s3:GetObject",
      "Resource": "arn:aws:s3:::YOUR_BUCKET_NAME/*"
    }
  ]
}
```

---

### 5. Push to deploy

```bash
git push origin main
```

Go to **GitHub → Actions** to watch the deployment live.

---

## Cache strategy

| File | Cache-Control |
|---|---|
| `assets/*.js`, `assets/*.css` | `public, max-age=31536000, immutable` (Vite hashes filenames) |
| `index.html` | `no-cache, no-store, must-revalidate` |
| `sw.js`, `manifest.webmanifest` | `no-cache, no-store, must-revalidate` |
