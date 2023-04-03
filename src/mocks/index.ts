import nock from 'nock';
import { ListItemType } from '../models';

export const gistResponse: ListItemType[] = [
  {
    "url": "https://api.github.com/gists/09b7e828ffd6e4fd5258cbcf1c5aa462",
    "forks_url": "https://api.github.com/gists/09b7e828ffd6e4fd5258cbcf1c5aa462/forks",
    "commits_url": "https://api.github.com/gists/09b7e828ffd6e4fd5258cbcf1c5aa462/commits",
    "id": "09b7e828ffd6e4fd5258cbcf1c5aa462",
    "node_id": "G_kwDNOm_aACAwOWI3ZTgyOGZmZDZlNGZkNTI1OGNiY2YxYzVhYTQ2Mg",
    "git_pull_url": "https://gist.github.com/09b7e828ffd6e4fd5258cbcf1c5aa462.git",
    "git_push_url": "https://gist.github.com/09b7e828ffd6e4fd5258cbcf1c5aa462.git",
    "html_url": "https://gist.github.com/user/09b7e828ffd6e4fd5258cbcf1c5aa462",
    "files": {
      "steam_quick_queue.user.js": {
        "filename": "steam_quick_queue.user.js",
        "type": "application/javascript",
        "language": "JavaScript",
        "raw_url": "https://gist.githubusercontent.com/user/09b7e828ffd6e4fd5258cbcf1c5aa462/raw/367b9b5a84c260cbe946a45776768eca106a4ed5/steam_quick_queue.user.js",
        "size": 3073
      }
    },
    "public": true,
    "created_at": "2022-12-22T18:40:40Z",
    "updated_at": "2022-12-22T18:40:40Z",
    "description": "⚠ This script has been integrated into SteamDB browser extension!",
    "comments": 0,
    "user": null,
    "comments_url": "https://api.github.com/gists/09b7e828ffd6e4fd5258cbcf1c5aa462/comments",
    "owner": {
      "login": "user",
      "id": 14959,
      "node_id": "MDQ6VXNlcjE0OTU5",
      "avatar_url": "https://avatars.githubusercontent.com/u/14959?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/user",
      "html_url": "https://github.com/user",
      "followers_url": "https://api.github.com/users/user/followers",
      "following_url": "https://api.github.com/users/user/following{/other_user}",
      "gists_url": "https://api.github.com/users/user/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/user/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/user/subscriptions",
      "organizations_url": "https://api.github.com/users/user/orgs",
      "repos_url": "https://api.github.com/users/user/repos",
      "events_url": "https://api.github.com/users/user/events{/privacy}",
      "received_events_url": "https://api.github.com/users/user/received_events",
      "type": "User",
      "site_admin": false
    },
    "truncated": false
  },
  {
    "url": "https://api.github.com/gists/dabd7fd272117512f6b693129abef742",
    "forks_url": "https://api.github.com/gists/dabd7fd272117512f6b693129abef742/forks",
    "commits_url": "https://api.github.com/gists/dabd7fd272117512f6b693129abef742/commits",
    "id": "dabd7fd272117512f6b693129abef742",
    "node_id": "MDQ6R2lzdGRhYmQ3ZmQyNzIxMTc1MTJmNmI2OTMxMjlhYmVmNzQy",
    "git_pull_url": "https://gist.github.com/dabd7fd272117512f6b693129abef742.git",
    "git_push_url": "https://gist.github.com/dabd7fd272117512f6b693129abef742.git",
    "html_url": "https://gist.github.com/user/dabd7fd272117512f6b693129abef742",
    "files": {
      "compton.conf": {
        "filename": "compton.conf",
        "type": "text/plain",
        "language": null,
        "raw_url": "https://gist.githubusercontent.com/user/dabd7fd272117512f6b693129abef742/raw/29a4694c1314ea341c5e8eecabb37963d8d2df48/compton.conf",
        "size": 2576
      }
    },
    "public": true,
    "created_at": "2016-07-04T03:20:46Z",
    "updated_at": "2021-02-25T18:54:38Z",
    "description": "",
    "comments": 2,
    "user": null,
    "comments_url": "https://api.github.com/gists/dabd7fd272117512f6b693129abef742/comments",
    "owner": {
      "login": "user",
      "id": 14959,
      "node_id": "MDQ6VXNlcjE0OTU5",
      "avatar_url": "https://avatars.githubusercontent.com/u/14959?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/user",
      "html_url": "https://github.com/user",
      "followers_url": "https://api.github.com/users/user/followers",
      "following_url": "https://api.github.com/users/user/following{/other_user}",
      "gists_url": "https://api.github.com/users/user/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/user/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/user/subscriptions",
      "organizations_url": "https://api.github.com/users/user/orgs",
      "repos_url": "https://api.github.com/users/user/repos",
      "events_url": "https://api.github.com/users/user/events{/privacy}",
      "received_events_url": "https://api.github.com/users/user/received_events",
      "type": "User",
      "site_admin": false
    },
    "truncated": false
  },
  {
    "url": "https://api.github.com/gists/aa0a4ac1076af2df2ae9",
    "forks_url": "https://api.github.com/gists/aa0a4ac1076af2df2ae9/forks",
    "commits_url": "https://api.github.com/gists/aa0a4ac1076af2df2ae9/commits",
    "id": "aa0a4ac1076af2df2ae9",
    "node_id": "MDQ6R2lzdGFhMGE0YWMxMDc2YWYyZGYyYWU5",
    "git_pull_url": "https://gist.github.com/aa0a4ac1076af2df2ae9.git",
    "git_push_url": "https://gist.github.com/aa0a4ac1076af2df2ae9.git",
    "html_url": "https://gist.github.com/user/aa0a4ac1076af2df2ae9",
    "files": {
      "man.cy": {
        "filename": "man.cy",
        "type": "text/plain",
        "language": "Cycript",
        "raw_url": "https://gist.githubusercontent.com/user/aa0a4ac1076af2df2ae9/raw/0d68a80713edcb09d08be5265ae43a25e7d20c92/man.cy",
        "size": 35365
      }
    },
    "public": true,
    "created_at": "2016-02-21T20:13:02Z",
    "updated_at": "2016-02-21T20:13:02Z",
    "description": "man.cy from malicious Linux Mint iso",
    "comments": 0,
    "user": null,
    "comments_url": "https://api.github.com/gists/aa0a4ac1076af2df2ae9/comments",
    "owner": {
      "login": "user",
      "id": 14959,
      "node_id": "MDQ6VXNlcjE0OTU5",
      "avatar_url": "https://avatars.githubusercontent.com/u/14959?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/user",
      "html_url": "https://github.com/user",
      "followers_url": "https://api.github.com/users/user/followers",
      "following_url": "https://api.github.com/users/user/following{/other_user}",
      "gists_url": "https://api.github.com/users/user/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/user/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/user/subscriptions",
      "organizations_url": "https://api.github.com/users/user/orgs",
      "repos_url": "https://api.github.com/users/user/repos",
      "events_url": "https://api.github.com/users/user/events{/privacy}",
      "received_events_url": "https://api.github.com/users/user/received_events",
      "type": "User",
      "site_admin": false
    },
    "truncated": false
  },
  {
    "url": "https://api.github.com/gists/6d1ba19a1d1f14738e7f",
    "forks_url": "https://api.github.com/gists/6d1ba19a1d1f14738e7f/forks",
    "commits_url": "https://api.github.com/gists/6d1ba19a1d1f14738e7f/commits",
    "id": "6d1ba19a1d1f14738e7f",
    "node_id": "MDQ6R2lzdDZkMWJhMTlhMWQxZjE0NzM4ZTdm",
    "git_pull_url": "https://gist.github.com/6d1ba19a1d1f14738e7f.git",
    "git_push_url": "https://gist.github.com/6d1ba19a1d1f14738e7f.git",
    "html_url": "https://gist.github.com/user/6d1ba19a1d1f14738e7f",
    "files": {
      "tinywm-xcb.c": {
        "filename": "tinywm-xcb.c",
        "type": "text/plain",
        "language": "C",
        "raw_url": "https://gist.githubusercontent.com/user/6d1ba19a1d1f14738e7f/raw/4ad73e09d0751aedeb3575dd2a200bdfff0c678b/tinywm-xcb.c",
        "size": 3660
      }
    },
    "public": true,
    "created_at": "2016-02-20T22:34:41Z",
    "updated_at": "2018-02-23T06:56:45Z",
    "description": "",
    "comments": 0,
    "user": null,
    "comments_url": "https://api.github.com/gists/6d1ba19a1d1f14738e7f/comments",
    "owner": {
      "login": "user",
      "id": 14959,
      "node_id": "MDQ6VXNlcjE0OTU5",
      "avatar_url": "https://avatars.githubusercontent.com/u/14959?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/user",
      "html_url": "https://github.com/user",
      "followers_url": "https://api.github.com/users/user/followers",
      "following_url": "https://api.github.com/users/user/following{/other_user}",
      "gists_url": "https://api.github.com/users/user/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/user/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/user/subscriptions",
      "organizations_url": "https://api.github.com/users/user/orgs",
      "repos_url": "https://api.github.com/users/user/repos",
      "events_url": "https://api.github.com/users/user/events{/privacy}",
      "received_events_url": "https://api.github.com/users/user/received_events",
      "type": "User",
      "site_admin": false
    },
    "truncated": false
  },
  {
    "url": "https://api.github.com/gists/3829d1c5977c8fc18c15",
    "forks_url": "https://api.github.com/gists/3829d1c5977c8fc18c15/forks",
    "commits_url": "https://api.github.com/gists/3829d1c5977c8fc18c15/commits",
    "id": "3829d1c5977c8fc18c15",
    "node_id": "MDQ6R2lzdDM4MjlkMWM1OTc3YzhmYzE4YzE1",
    "git_pull_url": "https://gist.github.com/3829d1c5977c8fc18c15.git",
    "git_push_url": "https://gist.github.com/3829d1c5977c8fc18c15.git",
    "html_url": "https://gist.github.com/user/3829d1c5977c8fc18c15",
    "files": {
      "Pkgfile-chromium": {
        "filename": "Pkgfile-chromium",
        "type": "text/plain",
        "language": null,
        "raw_url": "https://gist.githubusercontent.com/user/3829d1c5977c8fc18c15/raw/b378749090925f1716a80913defd682bb2f2885c/Pkgfile-chromium",
        "size": 3954
      }
    },
    "public": true,
    "created_at": "2015-08-07T11:57:44Z",
    "updated_at": "2018-01-26T12:01:08Z",
    "description": "Pkgfile",
    "comments": 0,
    "user": null,
    "comments_url": "https://api.github.com/gists/3829d1c5977c8fc18c15/comments",
    "owner": {
      "login": "user",
      "id": 14959,
      "node_id": "MDQ6VXNlcjE0OTU5",
      "avatar_url": "https://avatars.githubusercontent.com/u/14959?v=4",
      "gravatar_id": "",
      "url": "https://api.github.com/users/user",
      "html_url": "https://github.com/user",
      "followers_url": "https://api.github.com/users/user/followers",
      "following_url": "https://api.github.com/users/user/following{/other_user}",
      "gists_url": "https://api.github.com/users/user/gists{/gist_id}",
      "starred_url": "https://api.github.com/users/user/starred{/owner}{/repo}",
      "subscriptions_url": "https://api.github.com/users/user/subscriptions",
      "organizations_url": "https://api.github.com/users/user/orgs",
      "repos_url": "https://api.github.com/users/user/repos",
      "events_url": "https://api.github.com/users/user/events{/privacy}",
      "received_events_url": "https://api.github.com/users/user/received_events",
      "type": "User",
      "site_admin": false
    },
    "truncated": false
  },
];

export const gistItemResponse = {
  "url": "https://api.github.com/gists/6d1ba19a1d1f14738e7f",
  "forks_url": "https://api.github.com/gists/6d1ba19a1d1f14738e7f/forks",
  "commits_url": "https://api.github.com/gists/6d1ba19a1d1f14738e7f/commits",
  "id": "6d1ba19a1d1f14738e7f",
  "node_id": "MDQ6R2lzdDZkMWJhMTlhMWQxZjE0NzM4ZTdm",
  "git_pull_url": "https://gist.github.com/6d1ba19a1d1f14738e7f.git",
  "git_push_url": "https://gist.github.com/6d1ba19a1d1f14738e7f.git",
  "html_url": "https://gist.github.com/user/6d1ba19a1d1f14738e7f",
  "public": true,
  "created_at": "2016-02-20T22:34:41Z",
  "updated_at": "2018-02-23T06:56:45Z",
  "description": "",
  "comments": 0,
  "user": null,
  "comments_url": "https://api.github.com/gists/6d1ba19a1d1f14738e7f/comments",
  "owner": {
    "login": "user",
    "id": 14959,
    "node_id": "MDQ6VXNlcjE0OTU5",
    "avatar_url": "https://avatars.githubusercontent.com/u/14959?v=4",
    "gravatar_id": "",
    "url": "https://api.github.com/users/user",
    "html_url": "https://github.com/user",
    "followers_url": "https://api.github.com/users/user/followers",
    "following_url": "https://api.github.com/users/user/following{/other_user}",
    "gists_url": "https://api.github.com/users/user/gists{/gist_id}",
    "starred_url": "https://api.github.com/users/user/starred{/owner}{/repo}",
    "subscriptions_url": "https://api.github.com/users/user/subscriptions",
    "organizations_url": "https://api.github.com/users/user/orgs",
    "repos_url": "https://api.github.com/users/user/repos",
    "events_url": "https://api.github.com/users/user/events{/privacy}",
    "received_events_url": "https://api.github.com/users/user/received_events",
    "type": "User",
    "site_admin": false
  },
  "forks": [],
  "truncated": false
};

export const nockPreset = {
  nockGistsList: (username: string) =>
    nock(process.env.TEST_API_URL!)
      .get(`/users/${username}/gists`)
      .query(() => true)
      .reply(200, { data: gistResponse }),
  nockError: () =>
    nock(process.env.TEST_API_URL!)
      .get('/')
      .reply(500, 'FAILED!')
};
