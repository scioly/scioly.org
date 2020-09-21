# Scioly.org GitHub Repository

## Purpose

This repository currently has two purposes: 1) keeping a page active during server downtime and 2) reporting issues on Scioly.org pages that require server access to resolve.

## Downtime Configuration

During anticipated downtime, replace the original DNS configuration in Namecheap with the DNS configuration to GitHub Pages. After downtime has concluded, do not forget to restore original DNS configuration.

#### Original DNS Configuration

```
A        @        198.211.96.235
```

#### DNS Configuration to GitHub Pages

```
A       @       185.199.108.153
A       @       185.199.109.153
A       @       185.199.110.153
A       @       185.199.111.153
CNAME   www     scioly.github.io
```