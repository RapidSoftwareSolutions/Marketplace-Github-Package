
"use strict";

const app     = require('./index');
const assert  = require('chai').assert;
const request = require('supertest-as-promised');
const token   = '';

describe("Github API package", () => {
    
    it("/checkNotificationThreadSubscription", () => {
        return request(app)
        .post("/api/Github/checkNotificationThreadSubscription")
        .send({args:{
            accessToken: token, id: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/checkRepositoryStarring", () => {
        return request(app)
        .post("/api/Github/checkRepositoryStarring")
        .send({args:{
            accessToken: token, user: "String", repo: "String", page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/deleteNotificationThreadSubscription", () => {
        return request(app)
        .post("/api/Github/deleteNotificationThreadSubscription")
        .send({args:{
            accessToken: token, id: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getPublicEvents", () => {
        return request(app)
        .post("/api/Github/getPublicEvents")
        .send({args:{
            accessToken: token, page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getOrganizationEvents", () => {
        return request(app)
        .post("/api/Github/getOrganizationEvents")
        .send({args:{
            accessToken: token, org: "String", page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getRepositoryEvents", () => {
        return request(app)
        .post("/api/Github/getRepositoryEvents")
        .send({args:{
            accessToken: token, user: "String", repo: "String", page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getRepositoryIssuesEvents", () => {
        return request(app)
        .post("/api/Github/getRepositoryIssuesEvents")
        .send({args:{
            accessToken: token, user: "String", repo: "String", page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getRepositoryNetworkEvents", () => {
        return request(app)
        .post("/api/Github/getRepositoryNetworkEvents")
        .send({args:{
            accessToken: token, user: "String", repo: "String", page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getUserPerformedEvents", () => {
        return request(app)
        .post("/api/Github/getUserPerformedEvents")
        .send({args:{
            accessToken: token, user: "String", page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getUserOrganizationEvents", () => {
        return request(app)
        .post("/api/Github/getUserOrganizationEvents")
        .send({args:{
            accessToken: token, user: "String", org: "String", page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getUserPublicPerformedEvents", () => {
        return request(app)
        .post("/api/Github/getUserPublicPerformedEvents")
        .send({args:{
            accessToken: token, user: "String", page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getUserReceivedEvents", () => {
        return request(app)
        .post("/api/Github/getUserReceivedEvents")
        .send({args:{
            accessToken: token, user: "String", page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getUserReceivedPublicEvents", () => {
        return request(app)
        .post("/api/Github/getUserReceivedPublicEvents")
        .send({args:{
            accessToken: token, user: "String", page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getFeeds", () => {
        return request(app)
        .post("/api/Github/getFeeds")
        .send({args:{
            accessToken: token, undefined
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getNotificationThread", () => {
        return request(app)
        .post("/api/Github/getNotificationThread")
        .send({args:{
            accessToken: token, id: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getUserNotifications", () => {
        return request(app)
        .post("/api/Github/getUserNotifications")
        .send({args:{
            accessToken: token, all: "Boolean", participating: "Boolean", since: "Date", before: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getUserRepositoryNotifications", () => {
        return request(app)
        .post("/api/Github/getUserRepositoryNotifications")
        .send({args:{
            accessToken: token, user: "String", repo: "String", all: "Boolean", participating: "Boolean", since: "Date", before: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getRepositorySubscription", () => {
        return request(app)
        .post("/api/Github/getRepositorySubscription")
        .send({args:{
            accessToken: token, user: "String", repo: "String", page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getRepositoryStargazers", () => {
        return request(app)
        .post("/api/Github/getRepositoryStargazers")
        .send({args:{
            accessToken: token, user: "String", repo: "String", page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getStarredRepositories", () => {
        return request(app)
        .post("/api/Github/getStarredRepositories")
        .send({args:{
            accessToken: token, page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getUserStarredRepositories", () => {
        return request(app)
        .post("/api/Github/getUserStarredRepositories")
        .send({args:{
            accessToken: token, user: "String", page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getWatchedRepositories", () => {
        return request(app)
        .post("/api/Github/getWatchedRepositories")
        .send({args:{
            accessToken: token, page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getUserWatchedRepositories", () => {
        return request(app)
        .post("/api/Github/getUserWatchedRepositories")
        .send({args:{
            accessToken: token, user: "String", page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getRepositoryWatchers", () => {
        return request(app)
        .post("/api/Github/getRepositoryWatchers")
        .send({args:{
            accessToken: token, user: "String", repo: "String", page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/markNotificationThreadAsRead", () => {
        return request(app)
        .post("/api/Github/markNotificationThreadAsRead")
        .send({args:{
            accessToken: token, id: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/markNotificationsAsRead", () => {
        return request(app)
        .post("/api/Github/markNotificationsAsRead")
        .send({args:{
            accessToken: token, last_read_at: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/markNotificationsAsReadForRepository", () => {
        return request(app)
        .post("/api/Github/markNotificationsAsReadForRepository")
        .send({args:{
            accessToken: token, last_read_at: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/setNotificationThreadSubscription", () => {
        return request(app)
        .post("/api/Github/setNotificationThreadSubscription")
        .send({args:{
            accessToken: token, id: "String", subscribed: "Boolean", ignored: "Boolean", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/setRepositorySubscription", () => {
        return request(app)
        .post("/api/Github/setRepositorySubscription")
        .send({args:{
            accessToken: token, user: "String", repo: "String", subscribed: "Boolean", ignored: "Boolean", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/starRepository", () => {
        return request(app)
        .post("/api/Github/starRepository")
        .send({args:{
            accessToken: token, user: "String", repo: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/unstarRepository", () => {
        return request(app)
        .post("/api/Github/unstarRepository")
        .send({args:{
            accessToken: token, user: "String", repo: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/unwatchRepository", () => {
        return request(app)
        .post("/api/Github/unwatchRepository")
        .send({args:{
            accessToken: token, user: "String", repo: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/checkAuthorization", () => {
        return request(app)
        .post("/api/Github/checkAuthorization")
        .send({args:{
            accessToken: token, client_id: "String", access_token: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/createAuthorization", () => {
        return request(app)
        .post("/api/Github/createAuthorization")
        .send({args:{
            accessToken: token, scopes: "Array", note: "String", note_url: "String", client_id: "String", client_secret: "String", fingerprint: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/deleteAuthorization", () => {
        return request(app)
        .post("/api/Github/deleteAuthorization")
        .send({args:{
            accessToken: token, id: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/deleteGrantAuthorization", () => {
        return request(app)
        .post("/api/Github/deleteGrantAuthorization")
        .send({args:{
            accessToken: token, id: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getAuthorization", () => {
        return request(app)
        .post("/api/Github/getAuthorization")
        .send({args:{
            accessToken: token, id: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getAllAuthorization", () => {
        return request(app)
        .post("/api/Github/getAllAuthorization")
        .send({args:{
            accessToken: token, page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getGrantAuthorization", () => {
        return request(app)
        .post("/api/Github/getGrantAuthorization")
        .send({args:{
            accessToken: token, id: "String", page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getGrantsAuthorization", () => {
        return request(app)
        .post("/api/Github/getGrantsAuthorization")
        .send({args:{
            accessToken: token, page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getOrCreateAuthorizationForAppAuthorization", () => {
        return request(app)
        .post("/api/Github/getOrCreateAuthorizationForAppAuthorization")
        .send({args:{
            accessToken: token, client_id: "String", client_secret: "String", scopes: "Array", note: "String", note_url: "String", fingerprint: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getOrCreateAuthorizationForAppAndFingerprintAuthorization", () => {
        return request(app)
        .post("/api/Github/getOrCreateAuthorizationForAppAndFingerprintAuthorization")
        .send({args:{
            accessToken: token, client_id: "String", fingerprint: "String", client_secret: "String", scopes: "Array", note: "String", note_url: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/resetAuthorization", () => {
        return request(app)
        .post("/api/Github/resetAuthorization")
        .send({args:{
            accessToken: token, client_id: "String", access_token: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/revokeAuthorization", () => {
        return request(app)
        .post("/api/Github/revokeAuthorization")
        .send({args:{
            accessToken: token, client_id: "String", access_token: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/updateAuthorization", () => {
        return request(app)
        .post("/api/Github/updateAuthorization")
        .send({args:{
            accessToken: token, id: "String", scopes: "Array", add_scopes: "Array", remove_scopes: "Array", note: "String", note_url: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/createOrganizationEnterprise", () => {
        return request(app)
        .post("/api/Github/createOrganizationEnterprise")
        .send({args:{
            accessToken: token, login: "String", admin: "String", profile_name: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getLicenseEnterprise", () => {
        return request(app)
        .post("/api/Github/getLicenseEnterprise")
        .send({args:{
            accessToken: token, undefined
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/queueIndexingJobEnterprise", () => {
        return request(app)
        .post("/api/Github/queueIndexingJobEnterprise")
        .send({args:{
            accessToken: token, target: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/statsEnterprise", () => {
        return request(app)
        .post("/api/Github/statsEnterprise")
        .send({args:{
            accessToken: token, type: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/syncLdapForTeamEnterprise", () => {
        return request(app)
        .post("/api/Github/syncLdapForTeamEnterprise")
        .send({args:{
            accessToken: token, team_id: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/syncLdapForUserEnterprise", () => {
        return request(app)
        .post("/api/Github/syncLdapForUserEnterprise")
        .send({args:{
            accessToken: token, user: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/updateLdapForTeamEnterprise", () => {
        return request(app)
        .post("/api/Github/updateLdapForTeamEnterprise")
        .send({args:{
            accessToken: token, team_id: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/updateLdapForUserEnterprise", () => {
        return request(app)
        .post("/api/Github/updateLdapForUserEnterprise")
        .send({args:{
            accessToken: token, user: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/checkGistStar", () => {
        return request(app)
        .post("/api/Github/checkGistStar")
        .send({args:{
            accessToken: token, id: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/createGist", () => {
        return request(app)
        .post("/api/Github/createGist")
        .send({args:{
            accessToken: token, files: "Json", description: "String", public: "Boolean", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/createGistComment", () => {
        return request(app)
        .post("/api/Github/createGistComment")
        .send({args:{
            accessToken: token, gist_id: "String", body: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/deleteGist", () => {
        return request(app)
        .post("/api/Github/deleteGist")
        .send({args:{
            accessToken: token, id: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/deleteGistComment", () => {
        return request(app)
        .post("/api/Github/deleteGistComment")
        .send({args:{
            accessToken: token, gist_id: "String", id: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/editGist", () => {
        return request(app)
        .post("/api/Github/editGist")
        .send({args:{
            accessToken: token, id: "String", description: "String", files: "Json", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/updateGistComment", () => {
        return request(app)
        .post("/api/Github/updateGistComment")
        .send({args:{
            accessToken: token, gist_id: "String", id: "String", body: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/forkGist", () => {
        return request(app)
        .post("/api/Github/forkGist")
        .send({args:{
            accessToken: token, id: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getGist", () => {
        return request(app)
        .post("/api/Github/getGist")
        .send({args:{
            accessToken: token, id: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getAllGists", () => {
        return request(app)
        .post("/api/Github/getAllGists")
        .send({args:{
            accessToken: token, page: "Number", per_page: "Number", since: "Date", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getGistComment", () => {
        return request(app)
        .post("/api/Github/getGistComment")
        .send({args:{
            accessToken: token, gist_id: "String", id: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getGistComments", () => {
        return request(app)
        .post("/api/Github/getGistComments")
        .send({args:{
            accessToken: token, gist_id: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getGistCommits", () => {
        return request(app)
        .post("/api/Github/getGistCommits")
        .send({args:{
            accessToken: token, id: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getUserGists", () => {
        return request(app)
        .post("/api/Github/getUserGists")
        .send({args:{
            accessToken: token, user: "String", page: "Number", per_page: "Number", since: "Date", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getGistForks", () => {
        return request(app)
        .post("/api/Github/getGistForks")
        .send({args:{
            accessToken: token, id: "String", page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getPublicGists", () => {
        return request(app)
        .post("/api/Github/getPublicGists")
        .send({args:{
            accessToken: token, since: "Date", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getGistByRevision", () => {
        return request(app)
        .post("/api/Github/getGistByRevision")
        .send({args:{
            accessToken: token, id: "String", sha: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getStarredGists", () => {
        return request(app)
        .post("/api/Github/getStarredGists")
        .send({args:{
            accessToken: token, since: "Date", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/starGist", () => {
        return request(app)
        .post("/api/Github/starGist")
        .send({args:{
            accessToken: token, id: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/unstarGist", () => {
        return request(app)
        .post("/api/Github/unstarGist")
        .send({args:{
            accessToken: token, id: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/createBlob", () => {
        return request(app)
        .post("/api/Github/createBlob")
        .send({args:{
            accessToken: token, user: "String", repo: "String", content: "String", encoding: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/createCommit", () => {
        return request(app)
        .post("/api/Github/createCommit")
        .send({args:{
            accessToken: token, user: "String", repo: "String", message: "String", tree: "String", parents: "Array", author: "Json", committer: "Json", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/createReference", () => {
        return request(app)
        .post("/api/Github/createReference")
        .send({args:{
            accessToken: token, user: "String", repo: "String", ref: "String", sha: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/createTag", () => {
        return request(app)
        .post("/api/Github/createTag")
        .send({args:{
            accessToken: token, user: "String", repo: "String", tag: "String", message: "String", object: "String", type: "String", tagger: "Json", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/createTree", () => {
        return request(app)
        .post("/api/Github/createTree")
        .send({args:{
            accessToken: token, user: "String", repo: "String", tree: "Json", base_tree: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/deleteReference", () => {
        return request(app)
        .post("/api/Github/deleteReference")
        .send({args:{
            accessToken: token, user: "String", repo: "String", ref: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getBlob", () => {
        return request(app)
        .post("/api/Github/getBlob")
        .send({args:{
            accessToken: token, user: "String", repo: "String", sha: "String", page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getCommit", () => {
        return request(app)
        .post("/api/Github/getCommit")
        .send({args:{
            accessToken: token, user: "String", repo: "String", sha: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getCommitSignatureVerification", () => {
        return request(app)
        .post("/api/Github/getCommitSignatureVerification")
        .send({args:{
            accessToken: token, user: "String", repo: "String", sha: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getReference", () => {
        return request(app)
        .post("/api/Github/getReference")
        .send({args:{
            accessToken: token, user: "String", repo: "String", ref: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getReferences", () => {
        return request(app)
        .post("/api/Github/getReferences")
        .send({args:{
            accessToken: token, user: "String", repo: "String", page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getTag", () => {
        return request(app)
        .post("/api/Github/getTag")
        .send({args:{
            accessToken: token, user: "String", repo: "String", sha: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getTagSignatureVerification", () => {
        return request(app)
        .post("/api/Github/getTagSignatureVerification")
        .send({args:{
            accessToken: token, user: "String", repo: "String", sha: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getTags", () => {
        return request(app)
        .post("/api/Github/getTags")
        .send({args:{
            accessToken: token, user: "String", repo: "String", page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getTree", () => {
        return request(app)
        .post("/api/Github/getTree")
        .send({args:{
            accessToken: token, user: "String", repo: "String", sha: "String", recursive: "Boolean", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/updateReference", () => {
        return request(app)
        .post("/api/Github/updateReference")
        .send({args:{
            accessToken: token, user: "String", repo: "String", ref: "String", sha: "String", force: "Boolean", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/createInstallation", () => {
        return request(app)
        .post("/api/Github/createInstallation")
        .send({args:{
            accessToken: token, installation_id: "Number", user_id: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/addAssigneesToIssue", () => {
        return request(app)
        .post("/api/Github/addAssigneesToIssue")
        .send({args:{
            accessToken: token, user: "String", repo: "String", number: "Number", assignees: "Array", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/addIssueLabels", () => {
        return request(app)
        .post("/api/Github/addIssueLabels")
        .send({args:{
            accessToken: token, user: "String", repo: "String", number: "Number", body: "Array", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/checkAssignee", () => {
        return request(app)
        .post("/api/Github/checkAssignee")
        .send({args:{
            accessToken: token, user: "String", repo: "String", assignee: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/createIssue", () => {
        return request(app)
        .post("/api/Github/createIssue")
        .send({args:{
            accessToken: token, user: "String", repo: "String", title: "String", body: "String", assignee: "String", milestone: "Number", labels: "Json", assignees: "Array", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/createIssueComment", () => {
        return request(app)
        .post("/api/Github/createIssueComment")
        .send({args:{
            accessToken: token, user: "String", repo: "String", number: "Number", body: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/createLabel", () => {
        return request(app)
        .post("/api/Github/createLabel")
        .send({args:{
            accessToken: token, user: "String", repo: "String", name: "String", color: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/createMilestone", () => {
        return request(app)
        .post("/api/Github/createMilestone")
        .send({args:{
            accessToken: token, user: "String", repo: "String", title: "String", state: "String", description: "String", due_on: "Date", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/deleteIssueComment", () => {
        return request(app)
        .post("/api/Github/deleteIssueComment")
        .send({args:{
            accessToken: token, user: "String", repo: "String", id: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/deleteLabel", () => {
        return request(app)
        .post("/api/Github/deleteLabel")
        .send({args:{
            accessToken: token, user: "String", repo: "String", name: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/deleteMilestone", () => {
        return request(app)
        .post("/api/Github/deleteMilestone")
        .send({args:{
            accessToken: token, user: "String", repo: "String", number: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/updateIssue", () => {
        return request(app)
        .post("/api/Github/updateIssue")
        .send({args:{
            accessToken: token, user: "String", repo: "String", number: "Number", title: "String", body: "String", assignee: "String", state: "String", milestone: "Number", labels: "Json", assignees: "Array", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/updateIssueComment", () => {
        return request(app)
        .post("/api/Github/updateIssueComment")
        .send({args:{
            accessToken: token, user: "String", repo: "String", id: "String", body: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getIssue", () => {
        return request(app)
        .post("/api/Github/getIssue")
        .send({args:{
            accessToken: token, user: "String", repo: "String", number: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getAllIssues", () => {
        return request(app)
        .post("/api/Github/getAllIssues")
        .send({args:{
            accessToken: token, filter: "String", state: "String", labels: "String", sort: "String", direction: "String", since: "Date", page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getAssignees", () => {
        return request(app)
        .post("/api/Github/getAssignees")
        .send({args:{
            accessToken: token, user: "String", repo: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getIssueComment", () => {
        return request(app)
        .post("/api/Github/getIssueComment")
        .send({args:{
            accessToken: token, user: "String", repo: "String", id: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getIssueComments", () => {
        return request(app)
        .post("/api/Github/getIssueComments")
        .send({args:{
            accessToken: token, user: "String", repo: "String", number: "Number", page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getIssuesCommentsForRepository", () => {
        return request(app)
        .post("/api/Github/getIssuesCommentsForRepository")
        .send({args:{
            accessToken: token, user: "String", repo: "String", sort: "String", direction: "String", since: "Date", page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getIssueEvent", () => {
        return request(app)
        .post("/api/Github/getIssueEvent")
        .send({args:{
            accessToken: token, user: "String", repo: "String", id: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getIssueEvents", () => {
        return request(app)
        .post("/api/Github/getIssueEvents")
        .send({args:{
            accessToken: token, user: "String", repo: "String", number: "Number", page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getIssueEventsForRepository", () => {
        return request(app)
        .post("/api/Github/getIssueEventsForRepository")
        .send({args:{
            accessToken: token, user: "String", repo: "String", page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getIssueEventsTimeline", () => {
        return request(app)
        .post("/api/Github/getIssueEventsTimeline")
        .send({args:{
            accessToken: token, user: "String", repo: "String", number: "Number", page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getIssuesForOrganization", () => {
        return request(app)
        .post("/api/Github/getIssuesForOrganization")
        .send({args:{
            accessToken: token, org: "String", filter: "String", state: "String", labels: "String", sort: "String", direction: "String", since: "Date", page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getIssuesForRepository", () => {
        return request(app)
        .post("/api/Github/getIssuesForRepository")
        .send({args:{
            accessToken: token, user: "String", repo: "String", milestone: "String", state: "String", assignee: "String", creator: "String", mentioned: "String", labels: "String", sort: "String", direction: "String", since: "Date", page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getUserIssues", () => {
        return request(app)
        .post("/api/Github/getUserIssues")
        .send({args:{
            accessToken: token, filter: "String", state: "String", labels: "String", sort: "String", direction: "String", since: "Date", page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getIssueLabels", () => {
        return request(app)
        .post("/api/Github/getIssueLabels")
        .send({args:{
            accessToken: token, user: "String", repo: "String", number: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getLabel", () => {
        return request(app)
        .post("/api/Github/getLabel")
        .send({args:{
            accessToken: token, user: "String", repo: "String", name: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getRepositoryLabels", () => {
        return request(app)
        .post("/api/Github/getRepositoryLabels")
        .send({args:{
            accessToken: token, user: "String", repo: "String", page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getMilestone", () => {
        return request(app)
        .post("/api/Github/getMilestone")
        .send({args:{
            accessToken: token, user: "String", repo: "String", number: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getMilestoneLabels", () => {
        return request(app)
        .post("/api/Github/getMilestoneLabels")
        .send({args:{
            accessToken: token, user: "String", repo: "String", number: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getRepositoryMilestones", () => {
        return request(app)
        .post("/api/Github/getRepositoryMilestones")
        .send({args:{
            accessToken: token, user: "String", repo: "String", state: "String", sort: "String", direction: "String", page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/lockIssue", () => {
        return request(app)
        .post("/api/Github/lockIssue")
        .send({args:{
            accessToken: token, user: "String", repo: "String", number: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/removeIssueAllLabels", () => {
        return request(app)
        .post("/api/Github/removeIssueAllLabels")
        .send({args:{
            accessToken: token, user: "String", repo: "String", number: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/removeAssigneesFromIssue", () => {
        return request(app)
        .post("/api/Github/removeAssigneesFromIssue")
        .send({args:{
            accessToken: token, user: "String", repo: "String", number: "Number", assignees: "Array", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/removeIssueLabel", () => {
        return request(app)
        .post("/api/Github/removeIssueLabel")
        .send({args:{
            accessToken: token, user: "String", repo: "String", number: "Number", name: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/replaceAllIssueLabels", () => {
        return request(app)
        .post("/api/Github/replaceAllIssueLabels")
        .send({args:{
            accessToken: token, user: "String", repo: "String", number: "Number", body: "Array", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/unlockIssue", () => {
        return request(app)
        .post("/api/Github/unlockIssue")
        .send({args:{
            accessToken: token, user: "String", repo: "String", number: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/updateLabel", () => {
        return request(app)
        .post("/api/Github/updateLabel")
        .send({args:{
            accessToken: token, user: "String", repo: "String", oldname: "String", name: "String", color: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/updateMilestone", () => {
        return request(app)
        .post("/api/Github/updateMilestone")
        .send({args:{
            accessToken: token, user: "String", repo: "String", number: "Number", title: "String", state: "String", description: "String", due_on: "Date", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/cancelImport", () => {
        return request(app)
        .post("/api/Github/cancelImport")
        .send({args:{
            accessToken: token, user: "String", repo: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/deleteMigrationArchive", () => {
        return request(app)
        .post("/api/Github/deleteMigrationArchive")
        .send({args:{
            accessToken: token, org: "String", id: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getImportCommitAuthors", () => {
        return request(app)
        .post("/api/Github/getImportCommitAuthors")
        .send({args:{
            accessToken: token, user: "String", repo: "String", since: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getImportProgress", () => {
        return request(app)
        .post("/api/Github/getImportProgress")
        .send({args:{
            accessToken: token, user: "String", repo: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getLargeImportFiles", () => {
        return request(app)
        .post("/api/Github/getLargeImportFiles")
        .send({args:{
            accessToken: token, user: "String", name: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getMigrationArchiveLink", () => {
        return request(app)
        .post("/api/Github/getMigrationArchiveLink")
        .send({args:{
            accessToken: token, org: "String", id: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getMigrationStatus", () => {
        return request(app)
        .post("/api/Github/getMigrationStatus")
        .send({args:{
            accessToken: token, org: "String", id: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getMigrations", () => {
        return request(app)
        .post("/api/Github/getMigrations")
        .send({args:{
            accessToken: token, org: "String", page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/mapImportCommitAuthor", () => {
        return request(app)
        .post("/api/Github/mapImportCommitAuthor")
        .send({args:{
            accessToken: token, user: "String", repo: "String", author_id: "String", email: "String", name: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/setImportLfsPreference", () => {
        return request(app)
        .post("/api/Github/setImportLfsPreference")
        .send({args:{
            accessToken: token, user: "String", name: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/startImport", () => {
        return request(app)
        .post("/api/Github/startImport")
        .send({args:{
            accessToken: token, user: "String", repo: "String", vcs_url: "String", vcs: "String", vcs_username: "String", vcs_password: "String", tfvc_project: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/startMigration", () => {
        return request(app)
        .post("/api/Github/startMigration")
        .send({args:{
            accessToken: token, org: "String", repositories: "Array", lock_repositories: "Boolean", exclude_attachments: "Boolean", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/unlockRepositoryLockedForMigration", () => {
        return request(app)
        .post("/api/Github/unlockRepositoryLockedForMigration")
        .send({args:{
            accessToken: token, org: "String", id: "String", repo: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/updateImport", () => {
        return request(app)
        .post("/api/Github/updateImport")
        .send({args:{
            accessToken: token, user: "String", repo: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getEmojis", () => {
        return request(app)
        .post("/api/Github/getEmojis")
        .send({args:{
            accessToken: token, undefined
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getGitignoreTemplate", () => {
        return request(app)
        .post("/api/Github/getGitignoreTemplate")
        .send({args:{
            accessToken: token, name: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getGitignoreTemplates", () => {
        return request(app)
        .post("/api/Github/getGitignoreTemplates")
        .send({args:{
            accessToken: token, undefined
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getLicense", () => {
        return request(app)
        .post("/api/Github/getLicense")
        .send({args:{
            accessToken: token, license: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getLicenses", () => {
        return request(app)
        .post("/api/Github/getLicenses")
        .send({args:{
            accessToken: token, undefined
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getMeta", () => {
        return request(app)
        .post("/api/Github/getMeta")
        .send({args:{
            accessToken: token, undefined
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getRateLimit", () => {
        return request(app)
        .post("/api/Github/getRateLimit")
        .send({args:{
            accessToken: token, undefined
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getRepoLicenseMisc", () => {
        return request(app)
        .post("/api/Github/getRepoLicenseMisc")
        .send({args:{
            accessToken: token, user: "String", repo: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/renderMarkdown", () => {
        return request(app)
        .post("/api/Github/renderMarkdown")
        .send({args:{
            accessToken: token, text: "String", mode: "String", context: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/renderMarkdownRaw", () => {
        return request(app)
        .post("/api/Github/renderMarkdownRaw")
        .send({args:{
            accessToken: token, data: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/addOrganizationMembership", () => {
        return request(app)
        .post("/api/Github/addOrganizationMembership")
        .send({args:{
            accessToken: token, org: "String", user: "String", role: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/addOrganizationTeamMembership", () => {
        return request(app)
        .post("/api/Github/addOrganizationTeamMembership")
        .send({args:{
            accessToken: token, id: "String", user: "String", role: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/addOrganizationTeamRepository", () => {
        return request(app)
        .post("/api/Github/addOrganizationTeamRepository")
        .send({args:{
            accessToken: token, id: "String", org: "String", repo: "String", permission: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/checkOrganizationMembership", () => {
        return request(app)
        .post("/api/Github/checkOrganizationMembership")
        .send({args:{
            accessToken: token, org: "String", user: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/checkOrganizationPublicMembership", () => {
        return request(app)
        .post("/api/Github/checkOrganizationPublicMembership")
        .send({args:{
            accessToken: token, org: "String", user: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/checkOrganizationTeamRepository", () => {
        return request(app)
        .post("/api/Github/checkOrganizationTeamRepository")
        .send({args:{
            accessToken: token, id: "String", user: "String", repo: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/cancelOrganizationMembership", () => {
        return request(app)
        .post("/api/Github/cancelOrganizationMembership")
        .send({args:{
            accessToken: token, org: "String", user: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/createOrganizationHook", () => {
        return request(app)
        .post("/api/Github/createOrganizationHook")
        .send({args:{
            accessToken: token, org: "String", name: "String", config: "Json", events: "Array", active: "Boolean", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/createOrganizationTeam", () => {
        return request(app)
        .post("/api/Github/createOrganizationTeam")
        .send({args:{
            accessToken: token, org: "String", name: "String", description: "String", repo_names: "Array", privacy: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/deleteOrganizationHook", () => {
        return request(app)
        .post("/api/Github/deleteOrganizationHook")
        .send({args:{
            accessToken: token, org: "String", id: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/deleteOrganizationTeam", () => {
        return request(app)
        .post("/api/Github/deleteOrganizationTeam")
        .send({args:{
            accessToken: token, id: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/deleteOrganizationTeamRepository", () => {
        return request(app)
        .post("/api/Github/deleteOrganizationTeamRepository")
        .send({args:{
            accessToken: token, id: "String", user: "String", repo: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/editOrganizationHook", () => {
        return request(app)
        .post("/api/Github/editOrganizationHook")
        .send({args:{
            accessToken: token, org: "String", id: "String", config: "Json", events: "Array", active: "Boolean", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/editOrganizationTeam", () => {
        return request(app)
        .post("/api/Github/editOrganizationTeam")
        .send({args:{
            accessToken: token, id: "String", name: "String", description: "String", privacy: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getOrganization", () => {
        return request(app)
        .post("/api/Github/getOrganization")
        .send({args:{
            accessToken: token, org: "String", page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getAllOrganizations", () => {
        return request(app)
        .post("/api/Github/getAllOrganizations")
        .send({args:{
            accessToken: token, since: "String", page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getUserOrganizations", () => {
        return request(app)
        .post("/api/Github/getUserOrganizations")
        .send({args:{
            accessToken: token, user: "String", page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getOrganizationHook", () => {
        return request(app)
        .post("/api/Github/getOrganizationHook")
        .send({args:{
            accessToken: token, org: "String", id: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getOrganizationHooks", () => {
        return request(app)
        .post("/api/Github/getOrganizationHooks")
        .send({args:{
            accessToken: token, org: "String", page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getOrganizationMembers", () => {
        return request(app)
        .post("/api/Github/getOrganizationMembers")
        .send({args:{
            accessToken: token, org: "String", filter: "String", role: "String", page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getOrganizationMembership", () => {
        return request(app)
        .post("/api/Github/getOrganizationMembership")
        .send({args:{
            accessToken: token, org: "String", user: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getOrganizationMemberships", () => {
        return request(app)
        .post("/api/Github/getOrganizationMemberships")
        .send({args:{
            accessToken: token, state: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getOrganizationPublicMembers", () => {
        return request(app)
        .post("/api/Github/getOrganizationPublicMembers")
        .send({args:{
            accessToken: token, org: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getOrganizationTeam", () => {
        return request(app)
        .post("/api/Github/getOrganizationTeam")
        .send({args:{
            accessToken: token, id: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getOrganizationTeamMembers", () => {
        return request(app)
        .post("/api/Github/getOrganizationTeamMembers")
        .send({args:{
            accessToken: token, id: "String", role: "String", page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getOrganizationTeamMembership", () => {
        return request(app)
        .post("/api/Github/getOrganizationTeamMembership")
        .send({args:{
            accessToken: token, id: "String", user: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getOrganizationTeamRepositories", () => {
        return request(app)
        .post("/api/Github/getOrganizationTeamRepositories")
        .send({args:{
            accessToken: token, id: "String", page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getOrganizationTeams", () => {
        return request(app)
        .post("/api/Github/getOrganizationTeams")
        .send({args:{
            accessToken: token, org: "String", page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/pingOrganizationHook", () => {
        return request(app)
        .post("/api/Github/pingOrganizationHook")
        .send({args:{
            accessToken: token, org: "String", id: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/publicizeOrganizationMembership", () => {
        return request(app)
        .post("/api/Github/publicizeOrganizationMembership")
        .send({args:{
            accessToken: token, org: "String", user: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/removeOrganizationMember", () => {
        return request(app)
        .post("/api/Github/removeOrganizationMember")
        .send({args:{
            accessToken: token, org: "String", user: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/removeOrganizationMembership", () => {
        return request(app)
        .post("/api/Github/removeOrganizationMembership")
        .send({args:{
            accessToken: token, org: "String", user: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/removeOrganizationTeamMembership", () => {
        return request(app)
        .post("/api/Github/removeOrganizationTeamMembership")
        .send({args:{
            accessToken: token, id: "String", user: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/updateOrganization", () => {
        return request(app)
        .post("/api/Github/updateOrganization")
        .send({args:{
            accessToken: token, org: "String", billing_email: "String", company: "String", email: "String", location: "String", name: "String", description: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/checkMergedPullRequest", () => {
        return request(app)
        .post("/api/Github/checkMergedPullRequest")
        .send({args:{
            accessToken: token, user: "String", repo: "String", number: "Number", page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/createPullRequest", () => {
        return request(app)
        .post("/api/Github/createPullRequest")
        .send({args:{
            accessToken: token, user: "String", repo: "String", title: "String", head: "String", base: "String", body: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/createPullRequestComment", () => {
        return request(app)
        .post("/api/Github/createPullRequestComment")
        .send({args:{
            accessToken: token, user: "String", repo: "String", number: "Number", body: "String", commit_id: "String", path: "String", position: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/createPullRequestCommentReply", () => {
        return request(app)
        .post("/api/Github/createPullRequestCommentReply")
        .send({args:{
            accessToken: token, user: "String", repo: "String", number: "Number", body: "String", in_reply_to: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/createPullRequestFromIssue", () => {
        return request(app)
        .post("/api/Github/createPullRequestFromIssue")
        .send({args:{
            accessToken: token, user: "String", repo: "String", issue: "Number", head: "String", base: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/deletePullRequestComment", () => {
        return request(app)
        .post("/api/Github/deletePullRequestComment")
        .send({args:{
            accessToken: token, user: "String", repo: "String", number: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/editPullRequestComment", () => {
        return request(app)
        .post("/api/Github/editPullRequestComment")
        .send({args:{
            accessToken: token, user: "String", repo: "String", number: "Number", body: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getPullRequest", () => {
        return request(app)
        .post("/api/Github/getPullRequest")
        .send({args:{
            accessToken: token, user: "String", repo: "String", number: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getAllPullRequests", () => {
        return request(app)
        .post("/api/Github/getAllPullRequests")
        .send({args:{
            accessToken: token, user: "String", repo: "String", state: "String", head: "String", base: "String", sort: "String", direction: "String", page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getPullRequestComment", () => {
        return request(app)
        .post("/api/Github/getPullRequestComment")
        .send({args:{
            accessToken: token, user: "String", repo: "String", number: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getPullRequestComments", () => {
        return request(app)
        .post("/api/Github/getPullRequestComments")
        .send({args:{
            accessToken: token, user: "String", repo: "String", number: "Number", page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getPullRequestCommentsForRepository", () => {
        return request(app)
        .post("/api/Github/getPullRequestCommentsForRepository")
        .send({args:{
            accessToken: token, user: "String", repo: "String", sort: "String", direction: "String", since: "Date", page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getPullRequestCommits", () => {
        return request(app)
        .post("/api/Github/getPullRequestCommits")
        .send({args:{
            accessToken: token, user: "String", repo: "String", number: "Number", page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getPullRequestFiles", () => {
        return request(app)
        .post("/api/Github/getPullRequestFiles")
        .send({args:{
            accessToken: token, user: "String", repo: "String", number: "Number", page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/mergePullRequest", () => {
        return request(app)
        .post("/api/Github/mergePullRequest")
        .send({args:{
            accessToken: token, user: "String", repo: "String", number: "Number", commit_title: "String", commit_message: "String", sha: "String", merge_method: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/updatePullRequest", () => {
        return request(app)
        .post("/api/Github/updatePullRequest")
        .send({args:{
            accessToken: token, user: "String", repo: "String", number: "Number", title: "String", body: "String", state: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/createReactionForCommitComment", () => {
        return request(app)
        .post("/api/Github/createReactionForCommitComment")
        .send({args:{
            accessToken: token, user: "String", repo: "String", id: "String", content: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/createReactionForIssue", () => {
        return request(app)
        .post("/api/Github/createReactionForIssue")
        .send({args:{
            accessToken: token, user: "String", repo: "String", number: "Number", content: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/createReactionForIssueComment", () => {
        return request(app)
        .post("/api/Github/createReactionForIssueComment")
        .send({args:{
            accessToken: token, user: "String", repo: "String", id: "String", content: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/createReactionForPullRequestReviewComment", () => {
        return request(app)
        .post("/api/Github/createReactionForPullRequestReviewComment")
        .send({args:{
            accessToken: token, user: "String", repo: "String", id: "String", content: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/deleteReaction", () => {
        return request(app)
        .post("/api/Github/deleteReaction")
        .send({args:{
            accessToken: token, id: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getReactionForCommitComment", () => {
        return request(app)
        .post("/api/Github/getReactionForCommitComment")
        .send({args:{
            accessToken: token, user: "String", repo: "String", id: "String", content: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getReactionForIssue", () => {
        return request(app)
        .post("/api/Github/getReactionForIssue")
        .send({args:{
            accessToken: token, user: "String", repo: "String", number: "Number", content: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getReactionForIssueComment", () => {
        return request(app)
        .post("/api/Github/getReactionForIssueComment")
        .send({args:{
            accessToken: token, user: "String", repo: "String", id: "String", content: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getReactionForPullRequestReviewComment", () => {
        return request(app)
        .post("/api/Github/getReactionForPullRequestReviewComment")
        .send({args:{
            accessToken: token, user: "String", repo: "String", id: "String", content: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/addRepositoryCollaborator", () => {
        return request(app)
        .post("/api/Github/addRepositoryCollaborator")
        .send({args:{
            accessToken: token, user: "String", repo: "String", collabuser: "String", permission: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/addProtectedBranchRequiredStatusChecksContexts", () => {
        return request(app)
        .post("/api/Github/addProtectedBranchRequiredStatusChecksContexts")
        .send({args:{
            accessToken: token, user: "String", repo: "String", branch: "String", body: "Array", page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/addProtectedBranchTeamRestrictions", () => {
        return request(app)
        .post("/api/Github/addProtectedBranchTeamRestrictions")
        .send({args:{
            accessToken: token, user: "String", repo: "String", branch: "String", body: "Array", page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/addProtectedBranchUserRestrictions", () => {
        return request(app)
        .post("/api/Github/addProtectedBranchUserRestrictions")
        .send({args:{
            accessToken: token, user: "String", repo: "String", branch: "String", body: "Array", page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/checkRepositoryCollaborator", () => {
        return request(app)
        .post("/api/Github/checkRepositoryCollaborator")
        .send({args:{
            accessToken: token, user: "String", repo: "String", collabuser: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/compareRepositoryCommits", () => {
        return request(app)
        .post("/api/Github/compareRepositoryCommits")
        .send({args:{
            accessToken: token, user: "String", repo: "String", base: "String", head: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/createRepository", () => {
        return request(app)
        .post("/api/Github/createRepository")
        .send({args:{
            accessToken: token, name: "String", description: "String", homepage: "String", private: "Boolean", has_issues: "Boolean", has_wiki: "Boolean", has_downloads: "Boolean", auto_init: "Boolean", gitignore_template: "String", license_template: "String", allow_squash_merge: "Boolean", allow_merge_commit: "Boolean", allow_rebase_merge: "Boolean", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/createRepositoryCommitComment", () => {
        return request(app)
        .post("/api/Github/createRepositoryCommitComment")
        .send({args:{
            accessToken: token, user: "String", repo: "String", sha: "String", body: "String", path: "String", position: "Number", line: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/createRepositoryDeployment", () => {
        return request(app)
        .post("/api/Github/createRepositoryDeployment")
        .send({args:{
            accessToken: token, user: "String", repo: "String", ref: "String", task: "String", auto_merge: "Boolean", required_contexts: "Array", payload: "String", environment: "String", description: "String", transient_environment: "Boolean", production_environment: "Boolean", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/createRepositoryDeploymentStatus", () => {
        return request(app)
        .post("/api/Github/createRepositoryDeploymentStatus")
        .send({args:{
            accessToken: token, user: "String", repo: "String", id: "String", state: "String", target_url: "String", log_url: "String", description: "String", environment_url: "String", auto_inactive: "Boolean", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/createRepositoryFile", () => {
        return request(app)
        .post("/api/Github/createRepositoryFile")
        .send({args:{
            accessToken: token, user: "String", repo: "String", path: "String", message: "String", content: "String", branch: "String", committer: "Json", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/createRepositoryForOrganization", () => {
        return request(app)
        .post("/api/Github/createRepositoryForOrganization")
        .send({args:{
            accessToken: token, org: "String", name: "String", description: "String", homepage: "String", private: "Boolean", has_issues: "Boolean", has_wiki: "Boolean", has_downloads: "Boolean", team_id: "Number", auto_init: "Boolean", gitignore_template: "String", license_template: "String", allow_squash_merge: "Boolean", allow_merge_commit: "Boolean", allow_rebase_merge: "Boolean", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/createRepositoryHook", () => {
        return request(app)
        .post("/api/Github/createRepositoryHook")
        .send({args:{
            accessToken: token, user: "String", repo: "String", name: "String", config: "Json", events: "Array", active: "Boolean", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/createRepositoryKey", () => {
        return request(app)
        .post("/api/Github/createRepositoryKey")
        .send({args:{
            accessToken: token, user: "String", repo: "String", title: "String", key: "String", read_only: "Boolean", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/createRepositoryProject", () => {
        return request(app)
        .post("/api/Github/createRepositoryProject")
        .send({args:{
            accessToken: token, user: "String", repo: "String", name: "String", body: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/createRepositoryProjectCard", () => {
        return request(app)
        .post("/api/Github/createRepositoryProjectCard")
        .send({args:{
            accessToken: token, user: "String", repo: "String", id: "String", note: "String", content_id: "String", content_type: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/createRepositoryProjectColumn", () => {
        return request(app)
        .post("/api/Github/createRepositoryProjectColumn")
        .send({args:{
            accessToken: token, user: "String", repo: "String", number: "Number", name: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/createRepositoryRelease", () => {
        return request(app)
        .post("/api/Github/createRepositoryRelease")
        .send({args:{
            accessToken: token, user: "String", repo: "String", tag_name: "String", target_commitish: "String", name: "String", body: "String", draft: "Boolean", prerelease: "Boolean", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/createRepositoryStatus", () => {
        return request(app)
        .post("/api/Github/createRepositoryStatus")
        .send({args:{
            accessToken: token, user: "String", repo: "String", sha: "String", state: "String", target_url: "String", description: "String", context: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/deleteRepository", () => {
        return request(app)
        .post("/api/Github/deleteRepository")
        .send({args:{
            accessToken: token, user: "String", repo: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/deleteRepositoryAsset", () => {
        return request(app)
        .post("/api/Github/deleteRepositoryAsset")
        .send({args:{
            accessToken: token, user: "String", repo: "String", id: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/deleteRepositoryCommitComment", () => {
        return request(app)
        .post("/api/Github/deleteRepositoryCommitComment")
        .send({args:{
            accessToken: token, user: "String", repo: "String", id: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/deleteRepositoryDownload", () => {
        return request(app)
        .post("/api/Github/deleteRepositoryDownload")
        .send({args:{
            accessToken: token, user: "String", repo: "String", id: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/deleteRepositoryFile", () => {
        return request(app)
        .post("/api/Github/deleteRepositoryFile")
        .send({args:{
            accessToken: token, user: "String", repo: "String", path: "String", message: "String", sha: "String", branch: "String", committer: "Json", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/deleteRepositoryHook", () => {
        return request(app)
        .post("/api/Github/deleteRepositoryHook")
        .send({args:{
            accessToken: token, user: "String", repo: "String", id: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/deleteRepositoryInvite", () => {
        return request(app)
        .post("/api/Github/deleteRepositoryInvite")
        .send({args:{
            accessToken: token, repo: "String", id: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/deleteRepositoryKey", () => {
        return request(app)
        .post("/api/Github/deleteRepositoryKey")
        .send({args:{
            accessToken: token, user: "String", repo: "String", id: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/deleteRepositoryProject", () => {
        return request(app)
        .post("/api/Github/deleteRepositoryProject")
        .send({args:{
            accessToken: token, user: "String", repo: "String", number: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/deleteRepositoryProjectCard", () => {
        return request(app)
        .post("/api/Github/deleteRepositoryProjectCard")
        .send({args:{
            accessToken: token, user: "String", repo: "String", id: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/deleteRepositoryProjectColumn", () => {
        return request(app)
        .post("/api/Github/deleteRepositoryProjectColumn")
        .send({args:{
            accessToken: token, user: "String", repo: "String", id: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/deleteRepositoryRelease", () => {
        return request(app)
        .post("/api/Github/deleteRepositoryRelease")
        .send({args:{
            accessToken: token, user: "String", repo: "String", id: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/editRepository", () => {
        return request(app)
        .post("/api/Github/editRepository")
        .send({args:{
            accessToken: token, user: "String", repo: "String", name: "String", description: "String", homepage: "String", private: "Boolean", has_issues: "Boolean", has_wiki: "Boolean", has_downloads: "Boolean", default_branch: "String", allow_squash_merge: "Boolean", allow_merge_commit: "Boolean", allow_rebase_merge: "Boolean", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/editRepositoryAsset", () => {
        return request(app)
        .post("/api/Github/editRepositoryAsset")
        .send({args:{
            accessToken: token, user: "String", repo: "String", id: "String", name: "String", label: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/editRepositoryHook", () => {
        return request(app)
        .post("/api/Github/editRepositoryHook")
        .send({args:{
            accessToken: token, user: "String", repo: "String", id: "String", name: "String", config: "Json", events: "Array", add_events: "Array", remove_events: "Array", active: "Boolean", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/editRepositoryRelease", () => {
        return request(app)
        .post("/api/Github/editRepositoryRelease")
        .send({args:{
            accessToken: token, user: "String", repo: "String", id: "String", tag_name: "String", target_commitish: "String", name: "String", body: "String", draft: "Boolean", prerelease: "Boolean", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/forkRepository", () => {
        return request(app)
        .post("/api/Github/forkRepository")
        .send({args:{
            accessToken: token, user: "String", repo: "String", organization: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getRepository", () => {
        return request(app)
        .post("/api/Github/getRepository")
        .send({args:{
            accessToken: token, user: "String", repo: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getAllRepositories", () => {
        return request(app)
        .post("/api/Github/getAllRepositories")
        .send({args:{
            accessToken: token, visibility: "String", affiliation: "String", type: "String", sort: "String", direction: "String", page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getRepositoryAllCommitComments", () => {
        return request(app)
        .post("/api/Github/getRepositoryAllCommitComments")
        .send({args:{
            accessToken: token, user: "String", repo: "String", page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getRepositoryArchiveLink", () => {
        return request(app)
        .post("/api/Github/getRepositoryArchiveLink")
        .send({args:{
            accessToken: token, user: "String", repo: "String", archive_format: "String", ref: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getRepositoryAsset", () => {
        return request(app)
        .post("/api/Github/getRepositoryAsset")
        .send({args:{
            accessToken: token, user: "String", repo: "String", id: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getRepositoryBranch", () => {
        return request(app)
        .post("/api/Github/getRepositoryBranch")
        .send({args:{
            accessToken: token, user: "String", repo: "String", branch: "String", page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getRepositoryBranchProtection", () => {
        return request(app)
        .post("/api/Github/getRepositoryBranchProtection")
        .send({args:{
            accessToken: token, user: "String", repo: "String", branch: "String", page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getRepositoryBranches", () => {
        return request(app)
        .post("/api/Github/getRepositoryBranches")
        .send({args:{
            accessToken: token, user: "String", repo: "String", protected: "Boolean", page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getRepositoryById", () => {
        return request(app)
        .post("/api/Github/getRepositoryById")
        .send({args:{
            accessToken: token, id: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getRepositoryClones", () => {
        return request(app)
        .post("/api/Github/getRepositoryClones")
        .send({args:{
            accessToken: token, user: "String", repo: "String", page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getRepositoryCollaborators", () => {
        return request(app)
        .post("/api/Github/getRepositoryCollaborators")
        .send({args:{
            accessToken: token, user: "String", repo: "String", page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getRepositoryCombinedStatus", () => {
        return request(app)
        .post("/api/Github/getRepositoryCombinedStatus")
        .send({args:{
            accessToken: token, user: "String", repo: "String", sha: "String", page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getRepositoryCommit", () => {
        return request(app)
        .post("/api/Github/getRepositoryCommit")
        .send({args:{
            accessToken: token, user: "String", repo: "String", sha: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getRepositoryCommitComment", () => {
        return request(app)
        .post("/api/Github/getRepositoryCommitComment")
        .send({args:{
            accessToken: token, user: "String", repo: "String", id: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getRepositoryCommitComments", () => {
        return request(app)
        .post("/api/Github/getRepositoryCommitComments")
        .send({args:{
            accessToken: token, user: "String", repo: "String", sha: "String", page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getRepositoryCommits", () => {
        return request(app)
        .post("/api/Github/getRepositoryCommits")
        .send({args:{
            accessToken: token, user: "String", repo: "String", sha: "String", path: "String", author: "String", since: "Date", until: "Date", page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getRepositoryContent", () => {
        return request(app)
        .post("/api/Github/getRepositoryContent")
        .send({args:{
            accessToken: token, user: "String", repo: "String", path: "String", ref: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getRepositoryContributors", () => {
        return request(app)
        .post("/api/Github/getRepositoryContributors")
        .send({args:{
            accessToken: token, user: "String", repo: "String", anon: "Boolean", page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getRepositoryDeploymentStatuses", () => {
        return request(app)
        .post("/api/Github/getRepositoryDeploymentStatuses")
        .send({args:{
            accessToken: token, user: "String", repo: "String", id: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getRepositoryDeployments", () => {
        return request(app)
        .post("/api/Github/getRepositoryDeployments")
        .send({args:{
            accessToken: token, user: "String", repo: "String", sha: "String", ref: "String", task: "String", environment: "String", page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getRepositoryDownload", () => {
        return request(app)
        .post("/api/Github/getRepositoryDownload")
        .send({args:{
            accessToken: token, user: "String", repo: "String", id: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getRepositoryDownloads", () => {
        return request(app)
        .post("/api/Github/getRepositoryDownloads")
        .send({args:{
            accessToken: token, user: "String", repo: "String", page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getOrganizationRepositories", () => {
        return request(app)
        .post("/api/Github/getOrganizationRepositories")
        .send({args:{
            accessToken: token, org: "String", type: "String", page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getUserRepositories", () => {
        return request(app)
        .post("/api/Github/getUserRepositories")
        .send({args:{
            accessToken: token, user: "String", type: "String", sort: "String", direction: "String", page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getRepositoryForks", () => {
        return request(app)
        .post("/api/Github/getRepositoryForks")
        .send({args:{
            accessToken: token, user: "String", repo: "String", sort: "String", page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getRepositoryHook", () => {
        return request(app)
        .post("/api/Github/getRepositoryHook")
        .send({args:{
            accessToken: token, user: "String", repo: "String", id: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getRepositoryHooks", () => {
        return request(app)
        .post("/api/Github/getRepositoryHooks")
        .send({args:{
            accessToken: token, user: "String", repo: "String", page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getRepositoryInvites", () => {
        return request(app)
        .post("/api/Github/getRepositoryInvites")
        .send({args:{
            accessToken: token, repo: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getRepositoryKey", () => {
        return request(app)
        .post("/api/Github/getRepositoryKey")
        .send({args:{
            accessToken: token, user: "String", repo: "String", id: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getRepositoryKeys", () => {
        return request(app)
        .post("/api/Github/getRepositoryKeys")
        .send({args:{
            accessToken: token, user: "String", repo: "String", page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getRepositoryLanguages", () => {
        return request(app)
        .post("/api/Github/getRepositoryLanguages")
        .send({args:{
            accessToken: token, user: "String", repo: "String", page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getRepositoryLatestPagesBuild", () => {
        return request(app)
        .post("/api/Github/getRepositoryLatestPagesBuild")
        .send({args:{
            accessToken: token, user: "String", repo: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getRepositoryLatestRelease", () => {
        return request(app)
        .post("/api/Github/getRepositoryLatestRelease")
        .send({args:{
            accessToken: token, user: "String", repo: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getRepositoryPages", () => {
        return request(app)
        .post("/api/Github/getRepositoryPages")
        .send({args:{
            accessToken: token, user: "String", repo: "String", page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getRepositoryPagesBuild", () => {
        return request(app)
        .post("/api/Github/getRepositoryPagesBuild")
        .send({args:{
            accessToken: token, user: "String", repo: "String", id: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getRepositoryPagesBuilds", () => {
        return request(app)
        .post("/api/Github/getRepositoryPagesBuilds")
        .send({args:{
            accessToken: token, user: "String", repo: "String", page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getRepositoryPaths", () => {
        return request(app)
        .post("/api/Github/getRepositoryPaths")
        .send({args:{
            accessToken: token, user: "String", repo: "String", page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getRepositoryProject", () => {
        return request(app)
        .post("/api/Github/getRepositoryProject")
        .send({args:{
            accessToken: token, user: "String", repo: "String", number: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getRepositoryProjectCard", () => {
        return request(app)
        .post("/api/Github/getRepositoryProjectCard")
        .send({args:{
            accessToken: token, user: "String", repo: "String", id: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getRepositoryProjectCards", () => {
        return request(app)
        .post("/api/Github/getRepositoryProjectCards")
        .send({args:{
            accessToken: token, user: "String", repo: "String", id: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getRepositoryProjectColumn", () => {
        return request(app)
        .post("/api/Github/getRepositoryProjectColumn")
        .send({args:{
            accessToken: token, user: "String", repo: "String", id: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getRepositoryProjectColumns", () => {
        return request(app)
        .post("/api/Github/getRepositoryProjectColumns")
        .send({args:{
            accessToken: token, user: "String", repo: "String", number: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getRepositoryProjects", () => {
        return request(app)
        .post("/api/Github/getRepositoryProjects")
        .send({args:{
            accessToken: token, user: "String", repo: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getProtectedBranchRequiredStatusChecks", () => {
        return request(app)
        .post("/api/Github/getProtectedBranchRequiredStatusChecks")
        .send({args:{
            accessToken: token, user: "String", repo: "String", branch: "String", page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getProtectedBranchRequiredStatusChecksContexts", () => {
        return request(app)
        .post("/api/Github/getProtectedBranchRequiredStatusChecksContexts")
        .send({args:{
            accessToken: token, user: "String", repo: "String", branch: "String", page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getProtectedBranchRestrictions", () => {
        return request(app)
        .post("/api/Github/getProtectedBranchRestrictions")
        .send({args:{
            accessToken: token, user: "String", repo: "String", branch: "String", page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getProtectedBranchTeamRestrictions", () => {
        return request(app)
        .post("/api/Github/getProtectedBranchTeamRestrictions")
        .send({args:{
            accessToken: token, user: "String", repo: "String", branch: "String", page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getProtectedBranchUserRestrictions", () => {
        return request(app)
        .post("/api/Github/getProtectedBranchUserRestrictions")
        .send({args:{
            accessToken: token, user: "String", repo: "String", branch: "String", page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getPublicRepositories", () => {
        return request(app)
        .post("/api/Github/getPublicRepositories")
        .send({args:{
            accessToken: token, since: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getRepositoryReadme", () => {
        return request(app)
        .post("/api/Github/getRepositoryReadme")
        .send({args:{
            accessToken: token, user: "String", repo: "String", ref: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getRepositoryReferrers", () => {
        return request(app)
        .post("/api/Github/getRepositoryReferrers")
        .send({args:{
            accessToken: token, user: "String", repo: "String", page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getRepositoryRelease", () => {
        return request(app)
        .post("/api/Github/getRepositoryRelease")
        .send({args:{
            accessToken: token, user: "String", repo: "String", id: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getRepositoryReleaseByTag", () => {
        return request(app)
        .post("/api/Github/getRepositoryReleaseByTag")
        .send({args:{
            accessToken: token, user: "String", repo: "String", tag: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getRepositoryReleases", () => {
        return request(app)
        .post("/api/Github/getRepositoryReleases")
        .send({args:{
            accessToken: token, user: "String", repo: "String", page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getRepositoryShaOfCommitRef", () => {
        return request(app)
        .post("/api/Github/getRepositoryShaOfCommitRef")
        .send({args:{
            accessToken: token, user: "String", repo: "String", ref: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getRepositoryStatsCodeFrequency", () => {
        return request(app)
        .post("/api/Github/getRepositoryStatsCodeFrequency")
        .send({args:{
            accessToken: token, user: "String", repo: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getRepositoryStatsCommitActivity", () => {
        return request(app)
        .post("/api/Github/getRepositoryStatsCommitActivity")
        .send({args:{
            accessToken: token, user: "String", repo: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getRepositoryStatsContributors", () => {
        return request(app)
        .post("/api/Github/getRepositoryStatsContributors")
        .send({args:{
            accessToken: token, user: "String", repo: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getRepositoryStatsParticipation", () => {
        return request(app)
        .post("/api/Github/getRepositoryStatsParticipation")
        .send({args:{
            accessToken: token, user: "String", repo: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getRepositoryStatsPunchCard", () => {
        return request(app)
        .post("/api/Github/getRepositoryStatsPunchCard")
        .send({args:{
            accessToken: token, user: "String", repo: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getRepositoryStatuses", () => {
        return request(app)
        .post("/api/Github/getRepositoryStatuses")
        .send({args:{
            accessToken: token, user: "String", repo: "String", sha: "String", page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getRepositoryTags", () => {
        return request(app)
        .post("/api/Github/getRepositoryTags")
        .send({args:{
            accessToken: token, user: "String", repo: "String", page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getRepositoryTeams", () => {
        return request(app)
        .post("/api/Github/getRepositoryTeams")
        .send({args:{
            accessToken: token, user: "String", repo: "String", page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getRepositoryViews", () => {
        return request(app)
        .post("/api/Github/getRepositoryViews")
        .send({args:{
            accessToken: token, user: "String", repo: "String", page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getRepositoryAssets", () => {
        return request(app)
        .post("/api/Github/getRepositoryAssets")
        .send({args:{
            accessToken: token, user: "String", repo: "String", id: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/mergeRepository", () => {
        return request(app)
        .post("/api/Github/mergeRepository")
        .send({args:{
            accessToken: token, user: "String", repo: "String", base: "String", head: "String", commit_message: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/moveRepositoryProjectCard", () => {
        return request(app)
        .post("/api/Github/moveRepositoryProjectCard")
        .send({args:{
            accessToken: token, user: "String", repo: "String", id: "String", position: "String", column_id: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/moveRepositoryProjectColumn", () => {
        return request(app)
        .post("/api/Github/moveRepositoryProjectColumn")
        .send({args:{
            accessToken: token, user: "String", repo: "String", id: "String", position: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/pingRepositoryHook", () => {
        return request(app)
        .post("/api/Github/pingRepositoryHook")
        .send({args:{
            accessToken: token, id: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/pingRepositoryHook", () => {
        return request(app)
        .post("/api/Github/pingRepositoryHook")
        .send({args:{
            accessToken: token, user: "String", repo: "String", id: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/removeBranchProtection", () => {
        return request(app)
        .post("/api/Github/removeBranchProtection")
        .send({args:{
            accessToken: token, user: "String", repo: "String", branch: "String", page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/removeRepositoryCollaborator", () => {
        return request(app)
        .post("/api/Github/removeRepositoryCollaborator")
        .send({args:{
            accessToken: token, user: "String", repo: "String", collabuser: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/removeProtectedBranchRequiredStatusChecks", () => {
        return request(app)
        .post("/api/Github/removeProtectedBranchRequiredStatusChecks")
        .send({args:{
            accessToken: token, user: "String", repo: "String", branch: "String", page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/removeProtectedBranchRequiredStatusChecksContexts", () => {
        return request(app)
        .post("/api/Github/removeProtectedBranchRequiredStatusChecksContexts")
        .send({args:{
            accessToken: token, user: "String", repo: "String", branch: "String", page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/removeProtectedBranchRestrictions", () => {
        return request(app)
        .post("/api/Github/removeProtectedBranchRestrictions")
        .send({args:{
            accessToken: token, user: "String", repo: "String", branch: "String", page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/removeProtectedBranchTeamRestrictions", () => {
        return request(app)
        .post("/api/Github/removeProtectedBranchTeamRestrictions")
        .send({args:{
            accessToken: token, user: "String", repo: "String", branch: "String", page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/removeProtectedBranchUserRestrictions", () => {
        return request(app)
        .post("/api/Github/removeProtectedBranchUserRestrictions")
        .send({args:{
            accessToken: token, user: "String", repo: "String", branch: "String", page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/replaceProtectedBranchRequiredStatusChecksContexts", () => {
        return request(app)
        .post("/api/Github/replaceProtectedBranchRequiredStatusChecksContexts")
        .send({args:{
            accessToken: token, user: "String", repo: "String", branch: "String", body: "Array", page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/replaceProtectedBranchTeamRestrictions", () => {
        return request(app)
        .post("/api/Github/replaceProtectedBranchTeamRestrictions")
        .send({args:{
            accessToken: token, user: "String", repo: "String", branch: "String", body: "Array", page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/replaceProtectedBranchUserRestrictions", () => {
        return request(app)
        .post("/api/Github/replaceProtectedBranchUserRestrictions")
        .send({args:{
            accessToken: token, user: "String", repo: "String", branch: "String", body: "Array", page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/requestRepositoryPageBuild", () => {
        return request(app)
        .post("/api/Github/requestRepositoryPageBuild")
        .send({args:{
            accessToken: token, user: "String", repo: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/testRepositoryHook", () => {
        return request(app)
        .post("/api/Github/testRepositoryHook")
        .send({args:{
            accessToken: token, user: "String", repo: "String", id: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/updateRepositoryBranchProtection", () => {
        return request(app)
        .post("/api/Github/updateRepositoryBranchProtection")
        .send({args:{
            accessToken: token, user: "String", repo: "String", branch: "String", required_status_checks: "Json", restrictions: "Json", page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/updateRepositoryCommitComment", () => {
        return request(app)
        .post("/api/Github/updateRepositoryCommitComment")
        .send({args:{
            accessToken: token, user: "String", repo: "String", id: "String", body: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/updateRepositoryFile", () => {
        return request(app)
        .post("/api/Github/updateRepositoryFile")
        .send({args:{
            accessToken: token, user: "String", repo: "String", path: "String", message: "String", content: "String", sha: "String", branch: "String", committer: "Json", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/updateRepositoryInvite", () => {
        return request(app)
        .post("/api/Github/updateRepositoryInvite")
        .send({args:{
            accessToken: token, repo: "String", id: "String", permission: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/updateRepositoryProject", () => {
        return request(app)
        .post("/api/Github/updateRepositoryProject")
        .send({args:{
            accessToken: token, user: "String", repo: "String", number: "Number", name: "String", body: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/updateRepositoryProjectCard", () => {
        return request(app)
        .post("/api/Github/updateRepositoryProjectCard")
        .send({args:{
            accessToken: token, user: "String", repo: "String", id: "String", note: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/updateRepositoryProjectColumn", () => {
        return request(app)
        .post("/api/Github/updateRepositoryProjectColumn")
        .send({args:{
            accessToken: token, user: "String", repo: "String", id: "String", name: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/updateProtectedBranchRequiredStatusChecks", () => {
        return request(app)
        .post("/api/Github/updateProtectedBranchRequiredStatusChecks")
        .send({args:{
            accessToken: token, user: "String", repo: "String", branch: "String", body: "Json", page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/uploadRepositoryAsset", () => {
        return request(app)
        .post("/api/Github/uploadRepositoryAsset")
        .send({args:{
            accessToken: token, user: "String", repo: "String", id: "String", filePath: "String", name: "String", label: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/codeSearch", () => {
        return request(app)
        .post("/api/Github/codeSearch")
        .send({args:{
            accessToken: token, q: "String", sort: "String", order: "String", page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/emailSearch", () => {
        return request(app)
        .post("/api/Github/emailSearch")
        .send({args:{
            accessToken: token, email: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/issuesSearch", () => {
        return request(app)
        .post("/api/Github/issuesSearch")
        .send({args:{
            accessToken: token, q: "String", sort: "String", order: "String", page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/repositorySearch", () => {
        return request(app)
        .post("/api/Github/repositorySearch")
        .send({args:{
            accessToken: token, q: "String", sort: "String", order: "String", page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/usersSearch", () => {
        return request(app)
        .post("/api/Github/usersSearch")
        .send({args:{
            accessToken: token, q: "String", sort: "String", order: "String", page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/acceptRepositoryInvite", () => {
        return request(app)
        .post("/api/Github/acceptRepositoryInvite")
        .send({args:{
            accessToken: token, id: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/addEmails", () => {
        return request(app)
        .post("/api/Github/addEmails")
        .send({args:{
            accessToken: token, body: "Array", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/checkFollowing", () => {
        return request(app)
        .post("/api/Github/checkFollowing")
        .send({args:{
            accessToken: token, user: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/checkIfOneFollowersOther", () => {
        return request(app)
        .post("/api/Github/checkIfOneFollowersOther")
        .send({args:{
            accessToken: token, user: "String", other_user: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/createGpgKey", () => {
        return request(app)
        .post("/api/Github/createGpgKey")
        .send({args:{
            accessToken: token, armored_public_key: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/createKey", () => {
        return request(app)
        .post("/api/Github/createKey")
        .send({args:{
            accessToken: token, title: "String", key: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/declineRepositoryInvite", () => {
        return request(app)
        .post("/api/Github/declineRepositoryInvite")
        .send({args:{
            accessToken: token, id: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/deleteEmails", () => {
        return request(app)
        .post("/api/Github/deleteEmails")
        .send({args:{
            accessToken: token, body: "Array", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/deleteGpgKey", () => {
        return request(app)
        .post("/api/Github/deleteGpgKey")
        .send({args:{
            accessToken: token, id: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/deleteKey", () => {
        return request(app)
        .post("/api/Github/deleteKey")
        .send({args:{
            accessToken: token, id: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/demoteUser", () => {
        return request(app)
        .post("/api/Github/demoteUser")
        .send({args:{
            accessToken: token, user: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/editOrganizationMembership", () => {
        return request(app)
        .post("/api/Github/editOrganizationMembership")
        .send({args:{
            accessToken: token, org: "String", state: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/followUser", () => {
        return request(app)
        .post("/api/Github/followUser")
        .send({args:{
            accessToken: token, user: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getUser", () => {
        return request(app)
        .post("/api/Github/getUser")
        .send({args:{
            accessToken: token, undefined
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getAllUsers", () => {
        return request(app)
        .post("/api/Github/getAllUsers")
        .send({args:{
            accessToken: token, since: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getUserById", () => {
        return request(app)
        .post("/api/Github/getUserById")
        .send({args:{
            accessToken: token, id: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getUserEmails", () => {
        return request(app)
        .post("/api/Github/getUserEmails")
        .send({args:{
            accessToken: token, page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getUserFollowers", () => {
        return request(app)
        .post("/api/Github/getUserFollowers")
        .send({args:{
            accessToken: token, page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getFollowersForUser", () => {
        return request(app)
        .post("/api/Github/getFollowersForUser")
        .send({args:{
            accessToken: token, user: "String", page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getUserFollowing", () => {
        return request(app)
        .post("/api/Github/getUserFollowing")
        .send({args:{
            accessToken: token, page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getFollowingForUser", () => {
        return request(app)
        .post("/api/Github/getFollowingForUser")
        .send({args:{
            accessToken: token, user: "String", page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getSingleUser", () => {
        return request(app)
        .post("/api/Github/getSingleUser")
        .send({args:{
            accessToken: token, user: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getGpgKey", () => {
        return request(app)
        .post("/api/Github/getGpgKey")
        .send({args:{
            accessToken: token, id: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getGpgKeys", () => {
        return request(app)
        .post("/api/Github/getGpgKeys")
        .send({args:{
            accessToken: token, page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getKey", () => {
        return request(app)
        .post("/api/Github/getKey")
        .send({args:{
            accessToken: token, id: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getKeys", () => {
        return request(app)
        .post("/api/Github/getKeys")
        .send({args:{
            accessToken: token, page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getKeysForUser", () => {
        return request(app)
        .post("/api/Github/getKeysForUser")
        .send({args:{
            accessToken: token, user: "String", page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getUserOrganizationMembership", () => {
        return request(app)
        .post("/api/Github/getUserOrganizationMembership")
        .send({args:{
            accessToken: token, org: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getUserOrganizations", () => {
        return request(app)
        .post("/api/Github/getUserOrganizations")
        .send({args:{
            accessToken: token, page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getRepositoryInvites", () => {
        return request(app)
        .post("/api/Github/getRepositoryInvites")
        .send({args:{
            accessToken: token, undefined
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/getUserTeams", () => {
        return request(app)
        .post("/api/Github/getUserTeams")
        .send({args:{
            accessToken: token, page: "Number", per_page: "Number", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/promoteUser", () => {
        return request(app)
        .post("/api/Github/promoteUser")
        .send({args:{
            accessToken: token, user: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/suspendUser", () => {
        return request(app)
        .post("/api/Github/suspendUser")
        .send({args:{
            accessToken: token, user: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/unfollowUser", () => {
        return request(app)
        .post("/api/Github/unfollowUser")
        .send({args:{
            accessToken: token, user: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/unsuspendUser", () => {
        return request(app)
        .post("/api/Github/unsuspendUser")
        .send({args:{
            accessToken: token, user: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

    it("/updateUser", () => {
        return request(app)
        .post("/api/Github/updateUser")
        .send({args:{
            accessToken: token, name: "String", email: "String", blog: "String", company: "String", location: "String", hireable: "Boolean", bio: "String", 
        }})
        .expect(200)
        .then((res) => {
            assert.notEqual(res.body.contextWrites.to, '404');
        });
    });

});
