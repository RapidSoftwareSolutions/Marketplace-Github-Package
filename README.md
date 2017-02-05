# Github Package
An object oriented wrapper for the GitHub v3 API.
* Domain: github.com
* Credentials: accessToken

## How to get credentials: 
1. In the top right corner of any page, click your profile photo, then click **Settings**.
2. In the user settings sidebar, click **Personal access tokens**.
3. Click **Generate new token**.
4. Give your token a descriptive name.
5. Select the scopes you wish to grant to this token.
6. Click **Generate token**.
7. Copy the token to your clipboard. For security reasons, after you navigate off this page, no one will be able to see the token again.


## Github.checkNotificationThreadSubscription
Check to see if the current user is subscribed to a thread.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| id         | String     | The thread ID (required)

## Github.checkRepositoryStarring
Check if you are starring a repository

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.deleteNotificationThreadSubscription
Delete a notification thread subscription.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| id         | String     | The thread ID (required)

## Github.getPublicEvents
List public events

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| page       | Number     | Page number of the results to fetch. (optional)
| perPage    | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.getOrganizationEvents
List public events for an organization

| Field           | Type       | Description
|-----------------|------------|----------
| accessToken     | credentials| The access_token obtained from Github.
| organizationName| String     | The name of organization (required)
| page            | Number     | Page number of the results to fetch. (optional)
| perPage         | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.getRepositoryEvents
List repository events

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.getRepositoryIssuesEvents
List issue events for a repository

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.getRepositoryNetworkEvents
List public events for a network of repositories

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The repository name (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.getUserPerformedEvents
List events performed by a user

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| user       | String     | The user name (required)
| page       | Number     | Page number of the results to fetch. (optional)
| perPage    | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.getUserOrganizationEvents
List events for a user's organization

| Field           | Type       | Description
|-----------------|------------|----------
| accessToken     | credentials| The access_token obtained from Github.
| user            | String     | The user name (required)
| organizationName| String     | The name of the organization (required)
| page            | Number     | Page number of the results to fetch. (optional)
| perPage         | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.getUserPublicPerformedEvents
List public events performed by a user

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| user       | String     | The user name (required)
| page       | Number     | Page number of the results to fetch. (optional)
| perPage    | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.getUserReceivedEvents
List events that a user has received

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| user       | String     | The user name (required)
| page       | Number     | Page number of the results to fetch. (optional)
| perPage    | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.getUserReceivedPublicEvents
List public events that a user has received

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| user       | String     | The user name (required)
| page       | Number     | Page number of the results to fetch. (optional)
| perPage    | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.getFeeds
Get all feeds available for the authenticated user.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.

## Github.getNotificationThread
View a single notification thread.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| id         | String     | The ID of the thread (required)

## Github.getUserNotifications
Get all notifications for the current user, grouped by repository.

| Field        | Type       | Description
|--------------|------------|----------
| accessToken  | credentials| The access_token obtained from Github.
| all          | String     | If true, show notifications marked as read. Default: false (optional)
| participating| String     | If true, only shows notifications in which the user is directly participating or mentioned. Default: false (optional)
| since        | String     | Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ (optional)
| before       | String     | Only show notifications updated before the given time. This is a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ. (optional)

## Github.getUserRepositoryNotifications
Get all notifications for the given user.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| all           | String     | If true, show notifications marked as read. Default: false (optional)
| participating | String     | If true, only shows notifications in which the user is directly participating or mentioned. Default: false (optional)
| since         | String     | Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ (optional)
| before        | String     | Only show notifications updated before the given time. This is a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ. (optional)

## Github.getRepositorySubscription
Get a Repository Subscription.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The onwer name (required)
| repositoryName| String     | The name of the repository (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.getRepositoryStargazers
List Stargazers

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.getStarredRepositories
List repositories being starred by the authenticated user

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| page       | Number     | Page number of the results to fetch. (optional)
| perPage    | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.getUserStarredRepositories
List repositories being starred by a user

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| user       | String     | The user name (required)
| page       | Number     | Page number of the results to fetch. (optional)
| perPage    | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.getWatchedRepositories
List repositories being watched by the authenticated user.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| page       | Number     | Page number of the results to fetch. (optional)
| perPage    | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.getUserWatchedRepositories
List repositories being watched by a user.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| user       | String     | The user name (required)
| page       | Number     | Page number of the results to fetch. (optional)
| perPage    | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.getRepositoryWatchers
Get watchers for repository.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.markNotificationThreadAsRead
Mark a notification thread as read.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| id         | String     | The Id of the thread (required)

## Github.markNotificationsAsRead
Mark notifications as read for authenticated user.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| lastReadAt | String     | Describes the last point that notifications were checked. Anything updated since this time will not be updated. This is a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ. Default: Time.now (optional)

## Github.markNotificationsAsReadForRepository
Mark notifications in a repo as read.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| lastReadAt    | String     | Describes the last point that notifications were checked. Anything updated since this time will not be updated. This is a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ. Default: Time.now (optional)

## Github.setNotificationThreadSubscription
This lets you subscribe or unsubscribe from a conversation. Unsubscribing from a conversation mutes all future notifications (until you comment or get @mentioned once more).

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| id         | String     | The ID of the thread (required)
| subscribed | String     | Determines if notifications should be received from this thread (optional)
| ignored    | String     | Determines if all notifications should be blocked from this thread (optional)

## Github.setRepositorySubscription
Set a Repository Subscription

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| subscribed    | String     | Determines if notifications should be received from this repository. (optional)
| ignored       | String     | Determines if all notifications should be blocked from this repository. (optional)

## Github.starRepository
Star a repository

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)

## Github.unstarRepository
Unstar a repository

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)

## Github.unwatchRepository
Unwatch a repository.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)

## Github.checkAuthorization
Check an authorization

| Field       | Type  | Description
|-------------|-------|----------
| token       | String| The access token to check. (required)
| clientId    | String| The 20 character OAuth app client key for which to create the token. (required)
| clientSecret| String| The username obtained from Github. (required)

## Github.createAuthorization
Create a new authorization

| Field       | Type  | Description
|-------------|-------|----------
| scopes      | Array | A list of scopes that this authorization is in. (optional)
| note        | String| A note to remind you what the OAuth token is for. (optional)
| noteUrl     | String| A URL to remind you what app the OAuth token is for. (optional)
| clientId    | String| The 20 character OAuth app client key for which to create the token. (required)
| clientSecret| String| The 40 character OAuth app client secret for which to create the token. (optional)
| fingerprint | String| A unique string to distinguish an authorization from others created for the same client ID and user. (optional)

## Github.deleteAuthorization
Delete an authorization

| Field   | Type  | Description
|---------|-------|----------
| username| String| The username obtained from Github. (required)
| password| String| The password obtained from Github. (required)
| id      | String| The authorization ID (required)

## Github.deleteGrantAuthorization
Delete a grant. (In preview period. See README.)

| Field   | Type  | Description
|---------|-------|----------
| username| String| The username obtained from Github. (required)
| password| String| The password obtained from Github. (required)
| id      | String| The authorization ID (required)

## Github.getAuthorization
Get a single authorization

| Field        | Type       | Description
|--------------|------------|----------
| accessToken  | credentials| The access_token obtained from Github.
| username     | String     | The username obtained from Github. (required)
| password     | String     | The password obtained from Github. (required)
| twoFactorCode| String     | Required for two-factor auth method. (optional)
| id           | String     | The authorization ID (required)

## Github.getAllAuthorization
List your authorizations

| Field   | Type  | Description
|---------|-------|----------
| username| String| The username obtained from Github. (required)
| password| String| The password obtained from Github. (required)
| page    | Number| Page number of the results to fetch. (optional)
| perPage | Number| A custom page size up to 100. Default is 30. (optional)

## Github.getGrantAuthorization
Get a single grant. (In preview period. See README.)

| Field        | Type  | Description
|--------------|-------|----------
| id           | String| The authorization ID (required)
| username     | String| The username obtained from Github. (required)
| password     | String| The password obtained from Github. (required)
| twoFactorCode| String| Required for two-factor auth method. (optional)
| page         | Number| Page number of the results to fetch. (optional)
| perPage      | Number| A custom page size up to 100. Default is 30. (optional)

## Github.getGrantsAuthorization
List your grants. (In preview period. See README.)

| Field        | Type  | Description
|--------------|-------|----------
| username     | String| The username obtained from Github. (required)
| password     | String| The password obtained from Github. (required)
| twoFactorCode| String| Required for two-factor auth method. (optional)
| page         | Number| Page number of the results to fetch. (optional)
| perPage      | Number| A custom page size up to 100. Default is 30. (optional)

## Github.getOrCreateAuthorizationForApp
Get or create an authorization for a specific app

| Field       | Type  | Description
|-------------|-------|----------
| username    | String| The username obtained from Github. (required)
| password    | String| The password obtained from Github. (required)
| clientId    | String| The 20 character OAuth app client key for which to create the token. (required)
| clientSecret| String| The 40 character OAuth app client secret associated with the client ID specified in the URL. (required)
| scopes      | JSON  | A list of scopes that this authorization is in. (optional)
| note        | String| A note to remind you what the OAuth token is for. (optional)
| noteUrl     | String| A URL to remind you what app the OAuth token is for. (optional)
| fingerprint | String| A unique string to distinguish an authorization from others created for the same client ID and user. (optional)

## Github.getOrCreateAuthorizationForAppAndFingerprint
Get or create an authorization for a specific app and fingerprint

| Field       | Type  | Description
|-------------|-------|----------
| username    | String| The username obtained from Github. (required)
| password    | String| The password obtained from Github. (required)
| clientId    | String| The 20 character OAuth app client key for which to create the token. (required)
| fingerprint | String| A unique string to distinguish an authorization from others created for the same client ID and user. (optional)
| clientSecret| String| The 40 character OAuth app client secret associated with the client ID specified in the URL. (required)
| scopes      | JSON  | A list of scopes that this authorization is in. (optional)
| note        | String| A note to remind you what the OAuth token is for. (optional)
| noteUrl     | String| A URL to remind you what app the OAuth token is for. (optional)

## Github.resetAuthorization
Reset an authorization

| Field       | Type  | Description
|-------------|-------|----------
| token       | String| The access token to check. (required)
| clientId    | String| The 20 character OAuth app client key for which to create the token. (required)
| clientSecret| String| The 40 character OAuth app client secret associated with the client ID specified in the URL. (required)

## Github.revokeAuthorization
Revoke an authorization for an application

| Field       | Type  | Description
|-------------|-------|----------
| token       | String| The access token to check. (required)
| clientId    | String| The 20 character OAuth app client key for which to create the token. (required)
| clientSecret| String| The 40 character OAuth app client secret associated with the client ID specified in the URL. (required)

## Github.updateAuthorization
Update an existing authorization

| Field       | Type  | Description
|-------------|-------|----------
| username    | String| The username obtained from Github. (required)
| password    | String| The password obtained from Github. (required)
| id          | String| The authorization ID (required)
| scopes      | JSON  | A list of scopes that this authorization is in. (optional)
| addScopes   | JSON  | A list of scopes to add to this authorization. (optional)
| removeScopes| JSON  | A list of scopes to remove from this authorization. (optional)
| note        | String| A note to remind you what the OAuth token is for. (optional)
| noteUrl     | String| A URL to remind you what app the OAuth token is for. (optional)
| fingerprint | String| A unique string to distinguish an authorization from others created for the same client ID and user. (optional)

## Github.createOrganizationEnterprise
Create an organization

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| login      | String     | The organization's username. (required)
| admin      | String     | The login of the user who will manage this organization. (required)
| profileName| String     | The organization's display name. (optional)

## Github.getLicenseEnterprise
Get license information

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.

## Github.queueIndexingJobEnterprise
Queue an indexing job

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| target     | String     | A string representing the item to index. (required)

## Github.statsEnterprise
Get statistics.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| type       | String     | Possible values: issues, hooks, milestones, orgs, comments, pages, users, gists, pulls, repos, all. (required)

## Github.syncLdapForTeamEnterprise
Sync LDAP mapping for a team.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| teamId     | Number     | The ID of the team (required)

## Github.syncLdapForUserEnterprise
Sync LDAP mapping for a user.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| user       | String     | The user name (required)

## Github.updateLdapForTeamEnterprise
Update LDAP mapping for a team.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| teamId     | Number     | The ID of the team (required)
| data       | String     | JSON payload with the new LDAP data. (optional). Ex.: {"ldap_dn": "cn=Enterprise Ops,ou=teams,dc=github,dc=com"}

## Github.updateLdapForUserEnterprise
Update LDAP mapping for a user.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| user       | String     | The user name (required)
| data       | String     | JSON payload with the new LDAP data. (optional). Ex.: {"ldap_dn": "uid=asdf,ou=users,dc=github,dc=com"}

## Github.checkGistStar
Check if a gist is starred

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| id         | String     | Id (SHA1 hash) of the gist (required)

## Github.createGist
Create a gist

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| files      | JSON       | Files that make up this gist. The key of which should be a required string filename and the value another required hash with parameters: 'content' (required)
| description| String     | A description of the gist. (optional)
| public     | String     | Indicates whether the gist is public. Default: false

## Github.createSingleFileGist
Create a gist

| Field       | Type       | Description
|-------------|------------|----------
| accessToken | credentials| The access_token obtained from Github.
| fileName    | String     | Name of file.
| fileContents| String     | Contents of file.
| public      | String     | Indicates whether the gist is public.

## Github.createGistComment
Create a comment

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| gistId     | String     | Id (SHA1 hash) of the gist. (required)
| body       | String     | The comment text. (required)

## Github.deleteGist
Delete a gist

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| id         | String     | Id (SHA1 hash) of the gist. (required)

## Github.deleteGistComment
Delete a comment

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| gistId     | String     | Id (SHA1 hash) of the gist. (required)
| commentId  | String     | The comment ID. (required)

## Github.editGist
Edit a gist

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| id         | String     | Id (SHA1 hash) of the gist. (required)
| description| String     | A description of the gist. (optional)
| files      | JSON       | Files that make up this gist. The key of which should be a required string filename and the value another required hash with parameters: 'content' (required)

## Github.updateGistComment
Edit a comment

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| gistId     | String     | Id (SHA1 hash) of the gist. (required)
| commentId  | String     | The comment ID. (required)
| body       | String     | The comment text. (required)

## Github.forkGist
Fork a gist

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| id         | String     | Id (SHA1 hash) of the gist. (required)

## Github.getGist
Get a single gist

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| id         | String     | Id (SHA1 hash) of the gist. (required)

## Github.getAllGists
List the authenticated user's gists or if called anonymously, this will return all public gists

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| page       | Number     | Page number of the results to fetch. (optional)
| perPage    | Number     | A custom page size up to 100. Default is 30. (optional)
| since      | String     | Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ (optional)

## Github.getGistComment
Get a single comment

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| gistId     | String     | Id (SHA1 hash) of the gist. (required)
| id         | String     | The comment ID. (required)

## Github.getGistComments
List comments on a gist

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| gistId     | String     | Id (SHA1 hash) of the gist. (required)

## Github.getGistCommits
List gist commits

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| id         | String     | Id (SHA1 hash) of the gist. (required)

## Github.getUserGists
List a user's gists

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| user       | String     | The user name (required)
| page       | Number     | Page number of the results to fetch. (optional)
| perPage    | Number     | A custom page size up to 100. Default is 30. (optional)
| since      | String     | Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ (optional)

## Github.getGistForks
List gist forks

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| id         | String     | Id (SHA1 hash) of the gist. (required)
| page       | Number     | Page number of the results to fetch. (optional)
| perPage    | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.getPublicGists
List all public gists

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| since      | String     | Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ (optional)

## Github.getGistByRevision
Get a specific revision of a gist

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| id         | String     | Id (SHA1 hash) of the gist. (required)
| sha        | String     | The SHA1 hash of the revision (required)

## Github.getStarredGists
List the authenticated user's starred gists

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| since      | String     | Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ (optional)

## Github.starGist
Star a gist

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| id         | String     | Id (SHA1 hash) of the gist. (required)

## Github.unstarGist
Unstar a gist

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| id         | String     | Id (SHA1 hash) of the gist. (required)

## Github.createBlob
Create a Blob

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| content       | String     | The new blob's content. (required)
| encoding      | String     | The encoding used for content. Currently, "utf-8" and "base64" are supported. Default: "utf-8". (required)

## Github.createCommit
Create a Commit

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| message       | String     | String of the commit message (required)
| tree          | String     | String of the SHA of the tree object this commit points to (required)
| parents       | JSON       | Array of the SHAs of the commits that were the parents of this commit. If omitted or empty, the commit will be written as a root commit. For a single parent, an array of one SHA should be provided, for a merge commit, an array of more than one should be provided. (required)
| author        | JSON       | An object containing information about the author (optional). Avaliable parameters: "name" (string) The name of the author (or committer) of the commit; "email" (string) The email of the author (or committer) of the commit; "date" (string) Indicates when this commit was authored (or committed). This is a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ. Ex.:"author": {"name": "Scott Chacon", "email": "schacon@gmail.com", "date": "2008-07-09T16:13:30+12:00"}
| committer     | JSON       | An object containing information about the committer (optional). Both the author and committer parameters have the same keys.

## Github.createReference
Create a Reference

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| ref           | String     | String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected. (required)
| sha           | String     | The SHA1 value to set this reference to (required)

## Github.createTag
Create a Tag Object

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| tag           | String     | String of the tag (required)
| message       | String     | String of the tag message (required)
| object        | String     | String of the SHA of the git object this is tagging (required)
| type          | String     | String of the type of the object we’re tagging. Normally this is a commit but it can also be a tree or a blob. (required)
| tagger        | JSON       | JSON object that contains the following keys: `name` - String of the name of the author of the tag, `email` - String of the email of the author of the tag, `date` - Timestamp of when this object was tagged (required)

## Github.createTree
Create a Tree

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| tree          | JSON       | Array of Hash objects (of path, mode, type and sha) specifying a tree structure (required)
| baseTree      | String     | String of the SHA1 of the tree you want to update with new data (optional)

## Github.deleteReference
Delete a Reference

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| ref           | String     | String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected. (required)

## Github.getBlob
Get a Blob

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| sha           | String     | The SHA1 value to set this reference to (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.getCommit
Get a Commit

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| sha           | String     | The SHA1 value to set this reference to (required)

## Github.getCommitSignatureVerification
Get a Commit Signature Verification. (In preview period. See README.)

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| sha           | String     | The SHA1 value to set this reference to (required)

## Github.getReference
Get a Reference

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| ref           | String     | String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected. (required)

## Github.getReferences
Get all References

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.getTag
Get a Tag

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| sha           | String     | The SHA1 value to set this reference to (required)

## Github.getTagSignatureVerification
Get a Tag Signature Verification. (In preview period. See README.)

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| sha           | String     | The SHA1 value to set this reference to (required)

## Github.getTags
Get all tag References

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.getTree
Get a Tree

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| sha           | String     | The SHA1 value to set this reference to (required)
| recursive     | String     | Get a Tree Recursively (optional). True or false

## Github.updateReference
Update a Reference

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| ref           | String     | String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected. (required)
| sha           | String     | The SHA1 value to set this reference to (required)
| force         | String     | Boolean indicating whether to force the update or to make sure the update is a fast-forward update. The default is false, so leaving this out or setting it to false will make sure you’re not overwriting work. (optional)

## Github.createInstallation
Create a new access token

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| installationId| Number     | The id of the installation for this integration. (required)
| userId        | Number     | The id of the user for whom the integration is acting on behalf of. (optional)

## Github.addAssigneesToIssue
Add assignees to an issue.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| number        | Number     | The number of the issue (required)
| assignees     | JSON       | Logins for the users that should be added to the issue. (required)

## Github.addIssueLabels
Add labels to an issue

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| number        | Number     | The number of the issue (required)
| body          | JSON       | Array of the labels that should be added to the issue. (required)

## Github.checkAssignee
Check assignee

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| assignee      | String     | Login for the user that this issue should be assigned to. (required)

## Github.createIssue
Create an issue

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| title         | String     | The title of the issue. (required)
| body          | String     | The contents of the issue. (optional)
| assignee      | String     | Login for the user that this issue should be assigned to. (optional)
| milestone     | Number     | Milestone to associate this issue with. (optional)
| labels        | JSON       | Array of strings - Labels to associate with this issue. (optional)
| assignees     | JSON       | Logins for Users to assign to this issue. NOTE: Only users with push access can set assignees for new issues. Assignees are silently dropped otherwise. (optional)

## Github.createIssueComment
Create a comment

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| number        | Number     | The number of the issue (required)
| body          | String     | The contents of the comment. (required) Ex.: {"body": "Me too"}

## Github.createLabel
Create a label

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name. (required)
| repositoryName| String     | The name of the repository. (required)
| name          | String     | The name of the label. (required)
| color         | String     | 6 character hex code, without a leading #. (required)

## Github.createMilestone
Create a milestone

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name. (required)
| repositoryName| String     | The name of the repository. (required)
| title         | String     | The title of the milestone. (required)
| state         | String     | The state of the milestone. Either open or closed. Default: open (optional)
| description   | String     | A description of the milestone. (optional)
| dueOn         | String     | Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ (optional)

## Github.deleteIssueComment
Delete a comment

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name. (required)
| repositoryName| String     | The name of the repository. (required)
| id            | String     | The ID of the comment (required)

## Github.deleteLabel
Delete a label

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name. (required)
| repositoryName| String     | The name of the repository. (required)
| name          | String     | The name of the label. (required)

## Github.deleteMilestone
Delete a milestone

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name. (required)
| repositoryName| String     | The name of the repository (required)
| number        | Number     | The number of the milestone. (required)

## Github.updateIssue
Edit an issue

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name. (required)
| repositoryName| String     | The name of the repository. (required)
| number        | Number     | The number of the issue. (required)
| title         | String     | The title of the issue. (optional)
| body          | String     | The contents of the issue. (optional)
| state         | String     | State of the issue. Either open or closed. (optional)
| milestone     | Number     | Milestone to associate this issue with. (optional)
| labels        | JSON       | Array of strings - Labels to associate with this issue. (optional)
| assignees     | JSON       | Logins for Users to assign to this issue. Pass one or more user logins to replace the set of assignees on this Issue. .Send an empty array ([]) to clear all assignees from the Issue. NOTE: Only users with push access can set assignees for new issues. Assignees are silently dropped otherwise. (optional)

## Github.updateIssueComment
Edit a comment

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name. (required)
| repositoryName| String     | The name of the repository. (required)
| id            | String     | The ID of the comment. (required)
| body          | String     | The contents of the comment. (required). Ex.: {"body": "Me too"}

## Github.getIssue
Get a single issue

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name. (required)
| repositoryName| String     | The name of the repository. (required)
| number        | Number     | The number of the issue. (required)

## Github.getAllIssues
List all issues across all the authenticated user's visible repositories including owned repositories, member repositories, and organization repositories

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| filter     | String     | Indicates which sorts of issues to return. Can be one of: * assigned: Issues assigned to you, * created: Issues created by you, * mentioned: Issues mentioning you, * subscribed: Issues you're subscribed to updates for, * all: All issues the authenticated user can see, regardless of participation or creation, Default: assigned (optional)
| state      | String     | Indicates the state of the issues to return. Can be either open, closed, or all. Default: open (optional)
| labels     | String     | String list of comma separated Label names. Example: bug,ui,@high (optional)
| sort       | String     | What to sort results by. Can be either created, updated, comments. Default: created (optional)
| direction  | String     | The direction of the sort. Can be either asc or desc. Default: desc (optional)
| since      | String     | Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ (optional)
| page       | Number     | Page number of the results to fetch. (optional)
| perPage    | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.getAssignees
List assignees

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name. (required)
| repositoryName| String     | The name of the repository. (required)

## Github.getIssueComment
Get a single comment

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name. (required)
| repositoryName| String     | The name of the repository. (required)
| id            | String     | The ID of the comment. (required)

## Github.getIssueComments
List comments on an issue

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name. (required)
| repositoryName| String     | The name of the repository. (required)
| number        | Number     | The number of the issue. (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.getIssuesCommentsForRepository
List comments in a repository

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name. (required)
| repositoryName| String     | The name of the repository. (required)
| sort          | String     | Either created or updated. Default: created (optional)
| direction     | String     | Either asc or desc. Ignored without the sort parameter. (optional)
| since         | String     | Only comments updated at or after this time are returned. Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ (optional)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.getIssueEvent
Get a single event

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name. (required)
| repositoryName| String     | The name of the reposotiry. (required)
| id            | String     | The ID of the event. (required)

## Github.getIssueEvents
List events for an issue

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name. (required)
| repositoryName| String     | The name of the repository. (required)
| number        | Number     | The number of the issue. (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.getIssueEventsForRepository
List events for a repository

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name. (required)
| repositoryName| String     | The name of the repository. (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.getIssueEventsTimeline
List events for an issue. (In preview period. See README.)

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name. (required)
| repositoryName| String     | The name of the repository. (required)
| number        | Number     |  The number of the issue.(required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.getIssuesForOrganization
List all issues for a given organization for the authenticated user

| Field           | Type       | Description
|-----------------|------------|----------
| accessToken     | credentials| The access_token obtained from Github.
| organizationName| String     | The name of the organization. (required)
| filter          | String     | Indicates which sorts of issues to return. Can be one of: * assigned: Issues assigned to you, * created: Issues created by you, * mentioned: Issues mentioning you, * subscribed: Issues you're subscribed to updates for, * all: All issues the authenticated user can see, regardless of participation or creation, Default: assigned (optional)
| state           | String     | Indicates the state of the issues to return. Can be either open, closed, or all. Default: open (optional)
| labels          | String     | String list of comma separated Label names. Example: bug,ui,@high (optional)
| sort            | String     | What to sort results by. Can be either created, updated, comments. Default: created (optional)
| direction       | String     | The direction of the sort. Can be either asc or desc. Default: desc (optional)
| since           | String     | Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ (optional)
| page            | Number     | Page number of the results to fetch. (optional)
| perPage         | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.getIssuesForRepository
List issues for a repository

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name. (required)
| repositoryName| String     | The name of the repository. (required)
| milestone     | String     | If an integer is passed, it should refer to a milestone by its number field. If the string * is passed, issues with any milestone are accepted. If the string none is passed, issues without milestones are returned. (optional)
| state         | String     | Indicates the state of the issues to return. Can be either open, closed, or all. Default: open (optional)
| assignee      | String     | String User login, `none` for Issues with no assigned User. `*` for Issues with any assigned User. (optional)
| creator       | String     | The user that created the issue. (optional)
| mentioned     | String     | A user that's mentioned in the issue. (optional)
| labels        | String     | String list of comma separated Label names. Example: bug,ui,@high (optional)
| sort          | String     | What to sort results by. Can be either created, updated, comments. Default: created (optional)
| direction     | String     | The direction of the sort. Can be either asc or desc. Default: desc (optional)
| since         | String     | Only issues updated at or after this time are returned. Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ (optional)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.getUserIssues
List all issues across owned and member repositories for the authenticated user

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| filter     | String     | Indicates which sorts of issues to return. Can be one of: * assigned: Issues assigned to you, * created: Issues created by you, * mentioned: Issues mentioning you, * subscribed: Issues you're subscribed to updates for, * all: All issues the authenticated user can see, regardless of participation or creation, Default: assigned (optional)
| state      | String     | Indicates the state of the issues to return. Can be either open, closed, or all. Default: open (optional)
| labels     | String     | String list of comma separated Label names. Example: bug,ui,@high (optional)
| sort       | String     | What to sort results by. Can be either created, updated, comments. Default: created (optional)
| direction  | String     | The direction of the sort. Can be either asc or desc. Default: desc (optional)
| since      | String     | Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ (optional)
| page       | Number     | Page number of the results to fetch. (optional)
| perPage    | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.getIssueLabels
List labels on an issue

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name. (required)
| repositoryName| String     | The name of the repository. (required)
| number        | Number     | The number of the issue. (required)

## Github.getLabel
Get a single label

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name. (required)
| repositoryName| String     | The name of the repository. (required)
| name          | String     | The name of the label. (required)

## Github.getRepositoryLabels
List all labels for this repository

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name. (required)
| repositoryName| String     | The name of the repository. (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.getMilestone
Get a single milestone

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name. (required)
| repositoryName| String     | The name of the repository. (required)
| number        | Number     | The number of the milestone. (required)

## Github.getMilestoneLabels
Get labels for every issue in a milestone

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name. (required)
| repositoryName| String     | The name of the repository. (required)
| number        | Number     | The number of the milestone. (required)

## Github.getRepositoryMilestones
List milestones for a repository

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| state         | String     | The state of the milestone. Either open, closed, or all. Default: open (optional)
| sort          | String     | What to sort results by. Either due_on or completeness. Default: due_on (optional)
| direction     | String     | The direction of the sort. Either asc or desc. Default: asc (optional)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.lockIssue
Users with push access can lock an issue's conversation.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | he owner name (required)
| repositoryName| String     | The name of the repository (required)
| number        | Number     | The number of the issue. (required)

## Github.removeIssueAllLabels
Remove all labels from an issue

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| number        | Number     | The number of the issue. (required)

## Github.removeAssigneesFromIssue
Remove assignees from an issue.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| number        | Number     | The number of the issue. (required)
| assignees     | JSON       | Logins for the users that should be removed from the issue. (required). Ex.: "assignees": ["hubot", "other_assignee"]

## Github.removeIssueLabel
Remove a label from an issue

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| number        | Number     | The number of the issue. (required)
| name          | String     | The name of the label. (required)

## Github.replaceAllIssueLabels
Replace all labels for an issue

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| number        | Number     | The number of the issue. (required)
| body          | JSON       | Array of the labels that should be replaced for the issue. Sending an empty array ([]) will remove all Labels from the Issue. (required)

## Github.unlockIssue
Users with push access can unlock an issue's conversation.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| number        | Number     | The number of the issue (required)

## Github.updateLabel
Update a label

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| oldname       | String     | The old name of the label. (required)
| name          | String     | The new name of the label. (required)
| color         | String     | 6 character hex code, without a leading #. (required)

## Github.updateMilestone
Update a milestone

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| number        | Number     | The number of the milestone (required)
| title         | String     | The title of the milestone. (required)
| state         | String     | The state of the milestone. Either open or closed. Default: open (optional)
| description   | String     | A description of the milestone. (optional)
| dueOn         | String     | The milestone due date. Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ (optional)

## Github.cancelImport
Cancel an import. (In preview period. See README.)

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)

## Github.deleteMigrationArchive
Delete a migration archive

| Field           | Type       | Description
|-----------------|------------|----------
| accessToken     | credentials| The access_token obtained from Github.
| organizationName| String     | The name of the organization (required)
| id              | String     | The migration ID. (required)

## Github.getImportCommitAuthors
Get import commit authors. (In preview period. See README.)

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| since         | String     | Only authors found after this id are returned. Provide the highest author ID you've seen so far. New authors may be added to the list at any point while the importer is performing the raw step. (optional)

## Github.getImportProgress
Get import progress. (In preview period. See README.)

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)

## Github.getLargeImportFiles
List files larger than 100MB found during the import. (In preview period. See README.)

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| user       | String     | The owner name (required)
| name       | String     | The name of the system to import from (required). Supported Subversion, Mercurial, and TFS.

## Github.getMigrationArchiveLink
Get the URL to a migration archive.

| Field           | Type       | Description
|-----------------|------------|----------
| accessToken     | credentials| The access_token obtained from Github.
| organizationName| String     | The name of the organization (required)
| id              | String     | The ID of the migration (required)

## Github.getMigrationStatus
Get the status of a migration

| Field           | Type       | Description
|-----------------|------------|----------
| accessToken     | credentials| The access_token obtained from Github.
| organizationName| String     | The name of the organization (required)
| id              | String     | The ID of the migration (required)

## Github.getMigrations
Get a list of migrations

| Field           | Type       | Description
|-----------------|------------|----------
| accessToken     | credentials| The access_token obtained from Github.
| organizationName| String     | The name of the organization (required)
| page            | Number     | Page number of the results to fetch. (optional)
| perPage         | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.mapImportCommitAuthor
Map a commit author. (In preview period. See README.)

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| authorId      | String     | The commit author id. (required)
| email         | String     | The new Git author email. (optional)
| name          | String     | The new Git author name. (optional)

## Github.setImportLfsPreference
Set import LFS preference. (In preview period. See README.)

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| user       | String     | The owner name (required)
| systemName | String     | The name of the system to import from (required). Supported Subversion, Mercurial, and TFS.

## Github.startImport
Start an import. (In preview period. See README.)

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| vcsUrl        | String     | The URL of the originating repository. (required)
| vcs           | String     | The originating VCS type. Can be one of subversion, git, mercurial, or tfvc. Please be aware that without this parameter, the import job will take additional time to detect the VCS type before beginning the import. This detection step will be reflected in the response. (optional)
| vcsUsername   | String     | If authentication is required, the username to provide to vcs_url. (optional)
| vcsPassword   | String     | If authentication is required, the password to provide to vcs_url. (optional)
| tfvcProject   | String     | For a tfvc import, the name of the project that is being imported. (optional)

## Github.startMigration
Start a migration.

| Field             | Type       | Description
|-------------------|------------|----------
| accessToken       | credentials| The access_token obtained from Github.
| organizationName  | String     | The name of the organization (required)
| repositories      | JSON       | A list of arrays indicating which repositories should be migrated. (required)
| lockRepositories  | String     | Indicates whether repositories should be locked (to prevent manipulation) while migrating data. Default: false. (optional)
| excludeAttachments| String     | Indicates whether attachments should be excluded from the migration (to reduce migration archive file size). Default: false. (optional)

## Github.unlockRepositoryLockedForMigration
Unlock a repository that was locked for migration.

| Field           | Type       | Description
|-----------------|------------|----------
| accessToken     | credentials| The access_token obtained from Github.
| organizationName| String     | The name of the organization (required)
| id              | String     | The ID of the migration (required)
| repositoryName  | String     | The name of the repository (required)

## Github.updateImport
Update existing import. (In preview period. See README.)

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| data          | String     | Json object with data to be updating (optional). If no data are provided, the import will be restarted. Ex.: {"vcs": "tfvc", "tfvc_project": "project1", "human_name": "project1 (tfs)"}

## Github.getEmojis
Lists all the emojis available to use on GitHub.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.

## Github.getGitignoreTemplate
Get a single gitignore template

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| name       | String     | The name of the .gitignore template to get e.g. 'C' (required)

## Github.getGitignoreTemplates
Lists available gitignore templates

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.

## Github.getLicense
Get an individual license. (In preview period. See README.)

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| license    | String     | The name of the license. Ex: mit (required)

## Github.getLicenses
List all licenses. (In preview period. See README.)

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.

## Github.getMeta
This endpoint provides information about GitHub.com, the service. Or, if you access this endpoint on your organization's GitHub Enterprise installation, this endpoint provides information about that installation.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.

## Github.getRateLimit
Get your current rate limit status

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.

## Github.getRepoLicenseMisc
Get the contents of a repository's license. (In preview period. See README.)

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)

## Github.renderMarkdown
Render an arbitrary Markdown document

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| text       | String     | The Markdown text to render (required)
| mode       | String     | The rendering mode, `markdown` to render a document as plain Markdown, just like README files are rendered. `gfm` to render a document as user-content, e.g. like user comments or issues are rendered. In GFM mode, hard line breaks are always taken into account, and issue and user mentions are linked accordingly. (optional)
| context    | String     | The repository context. Only taken into account when rendering as `gfm` (optional)

## Github.renderMarkdownRaw
Render a Markdown document in raw mode

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| data       | String     | Raw data to send as the body of the request (required)

## Github.addOrganizationMembership
Add or update organization membership

| Field           | Type       | Description
|-----------------|------------|----------
| accessToken     | credentials| The access_token obtained from Github.
| organizationName| String     | The name of the organization (required)
| user            | String     | The user name (required)
| role            | String     | The role to give the user in the organization. (required). * admin - The user will become an owner of the organization, * member - The user will become a non-owner member of the organization. Default: member

## Github.addOrganizationTeamMembership
Add team membership

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| id         | String     | The team ID (required)
| user       | String     | The user name (required)
| role       | String     | The role that this user should have in the team. (optional). The role that this user should have in the team. Can be one of: * member - a normal member of the team, * maintainer - a team maintainer. Able to add/remove other team members, promote other team members to team maintainer, and edit the team's name and description. Default: member

## Github.addOrganizationTeamRepository
Add team repository

| Field           | Type       | Description
|-----------------|------------|----------
| accessToken     | credentials| The access_token obtained from Github.
| id              | String     | The team ID (required)
| organizationName| String     | The name of the organization (required)
| repositoryName  | String     | The name of the repository (required)
| permission      | String     | `pull` - team members can pull, but not push or administer this repository, `push` - team members can pull and push, but not administer this repository, `admin` - team members can pull, push and administer this repository. (optional)

## Github.checkOrganizationMembership
Check membership

| Field           | Type       | Description
|-----------------|------------|----------
| accessToken     | credentials| The access_token obtained from Github.
| organizationName| String     | The name of the organization (required)
| user            | String     | The user name (required)

## Github.checkOrganizationPublicMembership
Check public membership

| Field           | Type       | Description
|-----------------|------------|----------
| accessToken     | credentials| The access_token obtained from Github.
| organizationName| String     | The name of the organization (required)
| user            | String     | The user name (required)

## Github.checkOrganizationTeamRepository
Check if a team manages a repository

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| id            | String     | The team ID (required)
| user          | String     | The user name (required)
| repositoryName| String     | The name of the repository (required)

## Github.cancelOrganizationMembership
Conceal a user's membership

| Field           | Type       | Description
|-----------------|------------|----------
| accessToken     | credentials| The access_token obtained from Github.
| organizationName| String     | The name of the organization (required)
| user            | String     | The user name (required)

## Github.createOrganizationHook
Create a hook

| Field           | Type       | Description
|-----------------|------------|----------
| accessToken     | credentials| The access_token obtained from Github.
| organizationName| String     | The name of the organization (required)
| name            | String     | Must be passed as "web". (required)
| config          | JSON       | Key/value pairs to provide settings for this webhook (required). The config object can accept the following keys: *url (Required) - The URL to which the payloads will be delivered; *content_type (string) - The media type used to serialize the payloads. Supported values include json and form. The default is form; *secret (string) - If provided, payloads will be delivered with an X-Hub-Signature header. The value of this header is computed as the [HMAC hex digest of the body, using the secret as the key][hub-signature]; *insecure_ssl (string) - Determines whether the SSL certificate of the host for url will be verified when delivering payloads. Supported values include "0" (verification is performed) and "1" (verification is not performed). The default is "0". We strongly recommend not setting this to "1" as you are subject to man-in-the-middle and other attacks.
| events          | JSON       | Determines what events the hook is triggered for. Default: ["push"]. (optional)
| active          | String     | Determines whether the hook is actually triggered on pushes. (optional)

## Github.createOrganizationTeam
Create team

| Field           | Type       | Description
|-----------------|------------|----------
| accessToken     | credentials| The access_token obtained from Github.
| organizationName| String     | The name of the organization (required)
| name            | String     | The name of the team. (required)
| description     | String     | The description of the team. (optional)
| repoNames       | JSON       | The full name (e.g., "organization-name/repository-name") of repositories to add the team to. (optional)
| privacy         | String     | The level of privacy this team should have. (optional). Can be one of: * secret - only visible to organization owners and members of this team. * closed - visible to all members of this organization. Default: secret

## Github.deleteOrganizationHook
Delete a hook

| Field           | Type       | Description
|-----------------|------------|----------
| accessToken     | credentials| The access_token obtained from Github.
| organizationName| String     | The name of the organization (required)
| id              | String     | The hook ID (required)

## Github.deleteOrganizationTeam
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| id         | String     | The team ID (required)

## Github.deleteOrganizationTeamRepository
Remove team repository

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| id            | String     | The team ID (required)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)

## Github.editOrganizationHook
Edit a hook

| Field           | Type       | Description
|-----------------|------------|----------
| accessToken     | credentials| The access_token obtained from Github.
| organizationName| String     | The name of the organization (required)
| id              | String     | The hook ID (required)
| config          | JSON       | Key/value pairs to provide settings for this webhook (required). The config object can accept the following keys: *url (Required) - The URL to which the payloads will be delivered; *content_type (string) - The media type used to serialize the payloads. Supported values include json and form. The default is form; *secret (string) - If provided, payloads will be delivered with an X-Hub-Signature header. The value of this header is computed as the [HMAC hex digest of the body, using the secret as the key][hub-signature]; *insecure_ssl (string) - Determines whether the SSL certificate of the host for url will be verified when delivering payloads. Supported values include "0" (verification is performed) and "1" (verification is not performed). The default is "0". We strongly recommend not setting this to "1" as you are subject to man-in-the-middle and other attacks.
| events          | JSON       | Determines what events the hook is triggered for. Default: ["push"]. (optional)
| active          | String     | Determines whether the hook is actually triggered on pushes. (optional)

## Github.editOrganizationTeam
Edit team

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| id         | String     | The team ID (required)
| name       | String     | The name of the team. (required)
| description| String     | The description of the team. (optional)
| privacy    | String     | The level of privacy this team should have. (optional). Can be one of: * secret - only visible to organization owners and members of this team. * closed - visible to all members of this organization. Default: secret

## Github.getOrganization
Get an organization

| Field           | Type       | Description
|-----------------|------------|----------
| accessToken     | credentials| The access_token obtained from Github.
| organizationName| String     | The name of the organization (required)
| page            | Number     | Page number of the results to fetch. (optional)
| perPage         | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.getAllOrganizations
List all organizations

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| since      | String     | The integer ID of the last Organization that you've seen. (optional)
| page       | Number     | Page number of the results to fetch. (optional)
| perPage    | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.getUserOrganizations
List organizations for the authenticated user.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| user       | String     | The user name (required)
| page       | Number     | Page number of the results to fetch. (optional)
| perPage    | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.getOrganizationHook
Get single hook

| Field           | Type       | Description
|-----------------|------------|----------
| accessToken     | credentials| The access_token obtained from Github.
| organizationName| String     | The name of the organization (required)
| id              | String     | The hook ID (required)

## Github.getOrganizationHooks
List hooks

| Field           | Type       | Description
|-----------------|------------|----------
| accessToken     | credentials| The access_token obtained from Github.
| organizationName| String     | The name of the organization (required)
| page            | Number     | Page number of the results to fetch. (optional)
| perPage         | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.getOrganizationMembers
Members list

| Field           | Type       | Description
|-----------------|------------|----------
| accessToken     | credentials| The access_token obtained from Github.
| organizationName| String     | The name of the organization (required)
| filter          | String     | Filter members returned in the list. (optional). Can be one of: * 2fa_disabled: Members without two-factor authentication enabled. Available for organization owners. * all: All members the authenticated user can see.
| role            | String     | Filter members returned by their role. (optional). Can be one of: * all: All members of the organization, regardless of role. * admin: Organization owners. * member: Non-owner organization members. Default: all
| page            | Number     | Page number of the results to fetch. (optional)
| perPage         | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.getOrganizationMembership
Get organization membership

| Field           | Type       | Description
|-----------------|------------|----------
| accessToken     | credentials| The access_token obtained from Github.
| organizationName| String     | The name of the organization (required)
| user            | String     | The user name (required)

## Github.getOrganizationMemberships
List your organization memberships

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| state      | String     | Indicates the state of the memberships to return. Can be either active or pending. If not specified, both active and pending memberships are returned. (optional)

## Github.getOrganizationPublicMembers
Public members list

| Field           | Type       | Description
|-----------------|------------|----------
| accessToken     | credentials| The access_token obtained from Github.
| organizationName| String     | The name of the organization (required)

## Github.getOrganizationTeam
Get team

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| id         | String     | The team ID (required)

## Github.getOrganizationTeamMembers
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| id         | String     |  The team ID(required)
| role       | String     | Filters members returned by their role in the team. (optional). Can be one of: * member - normal members of the team. * maintainer - team maintainers. * all - all members of the team. Default: all
| page       | Number     | Page number of the results to fetch. (optional)
| perPage    | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.getOrganizationTeamMembership
Get team membership

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| id         | String     | The team ID (required)
| user       | String     | The user name (required)

## Github.getOrganizationTeamRepositories
Get team repos

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| id         | String     | The team ID (required)
| page       | Number     | Page number of the results to fetch. (optional)
| perPage    | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.getOrganizationTeams
List teams

| Field           | Type       | Description
|-----------------|------------|----------
| accessToken     | credentials| The access_token obtained from Github.
| organizationName| String     | The name of the organization (required)
| page            | Number     | Page number of the results to fetch. (optional)
| perPage         | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.pingOrganizationHook
Ping a hook

| Field           | Type       | Description
|-----------------|------------|----------
| accessToken     | credentials| The access_token obtained from Github.
| organizationName| String     | The name of the organization (required)
| id              | String     | The hook ID (required)

## Github.publicizeOrganizationMembership
Publicize a user's membership

| Field           | Type       | Description
|-----------------|------------|----------
| accessToken     | credentials| The access_token obtained from Github.
| organizationName| String     | The name of the organization (required)
| user            | String     | The user name (required)

## Github.removeOrganizationMember
Remove a member

| Field           | Type       | Description
|-----------------|------------|----------
| accessToken     | credentials| The access_token obtained from Github.
| organizationName| String     | The name of the organization (required)
| user            | String     | The user name (required)

## Github.removeOrganizationMembership
Remove organization membership

| Field           | Type       | Description
|-----------------|------------|----------
| accessToken     | credentials| The access_token obtained from Github.
| organizationName| String     | The name of the organization (required)
| user            | String     | The user name (required)

## Github.removeOrganizationTeamMembership
Remove team membership

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| id         | String     | The team ID (required)
| user       | String     | The user name (required)

## Github.updateOrganization
Edit an organization

| Field           | Type       | Description
|-----------------|------------|----------
| accessToken     | credentials| The access_token obtained from Github.
| organizationName| String     | The name of the organization (required)
| billingEmail    | String     | Billing email address. This address is not publicized. (optional)
| company         | String     | The company name. (optional)
| email           | String     | The publicly visible email address. (optional)
| location        | String     | The location. (optional)
| name            | String     | The shorthand name of the company. (optional)
| description     | String     | The description of the company. (optional)

## Github.checkMergedPullRequest
Get if a pull request has been merged

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| number        | Number     | The number of the pull request (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.createPullRequest
Create a pull request

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| title         | String     | The title of the pull request. (required)
| head          | String     | The branch (or git ref) where your changes are implemented. (required). For cross-repository pull requests in the same network, namespace head with a user like this: username:branch.
| base          | String     | The branch (or git ref) you want your changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repositoryName that requests a merge to a base of another repositoryName. (required)
| body          | String     | The contents of the pull request. (optional)

## Github.createPullRequestComment
Create a comment

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| number        | Number     | The number of the pull request (required)
| body          | String     | The text of the comment (required)
| commitId      | String     | Sha of the commit to comment on. (required)
| path          | String     | Relative path of the file to comment on. (required)
| position      | Number     | Column index in the diff to comment on. (required)

## Github.createPullRequestCommentReply
Reply to existing pull request comment

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| number        | Number     | The number of the pull request (required)
| body          | String     | The text of the comment (required)
| inReplyTo     | Number     | The comment id to reply to. (required)

## Github.createPullRequestFromIssue
Create a pull request from an existing issue

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| issue         | Number     | The issue number in this repository to turn into a Pull Request. (required)
| head          | String     | The branch (or git ref) where your changes are implemented. (required)
| base          | String     | The branch (or git ref) you want your changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repositoryName that requests a merge to a base of another repositoryName. (required)

## Github.deletePullRequestComment
Delete a comment

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| number        | Number     | The number of the comment (required)

## Github.editPullRequestComment
Edit a comment

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| number        | Number     | The number of the comment (required)
| body          | String     | The text of the comment (required)

## Github.getPullRequest
Get a single pull request

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| number        | Number     | The number of the pull request (required)

## Github.getAllPullRequests
List pull requests

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| state         | String     | Either open, closed, or all to filter by state. Default: open (optional)
| head          | String     | Filter pulls by head user and branch name in the format of user:ref-name. Example: github:new-script-format. (optional)
| base          | String     | Filter pulls by base branch name. Example: gh-pages. (optional)
| sort          | String     | Possible values are: `created`, `updated`, `popularity`, `long-running`, Default: `created` (optional)
| direction     | String     | The direction of the sort. Can be either asc or desc. Default: desc, when sort is created or sort is not specified, otherwise asc. (optional)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.getPullRequestComment
Get a single comment

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| number        | Number     | The number of the comment (required)

## Github.getPullRequestComments
List comments on a pull request

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| number        | Number     | The number of the pull request (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.getPullRequestCommentsForRepository
List comments in a repository

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| sort          | String     | Possible values are: `created`, `updated`, Default: `created` (optional)
| direction     | String     | Can be either asc or desc. Ignored without sort parameter. (optional)
| since         | String     | Only comments updated at or after this time are returned. Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ (optional)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.getPullRequestCommits
List commits on a pull request

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| number        | Number     | The number of the pull request (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.getPullRequestFiles
List pull requests files

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| number        | Number     | The number of the pull request (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.mergePullRequest
Merge a pull request (Merge Button)

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| number        | Number     | The number of the pull request (required)
| commitTitle   | String     | Title for the automatic commit message. (In preview period. See README.) (optional)
| commitMessage | String     | Extra detail to append to automatic commit message. (optional)
| sha           | String     | SHA that pull request head must match to allow merge (optional)
| mergeMethod   | String     | Merge method to use. Possible values are `merge`, `squash`, or `rebase`. (In preview period. See README.) (optional)

## Github.updatePullRequest
Update a pull request

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| number        | Number     | The number of the pull request (required)
| title         | String     | The title of the pull request. (optional)
| body          | String     | The contents of the pull request. (optional)
| state         | String     | State of this Pull Request. Either open or closed. (optional)
| base          | String     | The name of the branch you want your changes pulled into. This should be an existing branch on the current repository. You cannot update the base branch on a pull request to point to another repository. (optional)

## Github.createReactionForCommitComment
Create reaction for a commit comment. (In preview period. See README.)

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The comment ID (required)
| content       | String     | The reaction type. (required)

## Github.createReactionForIssue
Create reaction for an issue. (In preview period. See README.)

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | Te owner name (required)
| repositoryName| String     | The name of the repository (required)
| number        | Number     | Tne number of the issue (required)
| content       | String     | The reaction type. (required)

## Github.createReactionForIssueComment
Create reaction for an issue comment. (In preview period. See README.)

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The comment ID (required)
| content       | String     | The reaction type. (required)

## Github.createReactionForPullRequestReviewComment
Create reaction for a pull request review comment. (In preview period. See README.)

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The comment ID (required)
| content       | String     | The reaction type. (required)

## Github.deleteReaction
Delete a reaction. (In preview period. See README.)

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| id         | String     | The reaction ID (required)

## Github.getReactionForCommitComment
List reactions for a commit comment. (In preview period. See README.)

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The comment ID (required)
| content       | String     | Indicates which type of reaction to return. (optional)

## Github.getReactionForIssue
List reactions for an issue. (In preview period. See README.)

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| number        | Number     | The number of the issue (required)
| content       | String     | Indicates which type of reaction to return. (optional)

## Github.getReactionForIssueComment
List reactions for an issue comment. (In preview period. See README.)

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The comment ID (required)
| content       | String     | Indicates which type of reaction to return. (optional)

## Github.getReactionForPullRequestReviewComment
List reactions for a pull request review comment. (In preview period. See README.)

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The comment ID (required)
| content       | String     | Indicates which type of reaction to return. (optional)

## Github.addRepositoryCollaborator
Add user as a collaborator

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| collabuser    | String     | The name of the collaborator (required)
| permission    | String     | `pull` - can pull, but not push to or administer this repository, `push` - can pull and push, but not administer this repository, `admin` - can pull, push and administer this repository. (optional)

## Github.addProtectedBranchRequiredStatusChecksContexts
Add required status checks contexts of protected branch. (In preview period. See README.)

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| branch        | String     | The branch name (required)
| body          | JSON       | An array of protected branch required status checks contexts (e.g. continuous-integration/jenkins). (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.addProtectedBranchTeamRestrictions
Add team restrictions of protected branch. (In preview period. See README.)

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| branch        | String     | The name of the branch (required)
| body          | JSON       | An array of team slugs (e.g. justice-league). (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.addProtectedBranchUserRestrictions
Add user restrictions of protected branch. (In preview period. See README.)

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| branch        | String     | The name of the branch (required)
| body          | JSON       | An array of team slugs (e.g. justice-league). (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.checkRepositoryCollaborator
Check if user is a collaborator.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| collabuser    | String     | The name of the collaborator (required)

## Github.compareRepositoryCommits
Compare two commits.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| base          | String     | The branch (or git ref) you want your changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repositoryName that requests a merge to a base of another repositoryName. (required)
| head          | String     | The branch (or git ref) where your changes are implemented. (required)

## Github.createRepository
Create a new repository for the authenticated user.

| Field            | Type       | Description
|------------------|------------|----------
| accessToken      | credentials| The access_token obtained from Github.
| name             | String     | The name of the repository (required)
| description      | String     | A short description of the repository (optional)
| homepage         | String     | A URL with more information about the repository (optional)
| private          | String     | True to create a private repository, false to create a public one. Creating private repositories requires a paid GitHub account. Default is false. (optional)
| hasIssues        | String     | True to enable issues for this repository, false to disable them. Default is true. (optional)
| hasWiki          | String     | True to enable the wiki for this repository, false to disable it. Default is true. (optional)
| hasDownloads     | String     | True to enable downloads for this repository, false to disable them. Default is true. (optional)
| teamId           | String     | The id of the team that will be granted access to this repository. This is only valid when creating a repository in an organization. (optional)
| autoInit         | String     | True to create an initial commit with empty README. Default is false (optional)
| gitignoreTemplate| String     | Desired language or platform .gitignore template to apply. Ignored if auto_init parameter is not provided. (optional)
| licenseTemplate  | String     | Desired LICENSE template to apply. Use the name of the template without the extension. For example, "mit" or "mozilla". (optional)
| allowSquashMerge | String     | Either true to allow squash-merging pull requests, or false to prevent squash-merging. Default: true. (In preview period. See README.) (optional)
| allowMergeCommit | String     | Either true to allow merging pull requests with a merge commit, or false to prevent merging pull requests with merge commits. Default: true. (In preview period. See README.) (optional)
| allowRebaseMerge | String     | Either true to allow rebase-merging pull requests, or false to prevent rebase-merging. Default: true. (In preview period. See README.) (optional)

## Github.createRepositoryCommitComment
Create a commit comment.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| sha           | String     | SHA1 hash of the commit (required)
| body          | String     | The contents of the comment. (required)
| path          | String     | Relative path of the file to comment on. (optional)
| position      | Number     | Line index in the diff to comment on. (optional)

## Github.createRepositoryDeployment
Create a deployment.

| Field                | Type       | Description
|----------------------|------------|----------
| accessToken          | credentials| The access_token obtained from Github.
| user                 | String     | The owner name (required)
| repositoryName       | String     | The name of the repository (required)
| ref                  | String     | The ref to deploy. This can be a branch, tag, or sha. (required)
| task                 | String     | The named task to execute. e.g. deploy or deploy:migrations. Default: deploy (optional)
| autoMerge            | String     | Optional parameter to merge the default branch into the requested ref if it is behind the default branch. Default: true (optional)
| requiredContexts     | JSON       | Optional array of status contexts verified against commit status checks. If this parameter is omitted from the parameters then all unique contexts will be verified before a deployment is created. To bypass checking entirely pass an empty array. Defaults to all unique contexts. (optional)
| payload              | String     | Optional JSON payload with extra information about the deployment. Default: "" (optional)
| environment          | String     | The name of the environment that was deployed to. e.g. staging or production. Default: none. (optional)
| description          | String     | Optional short description. Default: "" (optional)
| transientEnvironment | String     | Specifies if the given environment is specific to the deployment and will no longer exist at some point in the future. Default: false. (In preview period. See README.) (optional)
| productionEnvironment| String     | Specifies if the given environment is a one that end-users directly interact with. Default: true when environment is `production` and false otherwise. (In preview period. See README.) (optional)

## Github.createRepositoryDeploymentStatus
Create a deployment status.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The deployment ID (required)
| state         | String     | The state of the status. Can be one of pending, success, error, or failure. (optional)
| targetUrl     | String     | The target URL to associate with this status. This URL should contain output to keep the user updated while the task is running or serve as historical information for what happened in the deployment. Default: "" (optional)
| logUrl        | String     | Functionally equivalent to target_url. Default: "". (In preview period. See README.) (optional)
| description   | String     | A short description of the status. Default: "" (optional)
| environmentUrl| String     | URL for accessing the deployment environment. Default: "". (In preview period. See README.) (optional)
| autoInactive  | String     | When true the new `inactive` status is added to all other non-transient, non-production environment deployments with the same repository and environment name as the created status's deployment. Default: true. (In preview period. See README.) (optional)

## Github.createRepositoryFile
Create a new file in the given repository.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| path          | String     | The content path. (required)
| message       | String     | The commit message. (required)
| content       | String     | The new file content, Base64 encoded. (required)
| branch        | String     | The branch name. If not provided, uses the repository’s default branch (usually master). (optional)
| committer     | JSON       | Object containing information about the committer. You must provide values for both name and email (optional). Ex.: "committer": {"name": "Scott Chacon", "email": "schacon@gmail.com"}

## Github.createRepositoryForOrganization
Create a new repository for an organization.

| Field            | Type       | Description
|------------------|------------|----------
| accessToken      | credentials| The access_token obtained from Github.
| organizationName | String     | The name of the organization (required)
| name             | String     | The name of the repository (required)
| description      | String     | A short description of the repository (optional)
| homepage         | String     | A URL with more information about the repository (optional)
| private          | String     | True to create a private repository, false to create a public one. Creating private repositories requires a paid GitHub account. Default is false. (optional)
| hasIssues        | String     | True to enable issues for this repository, false to disable them. Default is true. (optional)
| hasWiki          | String     | True to enable the wiki for this repository, false to disable it. Default is true. (optional)
| hasDownloads     | String     | True to enable downloads for this repository, false to disable them. Default is true. (optional)
| teamId           | Number     | The id of the team that will be granted access to this repository. This is only valid when creating a repositoryName in an organization. (optional)
| autoInit         | String     | True to create an initial commit with empty README. Default is false (optional)
| gitignoreTemplate| String     | Desired language or platform .gitignore template to apply. Ignored if auto_init parameter is not provided. (optional)
| licenseTemplate  | String     | Desired LICENSE template to apply. Use the name of the template without the extension. For example, "mit" or "mozilla". (optional)
| allowSquashMerge | String     | Either true to allow squash-merging pull requests, or false to prevent squash-merging. Default: true. (In preview period. See README.) (optional)
| allowMergeCommit | String     | Either true to allow merging pull requests with a merge commit, or false to prevent merging pull requests with merge commits. Default: true. (In preview period. See README.) (optional)
| allowRebaseMerge | String     | Either true to allow rebase-merging pull requests, or false to prevent rebase-merging. Default: true. (In preview period. See README.) (optional)

## Github.createRepositoryHook
Create a hook.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| name          | String     | Use web for a webhook or use the name of a valid service. (required)
| config        | JSON       | A Hash containing key/value pairs to provide settings for this hook. These settings vary between the services and are defined in the github-services repositoryName. Booleans are stored internally as `1` for true, and `0` for false. Any JSON true/false values will be converted automatically. (required)
| events        | JSON       | Determines what events the hook is triggered for. Default: `['push']`. (optional)
| active        | String     | Determines whether the hook is actually triggered on pushes. (optional)

## Github.createRepositoryKey
Add a new deploy key.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| title         | String     | A name for the key. (required)
| key           | String     | The contents of the key. (required)
| readOnly      | String     | If true, the key will only be able to read repository contents. Otherwise, the key will be able to read and write. (optional)

## Github.createRepositoryProject
Create a project.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| name          | String     | The name of the project (required)
| body          | String     | The body of the project (required)

## Github.createRepositoryProjectCard
Create a project card.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The column ID (required)
| note          | String     | The note of the card. (optional)
| contentId     | String     | The id of the Issue or Pull Request to associate with this card. (optional)
| contentType   | String     | The type of content to associate with this card. Can be either 'Issue' or 'PullRequest'. (optional)

## Github.createRepositoryProjectColumn
Create a project column.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| number        | Number     | The number of the project (required)
| name          | String     | The name of the column. (required)

## Github.createRepositoryRelease
Create a release.

| Field          | Type       | Description
|----------------|------------|----------
| accessToken    | credentials| The access_token obtained from Github.
| user           | String     | The owner name (required)
| repositoryName | String     | The name of the repository (required)
| tagName        | String     | String of the tag (required)
| targetCommitish| String     | Specifies the commitish value that determines where the Git tag is created from. Can be any branch or commit SHA. Unused if the Git tag already exists. Default: the repository's default branch (usually master). (optional)
| name           | String     | The name of the release (optional)
| body           | String     | Text describing the contents of the tag. (optional)
| draft          | String     | true to create a draft (unpublished) release, false to create a published one. Default: false (optional)
| prerelease     | String     | true to identify the release as a prerelease. false to identify the release as a full release. Default: false (optional)

## Github.createRepositoryStatus
Create a status.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| sha           | String     | SHA1 hash of the status (required)
| state         | String     | State of the status - can be one of pending, success, error, or failure. (required)
| targetUrl     | String     | Target url to associate with this status. This URL will be linked from the GitHub UI to allow users to easily see the ‘source’ of the Status. (optional)
| description   | String     | Short description of the status. (optional)
| context       | String     | A string label to differentiate this status from the status of other systems. (optional)

## Github.deleteRepository
Delete a repository.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)

## Github.deleteRepositoryAsset
Delete a release asset.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The asset ID (required)

## Github.deleteRepositoryCommitComment
Delete a commit comment.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The comment ID (required)

## Github.deleteRepositoryDownload
Delete a download.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The download ID (required)

## Github.deleteRepositoryFile
Delete a file.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| path          | String     | The content path. (required)
| message       | String     | The commit message. (required)
| sha           | String     | The blob SHA of the file being removed. (required)
| branch        | String     | The branch name. If not provided, uses the repository’s default branch (usually master). (optional)
| committer     | JSON       | Object containing information about the committer. You must provide values for both name and email (optional). Ex.: "committer": {"name": "Scott Chacon", "email": "schacon@gmail.com"} (optional)

## Github.deleteRepositoryHook
Deleate a hook.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The hook ID (required)

## Github.deleteRepositoryInvite
Delete a repository invitation. (In preview period. See README.)

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| repositoryName| String     | The name of the repository (required)
| id            | String     | The invitation ID (required)

## Github.deleteRepositoryKey
Remove a deploy key.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The key ID (required)

## Github.deleteRepositoryProject
Delete a project.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| number        | Number     | The number of the project (required)

## Github.deleteRepositoryProjectCard
Delete a project card.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The card ID (required)

## Github.deleteRepositoryProjectColumn
Delete a project column.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The column ID (required)

## Github.deleteRepositoryRelease
Delete a release

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The release ID (required)

## Github.editRepository
Update a repo.

| Field           | Type       | Description
|-----------------|------------|----------
| accessToken     | credentials| The access_token obtained from Github.
| user            | String     | The owner name (required)
| repositoryName  | String     | The name of the repository (required)
| name            | String     | The name of the repository (required)
| description     | String     | A short description of the repository (optional)
| homepage        | String     | A URL with more information about the repository (optional)
| private         | String     | True to create a private repository, false to create a public one. Creating private repositories requires a paid GitHub account. Default is false. (optional)
| hasIssues       | String     | True to enable issues for this repository, false to disable them. Default is true. (optional)
| hasWiki         | String     | True to enable the wiki for this repository, false to disable it. Default is true. (optional)
| hasDownloads    | String     | True to enable downloads for this repository, false to disable them. Default is true. (optional)
| defaultBranch   | String     | Updates the default branch for this repository. (optional)
| allowSquashMerge| String     | Either true to allow squash-merging pull requests, or false to prevent squash-merging. Default: true. (In preview period. See README.) (optional)
| allowMergeCommit| String     | Either true to allow merging pull requests with a merge commit, or false to prevent merging pull requests with merge commits. Default: true. (In preview period. See README.) (optional)
| allowRebaseMerge| String     | Either true to allow rebase-merging pull requests, or false to prevent rebase-merging. Default: true. (In preview period. See README.) (optional)

## Github.editRepositoryAsset
Edit a release asset.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The asset ID (required)
| name          | String     | The file name of the asset (required)
| label         | String     | An alternate short description of the asset. Used in place of the filename. (optional)

## Github.editRepositoryHook
Edit a hook.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The hook ID (required)
| config        | JSON       | A Hash containing key/value pairs to provide settings for this hook. Modifying this will replace the entire config object. These settings vary between the services and are defined in the github-services repositoryName. Booleans are stored internally as `1` for true, and `0` for false. Any JSON true/false values will be converted automatically. (required)
| events        | JSON       | Determines what events the hook is triggered for. This replaces the entire array of events. Default: `['push']`. (optional)
| addEvents     | JSON       | Determines a list of events to be added to the list of events that the Hook triggers for. (optional)
| removeEvents  | JSON       | Determines a list of events to be removed from the list of events that the Hook triggers for. (optional)
| active        | String     | Determines whether the hook is actually triggered on pushes. (optional)

## Github.editRepositoryRelease
Edit a release.

| Field          | Type       | Description
|----------------|------------|----------
| accessToken    | credentials| The access_token obtained from Github.
| user           | String     | The owner name (required)
| repositoryName | String     | The name of the repository (required)
| id             | String     | The release ID (required)
| tagName        | String     | String of the tag (required)
| targetCommitish| String     | Specifies the commitish value that determines where the Git tag is created from. Can be any branch or commit SHA. Unused if the Git tag already exists. Default: the repository's default branch (usually master). (optional)
| name           | String     | The name of the release. (optional)
| body           | String     | Text describing the contents of the tag. (optional)
| draft          | String     | true to create a draft (unpublished) release, false to create a published one. Default: false (optional)
| prerelease     | String     | true to identify the release as a prerelease. false to identify the release as a full release. Default: false (optional)

## Github.forkRepository
Create a fork.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| organization  | String     | Optional parameter to specify the organization name if forking into an organization. (optional)

## Github.getRepository
Get a repo for a user.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)

## Github.getAllRepositories
List your repositories

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| visibility | String     | Can be one of `all`, `public`, or `private`. Default: `all`. (optional)
| affiliation| String     | Comma-separated list of values. Can include: `owner`, `collaborator`, `organization_member`. (optional)
| type       | String     | Possible values: `all`, `owner`, `public`, `private`, `member`. Default: `all`. (optional)
| sort       | String     | Possible values: `created`, `updated`, `pushed`, `full_name`. Default: `full_name`. (optional)
| direction  | String     |  (optional)
| page       | Number     | Page number of the results to fetch. (optional)
| perPage    | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.getRepositoryAllCommitComments
List commit comments for a repository.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.getRepositoryArchiveLink
Get archive link.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| archiveFormat | String     | Either tarball or zipball, Deafult: tarball. (required)
| ref           | String     | String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected. (optional)

## Github.getRepositoryAsset
Get a single release asset.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The assetID (required)

## Github.getRepositoryBranch
Get branch. (In preview period. See README.)

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| branch        | String     | The name of the branch (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.getRepositoryBranchProtection
Get branch protection. (In preview period. See README.)

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| branch        | String     | The name of the branch (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.getRepositoryBranches
List branches. (In preview period. See README.)

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| protected     | String     | Set to true to only return protected branches (optional)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.getRepositoryById
Get a single repo by id.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| id         | String     | The repository ID (required)

## Github.getRepositoryClones
Get the total number of clones and breakdown per day or week for the last 14 days.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.getRepositoryCollaborators
List collaborators

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.getRepositoryCombinedStatus
Get the combined status for a specific ref.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| sha           | String     | Ref to fetch the status for. It can be a SHA, a branch name, or a tag name. (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.getRepositoryCommit
Get a single commit.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| sha           | String     | SHA1 hash of the commit (required)

## Github.getRepositoryCommitComment
Get a single commit comment.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The comment ID (required)

## Github.getRepositoryCommitComments
List comments for a single commit.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| sha           | String     | SHA1 hash of the commit (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.getRepositoryCommits
List commits on a repository.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| sha           | String     | Sha or branch to start listing commits from. (optional)
| path          | String     | Only commits containing this file path will be returned. (optional)
| author        | String     | GitHub login or email address by which to filter by commit author. (optional)
| since         | String     | Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ (optional)
| until         | String     | Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ (optional)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.getRepositoryContent
Get the contents of a file or directory in a repository.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| path          | String     | The content path. (required)
| ref           | String     | The String name of the Commit/Branch/Tag. Defaults to master. (optional)

## Github.getRepositoryContributors
Get contributors for the specified repository.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| anon          | String     | Set to 1 or true to include anonymous contributors in results. (optional)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.getRepositoryDeploymentStatuses
List deployment statuses.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The deployment ID (required)

## Github.getRepositoryDeployments
List deployments.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| sha           | String     | The short or long sha that was recorded at creation time. Default: none. (optional)
| ref           | String     | The name of the ref. This can be a branch, tag, or sha. Default: none. (optional)
| task          | String     | The name of the task for the deployment. e.g. deploy or deploy:migrations. Default: none. (optional)
| environment   | String     | The name of the environment that was deployed to. e.g. staging or production. Default: none. (optional)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.getRepositoryDownload
Get a single download.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The download ID (required)

## Github.getRepositoryDownloads
List downloads for repository.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.getOrganizationRepositories
List repositories for the specified org.

| Field           | Type       | Description
|-----------------|------------|----------
| accessToken     | credentials| The access_token obtained from Github.
| organizationName| String     | The name of the organization (required)
| type            | String     | Possible values: `all`, `public`, `private`, `forks`, `sources`, `member`. Default: `all`. (optional)
| page            | Number     | Page number of the results to fetch. (optional)
| perPage         | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.getUserRepositories
List public repositories for the specified user.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| user       | String     | The user name (required)
| type       | String     | Possible values: `all`, `owner`, `member`. Default: `owner`. (optional)
| sort       | String     | Possible values: `created`, `updated`, `pushed`, `full_name`. Default: `full_name`. (optional)
| direction  | String     | Can be one of asc or desc. Default: when using full_name: asc, otherwise desc (optional)
| page       | Number     | Page number of the results to fetch. (optional)
| perPage    | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.getRepositoryForks
List forks.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| sort          | String     | Possible values: `newest`, `oldest`, `stargazers`, default: `newest`. (optional)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.getRepositoryHook
Get single hook.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The hook ID (required)

## Github.getRepositoryHooks
List hooks.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.getRepositoryInvites
List a user's repository invitations. (In preview period. See README.)

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| repositoryName| String     | The name of the repository (required)

## Github.getRepositoryKey
Get a deploy key.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The key ID (required)

## Github.getRepositoryKeys
List deploy keys.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.getRepositoryLanguages
Get languages for the specified repository.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.getRepositoryLatestPagesBuild
Get latest Pages build

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)

## Github.getRepositoryLatestRelease
Get the latest release.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)

## Github.getRepositoryPages
Get information about a Pages site. (Use preview header to include additional info.)

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.getRepositoryPagesBuild
Get a specific Pages build

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The build ID (required)

## Github.getRepositoryPagesBuilds
List Pages builds

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.getRepositoryPaths
Get the top 10 popular contents over the last 14 days.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.getRepositoryProject
List a project.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| number        | Number     | The number of the project (required)

## Github.getRepositoryProjectCard
Get project card.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The card ID (required)

## Github.getRepositoryProjectCards
List project cards.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The column ID (required)

## Github.getRepositoryProjectColumn
Get a project column.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The column ID (required)

## Github.getRepositoryProjectColumns
List a project's columns.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| number        | Number     | The number of the project (required)

## Github.getRepositoryProjects
List projects.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)

## Github.getProtectedBranchRequiredStatusChecks
Get required status checks of protected branch. (In preview period. See README.)

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| branch        | String     | The name of the branch (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.getProtectedBranchRequiredStatusChecksContexts
List required status checks contexts of protected branch. (In preview period. See README.)

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| branch        | String     | The name of the branch (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.getProtectedBranchRestrictions
Get restrictions of protected branch. (In preview period. See README.)

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| branch        | String     | The name of the branch (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.getProtectedBranchTeamRestrictions
List team restrictions of protected branch. (In preview period. See README.)

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| branch        | String     | The name of the branch (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.getProtectedBranchUserRestrictions
List user restrictions of protected branch. (In preview period. See README.)

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| branch        | String     | The name of the branch (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.getPublicRepositories
List all public repositories

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| since      | String     | The integer ID of the last Repository that you've seen. (optional)

## Github.getRepositoryReadme
Get the README for the given repository.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| ref           | String     | The name of the commit/branch/tag. Default: the repository’s default branch (usually master) (optional)

## Github.getRepositoryReferrers
Get the top 10 referrers over the last 14 days.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.getRepositoryRelease
Get a single release.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The release ID (required)

## Github.getRepositoryReleaseByTag
Get a release by tag name.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| tag           | String     | String of the tag (required)

## Github.getRepositoryReleases
List releases for a repository.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.getRepositoryShaOfCommitRef
Get the SHA-1 of a commit reference.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| ref           | String     | String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected. (required)

## Github.getRepositoryStatsCodeFrequency
Get the number of additions and deletions per week.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)

## Github.getRepositoryStatsCommitActivity
Get the last year of commit activity data.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)

## Github.getRepositoryStatsContributors
Get contributors list with additions, deletions, and commit counts.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)

## Github.getRepositoryStatsParticipation
Get the weekly commit count for the repository owner and everyone else.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)

## Github.getRepositoryStatsPunchCard
Get the number of commits per hour in each day.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)

## Github.getRepositoryStatuses
Get status for a specfic ref.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| sha           | String     | SHA hash of the commit (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.getRepositoryTags
Get tags for the specified repository.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.getRepositoryTeams
Get teams for the specified repository.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.getRepositoryViews
Get the total number of views and breakdown per day or week for the last 14 days.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.getRepositoryAssets
List assets for a release.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The release ID (required)

## Github.mergeRepository
Perform a merge.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| base          | String     | The branch (or git ref) you want your changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repositoryName that requests a merge to a base of another repositoryName. (required)
| head          | String     | The branch (or git ref) where your changes are implemented. (required)
| commitMessage | String     | Commit message to use for the merge commit. If omitted, a default message will be used. (optional)

## Github.moveRepositoryProjectCard
Move a project card.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The card ID (required)
| position      | String     | Can be one of first, last, or after:, where is the id value of a column in the same project. (required)
| columnId      | String     | The id value of a column in the same project. (optional)

## Github.moveRepositoryProjectColumn
Move a project column.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The column ID (required)
| position      | String     | Can be one of first, last, or after:, where is the id value of a column in the same project. (required)

## Github.pingRepositoryHook
Ping a hook.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The hook ID (required)

## Github.removeBranchProtection
Remove branch protection. (In preview period. See README.)

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| branch        | String     | The name of the branch (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.removeRepositoryCollaborator
Remove user as a collaborator.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| collabuser    | String     | The name of the collaborator (required)

## Github.removeProtectedBranchRequiredStatusChecks
Remove required status checks of protected branch. (In preview period. See README.)

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| branch        | String     | The name of the branch (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.removeProtectedBranchRequiredStatusChecksContexts
Remove required status checks contexts of protected branch. (In preview period. See README.)

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| branch        | String     | The name of the branch (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.removeProtectedBranchRestrictions
Remove restrictions of protected branch. (In preview period. See README.)

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| branch        | String     | The name of the branch (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.removeProtectedBranchTeamRestrictions
Remove team restrictions of protected branch. (In preview period. See README.)

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| branch        | String     | The name of the branch (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.removeProtectedBranchUserRestrictions
Remove user restrictions of protected branch. (In preview period. See README.)

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| branch        | String     | The name of the branch (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.replaceProtectedBranchRequiredStatusChecksContexts
Replace required status checks contexts of protected branch. (In preview period. See README.)

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| branch        | String     | The name of the branch (required)
| body          | JSON       | An array of protected branch required status checks contexts (e.g. continuous-integration/jenkins). (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.replaceProtectedBranchTeamRestrictions
Replace team restrictions of protected branch. (In preview period. See README.)

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| branch        | String     | The name of the branch (required)
| body          | JSON       | An array of team slugs (e.g. justice-league). (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.replaceProtectedBranchUserRestrictions
Replace user restrictions of protected branch. (In preview period. See README.)

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| branch        | String     | The name of the branch (required)
| body          | JSON       | An array of team slugs (e.g. justice-league). (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.requestRepositoryPageBuild
Request a page build. (In preview period. See README.)

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)

## Github.testRepositoryHook
Test a [push] hook.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The hook ID (required)

## Github.updateRepositoryBranchProtection
Update branch protection. (In preview period. See README.)

| Field               | Type       | Description
|---------------------|------------|----------
| accessToken         | credentials| The access_token obtained from Github.
| user                | String     | The owner name (required)
| repositoryName      | String     | The name of the repository (required)
| branch              | String     | The name of the branch (required)
| requiredStatusChecks| JSON       | JSON object that contains the following keys: `include_admins` - Enforce required status checks for repository administrators, `strict` - Require branches to be up to date before merging, `contexts` - The list of status checks to require in order to merge into this branch. This object can have the value of `null` for disabled. (required)
| restrictions        | JSON       | JSON object that contains the following keys: `users` - The list of user logins with push access, `teams` - The list of team slugs with push access. This object can have the value of `null` for disabled. (required)
| page                | Number     | Page number of the results to fetch. (optional)
| perPage             | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.updateRepositoryCommitComment
Update a commit comment.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The comment ID (required)
| body          | String     | The contents of the comment (required)

## Github.updateRepositoryFile
Update a file.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| path          | String     | The content path. (required)
| message       | String     | The commit message. (required)
| content       | String     | The updated file content, Base64 encoded. (required)
| sha           | String     | The blob SHA of the file being replaced. (required)
| branch        | String     | The branch name. If not provided, uses the repository’s default branch (usually master). (optional)
| committer     | JSON       | Object containing information about the committer. You must provide values for both name and email (optional). Ex.: "committer": {"name": "Scott Chacon", "email": "schacon@gmail.com"} (optional)

## Github.updateRepositoryInvite
Update a repository invitation. (In preview period. See README.)

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| repositoryName| String     | The name of the repository (required)
| id            | String     | The invitation ID (required)
| permission    | String     | The permissions that the associated user will have on the repository. (optional)

## Github.updateRepositoryProject
Update a project.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| number        | Number     | The number of the project (required)
| name          | String     | The name of the project (required)
| body          | String     | The body of the project (required)

## Github.updateRepositoryProjectCard
Update a project card.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The card ID (required)
| note          | String     | The note of the card. (optional)

## Github.updateRepositoryProjectColumn
Update a project column.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The column ID (required)
| name          | String     | The new name of the column (required)

## Github.updateProtectedBranchRequiredStatusChecks
Update required status checks of protected branch. (In preview period. See README.)

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The new name of the column (required)
| branch        | String     | The branch name (required)
| body          | JSON       | JSON object that contains the following keys: `include_admins` - Enforce required status checks for repository administrators, `strict` - Require branches to be up to date before merging, `contexts` - The list of status checks to require in order to merge into this branch. (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.uploadRepositoryAsset
Upload a release asset.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The new name of the repository (required)
| id            | String     | The release ID (required)
| filepath      | String     | The file path of the asset. (required)
| name          | String     | The file name of the asset. This should be set in a URI query parameter. (required)
| label         | String     | An alternate short description of the asset. Used in place of the filename. This should be set in a URI query parameter. (optional)

## Github.codeSearch
Search code.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| q          | String     | Search Term (required)
| sort       | String     | The sort field. Can only be indexed, which indicates how recently a file has been indexed by the GitHub search infrastructure. Default: results are sorted by best match. (optional)
| order      | String     | asc or desc (optional)
| page       | Number     | Page number of the results to fetch. (optional)
| perPage    | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.emailSearch
Search against public email addresses.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| email      | String     | The email address (required)

## Github.issuesSearch
Search issues.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| q          | String     | Search Term (required)
| sort       | String     | The sort field. Can be comments, created, or updated. Default: results are sorted by best match. (optional)
| order      | String     | asc or desc (optional)
| page       | Number     | Page number of the results to fetch. (optional)
| perPage    | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.repositorySearch
Search repositories.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| q          | String     | Search Term (required)
| sort       | String     | stars, forks, or updated (optional)
| order      | String     | asc or desc (optional)
| page       | Number     | Page number of the results to fetch. (optional)
| perPage    | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.usersSearch
Search users.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| q          | String     | Search Term (required)
| sort       | String     | The sort field. Can be followers, repositories, or joined. Default: results are sorted by best match. (optional)
| order      | String     | asc or desc (optional)
| page       | Number     | Page number of the results to fetch. (optional)
| perPage    | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.acceptRepositoryInvite
Accept a repository invitation. (In preview period. See README.)

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| id         | String     | The invitation ID (required)

## Github.addEmails
Add email address(es)

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| body       | JSON       | You can post a single email address or an array of addresses. (required)

## Github.checkFollowing
Check if you are following a user

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| user       | String     | The user name (required)

## Github.checkIfOneFollowersOther
Check if one user follows another

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| user       | String     | The user name (required)
| otherUser  | String     | Other user name (required)

## Github.createGpgKey
Create a GPG key. (In preview period. See README.)

| Field               | Type       | Description
|---------------------|------------|----------
| accessToken         | credentials| The access_token obtained from Github.
| armoredPublicKey    | String     | GPG key contents (required)

## Github.createKey
Create a public key

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| title      | String     | The key title (required)
| key        | String     | The SSH key (required)

## Github.declineRepositoryInvite
Decline a repository invitation. (In preview period. See README.)

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| id         | String     | The invitation ID (required)

## Github.deleteEmails
Delete email address(es)

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| body       | JSON       | You can post a single email address or an array of addresses. (required)

## Github.deleteGpgKey
Delete a GPG key. (In preview period. See README.)

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| id         | String     | The GPG key ID (required)

## Github.deleteKey
Delete a public key

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| id         | String     | The key ID (required)

## Github.demoteUser
Demote a site administrator to an ordinary user

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| user       | String     | The user name (required)

## Github.editOrganizationMembership
Edit your organization membership

| Field           | Type       | Description
|-----------------|------------|----------
| accessToken     | credentials| The access_token obtained from Github.
| organizationName| String     | The new name of the organization (required)
| state           | String     | The state that the membership should be in. Only "active" will be accepted. (required)

## Github.followUser
Follow a user

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| user       | String     | The user name (required)

## Github.getUser
Get the authenticated user

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.

## Github.getAllUsers
Get all users

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| since      | Number     | The integer ID of the last User that you’ve seen. (optional)

## Github.getUserById
Get a single user by GitHub ID

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| id         | String     | The GitHub user ID (required)

## Github.getUserEmails
List email addresses for a user

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| page       | Number     | Page number of the results to fetch. (optional)
| perPage    | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.getUserFollowers
List the authenticated user's followers

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| page       | Number     | Page number of the results to fetch. (optional)
| perPage    | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.getFollowersForUser
List a user's followers

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| user       | String     | The user name (required)
| page       | Number     | Page number of the results to fetch. (optional)
| perPage    | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.getUserFollowing
List who the authenticated user is following

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| page       | Number     | Page number of the results to fetch. (optional)
| perPage    | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.getFollowingForUser
List who a user is following

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| user       | String     | The user name (required)
| page       | Number     | Page number of the results to fetch. (optional)
| perPage    | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.getSingleUser
Get a single user

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| user       | String     | The user name (required)

## Github.getGpgKey
Get a single GPG key. (In preview period. See README.)

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| id         | String     | The GPG key ID (required)

## Github.getGpgKeys
List your GPG keys. (In preview period. See README.)

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| page       | Number     | Page number of the results to fetch. (optional)
| perPage    | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.getKey
Get a single public key

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| id         | String     | The key ID (required)

## Github.getKeys
List your public keys

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| page       | Number     | Page number of the results to fetch. (optional)
| perPage    | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.getKeysForUser
List public keys for a user

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| user       | String     | The user name (required)
| page       | Number     | Page number of the results to fetch. (optional)
| perPage    | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.getUserOrganizationMembership
Get your organization membership

| Field           | Type       | Description
|-----------------|------------|----------
| accessToken     | credentials| The access_token obtained from Github.
| organizationName| String     | The name of the organization (required)

## Github.getUserOrganizations
List organizations for the authenticated user.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| page       | Number     | Page number of the results to fetch. (optional)
| perPage    | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.getRepositoryInvites
List a user's repository invitations. (In preview period. See README.)

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.

## Github.getUserTeams
Get your teams

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| page       | Number     | Page number of the results to fetch. (optional)
| perPage    | Number     | A custom page size up to 100. Default is 30. (optional)

## Github.promoteUser
Promote an ordinary user to a site administrator

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| user       | String     | The user name (required)

## Github.suspendUser
Suspend a user

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| user       | String     | The user name (required)

## Github.unfollowUserUser
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| user       | String     | The user name (required)

## Github.unsuspendUser
Unsuspend a user

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| user       | String     | The user name (required)

## Github.updateUser
Update the authenticated user

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| name       | String     | The new name of the user (optional)
| email      | String     | Publicly visible email address. (optional)
| blog       | String     | The new blog URL of the user. (optional)
| company    | String     | The new company of the user. (optional)
| location   | String     | The new location of the user. (optional)
| hireable   | String     | The new hiring availability of the user. (optional)
| bio        | String     | The new short biography of the user. (optional)

