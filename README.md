# Github Package
An object oriented wrapper for the GitHub v3 API.
* Domain: github.com
* Credentials: accessToken

## How to get credentials: 
0. Item one 
1. Item two

## TOC: 
* [checkNotificationThreadSubscription](#checkNotificationThreadSubscription)
* [checkRepositoryStarring](#checkRepositoryStarring)
* [deleteNotificationThreadSubscription](#deleteNotificationThreadSubscription)
* [getPublicEvents](#getPublicEvents)
* [getOrganizationEvents](#getOrganizationEvents)
* [getRepositoryEvents](#getRepositoryEvents)
* [getRepositoryIssuesEvents](#getRepositoryIssuesEvents)
* [getRepositoryNetworkEvents](#getRepositoryNetworkEvents)
* [getUserPerformedEvents](#getUserPerformedEvents)
* [getUserOrganizationEvents](#getUserOrganizationEvents)
* [getUserPublicPerformedEvents](#getUserPublicPerformedEvents)
* [getUserReceivedEvents](#getUserReceivedEvents)
* [getUserReceivedPublicEvents](#getUserReceivedPublicEvents)
* [getFeeds](#getFeeds)
* [getNotificationThread](#getNotificationThread)
* [getUserNotifications](#getUserNotifications)
* [getUserRepositoryNotifications](#getUserRepositoryNotifications)
* [getRepositorySubscription](#getRepositorySubscription)
* [getRepositoryStargazers](#getRepositoryStargazers)
* [getStarredRepositories](#getStarredRepositories)
* [getUserStarredRepositories](#getUserStarredRepositories)
* [getWatchedRepositories](#getWatchedRepositories)
* [getUserWatchedRepositories](#getUserWatchedRepositories)
* [getRepositoryWatchers](#getRepositoryWatchers)
* [markNotificationThreadAsRead](#markNotificationThreadAsRead)
* [markNotificationsAsRead](#markNotificationsAsRead)
* [markNotificationsAsReadForRepository](#markNotificationsAsReadForRepository)
* [setNotificationThreadSubscription](#setNotificationThreadSubscription)
* [setRepositorySubscription](#setRepositorySubscription)
* [starRepository](#starRepository)
* [unstarRepository](#unstarRepository)
* [unwatchRepository](#unwatchRepository)
* [checkAuthorization](#checkAuthorization)
* [createAuthorization](#createAuthorization)
* [deleteAuthorization](#deleteAuthorization)
* [deleteGrantAuthorization](#deleteGrantAuthorization)
* [getAuthorization](#getAuthorization)
* [getAllAuthorization](#getAllAuthorization)
* [getGrantAuthorization](#getGrantAuthorization)
* [getGrantsAuthorization](#getGrantsAuthorization)
* [getOrCreateAuthorizationForApp](#getOrCreateAuthorizationForApp)
* [getOrCreateAuthorizationForAppAndFingerprint](#getOrCreateAuthorizationForAppAndFingerprint)
* [resetAuthorization](#resetAuthorization)
* [revokeAuthorization](#revokeAuthorization)
* [updateAuthorization](#updateAuthorization)
* [createOrganizationEnterprise](#createOrganizationEnterprise)
* [getLicenseEnterprise](#getLicenseEnterprise)
* [queueIndexingJobEnterprise](#queueIndexingJobEnterprise)
* [statsEnterprise](#statsEnterprise)
* [syncLdapForTeamEnterprise](#syncLdapForTeamEnterprise)
* [syncLdapForUserEnterprise](#syncLdapForUserEnterprise)
* [updateLdapForTeamEnterprise](#updateLdapForTeamEnterprise)
* [updateLdapForUserEnterprise](#updateLdapForUserEnterprise)
* [checkGistStar](#checkGistStar)
* [createGist](#createGist)
* [createGistComment](#createGistComment)
* [deleteGist](#deleteGist)
* [deleteGistComment](#deleteGistComment)
* [editGist](#editGist)
* [updateGistComment](#updateGistComment)
* [forkGist](#forkGist)
* [getGist](#getGist)
* [getAllGists](#getAllGists)
* [getGistComment](#getGistComment)
* [getGistComments](#getGistComments)
* [getGistCommits](#getGistCommits)
* [getUserGists](#getUserGists)
* [getGistForks](#getGistForks)
* [getPublicGists](#getPublicGists)
* [getGistByRevision](#getGistByRevision)
* [getStarredGists](#getStarredGists)
* [starGist](#starGist)
* [unstarGist](#unstarGist)
* [createBlob](#createBlob)
* [createCommit](#createCommit)
* [createReference](#createReference)
* [createTag](#createTag)
* [createTree](#createTree)
* [deleteReference](#deleteReference)
* [getBlob](#getBlob)
* [getCommit](#getCommit)
* [getCommitSignatureVerification](#getCommitSignatureVerification)
* [getReference](#getReference)
* [getReferences](#getReferences)
* [getTag](#getTag)
* [getTagSignatureVerification](#getTagSignatureVerification)
* [getTags](#getTags)
* [getTree](#getTree)
* [updateReference](#updateReference)
* [createInstallation](#createInstallation)
* [addAssigneesToIssue](#addAssigneesToIssue)
* [addIssueLabels](#addIssueLabels)
* [checkAssignee](#checkAssignee)
* [createIssue](#createIssue)
* [createIssueComment](#createIssueComment)
* [createLabel](#createLabel)
* [createMilestone](#createMilestone)
* [deleteIssueComment](#deleteIssueComment)
* [deleteLabel](#deleteLabel)
* [deleteMilestone](#deleteMilestone)
* [updateIssue](#updateIssue)
* [updateIssueComment](#updateIssueComment)
* [getIssue](#getIssue)
* [getAllIssues](#getAllIssues)
* [getAssignees](#getAssignees)
* [getIssueComment](#getIssueComment)
* [getIssueComments](#getIssueComments)
* [getIssuesCommentsForRepository](#getIssuesCommentsForRepository)
* [getIssueEvent](#getIssueEvent)
* [getIssueEvents](#getIssueEvents)
* [getIssueEventsForRepository](#getIssueEventsForRepository)
* [getIssueEventsTimeline](#getIssueEventsTimeline)
* [getIssuesForOrganization](#getIssuesForOrganization)
* [getIssuesForRepository](#getIssuesForRepository)
* [getUserIssues](#getUserIssues)
* [getIssueLabels](#getIssueLabels)
* [getLabel](#getLabel)
* [getRepositoryLabels](#getRepositoryLabels)
* [getMilestone](#getMilestone)
* [getMilestoneLabels](#getMilestoneLabels)
* [getRepositoryMilestones](#getRepositoryMilestones)
* [lockIssue](#lockIssue)
* [removeIssueAllLabels](#removeIssueAllLabels)
* [removeAssigneesFromIssue](#removeAssigneesFromIssue)
* [removeIssueLabel](#removeIssueLabel)
* [replaceAllIssueLabels](#replaceAllIssueLabels)
* [unlockIssue](#unlockIssue)
* [updateLabel](#updateLabel)
* [updateMilestone](#updateMilestone)
* [cancelImport](#cancelImport)
* [deleteMigrationArchive](#deleteMigrationArchive)
* [getImportCommitAuthors](#getImportCommitAuthors)
* [getImportProgress](#getImportProgress)
* [getLargeImportFiles](#getLargeImportFiles)
* [getMigrationArchiveLink](#getMigrationArchiveLink)
* [getMigrationStatus](#getMigrationStatus)
* [getMigrations](#getMigrations)
* [mapImportCommitAuthor](#mapImportCommitAuthor)
* [setImportLfsPreference](#setImportLfsPreference)
* [startImport](#startImport)
* [startMigration](#startMigration)
* [unlockRepositoryLockedForMigration](#unlockRepositoryLockedForMigration)
* [updateImport](#updateImport)
* [getEmojis](#getEmojis)
* [getGitignoreTemplate](#getGitignoreTemplate)
* [getGitignoreTemplates](#getGitignoreTemplates)
* [getLicense](#getLicense)
* [getLicenses](#getLicenses)
* [getMeta](#getMeta)
* [getRateLimit](#getRateLimit)
* [getRepoLicenseMisc](#getRepoLicenseMisc)
* [renderMarkdown](#renderMarkdown)
* [renderMarkdownRaw](#renderMarkdownRaw)
* [addOrganizationMembership](#addOrganizationMembership)
* [addOrganizationTeamMembership](#addOrganizationTeamMembership)
* [addOrganizationTeamRepository](#addOrganizationTeamRepository)
* [checkOrganizationMembership](#checkOrganizationMembership)
* [checkOrganizationPublicMembership](#checkOrganizationPublicMembership)
* [checkOrganizationTeamRepository](#checkOrganizationTeamRepository)
* [cancelOrganizationMembership](#cancelOrganizationMembership)
* [createOrganizationHook](#createOrganizationHook)
* [createOrganizationTeam](#createOrganizationTeam)
* [deleteOrganizationHook](#deleteOrganizationHook)
* [deleteOrganizationTeam](#deleteOrganizationTeam)
* [deleteOrganizationTeamRepository](#deleteOrganizationTeamRepository)
* [editOrganizationHook](#editOrganizationHook)
* [editOrganizationTeam](#editOrganizationTeam)
* [getOrganization](#getOrganization)
* [getAllOrganizations](#getAllOrganizations)
* [getUserOrganizations](#getUserOrganizations)
* [getOrganizationHook](#getOrganizationHook)
* [getOrganizationHooks](#getOrganizationHooks)
* [getOrganizationMembers](#getOrganizationMembers)
* [getOrganizationMembership](#getOrganizationMembership)
* [getOrganizationMemberships](#getOrganizationMemberships)
* [getOrganizationPublicMembers](#getOrganizationPublicMembers)
* [getOrganizationTeam](#getOrganizationTeam)
* [getOrganizationTeamMembers](#getOrganizationTeamMembers)
* [getOrganizationTeamMembership](#getOrganizationTeamMembership)
* [getOrganizationTeamRepositories](#getOrganizationTeamRepositories)
* [getOrganizationTeams](#getOrganizationTeams)
* [pingOrganizationHook](#pingOrganizationHook)
* [publicizeOrganizationMembership](#publicizeOrganizationMembership)
* [removeOrganizationMember](#removeOrganizationMember)
* [removeOrganizationMembership](#removeOrganizationMembership)
* [removeOrganizationTeamMembership](#removeOrganizationTeamMembership)
* [updateOrganization](#updateOrganization)
* [checkMergedPullRequest](#checkMergedPullRequest)
* [createPullRequest](#createPullRequest)
* [createPullRequestComment](#createPullRequestComment)
* [createPullRequestCommentReply](#createPullRequestCommentReply)
* [createPullRequestFromIssue](#createPullRequestFromIssue)
* [deletePullRequestComment](#deletePullRequestComment)
* [editPullRequestComment](#editPullRequestComment)
* [getPullRequest](#getPullRequest)
* [getAllPullRequests](#getAllPullRequests)
* [getPullRequestComment](#getPullRequestComment)
* [getPullRequestComments](#getPullRequestComments)
* [getPullRequestCommentsForRepository](#getPullRequestCommentsForRepository)
* [getPullRequestCommits](#getPullRequestCommits)
* [getPullRequestFiles](#getPullRequestFiles)
* [mergePullRequest](#mergePullRequest)
* [updatePullRequest](#updatePullRequest)
* [createReactionForCommitComment](#createReactionForCommitComment)
* [createReactionForIssue](#createReactionForIssue)
* [createReactionForIssueComment](#createReactionForIssueComment)
* [createReactionForPullRequestReviewComment](#createReactionForPullRequestReviewComment)
* [deleteReaction](#deleteReaction)
* [getReactionForCommitComment](#getReactionForCommitComment)
* [getReactionForIssue](#getReactionForIssue)
* [getReactionForIssueComment](#getReactionForIssueComment)
* [getReactionForPullRequestReviewComment](#getReactionForPullRequestReviewComment)
* [addRepositoryCollaborator](#addRepositoryCollaborator)
* [addProtectedBranchRequiredStatusChecksContexts](#addProtectedBranchRequiredStatusChecksContexts)
* [addProtectedBranchTeamRestrictions](#addProtectedBranchTeamRestrictions)
* [addProtectedBranchUserRestrictions](#addProtectedBranchUserRestrictions)
* [checkRepositoryCollaborator](#checkRepositoryCollaborator)
* [compareRepositoryCommits](#compareRepositoryCommits)
* [createRepository](#createRepository)
* [createRepositoryCommitComment](#createRepositoryCommitComment)
* [createRepositoryDeployment](#createRepositoryDeployment)
* [createRepositoryDeploymentStatus](#createRepositoryDeploymentStatus)
* [createRepositoryFile](#createRepositoryFile)
* [createRepositoryForOrganization](#createRepositoryForOrganization)
* [createRepositoryHook](#createRepositoryHook)
* [createRepositoryKey](#createRepositoryKey)
* [createRepositoryProject](#createRepositoryProject)
* [createRepositoryProjectCard](#createRepositoryProjectCard)
* [createRepositoryProjectColumn](#createRepositoryProjectColumn)
* [createRepositoryRelease](#createRepositoryRelease)
* [createRepositoryStatus](#createRepositoryStatus)
* [deleteRepository](#deleteRepository)
* [deleteRepositoryAsset](#deleteRepositoryAsset)
* [deleteRepositoryCommitComment](#deleteRepositoryCommitComment)
* [deleteRepositoryDownload](#deleteRepositoryDownload)
* [deleteRepositoryFile](#deleteRepositoryFile)
* [deleteRepositoryHook](#deleteRepositoryHook)
* [deleteRepositoryInvite](#deleteRepositoryInvite)
* [deleteRepositoryKey](#deleteRepositoryKey)
* [deleteRepositoryProject](#deleteRepositoryProject)
* [deleteRepositoryProjectCard](#deleteRepositoryProjectCard)
* [deleteRepositoryProjectColumn](#deleteRepositoryProjectColumn)
* [deleteRepositoryRelease](#deleteRepositoryRelease)
* [editRepository](#editRepository)
* [editRepositoryAsset](#editRepositoryAsset)
* [editRepositoryHook](#editRepositoryHook)
* [editRepositoryRelease](#editRepositoryRelease)
* [forkRepository](#forkRepository)
* [getRepository](#getRepository)
* [getAllRepositories](#getAllRepositories)
* [getRepositoryAllCommitComments](#getRepositoryAllCommitComments)
* [getRepositoryArchiveLink](#getRepositoryArchiveLink)
* [getRepositoryAsset](#getRepositoryAsset)
* [getRepositoryBranch](#getRepositoryBranch)
* [getRepositoryBranchProtection](#getRepositoryBranchProtection)
* [getRepositoryBranches](#getRepositoryBranches)
* [getRepositoryById](#getRepositoryById)
* [getRepositoryClones](#getRepositoryClones)
* [getRepositoryCollaborators](#getRepositoryCollaborators)
* [getRepositoryCombinedStatus](#getRepositoryCombinedStatus)
* [getRepositoryCommit](#getRepositoryCommit)
* [getRepositoryCommitComment](#getRepositoryCommitComment)
* [getRepositoryCommitComments](#getRepositoryCommitComments)
* [getRepositoryCommits](#getRepositoryCommits)
* [getRepositoryContent](#getRepositoryContent)
* [getRepositoryContributors](#getRepositoryContributors)
* [getRepositoryDeploymentStatuses](#getRepositoryDeploymentStatuses)
* [getRepositoryDeployments](#getRepositoryDeployments)
* [getRepositoryDownload](#getRepositoryDownload)
* [getRepositoryDownloads](#getRepositoryDownloads)
* [getOrganizationRepositories](#getOrganizationRepositories)
* [getUserRepositories](#getUserRepositories)
* [getRepositoryForks](#getRepositoryForks)
* [getRepositoryHook](#getRepositoryHook)
* [getRepositoryHooks](#getRepositoryHooks)
* [getRepositoryInvites](#getRepositoryInvites)
* [getRepositoryKey](#getRepositoryKey)
* [getRepositoryKeys](#getRepositoryKeys)
* [getRepositoryLanguages](#getRepositoryLanguages)
* [getRepositoryLatestPagesBuild](#getRepositoryLatestPagesBuild)
* [getRepositoryLatestRelease](#getRepositoryLatestRelease)
* [getRepositoryPages](#getRepositoryPages)
* [getRepositoryPagesBuild](#getRepositoryPagesBuild)
* [getRepositoryPagesBuilds](#getRepositoryPagesBuilds)
* [getRepositoryPaths](#getRepositoryPaths)
* [getRepositoryProject](#getRepositoryProject)
* [getRepositoryProjectCard](#getRepositoryProjectCard)
* [getRepositoryProjectCards](#getRepositoryProjectCards)
* [getRepositoryProjectColumn](#getRepositoryProjectColumn)
* [getRepositoryProjectColumns](#getRepositoryProjectColumns)
* [getRepositoryProjects](#getRepositoryProjects)
* [getProtectedBranchRequiredStatusChecks](#getProtectedBranchRequiredStatusChecks)
* [getProtectedBranchRequiredStatusChecksContexts](#getProtectedBranchRequiredStatusChecksContexts)
* [getProtectedBranchRestrictions](#getProtectedBranchRestrictions)
* [getProtectedBranchTeamRestrictions](#getProtectedBranchTeamRestrictions)
* [getProtectedBranchUserRestrictions](#getProtectedBranchUserRestrictions)
* [getPublicRepositories](#getPublicRepositories)
* [getRepositoryReadme](#getRepositoryReadme)
* [getRepositoryReferrers](#getRepositoryReferrers)
* [getRepositoryRelease](#getRepositoryRelease)
* [getRepositoryReleaseByTag](#getRepositoryReleaseByTag)
* [getRepositoryReleases](#getRepositoryReleases)
* [getRepositoryShaOfCommitRef](#getRepositoryShaOfCommitRef)
* [getRepositoryStatsCodeFrequency](#getRepositoryStatsCodeFrequency)
* [getRepositoryStatsCommitActivity](#getRepositoryStatsCommitActivity)
* [getRepositoryStatsContributors](#getRepositoryStatsContributors)
* [getRepositoryStatsParticipation](#getRepositoryStatsParticipation)
* [getRepositoryStatsPunchCard](#getRepositoryStatsPunchCard)
* [getRepositoryStatuses](#getRepositoryStatuses)
* [getRepositoryTags](#getRepositoryTags)
* [getRepositoryTeams](#getRepositoryTeams)
* [getRepositoryViews](#getRepositoryViews)
* [getRepositoryAssets](#getRepositoryAssets)
* [mergeRepository](#mergeRepository)
* [moveRepositoryProjectCard](#moveRepositoryProjectCard)
* [moveRepositoryProjectColumn](#moveRepositoryProjectColumn)
* [pingRepositoryHook](#pingRepositoryHook)
* [removeBranchProtection](#removeBranchProtection)
* [removeRepositoryCollaborator](#removeRepositoryCollaborator)
* [removeProtectedBranchRequiredStatusChecks](#removeProtectedBranchRequiredStatusChecks)
* [removeProtectedBranchRequiredStatusChecksContexts](#removeProtectedBranchRequiredStatusChecksContexts)
* [removeProtectedBranchRestrictions](#removeProtectedBranchRestrictions)
* [removeProtectedBranchTeamRestrictions](#removeProtectedBranchTeamRestrictions)
* [removeProtectedBranchUserRestrictions](#removeProtectedBranchUserRestrictions)
* [replaceProtectedBranchRequiredStatusChecksContexts](#replaceProtectedBranchRequiredStatusChecksContexts)
* [replaceProtectedBranchTeamRestrictions](#replaceProtectedBranchTeamRestrictions)
* [replaceProtectedBranchUserRestrictions](#replaceProtectedBranchUserRestrictions)
* [requestRepositoryPageBuild](#requestRepositoryPageBuild)
* [testRepositoryHook](#testRepositoryHook)
* [updateRepositoryBranchProtection](#updateRepositoryBranchProtection)
* [updateRepositoryCommitComment](#updateRepositoryCommitComment)
* [updateRepositoryFile](#updateRepositoryFile)
* [updateRepositoryInvite](#updateRepositoryInvite)
* [updateRepositoryProject](#updateRepositoryProject)
* [updateRepositoryProjectCard](#updateRepositoryProjectCard)
* [updateRepositoryProjectColumn](#updateRepositoryProjectColumn)
* [updateProtectedBranchRequiredStatusChecks](#updateProtectedBranchRequiredStatusChecks)
* [uploadRepositoryAsset](#uploadRepositoryAsset)
* [codeSearch](#codeSearch)
* [emailSearch](#emailSearch)
* [issuesSearch](#issuesSearch)
* [repositorySearch](#repositorySearch)
* [usersSearch](#usersSearch)
* [acceptRepositoryInvite](#acceptRepositoryInvite)
* [addEmails](#addEmails)
* [checkFollowing](#checkFollowing)
* [checkIfOneFollowersOther](#checkIfOneFollowersOther)
* [createGpgKey](#createGpgKey)
* [createKey](#createKey)
* [declineRepositoryInvite](#declineRepositoryInvite)
* [deleteEmails](#deleteEmails)
* [deleteGpgKey](#deleteGpgKey)
* [deleteKey](#deleteKey)
* [demoteUser](#demoteUser)
* [editOrganizationMembership](#editOrganizationMembership)
* [followUser](#followUser)
* [getUser](#getUser)
* [getAllUsers](#getAllUsers)
* [getUserById](#getUserById)
* [getUserEmails](#getUserEmails)
* [getUserFollowers](#getUserFollowers)
* [getFollowersForUser](#getFollowersForUser)
* [getUserFollowing](#getUserFollowing)
* [getFollowingForUser](#getFollowingForUser)
* [getSingleUser](#getSingleUser)
* [getGpgKey](#getGpgKey)
* [getGpgKeys](#getGpgKeys)
* [getKey](#getKey)
* [getKeys](#getKeys)
* [getKeysForUser](#getKeysForUser)
* [getUserOrganizationMembership](#getUserOrganizationMembership)
* [getUserOrganizations](#getUserOrganizations)
* [getRepositoryInvites](#getRepositoryInvites)
* [getUserTeams](#getUserTeams)
* [promoteUser](#promoteUser)
* [suspendUser](#suspendUser)
* [unfollowUserUser](#unfollowUserUser)
* [unsuspendUser](#unsuspendUser)
* [updateUser](#updateUser)
 
<a name="checkNotificationThreadSubscription"/>
## Github.checkNotificationThreadSubscription
Check to see if the current user is subscribed to a thread.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| id         | String     | The thread ID (required)

#### Request example
```json
{	"accessToken": "...",
	"id": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"{
            "subscribed": true,
            "ignored": false,
            "reason": null,
            "created_at": "2012-10-06T21:34:12Z",
            "url": "https://api.github.com/notifications/threads/1/subscription",
            "thread_url": "https://api.github.com/notifications/threads/1"
          }"
		}
	}
}
```

<a name="checkRepositoryStarring"/>
## Github.checkRepositoryStarring
Check if you are starring a repository

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"Status: 204 No Content"
		}
	}
}
```

<a name="deleteNotificationThreadSubscription"/>
## Github.deleteNotificationThreadSubscription
Delete a notification thread subscription.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| id         | String     | The thread ID (required)

#### Request example
```json
{	"accessToken": "...",
	"id": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"Status: 204 No Content"
		}
	}
}
```

<a name="getPublicEvents"/>
## Github.getPublicEvents
List public events

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| page       | Number     | Page number of the results to fetch. (optional)
| perPage    | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"[
                {
                  \"type\": \"Event\",
                  \"public\": true,
                  \"payload\": {
                  },
                  \"repo\": {
                    \"id\": 3,
                    \"name\": \"octocat/Hello-World\",
                    \"url\": \"https://api.github.com/repos/octocat/Hello-World\"
                  },
                  \"actor\": {
                    \"id\": 1,
                    \"login\": \"octocat\",
                    \"gravatar_id\": \"\",
                    \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                    \"url\": \"https://api.github.com/users/octocat\"
                  },
                  \"org\": {
                    \"id\": 1,
                    \"login\": \"github\",
                    \"gravatar_id\": \"\",
                    \"url\": \"https://api.github.com/orgs/github\",
                    \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\"
                  },
                  \"created_at\": \"2011-09-06T17:26:27Z\",
                  \"id\": \"12345\"
                }
              ]"
		}
	}
}
```

<a name="getOrganizationEvents"/>
## Github.getOrganizationEvents
List public events for an organization

| Field           | Type       | Description
|-----------------|------------|----------
| accessToken     | credentials| The access_token obtained from Github. (optional)
| organizationName| String     | The name of organization (required)
| page            | Number     | Page number of the results to fetch. (optional)
| perPage         | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"organizationName": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"[
                {
                  \"type\": \"Event\",
                  \"public\": true,
                  \"payload\": {
                  },
                  \"repo\": {
                    \"id\": 3,
                    \"name\": \"octocat/Hello-World\",
                    \"url\": \"https://api.github.com/repos/octocat/Hello-World\"
                  },
                  \"actor\": {
                    \"id\": 1,
                    \"login\": \"octocat\",
                    \"gravatar_id\": \"\",
                    \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                    \"url\": \"https://api.github.com/users/octocat\"
                  },
                  \"org\": {
                    \"id\": 1,
                    \"login\": \"github\",
                    \"gravatar_id\": \"\",
                    \"url\": \"https://api.github.com/orgs/github\",
                    \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\"
                  },
                  \"created_at\": \"2011-09-06T17:26:27Z\",
                  \"id\": \"12345\"
                }
              ]"
		}
	}
}
```

<a name="getRepositoryEvents"/>
## Github.getRepositoryEvents
List repository events

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"[
                {
                  \"type\": \"Event\",
                  \"public\": true,
                  \"payload\": {
                  },
                  \"repo\": {
                    \"id\": 3,
                    \"name\": \"octocat/Hello-World\",
                    \"url\": \"https://api.github.com/repos/octocat/Hello-World\"
                  },
                  \"actor\": {
                    \"id\": 1,
                    \"login\": \"octocat\",
                    \"gravatar_id\": \"\",
                    \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                    \"url\": \"https://api.github.com/users/octocat\"
                  },
                  \"org\": {
                    \"id\": 1,
                    \"login\": \"github\",
                    \"gravatar_id\": \"\",
                    \"url\": \"https://api.github.com/orgs/github\",
                    \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\"
                  },
                  \"created_at\": \"2011-09-06T17:26:27Z\",
                  \"id\": \"12345\"
                }
              ]"
		}
	}
}
```

<a name="getRepositoryIssuesEvents"/>
## Github.getRepositoryIssuesEvents
List issue events for a repository

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"[
                {
                  \"id\": 1,
                  \"url\": \"https://api.github.com/repos/octocat/Hello-World/issues/events/1\",
                  \"actor\": {
                    \"login\": \"octocat\",
                    \"id\": 1,
                    \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                    \"gravatar_id\": \"\",
                    \"url\": \"https://api.github.com/users/octocat\",
                    \"html_url\": \"https://github.com/octocat\",
                    \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                    \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                    \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                    \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                    \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                    \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                    \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                    \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                    \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                    \"type\": \"User\",
                    \"site_admin\": false
                  },
                  \"event\": \"closed\",
                  \"commit_id\": \"6dcb09b5b57875f334f61aebed695e2e4193db5e\",
                  \"commit_url\": \"https://api.github.com/repos/octocat/Hello-World/commits/6dcb09b5b57875f334f61aebed695e2e4193db5e\",
                  \"created_at\": \"2011-04-14T16:00:49Z\",
                  \"issue\": {
                    \"id\": 1,
                    \"url\": \"https://api.github.com/repos/octocat/Hello-World/issues/1347\",
                    \"repository_url\": \"https://api.github.com/repos/octocat/Hello-World\",
                    \"labels_url\": \"https://api.github.com/repos/octocat/Hello-World/issues/1347/labels{/name}\",
                    \"comments_url\": \"https://api.github.com/repos/octocat/Hello-World/issues/1347/comments\",
                    \"events_url\": \"https://api.github.com/repos/octocat/Hello-World/issues/1347/events\",
                    \"html_url\": \"https://github.com/octocat/Hello-World/issues/1347\",
                    \"number\": 1347,
                    \"state\": \"open\",
                    \"title\": \"Found a bug\",
                    \"body\": \"I'm having a problem with this.\",
                    \"user\": {
                      \"login\": \"octocat\",
                      \"id\": 1,
                      \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                      \"gravatar_id\": \"\",
                      \"url\": \"https://api.github.com/users/octocat\",
                      \"html_url\": \"https://github.com/octocat\",
                      \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                      \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                      \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                      \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                      \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                      \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                      \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                      \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                      \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                      \"type\": \"User\",
                      \"site_admin\": false
                    },
                    \"labels\": [
                      {
                        \"url\": \"https://api.github.com/repos/octocat/Hello-World/labels/bug\",
                        \"name\": \"bug\",
                        \"color\": \"f29513\"
                      }
                    ],
                    \"assignee\": {
                      \"login\": \"octocat\",
                      \"id\": 1,
                      \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                      \"gravatar_id\": \"\",
                      \"url\": \"https://api.github.com/users/octocat\",
                      \"html_url\": \"https://github.com/octocat\",
                      \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                      \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                      \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                      \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                      \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                      \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                      \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                      \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                      \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                      \"type\": \"User\",
                      \"site_admin\": false
                    },
                    \"milestone\": {
                      \"url\": \"https://api.github.com/repos/octocat/Hello-World/milestones/1\",
                      \"html_url\": \"https://github.com/octocat/Hello-World/milestones/v1.0\",
                      \"labels_url\": \"https://api.github.com/repos/octocat/Hello-World/milestones/1/labels\",
                      \"id\": 1002604,
                      \"number\": 1,
                      \"state\": \"open\",
                      \"title\": \"v1.0\",
                      \"description\": \"Tracking milestone for version 1.0\",
                      \"creator\": {
                        \"login\": \"octocat\",
                        \"id\": 1,
                        \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                        \"gravatar_id\": \"\",
                        \"url\": \"https://api.github.com/users/octocat\",
                        \"html_url\": \"https://github.com/octocat\",
                        \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                        \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                        \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                        \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                        \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                        \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                        \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                        \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                        \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                        \"type\": \"User\",
                        \"site_admin\": false
                      },
                      \"open_issues\": 4,
                      \"closed_issues\": 8,
                      \"created_at\": \"2011-04-10T20:09:31Z\",
                      \"updated_at\": \"2014-03-03T18:58:10Z\",
                      \"closed_at\": \"2013-02-12T13:22:01Z\",
                      \"due_on\": \"2012-10-09T23:39:01Z\"
                    },
                    \"locked\": false,
                    \"comments\": 0,
                    \"pull_request\": {
                      \"url\": \"https://api.github.com/repos/octocat/Hello-World/pulls/1347\",
                      \"html_url\": \"https://github.com/octocat/Hello-World/pull/1347\",
                      \"diff_url\": \"https://github.com/octocat/Hello-World/pull/1347.diff\",
                      \"patch_url\": \"https://github.com/octocat/Hello-World/pull/1347.patch\"
                    },
                    \"closed_at\": null,
                    \"created_at\": \"2011-04-22T13:33:48Z\",
                    \"updated_at\": \"2011-04-22T13:33:48Z\"
                  }
                }
              ]"
		}
	}
}
```

<a name="getRepositoryNetworkEvents"/>
## Github.getRepositoryNetworkEvents
List public events for a network of repositories

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The repository name (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"[
                {
                  \"type\": \"Event\",
                  \"public\": true,
                  \"payload\": {
                  },
                  \"repo\": {
                    \"id\": 3,
                    \"name\": \"octocat/Hello-World\",
                    \"url\": \"https://api.github.com/repos/octocat/Hello-World\"
                  },
                  \"actor\": {
                    \"id\": 1,
                    \"login\": \"octocat\",
                    \"gravatar_id\": \"\",
                    \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                    \"url\": \"https://api.github.com/users/octocat\"
                  },
                  \"org\": {
                    \"id\": 1,
                    \"login\": \"github\",
                    \"gravatar_id\": \"\",
                    \"url\": \"https://api.github.com/orgs/github\",
                    \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\"
                  },
                  \"created_at\": \"2011-09-06T17:26:27Z\",
                  \"id\": \"12345\"
                }
              ]"
		}
	}
}
```

<a name="getUserPerformedEvents"/>
## Github.getUserPerformedEvents
List events performed by a user

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| user       | String     | The user name (required)
| page       | Number     | Page number of the results to fetch. (optional)
| perPage    | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"[
                {
                  \"type\": \"Event\",
                  \"public\": true,
                  \"payload\": {
                  },
                  \"repo\": {
                    \"id\": 3,
                    \"name\": \"octocat/Hello-World\",
                    \"url\": \"https://api.github.com/repos/octocat/Hello-World\"
                  },
                  \"actor\": {
                    \"id\": 1,
                    \"login\": \"octocat\",
                    \"gravatar_id\": \"\",
                    \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                    \"url\": \"https://api.github.com/users/octocat\"
                  },
                  \"org\": {
                    \"id\": 1,
                    \"login\": \"github\",
                    \"gravatar_id\": \"\",
                    \"url\": \"https://api.github.com/orgs/github\",
                    \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\"
                  },
                  \"created_at\": \"2011-09-06T17:26:27Z\",
                  \"id\": \"12345\"
                }
              ]"
		}
	}
}
```

<a name="getUserOrganizationEvents"/>
## Github.getUserOrganizationEvents
List events for a user's organization

| Field           | Type       | Description
|-----------------|------------|----------
| accessToken     | credentials| The access_token obtained from Github. (optional)
| user            | String     | The user name (required)
| organizationName| String     | The name of the organization (required)
| page            | Number     | Page number of the results to fetch. (optional)
| perPage         | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"organizationName": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"[
                {
                  \"type\": \"Event\",
                  \"public\": true,
                  \"payload\": {
                  },
                  \"repo\": {
                    \"id\": 3,
                    \"name\": \"octocat/Hello-World\",
                    \"url\": \"https://api.github.com/repos/octocat/Hello-World\"
                  },
                  \"actor\": {
                    \"id\": 1,
                    \"login\": \"octocat\",
                    \"gravatar_id\": \"\",
                    \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                    \"url\": \"https://api.github.com/users/octocat\"
                  },
                  \"org\": {
                    \"id\": 1,
                    \"login\": \"github\",
                    \"gravatar_id\": \"\",
                    \"url\": \"https://api.github.com/orgs/github\",
                    \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\"
                  },
                  \"created_at\": \"2011-09-06T17:26:27Z\",
                  \"id\": \"12345\"
                }
              ]"
		}
	}
}
```

<a name="getUserPublicPerformedEvents"/>
## Github.getUserPublicPerformedEvents
List public events performed by a user

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| user       | String     | The user name (required)
| page       | Number     | Page number of the results to fetch. (optional)
| perPage    | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"[
                {
                  \"type\": \"Event\",
                  \"public\": true,
                  \"payload\": {
                  },
                  \"repo\": {
                    \"id\": 3,
                    \"name\": \"octocat/Hello-World\",
                    \"url\": \"https://api.github.com/repos/octocat/Hello-World\"
                  },
                  \"actor\": {
                    \"id\": 1,
                    \"login\": \"octocat\",
                    \"gravatar_id\": \"\",
                    \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                    \"url\": \"https://api.github.com/users/octocat\"
                  },
                  \"org\": {
                    \"id\": 1,
                    \"login\": \"github\",
                    \"gravatar_id\": \"\",
                    \"url\": \"https://api.github.com/orgs/github\",
                    \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\"
                  },
                  \"created_at\": \"2011-09-06T17:26:27Z\",
                  \"id\": \"12345\"
                }
              ]"
		}
	}
}
```

<a name="getUserReceivedEvents"/>
## Github.getUserReceivedEvents
List events that a user has received

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| user       | String     | The user name (required)
| page       | Number     | Page number of the results to fetch. (optional)
| perPage    | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"[
                {
                  \"type\": \"Event\",
                  \"public\": true,
                  \"payload\": {
                  },
                  \"repo\": {
                    \"id\": 3,
                    \"name\": \"octocat/Hello-World\",
                    \"url\": \"https://api.github.com/repos/octocat/Hello-World\"
                  },
                  \"actor\": {
                    \"id\": 1,
                    \"login\": \"octocat\",
                    \"gravatar_id\": \"\",
                    \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                    \"url\": \"https://api.github.com/users/octocat\"
                  },
                  \"org\": {
                    \"id\": 1,
                    \"login\": \"github\",
                    \"gravatar_id\": \"\",
                    \"url\": \"https://api.github.com/orgs/github\",
                    \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\"
                  },
                  \"created_at\": \"2011-09-06T17:26:27Z\",
                  \"id\": \"12345\"
                }
              ]"
		}
	}
}
```

<a name="getUserReceivedPublicEvents"/>
## Github.getUserReceivedPublicEvents
List public events that a user has received

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| user       | String     | The user name (required)
| page       | Number     | Page number of the results to fetch. (optional)
| perPage    | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"[
                {
                  \"type\": \"Event\",
                  \"public\": true,
                  \"payload\": {
                  },
                  \"repo\": {
                    \"id\": 3,
                    \"name\": \"octocat/Hello-World\",
                    \"url\": \"https://api.github.com/repos/octocat/Hello-World\"
                  },
                  \"actor\": {
                    \"id\": 1,
                    \"login\": \"octocat\",
                    \"gravatar_id\": \"\",
                    \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                    \"url\": \"https://api.github.com/users/octocat\"
                  },
                  \"org\": {
                    \"id\": 1,
                    \"login\": \"github\",
                    \"gravatar_id\": \"\",
                    \"url\": \"https://api.github.com/orgs/github\",
                    \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\"
                  },
                  \"created_at\": \"2011-09-06T17:26:27Z\",
                  \"id\": \"12345\"
                }
              ]"
		}
	}
}
```

<a name="getFeeds"/>
## Github.getFeeds
Get all feeds available for the authenticated user.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)

#### Request example
```json
{	"accessToken": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"{
                \"timeline_url\": \"https://github.com/timeline\",
                \"user_url\": \"https://github.com/{user}\",
                \"current_user_public_url\": \"https://github.com/defunkt\",
                \"current_user_url\": \"https://github.com/defunkt.private?token=abc123\",
                \"current_user_actor_url\": \"https://github.com/defunkt.private.actor?token=abc123\",
                \"current_user_organization_url\": \"\",
                \"current_user_organization_urls\": [
                  \"https://github.com/organizations/github/defunkt.private.atom?token=abc123\"
                ],
                \"_links\": {
                  \"timeline\": {
                    \"href\": \"https://github.com/timeline\",
                    \"type\": \"application/atom+xml\"
                  },
                  \"user\": {
                    \"href\": \"https://github.com/{user}\",
                    \"type\": \"application/atom+xml\"
                  },
                  \"current_user_public\": {
                    \"href\": \"https://github.com/defunkt\",
                    \"type\": \"application/atom+xml\"
                  },
                  \"current_user\": {
                    \"href\": \"https://github.com/defunkt.private?token=abc123\",
                    \"type\": \"application/atom+xml\"
                  },
                  \"current_user_actor\": {
                    \"href\": \"https://github.com/defunkt.private.actor?token=abc123\",
                    \"type\": \"application/atom+xml\"
                  },
                  \"current_user_organization\": {
                    \"href\": \"\",
                    \"type\": \"\"
                  },
                  \"current_user_organizations\": [
                    {
                      \"href\": \"https://github.com/organizations/github/defunkt.private.atom?token=abc123\",
                      \"type\": \"application/atom+xml\"
                    }
                  ]
                }
              }"
		}
	}
}
```

<a name="getNotificationThread"/>
## Github.getNotificationThread
View a single notification thread.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| id         | String     | The ID of the thread (required)

#### Request example
```json
{	"accessToken": "...",
	"id": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"{
                    \"id\": \"1\",
                    \"repository\": {
                      \"id\": 1296269,
                      \"owner\": {
                        \"login\": \"octocat\",
                        \"id\": 1,
                        \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                        \"gravatar_id\": \"\",
                        \"url\": \"https://api.github.com/users/octocat\",
                        \"html_url\": \"https://github.com/octocat\",
                        \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                        \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                        \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                        \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                        \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                        \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                        \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                        \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                        \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                        \"type\": \"User\",
                        \"site_admin\": false
                      },
                      \"name\": \"Hello-World\",
                      \"full_name\": \"octocat/Hello-World\",
                      \"description\": \"This your first repo!\",
                      \"private\": false,
                      \"fork\": false,
                      \"url\": \"https://api.github.com/repos/octocat/Hello-World\",
                      \"html_url\": \"https://github.com/octocat/Hello-World\"
                    },
                    \"subject\": {
                      \"title\": \"Greetings\",
                      \"url\": \"https://api.github.com/repos/octokit/octokit.rb/issues/123\",
                      \"latest_comment_url\": \"https://api.github.com/repos/octokit/octokit.rb/issues/comments/123\",
                      \"type\": \"Issue\"
                    },
                    \"reason\": \"subscribed\",
                    \"unread\": true,
                    \"updated_at\": \"2014-11-07T22:01:45Z\",
                    \"last_read_at\": \"2014-11-07T22:01:45Z\",
                    \"url\": \"https://api.github.com/notifications/threads/1\"
                  }"
		}
	}
}
```

<a name="getUserNotifications"/>
## Github.getUserNotifications
Get all notifications for the current user, grouped by repository.

| Field        | Type       | Description
|--------------|------------|----------
| accessToken  | credentials| The access_token obtained from Github. (optional)
| all          | String     | If true, show notifications marked as read. Default: false (optional)
| participating| String     | If true, only shows notifications in which the user is directly participating or mentioned. Default: false (optional)
| since        | String     | Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ (optional)
| before       | String     | Only show notifications updated before the given time. This is a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ. (optional)

#### Request example
```json
{	"accessToken": "...",
	"all": "...",
	"participating": "...",
	"since": "...",
	"before": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"[
                    {
                      \"id\": \"1\",
                      \"repository\": {
                        \"id\": 1296269,
                        \"owner\": {
                          \"login\": \"octocat\",
                          \"id\": 1,
                          \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                          \"gravatar_id\": \"\",
                          \"url\": \"https://api.github.com/users/octocat\",
                          \"html_url\": \"https://github.com/octocat\",
                          \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                          \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                          \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                          \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                          \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                          \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                          \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                          \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                          \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                          \"type\": \"User\",
                          \"site_admin\": false
                        },
                        \"name\": \"Hello-World\",
                        \"full_name\": \"octocat/Hello-World\",
                        \"description\": \"This your first repo!\",
                        \"private\": false,
                        \"fork\": false,
                        \"url\": \"https://api.github.com/repos/octocat/Hello-World\",
                        \"html_url\": \"https://github.com/octocat/Hello-World\"
                      },
                      \"subject\": {
                        \"title\": \"Greetings\",
                        \"url\": \"https://api.github.com/repos/octokit/octokit.rb/issues/123\",
                        \"latest_comment_url\": \"https://api.github.com/repos/octokit/octokit.rb/issues/comments/123\",
                        \"type\": \"Issue\"
                      },
                      \"reason\": \"subscribed\",
                      \"unread\": true,
                      \"updated_at\": \"2014-11-07T22:01:45Z\",
                      \"last_read_at\": \"2014-11-07T22:01:45Z\",
                      \"url\": \"https://api.github.com/notifications/threads/1\"
                    }
                  ]"
		}
	}
}
```

<a name="getUserRepositoryNotifications"/>
## Github.getUserRepositoryNotifications
Get all notifications for the given user.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| all           | String     | If true, show notifications marked as read. Default: false (optional)
| participating | String     | If true, only shows notifications in which the user is directly participating or mentioned. Default: false (optional)
| since         | String     | Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ (optional)
| before        | String     | Only show notifications updated before the given time. This is a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"all": "...",
	"participating": "...",
	"since": "...",
	"before": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"[
                    {
                      \"id\": \"1\",
                      \"repository\": {
                        \"id\": 1296269,
                        \"owner\": {
                          \"login\": \"octocat\",
                          \"id\": 1,
                          \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                          \"gravatar_id\": \"\",
                          \"url\": \"https://api.github.com/users/octocat\",
                          \"html_url\": \"https://github.com/octocat\",
                          \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                          \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                          \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                          \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                          \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                          \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                          \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                          \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                          \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                          \"type\": \"User\",
                          \"site_admin\": false
                        },
                        \"name\": \"Hello-World\",
                        \"full_name\": \"octocat/Hello-World\",
                        \"description\": \"This your first repo!\",
                        \"private\": false,
                        \"fork\": false,
                        \"url\": \"https://api.github.com/repos/octocat/Hello-World\",
                        \"html_url\": \"https://github.com/octocat/Hello-World\"
                      },
                      \"subject\": {
                        \"title\": \"Greetings\",
                        \"url\": \"https://api.github.com/repos/octokit/octokit.rb/issues/123\",
                        \"latest_comment_url\": \"https://api.github.com/repos/octokit/octokit.rb/issues/comments/123\",
                        \"type\": \"Issue\"
                      },
                      \"reason\": \"subscribed\",
                      \"unread\": true,
                      \"updated_at\": \"2014-11-07T22:01:45Z\",
                      \"last_read_at\": \"2014-11-07T22:01:45Z\",
                      \"url\": \"https://api.github.com/notifications/threads/1\"
                    }
                  ]"
		}
	}
}
```

<a name="getRepositorySubscription"/>
## Github.getRepositorySubscription
Get a Repository Subscription.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The onwer name (required)
| repositoryName| String     | The name of the repository (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"{
                    \"subscribed\": true,
                    \"ignored\": false,
                    \"reason\": null,
                    \"created_at\": \"2012-10-06T21:34:12Z\",
                    \"url\": \"https://api.github.com/repos/octocat/example/subscription\",
                    \"repository_url\": \"https://api.github.com/repos/octocat/example\"
                  }"
		}
	}
}
```

<a name="getRepositoryStargazers"/>
## Github.getRepositoryStargazers
List Stargazers

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"[
                    {
                      \"login\": \"octocat\",
                      \"id\": 1,
                      \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                      \"gravatar_id\": \"\",
                      \"url\": \"https://api.github.com/users/octocat\",
                      \"html_url\": \"https://github.com/octocat\",
                      \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                      \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                      \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                      \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                      \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                      \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                      \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                      \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                      \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                      \"type\": \"User\",
                      \"site_admin\": false
                    }
                  ]"
		}
	}
}
```

<a name="getStarredRepositories"/>
## Github.getStarredRepositories
List repositories being starred by the authenticated user

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| page       | Number     | Page number of the results to fetch. (optional)
| perPage    | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"[
                    {
                      \"id\": 1296269,
                      \"owner\": {
                        \"login\": \"octocat\",
                        \"id\": 1,
                        \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                        \"gravatar_id\": \"\",
                        \"url\": \"https://api.github.com/users/octocat\",
                        \"html_url\": \"https://github.com/octocat\",
                        \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                        \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                        \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                        \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                        \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                        \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                        \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                        \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                        \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                        \"type\": \"User\",
                        \"site_admin\": false
                      },
                      \"name\": \"Hello-World\",
                      \"full_name\": \"octocat/Hello-World\",
                      \"description\": \"This your first repo!\",
                      \"private\": false,
                      \"fork\": false,
                      \"url\": \"https://api.github.com/repos/octocat/Hello-World\",
                      \"html_url\": \"https://github.com/octocat/Hello-World\",
                      \"archive_url\": \"http://api.github.com/repos/octocat/Hello-World/{archive_format}{/ref}\",
                      \"assignees_url\": \"http://api.github.com/repos/octocat/Hello-World/assignees{/user}\",
                      \"blobs_url\": \"http://api.github.com/repos/octocat/Hello-World/git/blobs{/sha}\",
                      \"branches_url\": \"http://api.github.com/repos/octocat/Hello-World/branches{/branch}\",
                      \"clone_url\": \"https://github.com/octocat/Hello-World.git\",
                      \"collaborators_url\": \"http://api.github.com/repos/octocat/Hello-World/collaborators{/collaborator}\",
                      \"comments_url\": \"http://api.github.com/repos/octocat/Hello-World/comments{/number}\",
                      \"commits_url\": \"http://api.github.com/repos/octocat/Hello-World/commits{/sha}\",
                      \"compare_url\": \"http://api.github.com/repos/octocat/Hello-World/compare/{base}...{head}\",
                      \"contents_url\": \"http://api.github.com/repos/octocat/Hello-World/contents/{+path}\",
                      \"contributors_url\": \"http://api.github.com/repos/octocat/Hello-World/contributors\",
                      \"deployments_url\": \"http://api.github.com/repos/octocat/Hello-World/deployments\",
                      \"downloads_url\": \"http://api.github.com/repos/octocat/Hello-World/downloads\",
                      \"events_url\": \"http://api.github.com/repos/octocat/Hello-World/events\",
                      \"forks_url\": \"http://api.github.com/repos/octocat/Hello-World/forks\",
                      \"git_commits_url\": \"http://api.github.com/repos/octocat/Hello-World/git/commits{/sha}\",
                      \"git_refs_url\": \"http://api.github.com/repos/octocat/Hello-World/git/refs{/sha}\",
                      \"git_tags_url\": \"http://api.github.com/repos/octocat/Hello-World/git/tags{/sha}\",
                      \"git_url\": \"git:github.com/octocat/Hello-World.git\",
                      \"hooks_url\": \"http://api.github.com/repos/octocat/Hello-World/hooks\",
                      \"issue_comment_url\": \"http://api.github.com/repos/octocat/Hello-World/issues/comments{/number}\",
                      \"issue_events_url\": \"http://api.github.com/repos/octocat/Hello-World/issues/events{/number}\",
                      \"issues_url\": \"http://api.github.com/repos/octocat/Hello-World/issues{/number}\",
                      \"keys_url\": \"http://api.github.com/repos/octocat/Hello-World/keys{/key_id}\",
                      \"labels_url\": \"http://api.github.com/repos/octocat/Hello-World/labels{/name}\",
                      \"languages_url\": \"http://api.github.com/repos/octocat/Hello-World/languages\",
                      \"merges_url\": \"http://api.github.com/repos/octocat/Hello-World/merges\",
                      \"milestones_url\": \"http://api.github.com/repos/octocat/Hello-World/milestones{/number}\",
                      \"mirror_url\": \"git:git.example.com/octocat/Hello-World\",
                      \"notifications_url\": \"http://api.github.com/repos/octocat/Hello-World/notifications{?since, all, participating}\",
                      \"pulls_url\": \"http://api.github.com/repos/octocat/Hello-World/pulls{/number}\",
                      \"releases_url\": \"http://api.github.com/repos/octocat/Hello-World/releases{/id}\",
                      \"ssh_url\": \"git@github.com:octocat/Hello-World.git\",
                      \"stargazers_url\": \"http://api.github.com/repos/octocat/Hello-World/stargazers\",
                      \"statuses_url\": \"http://api.github.com/repos/octocat/Hello-World/statuses/{sha}\",
                      \"subscribers_url\": \"http://api.github.com/repos/octocat/Hello-World/subscribers\",
                      \"subscription_url\": \"http://api.github.com/repos/octocat/Hello-World/subscription\",
                      \"svn_url\": \"https://svn.github.com/octocat/Hello-World\",
                      \"tags_url\": \"http://api.github.com/repos/octocat/Hello-World/tags\",
                      \"teams_url\": \"http://api.github.com/repos/octocat/Hello-World/teams\",
                      \"trees_url\": \"http://api.github.com/repos/octocat/Hello-World/git/trees{/sha}\",
                      \"homepage\": \"https://github.com\",
                      \"language\": null,
                      \"forks_count\": 9,
                      \"stargazers_count\": 80,
                      \"watchers_count\": 80,
                      \"size\": 108,
                      \"default_branch\": \"master\",
                      \"open_issues_count\": 0,
                      \"has_issues\": true,
                      \"has_wiki\": true,
                      \"has_pages\": false,
                      \"has_downloads\": true,
                      \"pushed_at\": \"2011-01-26T19:06:43Z\",
                      \"created_at\": \"2011-01-26T19:01:12Z\",
                      \"updated_at\": \"2011-01-26T19:14:43Z\",
                      \"permissions\": {
                        \"admin\": false,
                        \"push\": false,
                        \"pull\": true
                      }
                    }
                  ]"
		}
	}
}
```

<a name="getUserStarredRepositories"/>
## Github.getUserStarredRepositories
List repositories being starred by a user

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| user       | String     | The user name (required)
| page       | Number     | Page number of the results to fetch. (optional)
| perPage    | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"[
                    {
                      \"id\": 1296269,
                      \"owner\": {
                        \"login\": \"octocat\",
                        \"id\": 1,
                        \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                        \"gravatar_id\": \"\",
                        \"url\": \"https://api.github.com/users/octocat\",
                        \"html_url\": \"https://github.com/octocat\",
                        \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                        \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                        \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                        \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                        \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                        \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                        \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                        \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                        \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                        \"type\": \"User\",
                        \"site_admin\": false
                      },
                      \"name\": \"Hello-World\",
                      \"full_name\": \"octocat/Hello-World\",
                      \"description\": \"This your first repo!\",
                      \"private\": false,
                      \"fork\": false,
                      \"url\": \"https://api.github.com/repos/octocat/Hello-World\",
                      \"html_url\": \"https://github.com/octocat/Hello-World\",
                      \"archive_url\": \"http://api.github.com/repos/octocat/Hello-World/{archive_format}{/ref}\",
                      \"assignees_url\": \"http://api.github.com/repos/octocat/Hello-World/assignees{/user}\",
                      \"blobs_url\": \"http://api.github.com/repos/octocat/Hello-World/git/blobs{/sha}\",
                      \"branches_url\": \"http://api.github.com/repos/octocat/Hello-World/branches{/branch}\",
                      \"clone_url\": \"https://github.com/octocat/Hello-World.git\",
                      \"collaborators_url\": \"http://api.github.com/repos/octocat/Hello-World/collaborators{/collaborator}\",
                      \"comments_url\": \"http://api.github.com/repos/octocat/Hello-World/comments{/number}\",
                      \"commits_url\": \"http://api.github.com/repos/octocat/Hello-World/commits{/sha}\",
                      \"compare_url\": \"http://api.github.com/repos/octocat/Hello-World/compare/{base}...{head}\",
                      \"contents_url\": \"http://api.github.com/repos/octocat/Hello-World/contents/{+path}\",
                      \"contributors_url\": \"http://api.github.com/repos/octocat/Hello-World/contributors\",
                      \"deployments_url\": \"http://api.github.com/repos/octocat/Hello-World/deployments\",
                      \"downloads_url\": \"http://api.github.com/repos/octocat/Hello-World/downloads\",
                      \"events_url\": \"http://api.github.com/repos/octocat/Hello-World/events\",
                      \"forks_url\": \"http://api.github.com/repos/octocat/Hello-World/forks\",
                      \"git_commits_url\": \"http://api.github.com/repos/octocat/Hello-World/git/commits{/sha}\",
                      \"git_refs_url\": \"http://api.github.com/repos/octocat/Hello-World/git/refs{/sha}\",
                      \"git_tags_url\": \"http://api.github.com/repos/octocat/Hello-World/git/tags{/sha}\",
                      \"git_url\": \"git:github.com/octocat/Hello-World.git\",
                      \"hooks_url\": \"http://api.github.com/repos/octocat/Hello-World/hooks\",
                      \"issue_comment_url\": \"http://api.github.com/repos/octocat/Hello-World/issues/comments{/number}\",
                      \"issue_events_url\": \"http://api.github.com/repos/octocat/Hello-World/issues/events{/number}\",
                      \"issues_url\": \"http://api.github.com/repos/octocat/Hello-World/issues{/number}\",
                      \"keys_url\": \"http://api.github.com/repos/octocat/Hello-World/keys{/key_id}\",
                      \"labels_url\": \"http://api.github.com/repos/octocat/Hello-World/labels{/name}\",
                      \"languages_url\": \"http://api.github.com/repos/octocat/Hello-World/languages\",
                      \"merges_url\": \"http://api.github.com/repos/octocat/Hello-World/merges\",
                      \"milestones_url\": \"http://api.github.com/repos/octocat/Hello-World/milestones{/number}\",
                      \"mirror_url\": \"git:git.example.com/octocat/Hello-World\",
                      \"notifications_url\": \"http://api.github.com/repos/octocat/Hello-World/notifications{?since, all, participating}\",
                      \"pulls_url\": \"http://api.github.com/repos/octocat/Hello-World/pulls{/number}\",
                      \"releases_url\": \"http://api.github.com/repos/octocat/Hello-World/releases{/id}\",
                      \"ssh_url\": \"git@github.com:octocat/Hello-World.git\",
                      \"stargazers_url\": \"http://api.github.com/repos/octocat/Hello-World/stargazers\",
                      \"statuses_url\": \"http://api.github.com/repos/octocat/Hello-World/statuses/{sha}\",
                      \"subscribers_url\": \"http://api.github.com/repos/octocat/Hello-World/subscribers\",
                      \"subscription_url\": \"http://api.github.com/repos/octocat/Hello-World/subscription\",
                      \"svn_url\": \"https://svn.github.com/octocat/Hello-World\",
                      \"tags_url\": \"http://api.github.com/repos/octocat/Hello-World/tags\",
                      \"teams_url\": \"http://api.github.com/repos/octocat/Hello-World/teams\",
                      \"trees_url\": \"http://api.github.com/repos/octocat/Hello-World/git/trees{/sha}\",
                      \"homepage\": \"https://github.com\",
                      \"language\": null,
                      \"forks_count\": 9,
                      \"stargazers_count\": 80,
                      \"watchers_count\": 80,
                      \"size\": 108,
                      \"default_branch\": \"master\",
                      \"open_issues_count\": 0,
                      \"has_issues\": true,
                      \"has_wiki\": true,
                      \"has_pages\": false,
                      \"has_downloads\": true,
                      \"pushed_at\": \"2011-01-26T19:06:43Z\",
                      \"created_at\": \"2011-01-26T19:01:12Z\",
                      \"updated_at\": \"2011-01-26T19:14:43Z\",
                      \"permissions\": {
                        \"admin\": false,
                        \"push\": false,
                        \"pull\": true
                      }
                    }
                  ]"
		}
	}
}
```

<a name="getWatchedRepositories"/>
## Github.getWatchedRepositories
List repositories being watched by the authenticated user.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| page       | Number     | Page number of the results to fetch. (optional)
| perPage    | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"[
                        {
                          \"id\": 1296269,
                          \"owner\": {
                            \"login\": \"octocat\",
                            \"id\": 1,
                            \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                            \"gravatar_id\": \"\",
                            \"url\": \"https://api.github.com/users/octocat\",
                            \"html_url\": \"https://github.com/octocat\",
                            \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                            \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                            \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                            \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                            \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                            \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                            \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                            \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                            \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                            \"type\": \"User\",
                            \"site_admin\": false
                          },
                          \"name\": \"Hello-World\",
                          \"full_name\": \"octocat/Hello-World\",
                          \"description\": \"This your first repo!\",
                          \"private\": false,
                          \"fork\": false,
                          \"url\": \"https://api.github.com/repos/octocat/Hello-World\",
                          \"html_url\": \"https://github.com/octocat/Hello-World\",
                          \"archive_url\": \"http://api.github.com/repos/octocat/Hello-World/{archive_format}{/ref}\",
                          \"assignees_url\": \"http://api.github.com/repos/octocat/Hello-World/assignees{/user}\",
                          \"blobs_url\": \"http://api.github.com/repos/octocat/Hello-World/git/blobs{/sha}\",
                          \"branches_url\": \"http://api.github.com/repos/octocat/Hello-World/branches{/branch}\",
                          \"clone_url\": \"https://github.com/octocat/Hello-World.git\",
                          \"collaborators_url\": \"http://api.github.com/repos/octocat/Hello-World/collaborators{/collaborator}\",
                          \"comments_url\": \"http://api.github.com/repos/octocat/Hello-World/comments{/number}\",
                          \"commits_url\": \"http://api.github.com/repos/octocat/Hello-World/commits{/sha}\",
                          \"compare_url\": \"http://api.github.com/repos/octocat/Hello-World/compare/{base}...{head}\",
                          \"contents_url\": \"http://api.github.com/repos/octocat/Hello-World/contents/{+path}\",
                          \"contributors_url\": \"http://api.github.com/repos/octocat/Hello-World/contributors\",
                          \"deployments_url\": \"http://api.github.com/repos/octocat/Hello-World/deployments\",
                          \"downloads_url\": \"http://api.github.com/repos/octocat/Hello-World/downloads\",
                          \"events_url\": \"http://api.github.com/repos/octocat/Hello-World/events\",
                          \"forks_url\": \"http://api.github.com/repos/octocat/Hello-World/forks\",
                          \"git_commits_url\": \"http://api.github.com/repos/octocat/Hello-World/git/commits{/sha}\",
                          \"git_refs_url\": \"http://api.github.com/repos/octocat/Hello-World/git/refs{/sha}\",
                          \"git_tags_url\": \"http://api.github.com/repos/octocat/Hello-World/git/tags{/sha}\",
                          \"git_url\": \"git:github.com/octocat/Hello-World.git\",
                          \"hooks_url\": \"http://api.github.com/repos/octocat/Hello-World/hooks\",
                          \"issue_comment_url\": \"http://api.github.com/repos/octocat/Hello-World/issues/comments{/number}\",
                          \"issue_events_url\": \"http://api.github.com/repos/octocat/Hello-World/issues/events{/number}\",
                          \"issues_url\": \"http://api.github.com/repos/octocat/Hello-World/issues{/number}\",
                          \"keys_url\": \"http://api.github.com/repos/octocat/Hello-World/keys{/key_id}\",
                          \"labels_url\": \"http://api.github.com/repos/octocat/Hello-World/labels{/name}\",
                          \"languages_url\": \"http://api.github.com/repos/octocat/Hello-World/languages\",
                          \"merges_url\": \"http://api.github.com/repos/octocat/Hello-World/merges\",
                          \"milestones_url\": \"http://api.github.com/repos/octocat/Hello-World/milestones{/number}\",
                          \"mirror_url\": \"git:git.example.com/octocat/Hello-World\",
                          \"notifications_url\": \"http://api.github.com/repos/octocat/Hello-World/notifications{?since, all, participating}\",
                          \"pulls_url\": \"http://api.github.com/repos/octocat/Hello-World/pulls{/number}\",
                          \"releases_url\": \"http://api.github.com/repos/octocat/Hello-World/releases{/id}\",
                          \"ssh_url\": \"git@github.com:octocat/Hello-World.git\",
                          \"stargazers_url\": \"http://api.github.com/repos/octocat/Hello-World/stargazers\",
                          \"statuses_url\": \"http://api.github.com/repos/octocat/Hello-World/statuses/{sha}\",
                          \"subscribers_url\": \"http://api.github.com/repos/octocat/Hello-World/subscribers\",
                          \"subscription_url\": \"http://api.github.com/repos/octocat/Hello-World/subscription\",
                          \"svn_url\": \"https://svn.github.com/octocat/Hello-World\",
                          \"tags_url\": \"http://api.github.com/repos/octocat/Hello-World/tags\",
                          \"teams_url\": \"http://api.github.com/repos/octocat/Hello-World/teams\",
                          \"trees_url\": \"http://api.github.com/repos/octocat/Hello-World/git/trees{/sha}\",
                          \"homepage\": \"https://github.com\",
                          \"language\": null,
                          \"forks_count\": 9,
                          \"stargazers_count\": 80,
                          \"watchers_count\": 80,
                          \"size\": 108,
                          \"default_branch\": \"master\",
                          \"open_issues_count\": 0,
                          \"has_issues\": true,
                          \"has_wiki\": true,
                          \"has_pages\": false,
                          \"has_downloads\": true,
                          \"pushed_at\": \"2011-01-26T19:06:43Z\",
                          \"created_at\": \"2011-01-26T19:01:12Z\",
                          \"updated_at\": \"2011-01-26T19:14:43Z\",
                          \"permissions\": {
                            \"admin\": false,
                            \"push\": false,
                            \"pull\": true
                          }
                        }
                      ]"
		}
	}
}
```

<a name="getUserWatchedRepositories"/>
## Github.getUserWatchedRepositories
List repositories being watched by a user.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| user       | String     | The user name (required)
| page       | Number     | Page number of the results to fetch. (optional)
| perPage    | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"[
                        {
                          \"id\": 1296269,
                          \"owner\": {
                            \"login\": \"octocat\",
                            \"id\": 1,
                            \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                            \"gravatar_id\": \"\",
                            \"url\": \"https://api.github.com/users/octocat\",
                            \"html_url\": \"https://github.com/octocat\",
                            \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                            \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                            \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                            \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                            \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                            \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                            \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                            \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                            \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                            \"type\": \"User\",
                            \"site_admin\": false
                          },
                          \"name\": \"Hello-World\",
                          \"full_name\": \"octocat/Hello-World\",
                          \"description\": \"This your first repo!\",
                          \"private\": false,
                          \"fork\": false,
                          \"url\": \"https://api.github.com/repos/octocat/Hello-World\",
                          \"html_url\": \"https://github.com/octocat/Hello-World\",
                          \"archive_url\": \"http://api.github.com/repos/octocat/Hello-World/{archive_format}{/ref}\",
                          \"assignees_url\": \"http://api.github.com/repos/octocat/Hello-World/assignees{/user}\",
                          \"blobs_url\": \"http://api.github.com/repos/octocat/Hello-World/git/blobs{/sha}\",
                          \"branches_url\": \"http://api.github.com/repos/octocat/Hello-World/branches{/branch}\",
                          \"clone_url\": \"https://github.com/octocat/Hello-World.git\",
                          \"collaborators_url\": \"http://api.github.com/repos/octocat/Hello-World/collaborators{/collaborator}\",
                          \"comments_url\": \"http://api.github.com/repos/octocat/Hello-World/comments{/number}\",
                          \"commits_url\": \"http://api.github.com/repos/octocat/Hello-World/commits{/sha}\",
                          \"compare_url\": \"http://api.github.com/repos/octocat/Hello-World/compare/{base}...{head}\",
                          \"contents_url\": \"http://api.github.com/repos/octocat/Hello-World/contents/{+path}\",
                          \"contributors_url\": \"http://api.github.com/repos/octocat/Hello-World/contributors\",
                          \"deployments_url\": \"http://api.github.com/repos/octocat/Hello-World/deployments\",
                          \"downloads_url\": \"http://api.github.com/repos/octocat/Hello-World/downloads\",
                          \"events_url\": \"http://api.github.com/repos/octocat/Hello-World/events\",
                          \"forks_url\": \"http://api.github.com/repos/octocat/Hello-World/forks\",
                          \"git_commits_url\": \"http://api.github.com/repos/octocat/Hello-World/git/commits{/sha}\",
                          \"git_refs_url\": \"http://api.github.com/repos/octocat/Hello-World/git/refs{/sha}\",
                          \"git_tags_url\": \"http://api.github.com/repos/octocat/Hello-World/git/tags{/sha}\",
                          \"git_url\": \"git:github.com/octocat/Hello-World.git\",
                          \"hooks_url\": \"http://api.github.com/repos/octocat/Hello-World/hooks\",
                          \"issue_comment_url\": \"http://api.github.com/repos/octocat/Hello-World/issues/comments{/number}\",
                          \"issue_events_url\": \"http://api.github.com/repos/octocat/Hello-World/issues/events{/number}\",
                          \"issues_url\": \"http://api.github.com/repos/octocat/Hello-World/issues{/number}\",
                          \"keys_url\": \"http://api.github.com/repos/octocat/Hello-World/keys{/key_id}\",
                          \"labels_url\": \"http://api.github.com/repos/octocat/Hello-World/labels{/name}\",
                          \"languages_url\": \"http://api.github.com/repos/octocat/Hello-World/languages\",
                          \"merges_url\": \"http://api.github.com/repos/octocat/Hello-World/merges\",
                          \"milestones_url\": \"http://api.github.com/repos/octocat/Hello-World/milestones{/number}\",
                          \"mirror_url\": \"git:git.example.com/octocat/Hello-World\",
                          \"notifications_url\": \"http://api.github.com/repos/octocat/Hello-World/notifications{?since, all, participating}\",
                          \"pulls_url\": \"http://api.github.com/repos/octocat/Hello-World/pulls{/number}\",
                          \"releases_url\": \"http://api.github.com/repos/octocat/Hello-World/releases{/id}\",
                          \"ssh_url\": \"git@github.com:octocat/Hello-World.git\",
                          \"stargazers_url\": \"http://api.github.com/repos/octocat/Hello-World/stargazers\",
                          \"statuses_url\": \"http://api.github.com/repos/octocat/Hello-World/statuses/{sha}\",
                          \"subscribers_url\": \"http://api.github.com/repos/octocat/Hello-World/subscribers\",
                          \"subscription_url\": \"http://api.github.com/repos/octocat/Hello-World/subscription\",
                          \"svn_url\": \"https://svn.github.com/octocat/Hello-World\",
                          \"tags_url\": \"http://api.github.com/repos/octocat/Hello-World/tags\",
                          \"teams_url\": \"http://api.github.com/repos/octocat/Hello-World/teams\",
                          \"trees_url\": \"http://api.github.com/repos/octocat/Hello-World/git/trees{/sha}\",
                          \"homepage\": \"https://github.com\",
                          \"language\": null,
                          \"forks_count\": 9,
                          \"stargazers_count\": 80,
                          \"watchers_count\": 80,
                          \"size\": 108,
                          \"default_branch\": \"master\",
                          \"open_issues_count\": 0,
                          \"has_issues\": true,
                          \"has_wiki\": true,
                          \"has_pages\": false,
                          \"has_downloads\": true,
                          \"pushed_at\": \"2011-01-26T19:06:43Z\",
                          \"created_at\": \"2011-01-26T19:01:12Z\",
                          \"updated_at\": \"2011-01-26T19:14:43Z\",
                          \"permissions\": {
                            \"admin\": false,
                            \"push\": false,
                            \"pull\": true
                          }
                        }
                      ]"
		}
	}
}
```

<a name="getRepositoryWatchers"/>
## Github.getRepositoryWatchers
Get watchers for repository.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"[
                        {
                          \"login\": \"octocat\",
                          \"id\": 1,
                          \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                          \"gravatar_id\": \"\",
                          \"url\": \"https://api.github.com/users/octocat\",
                          \"html_url\": \"https://github.com/octocat\",
                          \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                          \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                          \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                          \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                          \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                          \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                          \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                          \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                          \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                          \"type\": \"User\",
                          \"site_admin\": false
                        }
                      ]"
		}
	}
}
```

<a name="markNotificationThreadAsRead"/>
## Github.markNotificationThreadAsRead
Mark a notification thread as read.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| id         | String     | The Id of the thread (required)

#### Request example
```json
{	"accessToken": "...",
	"id": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"Status: 204 No Content"
		}
	}
}
```

<a name="markNotificationsAsRead"/>
## Github.markNotificationsAsRead
Mark notifications as read for authenticated user.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| lastReadAt | String     | Describes the last point that notifications were checked. Anything updated since this time will not be updated. This is a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ. Default: Time.now (optional)

#### Request example
```json
{	"accessToken": "...",
	"lastReadAt": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"Status: 204 No Content"
		}
	}
}
```

<a name="markNotificationsAsReadForRepository"/>
## Github.markNotificationsAsReadForRepository
Mark notifications in a repo as read.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| lastReadAt    | String     | Describes the last point that notifications were checked. Anything updated since this time will not be updated. This is a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ. Default: Time.now (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"lastReadAt": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"Status: 204 No Content"
		}
	}
}
```

<a name="setNotificationThreadSubscription"/>
## Github.setNotificationThreadSubscription
This lets you subscribe or unsubscribe from a conversation. Unsubscribing from a conversation mutes all future notifications (until you comment or get @mentioned once more).

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| id         | String     | The ID of the thread (required)
| subscribed | String     | Determines if notifications should be received from this thread (optional)
| ignored    | String     | Determines if all notifications should be blocked from this thread (optional)

#### Request example
```json
{	"accessToken": "...",
	"id": "...",
	"subscribed": "...",
	"ignored": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"{
                        \"subscribed\": true,
                        \"ignored\": false,
                        \"reason\": null,
                        \"created_at\": \"2012-10-06T21:34:12Z\",
                        \"url\": \"https://api.github.com/notifications/threads/1/subscription\",
                        \"thread_url\": \"https://api.github.com/notifications/threads/1\"
                      }"
		}
	}
}
```

<a name="setRepositorySubscription"/>
## Github.setRepositorySubscription
Set a Repository Subscription

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| subscribed    | String     | Determines if notifications should be received from this repository. (optional)
| ignored       | String     | Determines if all notifications should be blocked from this repository. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"subscribed": "...",
	"ignored": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"{
                        \"subscribed\": true,
                        \"ignored\": false,
                        \"reason\": null,
                        \"created_at\": \"2012-10-06T21:34:12Z\",
                        \"url\": \"https://api.github.com/repos/octocat/example/subscription\",
                        \"repository_url\": \"https://api.github.com/repos/octocat/example\"
                      }"
		}
	}
}
```

<a name="starRepository"/>
## Github.starRepository
Star a repository

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"Status: 204 No Content"
		}
	}
}
```

<a name="unstarRepository"/>
## Github.unstarRepository
Unstar a repository

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"Status: 204 No Content"
		}
	}
}
```

<a name="unwatchRepository"/>
## Github.unwatchRepository
Unwatch a repository.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"Status: 204 No Content"
		}
	}
}
```

<a name="checkAuthorization"/>
## Github.checkAuthorization
Check an authorization

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (required)
| clientId   | String     | The 20 character OAuth app client key for which to create the token. (optional)

#### Request example
```json
{	"accessToken": "...",
	"clientId": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"{
                    \"id\": 1,
                    \"url\": \"https://api.github.com/authorizations/1\",
                    \"scopes\": [
                      \"public_repo\"
                    ],
                    \"token\": \"abcdefgh12345678\",
                    \"token_last_eight\": \"12345678\",
                    \"hashed_token\": \"25f94a2a5c7fbaf499c665bc73d67c1c87e496da8985131633ee0a95819db2e8\",
                    \"app\": {
                      \"url\": \"http://my-github-app.com\",
                      \"name\": \"my github app\",
                      \"client_id\": \"abcde12345fghij67890\"
                    },
                    \"note\": \"optional note\",
                    \"note_url\": \"http://optional/note/url\",
                    \"updated_at\": \"2011-09-06T20:39:23Z\",
                    \"created_at\": \"2011-09-06T17:26:27Z\",
                    \"fingerprint\": \"jklmnop12345678\",
                    \"user\": {
                      \"login\": \"octocat\",
                      \"id\": 1,
                      \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                      \"gravatar_id\": \"\",
                      \"url\": \"https://api.github.com/users/octocat\",
                      \"html_url\": \"https://github.com/octocat\",
                      \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                      \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                      \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                      \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                      \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                      \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                      \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                      \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                      \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                      \"type\": \"User\",
                      \"site_admin\": false
                    }
                  }"
		}
	}
}
```

<a name="createAuthorization"/>
## Github.createAuthorization
Create a new authorization

| Field        | Type       | Description
|--------------|------------|----------
| accessToken  | credentials| The access_token obtained from Github. (optional)
| username     | String     | The username obtained from Github. (required)
| password     | String     | The password obtained from Github. (required)
| twoFactorCode| String     | Required for two-factor auth method. (optional)
| scopes       | JSON       | A list of scopes that this authorization is in. (optional)
| note         | String     | A note to remind you what the OAuth token is for. (optional)
| noteUrl      | String     | A URL to remind you what app the OAuth token is for. (optional)
| clientId     | String     | The 20 character OAuth app client key for which to create the token. (optional)
| clientSecret | String     | The 40 character OAuth app client secret for which to create the token. (optional)
| fingerprint  | String     | A unique string to distinguish an authorization from others created for the same client ID and user. (optional)

#### Request example
```json
{	"accessToken": "...",
	"username": "...",
	"password": "...",
	"twoFactorCode": "...",
	"scopes": "...",
	"note": "...",
	"noteUrl": "...",
	"clientId": "...",
	"clientSecret": "...",
	"fingerprint": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"{
                    \"id\": 1,
                    \"url\": \"https://api.github.com/authorizations/1\",
                    \"scopes\": [
                      \"public_repo\"
                    ],
                    \"token\": \"abcdefgh12345678\",
                    \"token_last_eight\": \"12345678\",
                    \"hashed_token\": \"25f94a2a5c7fbaf499c665bc73d67c1c87e496da8985131633ee0a95819db2e8\",
                    \"app\": {
                      \"url\": \"http://my-github-app.com\",
                      \"name\": \"my github app\",
                      \"client_id\": \"abcde12345fghij67890\"
                    },
                    \"note\": \"optional note\",
                    \"note_url\": \"http://optional/note/url\",
                    \"updated_at\": \"2011-09-06T20:39:23Z\",
                    \"created_at\": \"2011-09-06T17:26:27Z\",
                    \"fingerprint\": \"\"
                  }"
		}
	}
}
```

<a name="deleteAuthorization"/>
## Github.deleteAuthorization
Delete an authorization

| Field        | Type       | Description
|--------------|------------|----------
| accessToken  | credentials| The access_token obtained from Github. (optional)
| username     | String     | The username obtained from Github. (required)
| password     | String     | The password obtained from Github. (required)
| twoFactorCode| String     | Required for two-factor auth method. (optional)
| id           | String     | The authorization ID (required)

#### Request example
```json
{	"accessToken": "...",
	"username": "...",
	"password": "...",
	"twoFactorCode": "...",
	"id": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"Status: 204 No Content"
		}
	}
}
```

<a name="deleteGrantAuthorization"/>
## Github.deleteGrantAuthorization
Delete a grant. (In preview period. See README.)

| Field        | Type       | Description
|--------------|------------|----------
| accessToken  | credentials| The access_token obtained from Github. (optional)
| username     | String     | The username obtained from Github. (required)
| password     | String     | The password obtained from Github. (required)
| twoFactorCode| String     | Required for two-factor auth method. (optional)
| id           | String     | The authorization ID (required)

#### Request example
```json
{	"accessToken": "...",
	"username": "...",
	"password": "...",
	"twoFactorCode": "...",
	"id": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"Status: 204 No Content"
		}
	}
}
```

<a name="getAuthorization"/>
## Github.getAuthorization
Get a single authorization

| Field        | Type       | Description
|--------------|------------|----------
| accessToken  | credentials| The access_token obtained from Github. (optional)
| username     | String     | The username obtained from Github. (required)
| password     | String     | The password obtained from Github. (required)
| twoFactorCode| String     | Required for two-factor auth method. (optional)
| id           | String     | The authorization ID (required)

#### Request example
```json
{	"accessToken": "...",
	"username": "...",
	"password": "...",
	"twoFactorCode": "...",
	"id": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"{
                        \"id\": 1,
                        \"url\": \"https://api.github.com/authorizations/1\",
                        \"scopes\": [
                          \"public_repo\"
                        ],
                        \"token\": \"\",
                        \"token_last_eight\": \"12345678\",
                        \"hashed_token\": \"25f94a2a5c7fbaf499c665bc73d67c1c87e496da8985131633ee0a95819db2e8\",
                        \"app\": {
                          \"url\": \"http://my-github-app.com\",
                          \"name\": \"my github app\",
                          \"client_id\": \"abcde12345fghij67890\"
                        },
                        \"note\": \"optional note\",
                        \"note_url\": \"http://optional/note/url\",
                        \"updated_at\": \"2011-09-06T20:39:23Z\",
                        \"created_at\": \"2011-09-06T17:26:27Z\",
                        \"fingerprint\": \"jklmnop12345678\"
                      }"
		}
	}
}
```

<a name="getAllAuthorization"/>
## Github.getAllAuthorization
List your authorizations

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| username   | String     | The username obtained from Github. (required)
| password   | String     | The password obtained from Github. (required)
| page       | Number     | Page number of the results to fetch. (optional)
| perPage    | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"username": "...",
	"password": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"[
                        {
                          \"id\": 1,
                          \"url\": \"https://api.github.com/authorizations/1\",
                          \"scopes\": [
                            \"public_repo\"
                          ],
                          \"token\": \"\",
                          \"token_last_eight\": \"12345678\",
                          \"hashed_token\": \"25f94a2a5c7fbaf499c665bc73d67c1c87e496da8985131633ee0a95819db2e8\",
                          \"app\": {
                            \"url\": \"http://my-github-app.com\",
                            \"name\": \"my github app\",
                            \"client_id\": \"abcde12345fghij67890\"
                          },
                          \"note\": \"optional note\",
                          \"note_url\": \"http://optional/note/url\",
                          \"updated_at\": \"2011-09-06T20:39:23Z\",
                          \"created_at\": \"2011-09-06T17:26:27Z\",
                          \"fingerprint\": \"jklmnop12345678\"
                        }
                      ]"
		}
	}
}
```

<a name="getGrantAuthorization"/>
## Github.getGrantAuthorization
Get a single grant. (In preview period. See README.)

| Field        | Type       | Description
|--------------|------------|----------
| accessToken  | credentials| The access_token obtained from Github. (optional)
| id           | String     | The authorization ID (required)
| username     | String     | The username obtained from Github. (required)
| password     | String     | The password obtained from Github. (required)
| twoFactorCode| String     | Required for two-factor auth method. (optional)
| page         | Number     | Page number of the results to fetch. (optional)
| perPage      | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"id": "...",
	"username": "...",
	"password": "...",
	"twoFactorCode": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"{
                    \"id\": 1,
                    \"url\": \"https://api.github.com/applications/grants/1\",
                    \"app\": {
                      \"url\": \"http://my-github-app.com\",
                      \"name\": \"my github app\",
                      \"client_id\": \"abcde12345fghij67890\"
                    },
                    \"created_at\": \"2011-09-06T17:26:27Z\",
                    \"updated_at\": \"2011-09-06T20:39:23Z\",
                    \"scopes\": [
                      \"public_repo\"
                    ]
                  }"
		}
	}
}
```

<a name="getGrantsAuthorization"/>
## Github.getGrantsAuthorization
List your grants. (In preview period. See README.)

| Field        | Type       | Description
|--------------|------------|----------
| accessToken  | credentials| The access_token obtained from Github. (optional)
| username     | String     | The username obtained from Github. (required)
| password     | String     | The password obtained from Github. (required)
| twoFactorCode| String     | Required for two-factor auth method. (optional)
| page         | Number     | Page number of the results to fetch. (optional)
| perPage      | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"username": "...",
	"password": "...",
	"twoFactorCode": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"[
                        {
                          \"id\": 1,
                          \"url\": \"https://api.github.com/applications/grants/1\",
                          \"app\": {
                            \"url\": \"http://my-github-app.com\",
                            \"name\": \"my github app\",
                            \"client_id\": \"abcde12345fghij67890\"
                          },
                          \"created_at\": \"2011-09-06T17:26:27Z\",
                          \"updated_at\": \"2011-09-06T20:39:23Z\",
                          \"scopes\": [
                            \"public_repo\"
                          ]
                        }
                      ]"
		}
	}
}
```

<a name="getOrCreateAuthorizationForApp"/>
## Github.getOrCreateAuthorizationForApp
Get or create an authorization for a specific app

| Field       | Type       | Description
|-------------|------------|----------
| accessToken | credentials| The access_token obtained from Github. (optional)
| clientId    | String     | The 20 character OAuth app client key for which to create the token. (optional)
| clientSecret| String     | The 40 character OAuth app client secret associated with the client ID specified in the URL. (required)
| scopes      | JSON       | A list of scopes that this authorization is in. (optional)
| note        | String     | A note to remind you what the OAuth token is for. (optional)
| noteUrl     | String     | A URL to remind you what app the OAuth token is for. (optional)
| fingerprint | String     | A unique string to distinguish an authorization from others created for the same client ID and user. (optional)

#### Request example
```json
{	"accessToken": "...",
	"clientId": "...",
	"clientSecret": "...",
	"scopes": "...",
	"note": "...",
	"noteUrl": "...",
	"fingerprint": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"{
                    \"id\": 1,
                    \"url\": \"https://api.github.com/authorizations/1\",
                    \"scopes\": [
                      \"public_repo\"
                    ],
                    \"token\": \"abcdefgh12345678\",
                    \"token_last_eight\": \"12345678\",
                    \"hashed_token\": \"25f94a2a5c7fbaf499c665bc73d67c1c87e496da8985131633ee0a95819db2e8\",
                    \"app\": {
                      \"url\": \"http://my-github-app.com\",
                      \"name\": \"my github app\",
                      \"client_id\": \"abcde12345fghij67890\"
                    },
                    \"note\": \"optional note\",
                    \"note_url\": \"http://optional/note/url\",
                    \"updated_at\": \"2011-09-06T20:39:23Z\",
                    \"created_at\": \"2011-09-06T17:26:27Z\",
                    \"fingerprint\": \"jklmnop12345678\"
                  }"
		}
	}
}
```

<a name="getOrCreateAuthorizationForAppAndFingerprint"/>
## Github.getOrCreateAuthorizationForAppAndFingerprint
Get or create an authorization for a specific app and fingerprint

| Field       | Type       | Description
|-------------|------------|----------
| accessToken | credentials| The access_token obtained from Github. (optional)
| clientId    | String     | The 20 character OAuth app client key for which to create the token. (optional)
| fingerprint | String     | A unique string to distinguish an authorization from others created for the same client ID and user. (optional)
| clientSecret| String     | The 40 character OAuth app client secret associated with the client ID specified in the URL. (required)
| scopes      | JSON       | A list of scopes that this authorization is in. (optional)
| note        | String     | A note to remind you what the OAuth token is for. (optional)
| noteUrl     | String     | A URL to remind you what app the OAuth token is for. (optional)

#### Request example
```json
{	"accessToken": "...",
	"clientId": "...",
	"fingerprint": "...",
	"clientSecret": "...",
	"scopes": "...",
	"note": "...",
	"noteUrl": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"{
                    \"id\": 1,
                    \"url\": \"https://api.github.com/authorizations/1\",
                    \"scopes\": [
                      \"public_repo\"
                    ],
                    \"token\": \"abcdefgh12345678\",
                    \"token_last_eight\": \"12345678\",
                    \"hashed_token\": \"25f94a2a5c7fbaf499c665bc73d67c1c87e496da8985131633ee0a95819db2e8\",
                    \"app\": {
                      \"url\": \"http://my-github-app.com\",
                      \"name\": \"my github app\",
                      \"client_id\": \"abcde12345fghij67890\"
                    },
                    \"note\": \"optional note\",
                    \"note_url\": \"http://optional/note/url\",
                    \"updated_at\": \"2011-09-06T20:39:23Z\",
                    \"created_at\": \"2011-09-06T17:26:27Z\",
                    \"fingerprint\": \"jklmnop12345678\"
                  }"
		}
	}
}
```

<a name="resetAuthorization"/>
## Github.resetAuthorization
Reset an authorization

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (required)
| clientId   | String     | The 20 character OAuth app client key for which to create the token. (optional)

#### Request example
```json
{	"accessToken": "...",
	"clientId": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"{
                    \"id\": 1,
                    \"url\": \"https://api.github.com/authorizations/1\",
                    \"scopes\": [
                      \"public_repo\"
                    ],
                    \"token\": \"abcdefgh12345678\",
                    \"token_last_eight\": \"12345678\",
                    \"hashed_token\": \"25f94a2a5c7fbaf499c665bc73d67c1c87e496da8985131633ee0a95819db2e8\",
                    \"app\": {
                      \"url\": \"http://my-github-app.com\",
                      \"name\": \"my github app\",
                      \"client_id\": \"abcde12345fghij67890\"
                    },
                    \"note\": \"optional note\",
                    \"note_url\": \"http://optional/note/url\",
                    \"updated_at\": \"2011-09-06T20:39:23Z\",
                    \"created_at\": \"2011-09-06T17:26:27Z\",
                    \"fingerprint\": \"jklmnop12345678\",
                    \"user\": {
                      \"login\": \"octocat\",
                      \"id\": 1,
                      \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                      \"gravatar_id\": \"\",
                      \"url\": \"https://api.github.com/users/octocat\",
                      \"html_url\": \"https://github.com/octocat\",
                      \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                      \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                      \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                      \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                      \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                      \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                      \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                      \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                      \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                      \"type\": \"User\",
                      \"site_admin\": false
                    }
                  }"
		}
	}
}
```

<a name="revokeAuthorization"/>
## Github.revokeAuthorization
Revoke an authorization for an application

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (required)
| clientId   | String     | The 20 character OAuth app client key for which to create the token. (optional)

#### Request example
```json
{	"accessToken": "...",
	"clientId": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"Status: 204 No Content"
		}
	}
}
```

<a name="updateAuthorization"/>
## Github.updateAuthorization
Update an existing authorization

| Field       | Type       | Description
|-------------|------------|----------
| accessToken | credentials| The access_token obtained from Github. (optional)
| id          | String     | The authorization ID (required)
| scopes      | JSON       | A list of scopes that this authorization is in. (optional)
| addScopes   | JSON       | A list of scopes to add to this authorization. (optional)
| removeScopes| JSON       | A list of scopes to remove from this authorization. (optional)
| note        | String     | A note to remind you what the OAuth token is for. (optional)
| noteUrl     | String     | A URL to remind you what app the OAuth token is for. (optional)
| fingerprint | String     | A unique string to distinguish an authorization from others created for the same client ID and user. (optional)

#### Request example
```json
{	"accessToken": "...",
	"id": "...",
	"scopes": "...",
	"addScopes": "...",
	"removeScopes": "...",
	"note": "...",
	"noteUrl": "...",
	"fingerprint": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"{
                    \"id\": 1,
                    \"url\": \"https://api.github.com/authorizations/1\",
                    \"scopes\": [
                      \"public_repo\"
                    ],
                    \"token\": \"\",
                    \"token_last_eight\": \"12345678\",
                    \"hashed_token\": \"25f94a2a5c7fbaf499c665bc73d67c1c87e496da8985131633ee0a95819db2e8\",
                    \"app\": {
                      \"url\": \"http://my-github-app.com\",
                      \"name\": \"my github app\",
                      \"client_id\": \"abcde12345fghij67890\"
                    },
                    \"note\": \"optional note\",
                    \"note_url\": \"http://optional/note/url\",
                    \"updated_at\": \"2011-09-06T20:39:23Z\",
                    \"created_at\": \"2011-09-06T17:26:27Z\",
                    \"fingerprint\": \"jklmnop12345678\"
                  }"
		}
	}
}
```

<a name="createOrganizationEnterprise"/>
## Github.createOrganizationEnterprise
Create an organization

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| login      | String     | The organization's username. (required)
| admin      | String     | The login of the user who will manage this organization. (required)
| profileName| String     | The organization's display name. (optional)

#### Request example
```json
{	"accessToken": "...",
	"login": "...",
	"admin": "...",
	"profileName": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"{
                        \"login\": \"github\",
                        \"id\": 1,
                        \"url\": \"https://api.github.com/orgs/github\",
                        \"repos_url\": \"https://api.github.com/orgs/github/repos\",
                        \"events_url\": \"https://api.github.com/orgs/github/events\",
                        \"hooks_url\": \"https://api.github.com/orgs/github/hooks\",
                        \"issues_url\": \"https://api.github.com/orgs/github/issues\",
                        \"members_url\": \"https://api.github.com/orgs/github/members{/member}\",
                        \"public_members_url\": \"https://api.github.com/orgs/github/public_members{/member}\",
                        \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                        \"description\": \"A great organization\"
                      }"
		}
	}
}
```

<a name="getLicenseEnterprise"/>
## Github.getLicenseEnterprise
Get license information

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)

#### Request example
```json
{	"accessToken": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"{
                    \"seats\": 1400,
                    \"seats_used\": 1316,
                    \"seats_available\": 84,
                    \"kind\": \"standard\",
                    \"days_until_expiration\": 365,
                    \"expire_at\": \"2016/02/06 12:41:52 -0600\"
                  }"
		}
	}
}
```

<a name="queueIndexingJobEnterprise"/>
## Github.queueIndexingJobEnterprise
Queue an indexing job

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| target     | String     | A string representing the item to index. (required)

#### Request example
```json
{	"accessToken": "...",
	"target": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"{\"message\": \"Repository 'kansaichris/japaning' has been added to the indexing queue\"}"
		}
	}
}
```

<a name="statsEnterprise"/>
## Github.statsEnterprise
Get statistics.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| type       | String     | Possible values: issues, hooks, milestones, orgs, comments, pages, users, gists, pulls, repos, all. (required)

#### Request example
```json
{	"accessToken": "...",
	"type": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"{
                    \"repos\": {
                      \"total_repos\": 212,
                      \"root_repos\": 194,
                      \"fork_repos\": 18,
                      \"org_repos\": 51,
                      \"total_pushes\": 3082,
                      \"total_wikis\": 15
                    },
                    \"hooks\": {
                      \"total_hooks\": 27,
                      \"active_hooks\": 23,
                      \"inactive_hooks\": 4
                    },
                    \"pages\": {
                      \"total_pages\": 36
                    },
                    \"orgs\": {
                      \"total_orgs\": 33,
                      \"disabled_orgs\": 0,
                      \"total_teams\": 60,
                      \"total_team_members\": 314
                    },
                    \"users\": {
                      \"total_users\": 254,
                      \"admin_users\": 45,
                      \"suspended_users\": 21
                    },
                    \"pulls\": {
                      \"total_pulls\": 86,
                      \"merged_pulls\": 60,
                      \"mergeable_pulls\": 21,
                      \"unmergeable_pulls\": 3
                    },
                    \"issues\": {
                      \"total_issues\": 179,
                      \"open_issues\": 83,
                      \"closed_issues\": 96
                    },
                    \"milestones\": {
                      \"total_milestones\": 7,
                      \"open_milestones\": 6,
                      \"closed_milestones\": 1
                    },
                    \"gists\": {
                      \"total_gists\": 178,
                      \"private_gists\": 151,
                      \"public_gists\": 25
                    },
                    \"comments\": {
                      \"total_commit_comments\": 6,
                      \"total_gist_comments\": 28,
                      \"total_issue_comments\": 366,
                      \"total_pull_request_comments\": 30
                    }
                  }"
		}
	}
}
```

<a name="syncLdapForTeamEnterprise"/>
## Github.syncLdapForTeamEnterprise
Sync LDAP mapping for a team.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| teamId     | Number     | The ID of the team (required)

#### Request example
```json
{	"accessToken": "...",
	"teamId": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"{
                    \"ldap_dn\": \"cn=Enterprise Ops,ou=teams,dc=github,dc=com\",
                    \"id\": 1,
                    \"url\": \"https://api.github.com/teams/1\",
                    \"name\": \"Justice League\",
                    \"slug\": \"justice-league\",
                    \"description\": \"A great team.\",
                    \"privacy\": \"closed\",
                    \"permission\": \"admin\",
                    \"members_url\": \"https://api.github.com/teams/1/members{/member}\",
                    \"repositories_url\": \"https://api.github.com/teams/1/repos\"
                  }"
		}
	}
}
```

<a name="syncLdapForUserEnterprise"/>
## Github.syncLdapForUserEnterprise
Sync LDAP mapping for a user.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| user       | String     | The user name (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"{
                        \"status\": \queued\"
                      }"
		}
	}
}
```

<a name="updateLdapForTeamEnterprise"/>
## Github.updateLdapForTeamEnterprise
Update LDAP mapping for a team.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| teamId     | Number     | The ID of the team (required)
| data       | String     | JSON payload with the new LDAP data. (optional). Ex.: {"ldap_dn": "cn=Enterprise Ops,ou=teams,dc=github,dc=com"}

#### Request example
```json
{	"accessToken": "...",
	"teamId": 0,
	"data": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"{
                        \"ldap_dn\": \"cn=Enterprise Ops,ou=teams,dc=github,dc=com\",
                        \"id\": 1,
                        \"url\": \"https://api.github.com/teams/1\",
                        \"name\": \"Justice League\",
                        \"slug\": \"justice-league\",
                        \"description\": \"A great team.\",
                        \"privacy\": \"closed\",
                        \"permission\": \"admin\",
                        \"members_url\": \"https://api.github.com/teams/1/members{/member}\",
                        \"repositories_url\": \"https://api.github.com/teams/1/repos\"
                      }"
		}
	}
}
```

<a name="updateLdapForUserEnterprise"/>
## Github.updateLdapForUserEnterprise
Update LDAP mapping for a user.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| user       | String     | The user name (required)
| data       | String     | JSON payload with the new LDAP data. (optional). Ex.: {"ldap_dn": "uid=asdf,ou=users,dc=github,dc=com"}

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"data": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"{
                    \"ldap_dn\": \"uid=asdf,ou=users,dc=github,dc=com\",
                    \"login\": \"octocat\",
                    \"id\": 1,
                    \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                    \"gravatar_id\": \"\",
                    \"url\": \"https://api.github.com/users/octocat\",
                    \"html_url\": \"https://github.com/octocat\",
                    \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                    \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                    \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                    \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                    \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                    \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                    \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                    \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                    \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                    \"type\": \"User\",
                    \"site_admin\": false
                  }"
		}
	}
}
```

<a name="checkGistStar"/>
## Github.checkGistStar
Check if a gist is starred

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| id         | String     | Id (SHA1 hash) of the gist (required)

#### Request example
```json
{	"accessToken": "...",
	"id": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"Status: 204 No Content"
		}
	}
}
```

<a name="createGist"/>
## Github.createGist
Create a gist

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| files      | JSON       | Files that make up this gist. The key of which should be a required string filename and the value another required hash with parameters: 'content' (required)
| description| String     | A description of the gist. (optional)
| public     | String     | Indicates whether the gist is public. Default: false (required)

#### Request example
```json
{	"accessToken": "...",
	"files": "...",
	"description": "...",
	"public": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"{
                    \"url\": \"https://api.github.com/gists/aa5a315d61ae9438b18d\",
                    \"forks_url\": \"https://api.github.com/gists/aa5a315d61ae9438b18d/forks\",
                    \"commits_url\": \"https://api.github.com/gists/aa5a315d61ae9438b18d/commits\",
                    \"id\": \"aa5a315d61ae9438b18d\",
                    \"description\": \"description of gist\",
                    \"public\": true,
                    \"owner\": {
                      \"login\": \"octocat\",
                      \"id\": 1,
                      \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                      \"gravatar_id\": \"\",
                      \"url\": \"https://api.github.com/users/octocat\",
                      \"html_url\": \"https://github.com/octocat\",
                      \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                      \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                      \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                      \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                      \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                      \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                      \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                      \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                      \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                      \"type\": \"User\",
                      \"site_admin\": false
                    },
                    \"user\": null,
                    \"files\": {
                      \"ring.erl\": {
                        \"size\": 932,
                        \"raw_url\": \"https://gist.githubusercontent.com/raw/365370/8c4d2d43d178df44f4c03a7f2ac0ff512853564e/ring.erl\",
                        \"type\": \"text/plain\",
                        \"language\": \"Erlang\",
                        \"truncated\": false,
                        \"content\": \"contents of gist\"
                      }
                    },
                    \"truncated\": false,
                    \"comments\": 0,
                    \"comments_url\": \"https://api.github.com/gists/aa5a315d61ae9438b18d/comments/\",
                    \"html_url\": \"https://gist.github.com/aa5a315d61ae9438b18d\",
                    \"git_pull_url\": \"https://gist.github.com/aa5a315d61ae9438b18d.git\",
                    \"git_push_url\": \"https://gist.github.com/aa5a315d61ae9438b18d.git\",
                    \"created_at\": \"2010-04-14T02:15:15Z\",
                    \"updated_at\": \"2011-06-20T11:34:15Z\",
                    \"forks\": [
                      {
                        \"user\": {
                          \"login\": \"octocat\",
                          \"id\": 1,
                          \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                          \"gravatar_id\": \"\",
                          \"url\": \"https://api.github.com/users/octocat\",
                          \"html_url\": \"https://github.com/octocat\",
                          \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                          \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                          \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                          \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                          \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                          \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                          \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                          \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                          \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                          \"type\": \"User\",
                          \"site_admin\": false
                        },
                        \"url\": \"https://api.github.com/gists/dee9c42e4998ce2ea439\",
                        \"id\": \"dee9c42e4998ce2ea439\",
                        \"created_at\": \"2011-04-14T16:00:49Z\",
                        \"updated_at\": \"2011-04-14T16:00:49Z\"
                      }
                    ],
                    \"history\": [
                      {
                        \"url\": \"https://api.github.com/gists/aa5a315d61ae9438b18d/57a7f021a713b1c5a6a199b54cc514735d2d462f\",
                        \"version\": \"57a7f021a713b1c5a6a199b54cc514735d2d462f\",
                        \"user\": {
                          \"login\": \"octocat\",
                          \"id\": 1,
                          \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                          \"gravatar_id\": \"\",
                          \"url\": \"https://api.github.com/users/octocat\",
                          \"html_url\": \"https://github.com/octocat\",
                          \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                          \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                          \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                          \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                          \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                          \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                          \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                          \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                          \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                          \"type\": \"User\",
                          \"site_admin\": false
                        },
                        \"change_status\": {
                          \"deletions\": 0,
                          \"additions\": 180,
                          \"total\": 180
                        },
                        \"committed_at\": \"2010-04-14T02:15:15Z\"
                      }
                    ]
                  }"
		}
	}
}
```

<a name="createGistComment"/>
## Github.createGistComment
Create a comment

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| gistId     | String     | Id (SHA1 hash) of the gist. (required)
| body       | String     | The comment text. (required)

#### Request example
```json
{	"accessToken": "...",
	"gistId": "...",
	"body": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"{
                    \"id\": 1,
                    \"url\": \"https://api.github.com/gists/a6db0bec360bb87e9418/comments/1\",
                    \"body\": \"Just commenting for the sake of commenting\",
                    \"user\": {
                      \"login\": \"octocat\",
                      \"id\": 1,
                      \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                      \"gravatar_id\": \"\",
                      \"url\": \"https://api.github.com/users/octocat\",
                      \"html_url\": \"https://github.com/octocat\",
                      \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                      \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                      \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                      \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                      \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                      \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                      \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                      \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                      \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                      \"type\": \"User\",
                      \"site_admin\": false
                    },
                    \"created_at\": \"2011-04-18T23:23:56Z\",
                    \"updated_at\": \"2011-04-18T23:23:56Z\"
                  }"
		}
	}
}
```

<a name="deleteGist"/>
## Github.deleteGist
Delete a gist

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| id         | String     | Id (SHA1 hash) of the gist. (required)

#### Request example
```json
{	"accessToken": "...",
	"id": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"Status: 204 No Content"
		}
	}
}
```

<a name="deleteGistComment"/>
## Github.deleteGistComment
Delete a comment

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| gistId     | String     | Id (SHA1 hash) of the gist. (required)
| commentId  | String     | The comment ID. (required)

#### Request example
```json
{	"accessToken": "...",
	"gistId": "...",
	"commentId": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"Status: 204 No Content"
		}
	}
}
```

<a name="editGist"/>
## Github.editGist
Edit a gist

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| id         | String     | Id (SHA1 hash) of the gist. (required)
| description| String     | A description of the gist. (optional)
| files      | JSON       | Files that make up this gist. The key of which should be a required string filename and the value another required hash with parameters: 'content' (required)

#### Request example
```json
{	"accessToken": "...",
	"id": "...",
	"description": "...",
	"files": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"{
                    \"url\": \"https://api.github.com/gists/aa5a315d61ae9438b18d\",
                    \"forks_url\": \"https://api.github.com/gists/aa5a315d61ae9438b18d/forks\",
                    \"commits_url\": \"https://api.github.com/gists/aa5a315d61ae9438b18d/commits\",
                    \"id\": \"aa5a315d61ae9438b18d\",
                    \"description\": \"description of gist\",
                    \"public\": true,
                    \"owner\": {
                      \"login\": \"octocat\",
                      \"id\": 1,
                      \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                      \"gravatar_id\": \"\",
                      \"url\": \"https://api.github.com/users/octocat\",
                      \"html_url\": \"https://github.com/octocat\",
                      \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                      \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                      \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                      \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                      \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                      \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                      \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                      \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                      \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                      \"type\": \"User\",
                      \"site_admin\": false
                    },
                    \"user\": null,
                    \"files\": {
                      \"ring.erl\": {
                        \"size\": 932,
                        \"raw_url\": \"https://gist.githubusercontent.com/raw/365370/8c4d2d43d178df44f4c03a7f2ac0ff512853564e/ring.erl\",
                        \"type\": \"text/plain\",
                        \"language\": \"Erlang\",
                        \"truncated\": false,
                        \"content\": \"contents of gist\"
                      }
                    },
                    \"truncated\": false,
                    \"comments\": 0,
                    \"comments_url\": \"https://api.github.com/gists/aa5a315d61ae9438b18d/comments/\",
                    \"html_url\": \"https://gist.github.com/aa5a315d61ae9438b18d\",
                    \"git_pull_url\": \"https://gist.github.com/aa5a315d61ae9438b18d.git\",
                    \"git_push_url\": \"https://gist.github.com/aa5a315d61ae9438b18d.git\",
                    \"created_at\": \"2010-04-14T02:15:15Z\",
                    \"updated_at\": \"2011-06-20T11:34:15Z\",
                    \"forks\": [
                      {
                        \"user\": {
                          \"login\": \"octocat\",
                          \"id\": 1,
                          \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                          \"gravatar_id\": \"\",
                          \"url\": \"https://api.github.com/users/octocat\",
                          \"html_url\": \"https://github.com/octocat\",
                          \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                          \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                          \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                          \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                          \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                          \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                          \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                          \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                          \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                          \"type\": \"User\",
                          \"site_admin\": false
                        },
                        \"url\": \"https://api.github.com/gists/dee9c42e4998ce2ea439\",
                        \"id\": \"dee9c42e4998ce2ea439\",
                        \"created_at\": \"2011-04-14T16:00:49Z\",
                        \"updated_at\": \"2011-04-14T16:00:49Z\"
                      }
                    ],
                    \"history\": [
                      {
                        \"url\": \"https://api.github.com/gists/aa5a315d61ae9438b18d/57a7f021a713b1c5a6a199b54cc514735d2d462f\",
                        \"version\": \"57a7f021a713b1c5a6a199b54cc514735d2d462f\",
                        \"user\": {
                          \"login\": \"octocat\",
                          \"id\": 1,
                          \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                          \"gravatar_id\": \"\",
                          \"url\": \"https://api.github.com/users/octocat\",
                          \"html_url\": \"https://github.com/octocat\",
                          \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                          \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                          \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                          \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                          \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                          \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                          \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                          \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                          \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                          \"type\": \"User\",
                          \"site_admin\": false
                        },
                        \"change_status\": {
                          \"deletions\": 0,
                          \"additions\": 180,
                          \"total\": 180
                        },
                        \"committed_at\": \"2010-04-14T02:15:15Z\"
                      }
                    ]
                  }"
		}
	}
}
```

<a name="updateGistComment"/>
## Github.updateGistComment
Edit a comment

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| gistId     | String     | Id (SHA1 hash) of the gist. (required)
| commentId  | String     | The comment ID. (required)
| body       | String     | The comment text. (required)

#### Request example
```json
{	"accessToken": "...",
	"gistId": "...",
	"commentId": "...",
	"body": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"{
                        \"id\": 1,
                        \"url\": \"https://api.github.com/gists/a6db0bec360bb87e9418/comments/1\",
                        \"body\": \"Just commenting for the sake of commenting\",
                        \"user\": {
                          \"login\": \"octocat\",
                          \"id\": 1,
                          \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                          \"gravatar_id\": \"\",
                          \"url\": \"https://api.github.com/users/octocat\",
                          \"html_url\": \"https://github.com/octocat\",
                          \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                          \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                          \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                          \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                          \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                          \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                          \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                          \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                          \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                          \"type\": \"User\",
                          \"site_admin\": false
                        },
                        \"created_at\": \"2011-04-18T23:23:56Z\",
                        \"updated_at\": \"2011-04-18T23:23:56Z\"
                      }"
		}
	}
}
```

<a name="forkGist"/>
## Github.forkGist
Fork a gist

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| id         | String     | Id (SHA1 hash) of the gist. (required)

#### Request example
```json
{	"accessToken": "...",
	"id": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"{
                    \"url\": \"https://api.github.com/gists/aa5a315d61ae9438b18d\",
                    \"forks_url\": \"https://api.github.com/gists/aa5a315d61ae9438b18d/forks\",
                    \"commits_url\": \"https://api.github.com/gists/aa5a315d61ae9438b18d/commits\",
                    \"id\": \"aa5a315d61ae9438b18d\",
                    \"description\": \"description of gist\",
                    \"public\": true,
                    \"owner\": {
                      \"login\": \"octocat\",
                      \"id\": 1,
                      \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                      \"gravatar_id\": \"\",
                      \"url\": \"https://api.github.com/users/octocat\",
                      \"html_url\": \"https://github.com/octocat\",
                      \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                      \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                      \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                      \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                      \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                      \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                      \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                      \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                      \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                      \"type\": \"User\",
                      \"site_admin\": false
                    },
                    \"user\": null,
                    \"files\": {
                      \"ring.erl\": {
                        \"size\": 932,
                        \"raw_url\": \"https://gist.githubusercontent.com/raw/365370/8c4d2d43d178df44f4c03a7f2ac0ff512853564e/ring.erl\",
                        \"type\": \"text/plain\",
                        \"truncated\": false,
                        \"language\": \"Erlang\"
                      }
                    },
                    \"truncated\": false,
                    \"comments\": 0,
                    \"comments_url\": \"https://api.github.com/gists/aa5a315d61ae9438b18d/comments/\",
                    \"html_url\": \"https://gist.github.com/aa5a315d61ae9438b18d\",
                    \"git_pull_url\": \"https://gist.github.com/aa5a315d61ae9438b18d.git\",
                    \"git_push_url\": \"https://gist.github.com/aa5a315d61ae9438b18d.git\",
                    \"created_at\": \"2010-04-14T02:15:15Z\",
                    \"updated_at\": \"2011-06-20T11:34:15Z\"
                  }"
		}
	}
}
```

<a name="getGist"/>
## Github.getGist
Get a single gist

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| id         | String     | Id (SHA1 hash) of the gist. (required)

#### Request example
```json
{	"accessToken": "...",
	"id": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"{
                    \"url\": \"https://api.github.com/gists/aa5a315d61ae9438b18d\",
                    \"forks_url\": \"https://api.github.com/gists/aa5a315d61ae9438b18d/forks\",
                    \"commits_url\": \"https://api.github.com/gists/aa5a315d61ae9438b18d/commits\",
                    \"id\": \"aa5a315d61ae9438b18d\",
                    \"description\": \"description of gist\",
                    \"public\": true,
                    \"owner\": {
                      \"login\": \"octocat\",
                      \"id\": 1,
                      \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                      \"gravatar_id\": \"\",
                      \"url\": \"https://api.github.com/users/octocat\",
                      \"html_url\": \"https://github.com/octocat\",
                      \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                      \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                      \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                      \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                      \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                      \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                      \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                      \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                      \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                      \"type\": \"User\",
                      \"site_admin\": false
                    },
                    \"user\": null,
                    \"files\": {
                      \"ring.erl\": {
                        \"size\": 932,
                        \"raw_url\": \"https://gist.githubusercontent.com/raw/365370/8c4d2d43d178df44f4c03a7f2ac0ff512853564e/ring.erl\",
                        \"type\": \"text/plain\",
                        \"language\": \"Erlang\",
                        \"truncated\": false,
                        \"content\": \"contents of gist\"
                      }
                    },
                    \"truncated\": false,
                    \"comments\": 0,
                    \"comments_url\": \"https://api.github.com/gists/aa5a315d61ae9438b18d/comments/\",
                    \"html_url\": \"https://gist.github.com/aa5a315d61ae9438b18d\",
                    \"git_pull_url\": \"https://gist.github.com/aa5a315d61ae9438b18d.git\",
                    \"git_push_url\": \"https://gist.github.com/aa5a315d61ae9438b18d.git\",
                    \"created_at\": \"2010-04-14T02:15:15Z\",
                    \"updated_at\": \"2011-06-20T11:34:15Z\",
                    \"forks\": [
                      {
                        \"user\": {
                          \"login\": \"octocat\",
                          \"id\": 1,
                          \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                          \"gravatar_id\": \"\",
                          \"url\": \"https://api.github.com/users/octocat\",
                          \"html_url\": \"https://github.com/octocat\",
                          \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                          \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                          \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                          \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                          \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                          \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                          \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                          \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                          \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                          \"type\": \"User\",
                          \"site_admin\": false
                        },
                        \"url\": \"https://api.github.com/gists/dee9c42e4998ce2ea439\",
                        \"id\": \"dee9c42e4998ce2ea439\",
                        \"created_at\": \"2011-04-14T16:00:49Z\",
                        \"updated_at\": \"2011-04-14T16:00:49Z\"
                      }
                    ],
                    \"history\": [
                      {
                        \"url\": \"https://api.github.com/gists/aa5a315d61ae9438b18d/57a7f021a713b1c5a6a199b54cc514735d2d462f\",
                        \"version\": \"57a7f021a713b1c5a6a199b54cc514735d2d462f\",
                        \"user\": {
                          \"login\": \"octocat\",
                          \"id\": 1,
                          \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                          \"gravatar_id\": \"\",
                          \"url\": \"https://api.github.com/users/octocat\",
                          \"html_url\": \"https://github.com/octocat\",
                          \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                          \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                          \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                          \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                          \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                          \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                          \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                          \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                          \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                          \"type\": \"User\",
                          \"site_admin\": false
                        },
                        \"change_status\": {
                          \"deletions\": 0,
                          \"additions\": 180,
                          \"total\": 180
                        },
                        \"committed_at\": \"2010-04-14T02:15:15Z\"
                      }
                    ]
                  }"
		}
	}
}
```

<a name="getAllGists"/>
## Github.getAllGists
List the authenticated user's gists or if called anonymously, this will return all public gists

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| page       | Number     | Page number of the results to fetch. (optional)
| perPage    | Number     | A custom page size up to 100. Default is 30. (optional)
| since      | String     | Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ (optional)

#### Request example
```json
{	"accessToken": "...",
	"page": 0,
	"perPage": 0,
	"since": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"[
                        {
                          \"url\": \"https://api.github.com/gists/aa5a315d61ae9438b18d\",
                          \"forks_url\": \"https://api.github.com/gists/aa5a315d61ae9438b18d/forks\",
                          \"commits_url\": \"https://api.github.com/gists/aa5a315d61ae9438b18d/commits\",
                          \"id\": \"aa5a315d61ae9438b18d\",
                          \"description\": \"description of gist\",
                          \"public\": true,
                          \"owner\": {
                            \"login\": \"octocat\",
                            \"id\": 1,
                            \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                            \"gravatar_id\": \"\",
                            \"url\": \"https://api.github.com/users/octocat\",
                            \"html_url\": \"https://github.com/octocat\",
                            \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                            \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                            \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                            \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                            \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                            \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                            \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                            \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                            \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                            \"type\": \"User\",
                            \"site_admin\": false
                          },
                          \"user\": null,
                          \"files\": {
                            \"ring.erl\": {
                              \"size\": 932,
                              \"raw_url\": \"https://gist.githubusercontent.com/raw/365370/8c4d2d43d178df44f4c03a7f2ac0ff512853564e/ring.erl\",
                              \"type\": \"text/plain\",
                              \"truncated\": false,
                              \"language\": \"Erlang\"
                            }
                          },
                          \"truncated\": false,
                          \"comments\": 0,
                          \"comments_url\": \"https://api.github.com/gists/aa5a315d61ae9438b18d/comments/\",
                          \"html_url\": \"https://gist.github.com/aa5a315d61ae9438b18d\",
                          \"git_pull_url\": \"https://gist.github.com/aa5a315d61ae9438b18d.git\",
                          \"git_push_url\": \"https://gist.github.com/aa5a315d61ae9438b18d.git\",
                          \"created_at\": \"2010-04-14T02:15:15Z\",
                          \"updated_at\": \"2011-06-20T11:34:15Z\"
                        }
                      ]"
		}
	}
}
```

<a name="getGistComment"/>
## Github.getGistComment
Get a single comment

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| gistId     | String     | Id (SHA1 hash) of the gist. (required)
| id         | String     | The comment ID. (required)

#### Request example
```json
{	"accessToken": "...",
	"gistId": "...",
	"id": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"{
                    \"id\": 1,
                    \"url\": \"https://api.github.com/gists/a6db0bec360bb87e9418/comments/1\",
                    \"body\": \"Just commenting for the sake of commenting\",
                    \"user\": {
                      \"login\": \"octocat\",
                      \"id\": 1,
                      \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                      \"gravatar_id\": \"\",
                      \"url\": \"https://api.github.com/users/octocat\",
                      \"html_url\": \"https://github.com/octocat\",
                      \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                      \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                      \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                      \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                      \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                      \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                      \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                      \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                      \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                      \"type\": \"User\",
                      \"site_admin\": false
                    },
                    \"created_at\": \"2011-04-18T23:23:56Z\",
                    \"updated_at\": \"2011-04-18T23:23:56Z\"
                  }"
		}
	}
}
```

<a name="getGistComments"/>
## Github.getGistComments
List comments on a gist

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| gistId     | String     | Id (SHA1 hash) of the gist. (required)

#### Request example
```json
{	"accessToken": "...",
	"gistId": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"[
                        {
                          \"id\": 1,
                          \"url\": \"https://api.github.com/gists/a6db0bec360bb87e9418/comments/1\",
                          \"body\": \"Just commenting for the sake of commenting\",
                          \"user\": {
                            \"login\": \"octocat\",
                            \"id\": 1,
                            \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                            \"gravatar_id\": \"\",
                            \"url\": \"https://api.github.com/users/octocat\",
                            \"html_url\": \"https://github.com/octocat\",
                            \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                            \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                            \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                            \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                            \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                            \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                            \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                            \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                            \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                            \"type\": \"User\",
                            \"site_admin\": false
                          },
                          \"created_at\": \"2011-04-18T23:23:56Z\",
                          \"updated_at\": \"2011-04-18T23:23:56Z\"
                        }
                      ]"
		}
	}
}
```

<a name="getGistCommits"/>
## Github.getGistCommits
List gist commits

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| id         | String     | Id (SHA1 hash) of the gist. (required)

#### Request example
```json
{	"accessToken": "...",
	"id": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"[
                        {
                          \"url\": \"https://api.github.com/gists/aa5a315d61ae9438b18d/57a7f021a713b1c5a6a199b54cc514735d2d462f\",
                          \"version\": \"57a7f021a713b1c5a6a199b54cc514735d2d462f\",
                          \"user\": {
                            \"login\": \"octocat\",
                            \"id\": 1,
                            \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                            \"gravatar_id\": \"\",
                            \"url\": \"https://api.github.com/users/octocat\",
                            \"html_url\": \"https://github.com/octocat\",
                            \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                            \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                            \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                            \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                            \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                            \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                            \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                            \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                            \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                            \"type\": \"User\",
                            \"site_admin\": false
                          },
                          \"change_status\": {
                            \"deletions\": 0,
                            \"additions\": 180,
                            \"total\": 180
                          },
                          \"committed_at\": \"2010-04-14T02:15:15Z\"
                        }
                      ]"
		}
	}
}
```

<a name="getUserGists"/>
## Github.getUserGists
List a user's gists

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| user       | String     | The user name (required)
| page       | Number     | Page number of the results to fetch. (optional)
| perPage    | Number     | A custom page size up to 100. Default is 30. (optional)
| since      | String     | Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"page": 0,
	"perPage": 0,
	"since": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"[
                    {
                      \"url\": \"https://api.github.com/gists/aa5a315d61ae9438b18d\",
                      \"forks_url\": \"https://api.github.com/gists/aa5a315d61ae9438b18d/forks\",
                      \"commits_url\": \"https://api.github.com/gists/aa5a315d61ae9438b18d/commits\",
                      \"id\": \"aa5a315d61ae9438b18d\",
                      \"description\": \"description of gist\",
                      \"public\": true,
                      \"owner\": {
                        \"login\": \"octocat\",
                        \"id\": 1,
                        \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                        \"gravatar_id\": \"\",
                        \"url\": \"https://api.github.com/users/octocat\",
                        \"html_url\": \"https://github.com/octocat\",
                        \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                        \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                        \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                        \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                        \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                        \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                        \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                        \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                        \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                        \"type\": \"User\",
                        \"site_admin\": false
                      },
                      \"user\": null,
                      \"files\": {
                        \"ring.erl\": {
                          \"size\": 932,
                          \"raw_url\": \"https://gist.githubusercontent.com/raw/365370/8c4d2d43d178df44f4c03a7f2ac0ff512853564e/ring.erl\",
                          \"type\": \"text/plain\",
                          \"truncated\": false,
                          \"language\": \"Erlang\"
                        }
                      },
                      \"truncated\": false,
                      \"comments\": 0,
                      \"comments_url\": \"https://api.github.com/gists/aa5a315d61ae9438b18d/comments/\",
                      \"html_url\": \"https://gist.github.com/aa5a315d61ae9438b18d\",
                      \"git_pull_url\": \"https://gist.github.com/aa5a315d61ae9438b18d.git\",
                      \"git_push_url\": \"https://gist.github.com/aa5a315d61ae9438b18d.git\",
                      \"created_at\": \"2010-04-14T02:15:15Z\",
                      \"updated_at\": \"2011-06-20T11:34:15Z\"
                    }
                  ]"
		}
	}
}
```

<a name="getGistForks"/>
## Github.getGistForks
List gist forks

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| id         | String     | Id (SHA1 hash) of the gist. (required)
| page       | Number     | Page number of the results to fetch. (optional)
| perPage    | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"id": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"[
                    {
                      \"user\": {
                        \"login\": \"octocat\",
                        \"id\": 1,
                        \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                        \"gravatar_id\": \"\",
                        \"url\": \"https://api.github.com/users/octocat\",
                        \"html_url\": \"https://github.com/octocat\",
                        \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                        \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                        \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                        \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                        \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                        \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                        \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                        \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                        \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                        \"type\": \"User\",
                        \"site_admin\": false
                      },
                      \"url\": \"https://api.github.com/gists/dee9c42e4998ce2ea439\",
                      \"id\": \"dee9c42e4998ce2ea439\",
                      \"created_at\": \"2011-04-14T16:00:49Z\",
                      \"updated_at\": \"2011-04-14T16:00:49Z\"
                    }
                  ]"
		}
	}
}
```

<a name="getPublicGists"/>
## Github.getPublicGists
List all public gists

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| since      | String     | Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ (optional)

#### Request example
```json
{	"accessToken": "...",
	"since": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"[
                    {
                      \"url\": \"https://api.github.com/gists/aa5a315d61ae9438b18d\",
                      \"forks_url\": \"https://api.github.com/gists/aa5a315d61ae9438b18d/forks\",
                      \"commits_url\": \"https://api.github.com/gists/aa5a315d61ae9438b18d/commits\",
                      \"id\": \"aa5a315d61ae9438b18d\",
                      \"description\": \"description of gist\",
                      \"public\": true,
                      \"owner\": {
                        \"login\": \"octocat\",
                        \"id\": 1,
                        \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                        \"gravatar_id\": \"\",
                        \"url\": \"https://api.github.com/users/octocat\",
                        \"html_url\": \"https://github.com/octocat\",
                        \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                        \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                        \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                        \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                        \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                        \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                        \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                        \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                        \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                        \"type\": \"User\",
                        \"site_admin\": false
                      },
                      \"user\": null,
                      \"files\": {
                        \"ring.erl\": {
                          \"size\": 932,
                          \"raw_url\": \"https://gist.githubusercontent.com/raw/365370/8c4d2d43d178df44f4c03a7f2ac0ff512853564e/ring.erl\",
                          \"type\": \"text/plain\",
                          \"truncated\": false,
                          \"language\": \"Erlang\"
                        }
                      },
                      \"truncated\": false,
                      \"comments\": 0,
                      \"comments_url\": \"https://api.github.com/gists/aa5a315d61ae9438b18d/comments/\",
                      \"html_url\": \"https://gist.github.com/aa5a315d61ae9438b18d\",
                      \"git_pull_url\": \"https://gist.github.com/aa5a315d61ae9438b18d.git\",
                      \"git_push_url\": \"https://gist.github.com/aa5a315d61ae9438b18d.git\",
                      \"created_at\": \"2010-04-14T02:15:15Z\",
                      \"updated_at\": \"2011-06-20T11:34:15Z\"
                    }
                  ]"
		}
	}
}
```

<a name="getGistByRevision"/>
## Github.getGistByRevision
Get a specific revision of a gist

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| id         | String     | Id (SHA1 hash) of the gist. (required)
| sha        | String     | The SHA1 hash of the revision (required)

#### Request example
```json
{	"accessToken": "...",
	"id": "...",
	"sha": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"{
                    \"url\": \"https://api.github.com/gists/aa5a315d61ae9438b18d/57a7f021a713b1c5a6a199b54cc514735d2d462f\",
                    \"forks_url\": \"https://api.github.com/gists/aa5a315d61ae9438b18d/forks\",
                    \"commits_url\": \"https://api.github.com/gists/aa5a315d61ae9438b18d/commits\",
                    \"id\": \"aa5a315d61ae9438b18d\",
                    \"description\": \"description of gist\",
                    \"public\": true,
                    \"owner\": {
                      \"login\": \"octocat\",
                      \"id\": 1,
                      \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                      \"gravatar_id\": \"\",
                      \"url\": \"https://api.github.com/users/octocat\",
                      \"html_url\": \"https://github.com/octocat\",
                      \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                      \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                      \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                      \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                      \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                      \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                      \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                      \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                      \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                      \"type\": \"User\",
                      \"site_admin\": false
                    },
                    \"user\": null,
                    \"files\": {
                      \"ring.erl\": {
                        \"size\": 932,
                        \"raw_url\": \"https://gist.githubusercontent.com/raw/365370/8c4d2d43d178df44f4c03a7f2ac0ff512853564e/ring.erl\",
                        \"type\": \"text/plain\",
                        \"language\": \"Erlang\",
                        \"truncated\": false,
                        \"content\": \"contents of gist\"
                      }
                    },
                    \"truncated\": false,
                    \"comments\": 0,
                    \"comments_url\": \"https://api.github.com/gists/aa5a315d61ae9438b18d/comments/\",
                    \"html_url\": \"https://gist.github.com/aa5a315d61ae9438b18d\",
                    \"git_pull_url\": \"https://gist.github.com/aa5a315d61ae9438b18d.git\",
                    \"git_push_url\": \"https://gist.github.com/aa5a315d61ae9438b18d.git\",
                    \"created_at\": \"2010-04-14T02:15:15Z\",
                    \"updated_at\": \"2011-06-20T11:34:15Z\",
                    \"forks\": [
                      {
                        \"user\": {
                          \"login\": \"octocat\",
                          \"id\": 1,
                          \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                          \"gravatar_id\": \"\",
                          \"url\": \"https://api.github.com/users/octocat\",
                          \"html_url\": \"https://github.com/octocat\",
                          \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                          \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                          \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                          \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                          \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                          \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                          \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                          \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                          \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                          \"type\": \"User\",
                          \"site_admin\": false
                        },
                        \"url\": \"https://api.github.com/gists/dee9c42e4998ce2ea439\",
                        \"id\": \"dee9c42e4998ce2ea439\",
                        \"created_at\": \"2011-04-14T16:00:49Z\",
                        \"updated_at\": \"2011-04-14T16:00:49Z\"
                      }
                    ],
                    \"history\": [
                      {
                        \"url\": \"https://api.github.com/gists/aa5a315d61ae9438b18d/57a7f021a713b1c5a6a199b54cc514735d2d462f\",
                        \"version\": \"57a7f021a713b1c5a6a199b54cc514735d2d462f\",
                        \"user\": {
                          \"login\": \"octocat\",
                          \"id\": 1,
                          \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                          \"gravatar_id\": \"\",
                          \"url\": \"https://api.github.com/users/octocat\",
                          \"html_url\": \"https://github.com/octocat\",
                          \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                          \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                          \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                          \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                          \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                          \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                          \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                          \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                          \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                          \"type\": \"User\",
                          \"site_admin\": false
                        },
                        \"change_status\": {
                          \"deletions\": 0,
                          \"additions\": 180,
                          \"total\": 180
                        },
                        \"committed_at\": \"2010-04-14T02:15:15Z\"
                      }
                    ]
                  }"
		}
	}
}
```

<a name="getStarredGists"/>
## Github.getStarredGists
List the authenticated user's starred gists

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| since      | String     | Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ (optional)

#### Request example
```json
{	"accessToken": "...",
	"since": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"[
                    {
                      \"url\": \"https://api.github.com/gists/aa5a315d61ae9438b18d\",
                      \"forks_url\": \"https://api.github.com/gists/aa5a315d61ae9438b18d/forks\",
                      \"commits_url\": \"https://api.github.com/gists/aa5a315d61ae9438b18d/commits\",
                      \"id\": \"aa5a315d61ae9438b18d\",
                      \"description\": \"description of gist\",
                      \"public\": true,
                      \"owner\": {
                        \"login\": \"octocat\",
                        \"id\": 1,
                        \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                        \"gravatar_id\": \"\",
                        \"url\": \"https://api.github.com/users/octocat\",
                        \"html_url\": \"https://github.com/octocat\",
                        \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                        \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                        \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                        \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                        \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                        \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                        \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                        \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                        \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                        \"type\": \"User\",
                        \"site_admin\": false
                      },
                      \"user\": null,
                      \"files\": {
                        \"ring.erl\": {
                          \"size\": 932,
                          \"raw_url\": \"https://gist.githubusercontent.com/raw/365370/8c4d2d43d178df44f4c03a7f2ac0ff512853564e/ring.erl\",
                          \"type\": \"text/plain\",
                          \"truncated\": false,
                          \"language\": \"Erlang\"
                        }
                      },
                      \"truncated\": false,
                      \"comments\": 0,
                      \"comments_url\": \"https://api.github.com/gists/aa5a315d61ae9438b18d/comments/\",
                      \"html_url\": \"https://gist.github.com/aa5a315d61ae9438b18d\",
                      \"git_pull_url\": \"https://gist.github.com/aa5a315d61ae9438b18d.git\",
                      \"git_push_url\": \"https://gist.github.com/aa5a315d61ae9438b18d.git\",
                      \"created_at\": \"2010-04-14T02:15:15Z\",
                      \"updated_at\": \"2011-06-20T11:34:15Z\"
                    }
                  ]"
		}
	}
}
```

<a name="starGist"/>
## Github.starGist
Star a gist

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| id         | String     | Id (SHA1 hash) of the gist. (required)

#### Request example
```json
{	"accessToken": "...",
	"id": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"Status: 204 No Content"
		}
	}
}
```

<a name="unstarGist"/>
## Github.unstarGist
Unstar a gist

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| id         | String     | Id (SHA1 hash) of the gist. (required)

#### Request example
```json
{	"accessToken": "...",
	"id": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"Status: 204 No Content"
		}
	}
}
```

<a name="createBlob"/>
## Github.createBlob
Create a Blob

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| content       | String     | The new blob's content. (required)
| encoding      | String     | The encoding used for content. Currently, "utf-8" and "base64" are supported. Default: "utf-8". (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"content": "...",
	"encoding": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"{
                    \"url\": \"https://api.github.com/repos/octocat/example/git/blobs/3a0f86fb8db8eea7ccbb9a95f325ddbedfb25e15\",
                    \"sha\": \"3a0f86fb8db8eea7ccbb9a95f325ddbedfb25e15\"
                  }"
		}
	}
}
```

<a name="createCommit"/>
## Github.createCommit
Create a Commit

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| message       | String     | String of the commit message (required)
| tree          | String     | String of the SHA of the tree object this commit points to (required)
| parents       | JSON       | Array of the SHAs of the commits that were the parents of this commit. If omitted or empty, the commit will be written as a root commit. For a single parent, an array of one SHA should be provided, for a merge commit, an array of more than one should be provided. (required)
| author        | JSON       | An object containing information about the author (optional). Avaliable parameters: "name" (string) The name of the author (or committer) of the commit; "email" (string) The email of the author (or committer) of the commit; "date" (string) Indicates when this commit was authored (or committed). This is a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ. Ex.:"author": {"name": "Scott Chacon", "email": "schacon@gmail.com", "date": "2008-07-09T16:13:30+12:00"}
| committer     | JSON       | An object containing information about the committer (optional). Both the author and committer parameters have the same keys.

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"message": "...",
	"tree": "...",
	"parents": "...",
	"author": "...",
	"committer": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"{
                    \"sha\": \"7638417db6d59f3c431d3e1f261cc637155684cd\",
                    \"url\": \"https://api.github.com/repos/octocat/Hello-World/git/commits/7638417db6d59f3c431d3e1f261cc637155684cd\",
                    \"author\": {
                      \"date\": \"2014-11-07T22:01:45Z\",
                      \"name\": \"Scott Chacon\",
                      \"email\": \"schacon@gmail.com\"
                    },
                    \"committer\": {
                      \"date\": \"2014-11-07T22:01:45Z\",
                      \"name\": \"Scott Chacon\",
                      \"email\": \"schacon@gmail.com\"
                    },
                    \"message\": \"my commit message\",
                    \"tree\": {
                      \"url\": \"https://api.github.com/repos/octocat/Hello-World/git/trees/827efc6d56897b048c772eb4087f854f46256132\",
                      \"sha\": \"827efc6d56897b048c772eb4087f854f46256132\"
                    },
                    \"parents\": [
                      {
                        \"url\": \"https://api.github.com/repos/octocat/Hello-World/git/commits/7d1b31e74ee336d15cbd21741bc88a537ed063a0\",
                        \"sha\": \"7d1b31e74ee336d15cbd21741bc88a537ed063a0\"
                      }
                    ]
                  }"
		}
	}
}
```

<a name="createReference"/>
## Github.createReference
Create a Reference

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| ref           | String     | String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected. (required)
| sha           | String     | The SHA1 value to set this reference to (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"ref": "...",
	"sha": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"{
                    \"ref\": \"refs/heads/featureA\",
                    \"url\": \"https://api.github.com/repos/octocat/Hello-World/git/refs/heads/featureA\",
                    \"object\": {
                      \"type\": \"commit\",
                      \"sha\": \"aa218f56b14c9653891f9e74264a383fa43fefbd\",
                      \"url\": \"https://api.github.com/repos/octocat/Hello-World/git/commits/aa218f56b14c9653891f9e74264a383fa43fefbd\"
                    }
                  }"
		}
	}
}
```

<a name="createTag"/>
## Github.createTag
Create a Tag Object

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| tag           | String     | String of the tag (required)
| message       | String     | String of the tag message (required)
| object        | String     | String of the SHA of the git object this is tagging (required)
| type          | String     | String of the type of the object we’re tagging. Normally this is a commit but it can also be a tree or a blob. (required)
| tagger        | JSON       | JSON object that contains the following keys: `name` - String of the name of the author of the tag, `email` - String of the email of the author of the tag, `date` - Timestamp of when this object was tagged (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"tag": "...",
	"message": "...",
	"object": "...",
	"type": "...",
	"tagger": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"{
                        \"tag\": \"v0.0.1\",
                        \"sha\": \"940bd336248efae0f9ee5bc7b2d5c985887b16ac\",
                        \"url\": \"https://api.github.com/repos/octocat/Hello-World/git/tags/940bd336248efae0f9ee5bc7b2d5c985887b16ac\",
                        \"message\": \"initial version\n\",
                        \"tagger\": {
                          \"name\": \"Scott Chacon\",
                          \"email\": \"schacon@gmail.com\",
                          \"date\": \"2014-11-07T22:01:45Z\"
                        },
                        \"object\": {
                          \"type\": \"commit\",
                          \"sha\": \"c3d0be41ecbe669545ee3e94d31ed9a4bc91ee3c\",
                          \"url\": \"https://api.github.com/repos/octocat/Hello-World/git/commits/c3d0be41ecbe669545ee3e94d31ed9a4bc91ee3c\"
                        }
                      }"
		}
	}
}
```

<a name="createTree"/>
## Github.createTree
Create a Tree

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| tree          | JSON       | Array of Hash objects (of path, mode, type and sha) specifying a tree structure (required)
| baseTree      | String     | String of the SHA1 of the tree you want to update with new data (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"tree": "...",
	"baseTree": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"{
                    \"sha\": \"cd8274d15fa3ae2ab983129fb037999f264ba9a7\",
                    \"url\": \"https://api.github.com/repos/octocat/Hello-World/trees/cd8274d15fa3ae2ab983129fb037999f264ba9a7\",
                    \"tree\": [
                      {
                        \"path\": \"file.rb\",
                        \"mode\": \"100644\",
                        \"type\": \"blob\",
                        \"size\": 132,
                        \"sha\": \"7c258a9869f33c1e1e1f74fbb32f07c86cb5a75b\",
                        \"url\": \"https://api.github.com/repos/octocat/Hello-World/git/blobs/7c258a9869f33c1e1e1f74fbb32f07c86cb5a75b\"
                      }
                    ]
                  }"
		}
	}
}
```

<a name="deleteReference"/>
## Github.deleteReference
Delete a Reference

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| ref           | String     | String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected. (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"ref": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"Status: 204 No Content"
		}
	}
}
```

<a name="getBlob"/>
## Github.getBlob
Get a Blob

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| sha           | String     | The SHA1 value to set this reference to (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"sha": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"{
                    \"content\": \"Q29udGVudCBvZiB0aGUgYmxvYg==\n\",
                    \"encoding\": \"base64\",
                    \"url\": \"https://api.github.com/repos/octocat/example/git/blobs/3a0f86fb8db8eea7ccbb9a95f325ddbedfb25e15\",
                    \"sha\": \"3a0f86fb8db8eea7ccbb9a95f325ddbedfb25e15\",
                    \"size\": 19
                  }"
		}
	}
}
```

<a name="getCommit"/>
## Github.getCommit
Get a Commit

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| sha           | String     | The SHA1 value to set this reference to (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"sha": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"{
                    \"sha\": \"7638417db6d59f3c431d3e1f261cc637155684cd\",
                    \"url\": \"https://api.github.com/repos/octocat/Hello-World/git/commits/7638417db6d59f3c431d3e1f261cc637155684cd\",
                    \"author\": {
                      \"date\": \"2014-11-07T22:01:45Z\",
                      \"name\": \"Scott Chacon\",
                      \"email\": \"schacon@gmail.com\"
                    },
                    \"committer\": {
                      \"date\": \"2014-11-07T22:01:45Z\",
                      \"name\": \"Scott Chacon\",
                      \"email\": \"schacon@gmail.com\"
                    },
                    \"message\": \"added readme, because im a good github citizen\n\",
                    \"tree\": {
                      \"url\": \"https://api.github.com/repos/octocat/Hello-World/git/trees/691272480426f78a0138979dd3ce63b77f706feb\",
                      \"sha\": \"691272480426f78a0138979dd3ce63b77f706feb\"
                    },
                    \"parents\": [
                      {
                        \"url\": \"https://api.github.com/repos/octocat/Hello-World/git/commits/1acc419d4d6a9ce985db7be48c6349a0475975b5\",
                        \"sha\": \"1acc419d4d6a9ce985db7be48c6349a0475975b5\"
                      }
                    ]
                  }"
		}
	}
}
```

<a name="getCommitSignatureVerification"/>
## Github.getCommitSignatureVerification
Get a Commit Signature Verification. (In preview period. See README.)

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| sha           | String     | The SHA1 value to set this reference to (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"sha": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"{
                    \"sha\": \"7638417db6d59f3c431d3e1f261cc637155684cd\",
                    \"url\": \"https://api.github.com/repos/octocat/Hello-World/git/commits/7638417db6d59f3c431d3e1f261cc637155684cd\",
                    \"author\": {
                      \"date\": \"2014-11-07T22:01:45Z\",
                      \"name\": \"Scott Chacon\",
                      \"email\": \"schacon@gmail.com\"
                    },
                    \"committer\": {
                      \"date\": \"2014-11-07T22:01:45Z\",
                      \"name\": \"Scott Chacon\",
                      \"email\": \"schacon@gmail.com\"
                    },
                    \"message\": \"added readme, because im a good github citizen\n\",
                    \"tree\": {
                      \"url\": \"https://api.github.com/repos/octocat/Hello-World/git/trees/691272480426f78a0138979dd3ce63b77f706feb\",
                      \"sha\": \"691272480426f78a0138979dd3ce63b77f706feb\"
                    },
                    \"parents\": [
                      {
                        \"url\": \"https://api.github.com/repos/octocat/Hello-World/git/commits/1acc419d4d6a9ce985db7be48c6349a0475975b5\",
                        \"sha\": \"1acc419d4d6a9ce985db7be48c6349a0475975b5\"
                      }
                    ],
                    \"verification\": {
                      \"verified\": true,
                      \"reason\": \"valid\",
                      \"signature\": \"-----BEGIN PGP MESSAGE-----\n...\n-----END PGP MESSAGE-----\",
                      \"payload\": \"tree 691272480426f78a0138979dd3ce63b77f706feb\n...\"
                    }
                  }"
		}
	}
}
```

<a name="getReference"/>
## Github.getReference
Get a Reference

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| ref           | String     | String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected. (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"ref": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"{
                    \"ref\": \"refs/heads/featureA\",
                    \"url\": \"https://api.github.com/repos/octocat/Hello-World/git/refs/heads/featureA\",
                    \"object\": {
                      \"type\": \"commit\",
                      \"sha\": \"aa218f56b14c9653891f9e74264a383fa43fefbd\",
                      \"url\": \"https://api.github.com/repos/octocat/Hello-World/git/commits/aa218f56b14c9653891f9e74264a383fa43fefbd\"
                    }
                  }"
		}
	}
}
```

<a name="getReferences"/>
## Github.getReferences
Get all References

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"[
                    {
                      \"ref\": \"refs/heads/master\",
                      \"url\": \"https://api.github.com/repos/octocat/Hello-World/git/refs/heads/master\",
                      \"object\": {
                        \"type\": \"commit\",
                        \"sha\": \"aa218f56b14c9653891f9e74264a383fa43fefbd\",
                        \"url\": \"https://api.github.com/repos/octocat/Hello-World/git/commits/aa218f56b14c9653891f9e74264a383fa43fefbd\"
                      }
                    },
                    {
                      \"ref\": \"refs/heads/gh-pages\",
                      \"url\": \"https://api.github.com/repos/octocat/Hello-World/git/refs/heads/gh-pages\",
                      \"object\": {
                        \"type\": \"commit\",
                        \"sha\": \"612077ae6dffb4d2fbd8ce0cccaa58893b07b5ac\",
                        \"url\": \"https://api.github.com/repos/octocat/Hello-World/git/commits/612077ae6dffb4d2fbd8ce0cccaa58893b07b5ac\"
                      }
                    },
                    {
                      \"ref\": \"refs/tags/v0.0.1\",
                      \"url\": \"https://api.github.com/repos/octocat/Hello-World/git/refs/tags/v0.0.1\",
                      \"object\": {
                        \"type\": \"tag\",
                        \"sha\": \"940bd336248efae0f9ee5bc7b2d5c985887b16ac\",
                        \"url\": \"https://api.github.com/repos/octocat/Hello-World/git/tags/940bd336248efae0f9ee5bc7b2d5c985887b16ac\"
                      }
                    }
                  ]"
		}
	}
}
```

<a name="getTag"/>
## Github.getTag
Get a Tag

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| sha           | String     | The SHA1 value to set this reference to (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"sha": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"{
                    \"tag\": \"v0.0.1\",
                    \"sha\": \"940bd336248efae0f9ee5bc7b2d5c985887b16ac\",
                    \"url\": \"https://api.github.com/repos/octocat/Hello-World/git/tags/940bd336248efae0f9ee5bc7b2d5c985887b16ac\",
                    \"message\": \"initial version\n\",
                    \"tagger\": {
                      \"name\": \"Scott Chacon\",
                      \"email\": \"schacon@gmail.com\",
                      \"date\": \"2014-11-07T22:01:45Z\"
                    },
                    \"object\": {
                      \"type\": \"commit\",
                      \"sha\": \"c3d0be41ecbe669545ee3e94d31ed9a4bc91ee3c\",
                      \"url\": \"https://api.github.com/repos/octocat/Hello-World/git/commits/c3d0be41ecbe669545ee3e94d31ed9a4bc91ee3c\"
                    }
                  }"
		}
	}
}
```

<a name="getTagSignatureVerification"/>
## Github.getTagSignatureVerification
Get a Tag Signature Verification. (In preview period. See README.)

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| sha           | String     | The SHA1 value to set this reference to (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"sha": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"{
                    \"tag\": \"v0.0.1\",
                    \"sha\": \"940bd336248efae0f9ee5bc7b2d5c985887b16ac\",
                    \"url\": \"https://api.github.com/repos/octocat/Hello-World/git/tags/940bd336248efae0f9ee5bc7b2d5c985887b16ac\",
                    \"message\": \"initial version\n\",
                    \"tagger\": {
                      \"name\": \"Scott Chacon\",
                      \"email\": \"schacon@gmail.com\",
                      \"date\": \"2014-11-07T22:01:45Z\"
                    },
                    \"object\": {
                      \"type\": \"commit\",
                      \"sha\": \"c3d0be41ecbe669545ee3e94d31ed9a4bc91ee3c\",
                      \"url\": \"https://api.github.com/repos/octocat/Hello-World/git/commits/c3d0be41ecbe669545ee3e94d31ed9a4bc91ee3c\"
                    },
                    \"verification\": {
                      \"verified\": true,
                      \"reason\": \"valid\",
                      \"signature\": \"-----BEGIN PGP MESSAGE-----\n...\n-----END PGP MESSAGE-----\",
                      \"payload\": \"object c3d0be41ecbe669545ee3e94d31ed9a4bc91ee3c\n...\"
                    }
                  }"
		}
	}
}
```

<a name="getTags"/>
## Github.getTags
Get all tag References

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"[
                    {
                      \"ref\": \"refs/heads/master\",
                      \"url\": \"https://api.github.com/repos/octocat/Hello-World/git/refs/heads/master\",
                      \"object\": {
                        \"type\": \"commit\",
                        \"sha\": \"aa218f56b14c9653891f9e74264a383fa43fefbd\",
                        \"url\": \"https://api.github.com/repos/octocat/Hello-World/git/commits/aa218f56b14c9653891f9e74264a383fa43fefbd\"
                      }
                    },
                    {
                      \"ref\": \"refs/heads/gh-pages\",
                      \"url\": \"https://api.github.com/repos/octocat/Hello-World/git/refs/heads/gh-pages\",
                      \"object\": {
                        \"type\": \"commit\",
                        \"sha\": \"612077ae6dffb4d2fbd8ce0cccaa58893b07b5ac\",
                        \"url\": \"https://api.github.com/repos/octocat/Hello-World/git/commits/612077ae6dffb4d2fbd8ce0cccaa58893b07b5ac\"
                      }
                    },
                    {
                      \"ref\": \"refs/tags/v0.0.1\",
                      \"url\": \"https://api.github.com/repos/octocat/Hello-World/git/refs/tags/v0.0.1\",
                      \"object\": {
                        \"type\": \"tag\",
                        \"sha\": \"940bd336248efae0f9ee5bc7b2d5c985887b16ac\",
                        \"url\": \"https://api.github.com/repos/octocat/Hello-World/git/tags/940bd336248efae0f9ee5bc7b2d5c985887b16ac\"
                      }
                    }
                  ]"
		}
	}
}
```

<a name="getTree"/>
## Github.getTree
Get a Tree

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| sha           | String     | The SHA1 value to set this reference to (required)
| recursive     | String     | Get a Tree Recursively (optional). True or false

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"sha": "...",
	"recursive": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"{
                    \"sha\": \"9fb037999f264ba9a7fc6274d15fa3ae2ab98312\",
                    \"url\": \"https://api.github.com/repos/octocat/Hello-World/trees/9fb037999f264ba9a7fc6274d15fa3ae2ab98312\",
                    \"tree\": [
                      {
                        \"path\": \"file.rb\",
                        \"mode\": \"100644\",
                        \"type\": \"blob\",
                        \"size\": 30,
                        \"sha\": \"44b4fc6d56897b048c772eb4087f854f46256132\",
                        \"url\": \"https://api.github.com/repos/octocat/Hello-World/git/blobs/44b4fc6d56897b048c772eb4087f854f46256132\"
                      },
                      {
                        \"path\": \"subdir\",
                        \"mode\": \"040000\",
                        \"type\": \"tree\",
                        \"sha\": \"f484d249c660418515fb01c2b9662073663c242e\",
                        \"url\": \"https://api.github.com/repos/octocat/Hello-World/git/blobs/f484d249c660418515fb01c2b9662073663c242e\"
                      },
                      {
                        \"path\": \"exec_file\",
                        \"mode\": \"100755\",
                        \"type\": \"blob\",
                        \"size\": 75,
                        \"sha\": \"45b983be36b73c0788dc9cbcb76cbb80fc7bb057\",
                        \"url\": \"https://api.github.com/repos/octocat/Hello-World/git/blobs/45b983be36b73c0788dc9cbcb76cbb80fc7bb057\"
                      }
                    ],
                    \"truncated\": false
                  }"
		}
	}
}
```

<a name="updateReference"/>
## Github.updateReference
Update a Reference

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| ref           | String     | String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected. (required)
| sha           | String     | The SHA1 value to set this reference to (required)
| force         | String     | Boolean indicating whether to force the update or to make sure the update is a fast-forward update. The default is false, so leaving this out or setting it to false will make sure you’re not overwriting work. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"ref": "...",
	"sha": "...",
	"force": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"{
                    \"ref\": \"refs/heads/featureA\",
                    \"url\": \"https://api.github.com/repos/octocat/Hello-World/git/refs/heads/featureA\",
                    \"object\": {
                      \"type\": \"commit\",
                      \"sha\": \"aa218f56b14c9653891f9e74264a383fa43fefbd\",
                      \"url\": \"https://api.github.com/repos/octocat/Hello-World/git/commits/aa218f56b14c9653891f9e74264a383fa43fefbd\"
                    }
                  }"
		}
	}
}
```

<a name="createInstallation"/>
## Github.createInstallation
Create a new access token

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| installationId| Number     | The id of the installation for this integration. (required)
| userId        | Number     | The id of the user for whom the integration is acting on behalf of. (optional)

#### Request example
```json
{	"accessToken": "...",
	"installationId": 0,
	"userId": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"{
                    \"token\": \"v1.1f699f1069f60xxx\",
                    \"expires_at\": \"2016-07-11T22:14:10Z\",
                    \"on_behalf_of\": {
                      \"login\": \"octocat\",
                      \"id\": 1,
                      \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                      \"gravatar_id\": \"\",
                      \"url\": \"https://api.github.com/users/octocat\",
                      \"html_url\": \"https://github.com/octocat\",
                      \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                      \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                      \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                      \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                      \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                      \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                      \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                      \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                      \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                      \"type\": \"User\",
                      \"site_admin\": false
                    }
                  }"
		}
	}
}
```

<a name="addAssigneesToIssue"/>
## Github.addAssigneesToIssue
Add assignees to an issue.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| number        | Number     | The number of the issue (required)
| assignees     | JSON       | Logins for the users that should be added to the issue. (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"number": 0,
	"assignees": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"{
                    \"id\": 1,
                    \"url\": \"https://api.github.com/repos/octocat/Hello-World/issues/1347\",
                    \"repository_url\": \"https://api.github.com/repos/octocat/Hello-World\",
                    \"labels_url\": \"https://api.github.com/repos/octocat/Hello-World/issues/1347/labels{/name}\",
                    \"comments_url\": \"https://api.github.com/repos/octocat/Hello-World/issues/1347/comments\",
                    \"events_url\": \"https://api.github.com/repos/octocat/Hello-World/issues/1347/events\",
                    \"html_url\": \"https://github.com/octocat/Hello-World/issues/1347\",
                    \"number\": 1347,
                    \"state\": \"open\",
                    \"title\": \"Found a bug\",
                    \"body\": \"I'm having a problem with this.\",
                    \"user\": {
                      \"login\": \"octocat\",
                      \"id\": 1,
                      \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                      \"gravatar_id\": \"\",
                      \"url\": \"https://api.github.com/users/octocat\",
                      \"html_url\": \"https://github.com/octocat\",
                      \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                      \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                      \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                      \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                      \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                      \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                      \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                      \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                      \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                      \"type\": \"User\",
                      \"site_admin\": false
                    },
                    \"labels\": [
                      {
                        \"url\": \"https://api.github.com/repos/octocat/Hello-World/labels/bug\",
                        \"name\": \"bug\",
                        \"color\": \"f29513\"
                      }
                    ],
                    \"assignee\": {
                      \"login\": \"octocat\",
                      \"id\": 1,
                      \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                      \"gravatar_id\": \"\",
                      \"url\": \"https://api.github.com/users/octocat\",
                      \"html_url\": \"https://github.com/octocat\",
                      \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                      \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                      \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                      \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                      \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                      \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                      \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                      \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                      \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                      \"type\": \"User\",
                      \"site_admin\": false
                    },
                    \"milestone\": {
                      \"url\": \"https://api.github.com/repos/octocat/Hello-World/milestones/1\",
                      \"html_url\": \"https://github.com/octocat/Hello-World/milestones/v1.0\",
                      \"labels_url\": \"https://api.github.com/repos/octocat/Hello-World/milestones/1/labels\",
                      \"id\": 1002604,
                      \"number\": 1,
                      \"state\": \"open\",
                      \"title\": \"v1.0\",
                      \"description\": \"Tracking milestone for version 1.0\",
                      \"creator\": {
                        \"login\": \"octocat\",
                        \"id\": 1,
                        \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                        \"gravatar_id\": \"\",
                        \"url\": \"https://api.github.com/users/octocat\",
                        \"html_url\": \"https://github.com/octocat\",
                        \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                        \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                        \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                        \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                        \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                        \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                        \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                        \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                        \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                        \"type\": \"User\",
                        \"site_admin\": false
                      },
                      \"open_issues\": 4,
                      \"closed_issues\": 8,
                      \"created_at\": \"2011-04-10T20:09:31Z\",
                      \"updated_at\": \"2014-03-03T18:58:10Z\",
                      \"closed_at\": \"2013-02-12T13:22:01Z\",
                      \"due_on\": \"2012-10-09T23:39:01Z\"
                    },
                    \"locked\": false,
                    \"comments\": 0,
                    \"pull_request\": {
                      \"url\": \"https://api.github.com/repos/octocat/Hello-World/pulls/1347\",
                      \"html_url\": \"https://github.com/octocat/Hello-World/pull/1347\",
                      \"diff_url\": \"https://github.com/octocat/Hello-World/pull/1347.diff\",
                      \"patch_url\": \"https://github.com/octocat/Hello-World/pull/1347.patch\"
                    },
                    \"closed_at\": null,
                    \"created_at\": \"2011-04-22T13:33:48Z\",
                    \"updated_at\": \"2011-04-22T13:33:48Z\",
                    \"assignees\": [
                      {
                        \"login\": \"octocat\",
                        \"id\": 1,
                        \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                        \"gravatar_id\": \"\",
                        \"url\": \"https://api.github.com/users/octocat\",
                        \"html_url\": \"https://github.com/octocat\",
                        \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                        \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                        \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                        \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                        \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                        \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                        \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                        \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                        \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                        \"type\": \"User\",
                        \"site_admin\": false
                      },
                      {
                        \"login\": \"hubot\",
                        \"id\": 1,
                        \"avatar_url\": \"https://github.com/images/error/hubot_happy.gif\",
                        \"gravatar_id\": \"\",
                        \"url\": \"https://api.github.com/users/hubot\",
                        \"html_url\": \"https://github.com/hubot\",
                        \"followers_url\": \"https://api.github.com/users/hubot/followers\",
                        \"following_url\": \"https://api.github.com/users/hubot/following{/other_user}\",
                        \"gists_url\": \"https://api.github.com/users/hubot/gists{/gist_id}\",
                        \"starred_url\": \"https://api.github.com/users/hubot/starred{/owner}{/repo}\",
                        \"subscriptions_url\": \"https://api.github.com/users/hubot/subscriptions\",
                        \"organizations_url\": \"https://api.github.com/users/hubot/orgs\",
                        \"repos_url\": \"https://api.github.com/users/hubot/repos\",
                        \"events_url\": \"https://api.github.com/users/hubot/events{/privacy}\",
                        \"received_events_url\": \"https://api.github.com/users/hubot/received_events\",
                        \"type\": \"User\",
                        \"site_admin\": true
                      },
                      {
                        \"login\": \"other_user\",
                        \"id\": 1,
                        \"avatar_url\": \"https://github.com/images/error/other_user_happy.gif\",
                        \"gravatar_id\": \"\",
                        \"url\": \"https://api.github.com/users/other_user\",
                        \"html_url\": \"https://github.com/other_user\",
                        \"followers_url\": \"https://api.github.com/users/other_user/followers\",
                        \"following_url\": \"https://api.github.com/users/other_user/following{/other_user}\",
                        \"gists_url\": \"https://api.github.com/users/other_user/gists{/gist_id}\",
                        \"starred_url\": \"https://api.github.com/users/other_user/starred{/owner}{/repo}\",
                        \"subscriptions_url\": \"https://api.github.com/users/other_user/subscriptions\",
                        \"organizations_url\": \"https://api.github.com/users/other_user/orgs\",
                        \"repos_url\": \"https://api.github.com/users/other_user/repos\",
                        \"events_url\": \"https://api.github.com/users/other_user/events{/privacy}\",
                        \"received_events_url\": \"https://api.github.com/users/other_user/received_events\",
                        \"type\": \"User\",
                        \"site_admin\": false
                      }
                    ]
                  }"
		}
	}
}
```

<a name="addIssueLabels"/>
## Github.addIssueLabels
Add labels to an issue

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| number        | Number     | The number of the issue (required)
| body          | JSON       | Array of the labels that should be added to the issue. (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"number": 0,
	"body": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"[
                    {
                      \"url\": \"https://api.github.com/repos/octocat/Hello-World/labels/bug\",
                      \"name\": \"bug\",
                      \"color\": \"f29513\"
                    }
                  ]"
		}
	}
}
```

<a name="checkAssignee"/>
## Github.checkAssignee
Check assignee

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| assignee      | String     | Login for the user that this issue should be assigned to. (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"assignee": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"Status: 204 No Content"
		}
	}
}
```

<a name="createIssue"/>
## Github.createIssue
Create an issue

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| title         | String     | The title of the issue. (required)
| body          | String     | The contents of the issue. (optional)
| assignee      | String     | Login for the user that this issue should be assigned to. (optional)
| milestone     | Number     | Milestone to associate this issue with. (optional)
| labels        | JSON       | Array of strings - Labels to associate with this issue. (optional)
| assignees     | JSON       | Logins for Users to assign to this issue. NOTE: Only users with push access can set assignees for new issues. Assignees are silently dropped otherwise. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"title": "...",
	"body": "...",
	"assignee": "...",
	"milestone": 0,
	"labels": "...",
	"assignees": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"{
                    \"id\": 1,
                    \"url\": \"https://api.github.com/repos/octocat/Hello-World/issues/1347\",
                    \"repository_url\": \"https://api.github.com/repos/octocat/Hello-World\",
                    \"labels_url\": \"https://api.github.com/repos/octocat/Hello-World/issues/1347/labels{/name}\",
                    \"comments_url\": \"https://api.github.com/repos/octocat/Hello-World/issues/1347/comments\",
                    \"events_url\": \"https://api.github.com/repos/octocat/Hello-World/issues/1347/events\",
                    \"html_url\": \"https://github.com/octocat/Hello-World/issues/1347\",
                    \"number\": 1347,
                    \"state\": \"open\",
                    \"title\": \"Found a bug\",
                    \"body\": \"I'm having a problem with this.\",
                    \"user\": {
                      \"login\": \"octocat\",
                      \"id\": 1,
                      \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                      \"gravatar_id\": \"\",
                      \"url\": \"https://api.github.com/users/octocat\",
                      \"html_url\": \"https://github.com/octocat\",
                      \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                      \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                      \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                      \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                      \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                      \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                      \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                      \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                      \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                      \"type\": \"User\",
                      \"site_admin\": false
                    },
                    \"labels\": [
                      {
                        \"url\": \"https://api.github.com/repos/octocat/Hello-World/labels/bug\",
                        \"name\": \"bug\",
                        \"color\": \"f29513\"
                      }
                    ],
                    \"assignee\": {
                      \"login\": \"octocat\",
                      \"id\": 1,
                      \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                      \"gravatar_id\": \"\",
                      \"url\": \"https://api.github.com/users/octocat\",
                      \"html_url\": \"https://github.com/octocat\",
                      \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                      \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                      \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                      \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                      \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                      \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                      \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                      \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                      \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                      \"type\": \"User\",
                      \"site_admin\": false
                    },
                    \"milestone\": {
                      \"url\": \"https://api.github.com/repos/octocat/Hello-World/milestones/1\",
                      \"html_url\": \"https://github.com/octocat/Hello-World/milestones/v1.0\",
                      \"labels_url\": \"https://api.github.com/repos/octocat/Hello-World/milestones/1/labels\",
                      \"id\": 1002604,
                      \"number\": 1,
                      \"state\": \"open\",
                      \"title\": \"v1.0\",
                      \"description\": \"Tracking milestone for version 1.0\",
                      \"creator\": {
                        \"login\": \"octocat\",
                        \"id\": 1,
                        \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                        \"gravatar_id\": \"\",
                        \"url\": \"https://api.github.com/users/octocat\",
                        \"html_url\": \"https://github.com/octocat\",
                        \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                        \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                        \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                        \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                        \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                        \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                        \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                        \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                        \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                        \"type\": \"User\",
                        \"site_admin\": false
                      },
                      \"open_issues\": 4,
                      \"closed_issues\": 8,
                      \"created_at\": \"2011-04-10T20:09:31Z\",
                      \"updated_at\": \"2014-03-03T18:58:10Z\",
                      \"closed_at\": \"2013-02-12T13:22:01Z\",
                      \"due_on\": \"2012-10-09T23:39:01Z\"
                    },
                    \"locked\": false,
                    \"comments\": 0,
                    \"pull_request\": {
                      \"url\": \"https://api.github.com/repos/octocat/Hello-World/pulls/1347\",
                      \"html_url\": \"https://github.com/octocat/Hello-World/pull/1347\",
                      \"diff_url\": \"https://github.com/octocat/Hello-World/pull/1347.diff\",
                      \"patch_url\": \"https://github.com/octocat/Hello-World/pull/1347.patch\"
                    },
                    \"closed_at\": null,
                    \"created_at\": \"2011-04-22T13:33:48Z\",
                    \"updated_at\": \"2011-04-22T13:33:48Z\",
                    \"closed_by\": {
                      \"login\": \"octocat\",
                      \"id\": 1,
                      \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                      \"gravatar_id\": \"\",
                      \"url\": \"https://api.github.com/users/octocat\",
                      \"html_url\": \"https://github.com/octocat\",
                      \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                      \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                      \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                      \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                      \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                      \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                      \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                      \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                      \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                      \"type\": \"User\",
                      \"site_admin\": false
                    }
                  }"
		}
	}
}
```

<a name="createIssueComment"/>
## Github.createIssueComment
Create a comment

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| number        | Number     | The number of the issue (required)
| body          | String     | The contents of the comment. (required) Ex.: {"body": "Me too"}

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"number": 0,
	"body": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"{
                    \"id\": 1,
                    \"url\": \"https://api.github.com/repos/octocat/Hello-World/issues/comments/1\",
                    \"html_url\": \"https://github.com/octocat/Hello-World/issues/1347#issuecomment-1\",
                    \"body\": \"Me too\",
                    \"user\": {
                      \"login\": \"octocat\",
                      \"id\": 1,
                      \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                      \"gravatar_id\": \"\",
                      \"url\": \"https://api.github.com/users/octocat\",
                      \"html_url\": \"https://github.com/octocat\",
                      \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                      \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                      \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                      \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                      \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                      \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                      \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                      \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                      \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                      \"type\": \"User\",
                      \"site_admin\": false
                    },
                    \"created_at\": \"2011-04-14T16:00:49Z\",
                    \"updated_at\": \"2011-04-14T16:00:49Z\"
                  }"
		}
	}
}
```

<a name="createLabel"/>
## Github.createLabel
Create a label

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name. (required)
| repositoryName| String     | The name of the repository. (required)
| name          | String     | The name of the label. (required)
| color         | String     | 6 character hex code, without a leading #. (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"name": "...",
	"color": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"{
                    \"url\": \"https://api.github.com/repos/octocat/Hello-World/labels/bug\",
                    \"name\": \"bug\",
                    \"color\": \"f29513\"
                  }"
		}
	}
}
```

<a name="createMilestone"/>
## Github.createMilestone
Create a milestone

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name. (required)
| repositoryName| String     | The name of the repository. (required)
| title         | String     | The title of the milestone. (required)
| state         | String     | The state of the milestone. Either open or closed. Default: open (optional)
| description   | String     | A description of the milestone. (optional)
| dueOn         | String     | Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"title": "...",
	"state": "...",
	"description": "...",
	"dueOn": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"{
                    \"url\": \"https://api.github.com/repos/octocat/Hello-World/milestones/1\",
                    \"html_url\": \"https://github.com/octocat/Hello-World/milestones/v1.0\",
                    \"labels_url\": \"https://api.github.com/repos/octocat/Hello-World/milestones/1/labels\",
                    \"id\": 1002604,
                    \"number\": 1,
                    \"state\": \"open\",
                    \"title\": \"v1.0\",
                    \"description\": \"Tracking milestone for version 1.0\",
                    \"creator\": {
                      \"login\": \"octocat\",
                      \"id\": 1,
                      \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                      \"gravatar_id\": \"\",
                      \"url\": \"https://api.github.com/users/octocat\",
                      \"html_url\": \"https://github.com/octocat\",
                      \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                      \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                      \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                      \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                      \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                      \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                      \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                      \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                      \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                      \"type\": \"User\",
                      \"site_admin\": false
                    },
                    \"open_issues\": 4,
                    \"closed_issues\": 8,
                    \"created_at\": \"2011-04-10T20:09:31Z\",
                    \"updated_at\": \"2014-03-03T18:58:10Z\",
                    \"closed_at\": \"2013-02-12T13:22:01Z\",
                    \"due_on\": \"2012-10-09T23:39:01Z\"
                  }"
		}
	}
}
```

<a name="deleteIssueComment"/>
## Github.deleteIssueComment
Delete a comment

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name. (required)
| repositoryName| String     | The name of the repository. (required)
| id            | String     | The ID of the comment (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"id": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"Status: 204 No Content"
		}
	}
}
```

<a name="deleteLabel"/>
## Github.deleteLabel
Delete a label

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name. (required)
| repositoryName| String     | The name of the repository. (required)
| name          | String     | The name of the label. (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"name": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"Status: 204 No Content"
		}
	}
}
```

<a name="deleteMilestone"/>
## Github.deleteMilestone
Delete a milestone

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name. (required)
| repositoryName| String     | The name of the repository (required)
| number        | Number     | The number of the milestone. (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"number": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"Status: 204 No Content"
		}
	}
}
```

<a name="updateIssue"/>
## Github.updateIssue
Edit an issue

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name. (required)
| repositoryName| String     | The name of the repository. (required)
| number        | Number     | The number of the issue. (required)
| title         | String     | The title of the issue. (optional)
| body          | String     | The contents of the issue. (optional)
| state         | String     | State of the issue. Either open or closed. (optional)
| milestone     | Number     | Milestone to associate this issue with. (optional)
| labels        | JSON       | Array of strings - Labels to associate with this issue. (optional)
| assignees     | JSON       | Logins for Users to assign to this issue. Pass one or more user logins to replace the set of assignees on this Issue. .Send an empty array ([]) to clear all assignees from the Issue. NOTE: Only users with push access can set assignees for new issues. Assignees are silently dropped otherwise. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"number": 0,
	"title": "...",
	"body": "...",
	"state": "...",
	"milestone": 0,
	"labels": "...",
	"assignees": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"{
                    \"id\": 1,
                    \"url\": \"https://api.github.com/repos/octocat/Hello-World/issues/1347\",
                    \"repository_url\": \"https://api.github.com/repos/octocat/Hello-World\",
                    \"labels_url\": \"https://api.github.com/repos/octocat/Hello-World/issues/1347/labels{/name}\",
                    \"comments_url\": \"https://api.github.com/repos/octocat/Hello-World/issues/1347/comments\",
                    \"events_url\": \"https://api.github.com/repos/octocat/Hello-World/issues/1347/events\",
                    \"html_url\": \"https://github.com/octocat/Hello-World/issues/1347\",
                    \"number\": 1347,
                    \"state\": \"open\",
                    \"title\": \"Found a bug\",
                    \"body\": \"I'm having a problem with this.\",
                    \"user\": {
                      \"login\": \"octocat\",
                      \"id\": 1,
                      \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                      \"gravatar_id\": \"\",
                      \"url\": \"https://api.github.com/users/octocat\",
                      \"html_url\": \"https://github.com/octocat\",
                      \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                      \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                      \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                      \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                      \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                      \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                      \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                      \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                      \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                      \"type\": \"User\",
                      \"site_admin\": false
                    },
                    \"labels\": [
                      {
                        \"url\": \"https://api.github.com/repos/octocat/Hello-World/labels/bug\",
                        \"name\": \"bug\",
                        \"color\": \"f29513\"
                      }
                    ],
                    \"assignee\": {
                      \"login\": \"octocat\",
                      \"id\": 1,
                      \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                      \"gravatar_id\": \"\",
                      \"url\": \"https://api.github.com/users/octocat\",
                      \"html_url\": \"https://github.com/octocat\",
                      \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                      \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                      \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                      \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                      \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                      \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                      \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                      \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                      \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                      \"type\": \"User\",
                      \"site_admin\": false
                    },
                    \"milestone\": {
                      \"url\": \"https://api.github.com/repos/octocat/Hello-World/milestones/1\",
                      \"html_url\": \"https://github.com/octocat/Hello-World/milestones/v1.0\",
                      \"labels_url\": \"https://api.github.com/repos/octocat/Hello-World/milestones/1/labels\",
                      \"id\": 1002604,
                      \"number\": 1,
                      \"state\": \"open\",
                      \"title\": \"v1.0\",
                      \"description\": \"Tracking milestone for version 1.0\",
                      \"creator\": {
                        \"login\": \"octocat\",
                        \"id\": 1,
                        \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                        \"gravatar_id\": \"\",
                        \"url\": \"https://api.github.com/users/octocat\",
                        \"html_url\": \"https://github.com/octocat\",
                        \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                        \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                        \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                        \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                        \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                        \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                        \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                        \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                        \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                        \"type\": \"User\",
                        \"site_admin\": false
                      },
                      \"open_issues\": 4,
                      \"closed_issues\": 8,
                      \"created_at\": \"2011-04-10T20:09:31Z\",
                      \"updated_at\": \"2014-03-03T18:58:10Z\",
                      \"closed_at\": \"2013-02-12T13:22:01Z\",
                      \"due_on\": \"2012-10-09T23:39:01Z\"
                    },
                    \"locked\": false,
                    \"comments\": 0,
                    \"pull_request\": {
                      \"url\": \"https://api.github.com/repos/octocat/Hello-World/pulls/1347\",
                      \"html_url\": \"https://github.com/octocat/Hello-World/pull/1347\",
                      \"diff_url\": \"https://github.com/octocat/Hello-World/pull/1347.diff\",
                      \"patch_url\": \"https://github.com/octocat/Hello-World/pull/1347.patch\"
                    },
                    \"closed_at\": null,
                    \"created_at\": \"2011-04-22T13:33:48Z\",
                    \"updated_at\": \"2011-04-22T13:33:48Z\",
                    \"closed_by\": {
                      \"login\": \"octocat\",
                      \"id\": 1,
                      \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                      \"gravatar_id\": \"\",
                      \"url\": \"https://api.github.com/users/octocat\",
                      \"html_url\": \"https://github.com/octocat\",
                      \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                      \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                      \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                      \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                      \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                      \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                      \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                      \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                      \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                      \"type\": \"User\",
                      \"site_admin\": false
                    }
                  }"
		}
	}
}
```

<a name="updateIssueComment"/>
## Github.updateIssueComment
Edit a comment

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name. (required)
| repositoryName| String     | The name of the repository. (required)
| id            | String     | The ID of the comment. (required)
| body          | String     | The contents of the comment. (required). Ex.: {"body": "Me too"}

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"id": "...",
	"body": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"{
                    \"id\": 1,
                    \"url\": \"https://api.github.com/repos/octocat/Hello-World/issues/comments/1\",
                    \"html_url\": \"https://github.com/octocat/Hello-World/issues/1347#issuecomment-1\",
                    \"body\": \"Me too\",
                    \"user\": {
                      \"login\": \"octocat\",
                      \"id\": 1,
                      \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                      \"gravatar_id\": \"\",
                      \"url\": \"https://api.github.com/users/octocat\",
                      \"html_url\": \"https://github.com/octocat\",
                      \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                      \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                      \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                      \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                      \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                      \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                      \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                      \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                      \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                      \"type\": \"User\",
                      \"site_admin\": false
                    },
                    \"created_at\": \"2011-04-14T16:00:49Z\",
                    \"updated_at\": \"2011-04-14T16:00:49Z\"
                  }"
		}
	}
}
```

<a name="getIssue"/>
## Github.getIssue
Get a single issue

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name. (required)
| repositoryName| String     | The name of the repository. (required)
| number        | Number     | The number of the issue. (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"number": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"{
                    \"id\": 1,
                    \"url\": \"https://api.github.com/repos/octocat/Hello-World/issues/1347\",
                    \"repository_url\": \"https://api.github.com/repos/octocat/Hello-World\",
                    \"labels_url\": \"https://api.github.com/repos/octocat/Hello-World/issues/1347/labels{/name}\",
                    \"comments_url\": \"https://api.github.com/repos/octocat/Hello-World/issues/1347/comments\",
                    \"events_url\": \"https://api.github.com/repos/octocat/Hello-World/issues/1347/events\",
                    \"html_url\": \"https://github.com/octocat/Hello-World/issues/1347\",
                    \"number\": 1347,
                    \"state\": \"open\",
                    \"title\": \"Found a bug\",
                    \"body\": \"I'm having a problem with this.\",
                    \"user\": {
                      \"login\": \"octocat\",
                      \"id\": 1,
                      \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                      \"gravatar_id\": \"\",
                      \"url\": \"https://api.github.com/users/octocat\",
                      \"html_url\": \"https://github.com/octocat\",
                      \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                      \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                      \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                      \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                      \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                      \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                      \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                      \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                      \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                      \"type\": \"User\",
                      \"site_admin\": false
                    },
                    \"labels\": [
                      {
                        \"url\": \"https://api.github.com/repos/octocat/Hello-World/labels/bug\",
                        \"name\": \"bug\",
                        \"color\": \"f29513\"
                      }
                    ],
                    \"assignee\": {
                      \"login\": \"octocat\",
                      \"id\": 1,
                      \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                      \"gravatar_id\": \"\",
                      \"url\": \"https://api.github.com/users/octocat\",
                      \"html_url\": \"https://github.com/octocat\",
                      \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                      \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                      \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                      \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                      \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                      \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                      \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                      \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                      \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                      \"type\": \"User\",
                      \"site_admin\": false
                    },
                    \"milestone\": {
                      \"url\": \"https://api.github.com/repos/octocat/Hello-World/milestones/1\",
                      \"html_url\": \"https://github.com/octocat/Hello-World/milestones/v1.0\",
                      \"labels_url\": \"https://api.github.com/repos/octocat/Hello-World/milestones/1/labels\",
                      \"id\": 1002604,
                      \"number\": 1,
                      \"state\": \"open\",
                      \"title\": \"v1.0\",
                      \"description\": \"Tracking milestone for version 1.0\",
                      \"creator\": {
                        \"login\": \"octocat\",
                        \"id\": 1,
                        \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                        \"gravatar_id\": \"\",
                        \"url\": \"https://api.github.com/users/octocat\",
                        \"html_url\": \"https://github.com/octocat\",
                        \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                        \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                        \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                        \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                        \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                        \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                        \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                        \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                        \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                        \"type\": \"User\",
                        \"site_admin\": false
                      },
                      \"open_issues\": 4,
                      \"closed_issues\": 8,
                      \"created_at\": \"2011-04-10T20:09:31Z\",
                      \"updated_at\": \"2014-03-03T18:58:10Z\",
                      \"closed_at\": \"2013-02-12T13:22:01Z\",
                      \"due_on\": \"2012-10-09T23:39:01Z\"
                    },
                    \"locked\": false,
                    \"comments\": 0,
                    \"pull_request\": {
                      \"url\": \"https://api.github.com/repos/octocat/Hello-World/pulls/1347\",
                      \"html_url\": \"https://github.com/octocat/Hello-World/pull/1347\",
                      \"diff_url\": \"https://github.com/octocat/Hello-World/pull/1347.diff\",
                      \"patch_url\": \"https://github.com/octocat/Hello-World/pull/1347.patch\"
                    },
                    \"closed_at\": null,
                    \"created_at\": \"2011-04-22T13:33:48Z\",
                    \"updated_at\": \"2011-04-22T13:33:48Z\",
                    \"closed_by\": {
                      \"login\": \"octocat\",
                      \"id\": 1,
                      \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                      \"gravatar_id\": \"\",
                      \"url\": \"https://api.github.com/users/octocat\",
                      \"html_url\": \"https://github.com/octocat\",
                      \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                      \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                      \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                      \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                      \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                      \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                      \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                      \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                      \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                      \"type\": \"User\",
                      \"site_admin\": false
                    }
                  }"
		}
	}
}
```

<a name="getAllIssues"/>
## Github.getAllIssues
List all issues across all the authenticated user's visible repositories including owned repositories, member repositories, and organization repositories

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| filter     | String     | Indicates which sorts of issues to return. Can be one of: * assigned: Issues assigned to you, * created: Issues created by you, * mentioned: Issues mentioning you, * subscribed: Issues you're subscribed to updates for, * all: All issues the authenticated user can see, regardless of participation or creation, Default: assigned (optional)
| state      | String     | Indicates the state of the issues to return. Can be either open, closed, or all. Default: open (optional)
| labels     | String     | String list of comma separated Label names. Example: bug,ui,@high (optional)
| sort       | String     | What to sort results by. Can be either created, updated, comments. Default: created (optional)
| direction  | String     | The direction of the sort. Can be either asc or desc. Default: desc (optional)
| since      | String     | Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ (optional)
| page       | Number     | Page number of the results to fetch. (optional)
| perPage    | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"filter": "...",
	"state": "...",
	"labels": "...",
	"sort": "...",
	"direction": "...",
	"since": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"[
                        {
                          \"id\": 1,
                          \"url\": \"https://api.github.com/repos/octocat/Hello-World/issues/1347\",
                          \"repository_url\": \"https://api.github.com/repos/octocat/Hello-World\",
                          \"labels_url\": \"https://api.github.com/repos/octocat/Hello-World/issues/1347/labels{/name}\",
                          \"comments_url\": \"https://api.github.com/repos/octocat/Hello-World/issues/1347/comments\",
                          \"events_url\": \"https://api.github.com/repos/octocat/Hello-World/issues/1347/events\",
                          \"html_url\": \"https://github.com/octocat/Hello-World/issues/1347\",
                          \"number\": 1347,
                          \"state\": \"open\",
                          \"title\": \"Found a bug\",
                          \"body\": \"I'm having a problem with this.\",
                          \"user\": {
                            \"login\": \"octocat\",
                            \"id\": 1,
                            \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                            \"gravatar_id\": \"\",
                            \"url\": \"https://api.github.com/users/octocat\",
                            \"html_url\": \"https://github.com/octocat\",
                            \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                            \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                            \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                            \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                            \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                            \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                            \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                            \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                            \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                            \"type\": \"User\",
                            \"site_admin\": false
                          },
                          \"labels\": [
                            {
                              \"url\": \"https://api.github.com/repos/octocat/Hello-World/labels/bug\",
                              \"name\": \"bug\",
                              \"color\": \"f29513\"
                            }
                          ],
                          \"assignee\": {
                            \"login\": \"octocat\",
                            \"id\": 1,
                            \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                            \"gravatar_id\": \"\",
                            \"url\": \"https://api.github.com/users/octocat\",
                            \"html_url\": \"https://github.com/octocat\",
                            \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                            \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                            \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                            \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                            \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                            \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                            \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                            \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                            \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                            \"type\": \"User\",
                            \"site_admin\": false
                          },
                          \"milestone\": {
                            \"url\": \"https://api.github.com/repos/octocat/Hello-World/milestones/1\",
                            \"html_url\": \"https://github.com/octocat/Hello-World/milestones/v1.0\",
                            \"labels_url\": \"https://api.github.com/repos/octocat/Hello-World/milestones/1/labels\",
                            \"id\": 1002604,
                            \"number\": 1,
                            \"state\": \"open\",
                            \"title\": \"v1.0\",
                            \"description\": \"Tracking milestone for version 1.0\",
                            \"creator\": {
                              \"login\": \"octocat\",
                              \"id\": 1,
                              \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                              \"gravatar_id\": \"\",
                              \"url\": \"https://api.github.com/users/octocat\",
                              \"html_url\": \"https://github.com/octocat\",
                              \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                              \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                              \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                              \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                              \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                              \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                              \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                              \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                              \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                              \"type\": \"User\",
                              \"site_admin\": false
                            },
                            \"open_issues\": 4,
                            \"closed_issues\": 8,
                            \"created_at\": \"2011-04-10T20:09:31Z\",
                            \"updated_at\": \"2014-03-03T18:58:10Z\",
                            \"closed_at\": \"2013-02-12T13:22:01Z\",
                            \"due_on\": \"2012-10-09T23:39:01Z\"
                          },
                          \"locked\": false,
                          \"comments\": 0,
                          \"pull_request\": {
                            \"url\": \"https://api.github.com/repos/octocat/Hello-World/pulls/1347\",
                            \"html_url\": \"https://github.com/octocat/Hello-World/pull/1347\",
                            \"diff_url\": \"https://github.com/octocat/Hello-World/pull/1347.diff\",
                            \"patch_url\": \"https://github.com/octocat/Hello-World/pull/1347.patch\"
                          },
                          \"closed_at\": null,
                          \"created_at\": \"2011-04-22T13:33:48Z\",
                          \"updated_at\": \"2011-04-22T13:33:48Z\"
                        }
                      ]"
		}
	}
}
```

<a name="getAssignees"/>
## Github.getAssignees
List assignees

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name. (required)
| repositoryName| String     | The name of the repository. (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"[
                    {
                      \"login\": \"octocat\",
                      \"id\": 1,
                      \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                      \"gravatar_id\": \"\",
                      \"url\": \"https://api.github.com/users/octocat\",
                      \"html_url\": \"https://github.com/octocat\",
                      \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                      \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                      \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                      \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                      \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                      \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                      \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                      \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                      \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                      \"type\": \"User\",
                      \"site_admin\": false
                    }
                  ]"
		}
	}
}
```

<a name="getIssueComment"/>
## Github.getIssueComment
Get a single comment

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name. (required)
| repositoryName| String     | The name of the repository. (required)
| id            | String     | The ID of the comment. (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"id": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"{
                    \"id\": 1,
                    \"url\": \"https://api.github.com/repos/octocat/Hello-World/issues/comments/1\",
                    \"html_url\": \"https://github.com/octocat/Hello-World/issues/1347#issuecomment-1\",
                    \"body\": \"Me too\",
                    \"user\": {
                      \"login\": \"octocat\",
                      \"id\": 1,
                      \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                      \"gravatar_id\": \"\",
                      \"url\": \"https://api.github.com/users/octocat\",
                      \"html_url\": \"https://github.com/octocat\",
                      \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                      \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                      \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                      \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                      \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                      \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                      \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                      \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                      \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                      \"type\": \"User\",
                      \"site_admin\": false
                    },
                    \"created_at\": \"2011-04-14T16:00:49Z\",
                    \"updated_at\": \"2011-04-14T16:00:49Z\"
                  }"
		}
	}
}
```

<a name="getIssueComments"/>
## Github.getIssueComments
List comments on an issue

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name. (required)
| repositoryName| String     | The name of the repository. (required)
| number        | Number     | The number of the issue. (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"number": 0,
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"[
                    {
                      \"id\": 1,
                      \"url\": \"https://api.github.com/repos/octocat/Hello-World/issues/comments/1\",
                      \"html_url\": \"https://github.com/octocat/Hello-World/issues/1347#issuecomment-1\",
                      \"body\": \"Me too\",
                      \"user\": {
                        \"login\": \"octocat\",
                        \"id\": 1,
                        \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                        \"gravatar_id\": \"\",
                        \"url\": \"https://api.github.com/users/octocat\",
                        \"html_url\": \"https://github.com/octocat\",
                        \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                        \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                        \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                        \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                        \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                        \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                        \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                        \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                        \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                        \"type\": \"User\",
                        \"site_admin\": false
                      },
                      \"created_at\": \"2011-04-14T16:00:49Z\",
                      \"updated_at\": \"2011-04-14T16:00:49Z\"
                    }
                  ]"
		}
	}
}
```

<a name="getIssuesCommentsForRepository"/>
## Github.getIssuesCommentsForRepository
List comments in a repository

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name. (required)
| repositoryName| String     | The name of the repository. (required)
| sort          | String     | Either created or updated. Default: created (optional)
| direction     | String     | Either asc or desc. Ignored without the sort parameter. (optional)
| since         | String     | Only comments updated at or after this time are returned. Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ (optional)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"sort": "...",
	"direction": "...",
	"since": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"[
                        {
                          \"id\": 1,
                          \"url\": \"https://api.github.com/repos/octocat/Hello-World/issues/comments/1\",
                          \"html_url\": \"https://github.com/octocat/Hello-World/issues/1347#issuecomment-1\",
                          \"body\": \"Me too\",
                          \"user\": {
                            \"login\": \"octocat\",
                            \"id\": 1,
                            \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                            \"gravatar_id\": \"\",
                            \"url\": \"https://api.github.com/users/octocat\",
                            \"html_url\": \"https://github.com/octocat\",
                            \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                            \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                            \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                            \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                            \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                            \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                            \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                            \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                            \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                            \"type\": \"User\",
                            \"site_admin\": false
                          },
                          \"created_at\": \"2011-04-14T16:00:49Z\",
                          \"updated_at\": \"2011-04-14T16:00:49Z\"
                        }
                      ]"
		}
	}
}
```

<a name="getIssueEvent"/>
## Github.getIssueEvent
Get a single event

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name. (required)
| repositoryName| String     | The name of the reposotiry. (required)
| id            | String     | The ID of the event. (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"id": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"{
                    \"id\": 1,
                    \"url\": \"https://api.github.com/repos/octocat/Hello-World/issues/events/1\",
                    \"actor\": {
                      \"login\": \"octocat\",
                      \"id\": 1,
                      \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                      \"gravatar_id\": \"\",
                      \"url\": \"https://api.github.com/users/octocat\",
                      \"html_url\": \"https://github.com/octocat\",
                      \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                      \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                      \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                      \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                      \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                      \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                      \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                      \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                      \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                      \"type\": \"User\",
                      \"site_admin\": false
                    },
                    \"event\": \"closed\",
                    \"commit_id\": \"6dcb09b5b57875f334f61aebed695e2e4193db5e\",
                    \"commit_url\": \"https://api.github.com/repos/octocat/Hello-World/commits/6dcb09b5b57875f334f61aebed695e2e4193db5e\",
                    \"created_at\": \"2011-04-14T16:00:49Z\",
                    \"issue\": {
                      \"id\": 1,
                      \"url\": \"https://api.github.com/repos/octocat/Hello-World/issues/1347\",
                      \"repository_url\": \"https://api.github.com/repos/octocat/Hello-World\",
                      \"labels_url\": \"https://api.github.com/repos/octocat/Hello-World/issues/1347/labels{/name}\",
                      \"comments_url\": \"https://api.github.com/repos/octocat/Hello-World/issues/1347/comments\",
                      \"events_url\": \"https://api.github.com/repos/octocat/Hello-World/issues/1347/events\",
                      \"html_url\": \"https://github.com/octocat/Hello-World/issues/1347\",
                      \"number\": 1347,
                      \"state\": \"open\",
                      \"title\": \"Found a bug\",
                      \"body\": \"I'm having a problem with this.\",
                      \"user\": {
                        \"login\": \"octocat\",
                        \"id\": 1,
                        \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                        \"gravatar_id\": \"\",
                        \"url\": \"https://api.github.com/users/octocat\",
                        \"html_url\": \"https://github.com/octocat\",
                        \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                        \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                        \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                        \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                        \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                        \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                        \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                        \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                        \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                        \"type\": \"User\",
                        \"site_admin\": false
                      },
                      \"labels\": [
                        {
                          \"url\": \"https://api.github.com/repos/octocat/Hello-World/labels/bug\",
                          \"name\": \"bug\",
                          \"color\": \"f29513\"
                        }
                      ],
                      \"assignee\": {
                        \"login\": \"octocat\",
                        \"id\": 1,
                        \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                        \"gravatar_id\": \"\",
                        \"url\": \"https://api.github.com/users/octocat\",
                        \"html_url\": \"https://github.com/octocat\",
                        \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                        \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                        \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                        \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                        \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                        \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                        \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                        \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                        \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                        \"type\": \"User\",
                        \"site_admin\": false
                      },
                      \"milestone\": {
                        \"url\": \"https://api.github.com/repos/octocat/Hello-World/milestones/1\",
                        \"html_url\": \"https://github.com/octocat/Hello-World/milestones/v1.0\",
                        \"labels_url\": \"https://api.github.com/repos/octocat/Hello-World/milestones/1/labels\",
                        \"id\": 1002604,
                        \"number\": 1,
                        \"state\": \"open\",
                        \"title\": \"v1.0\",
                        \"description\": \"Tracking milestone for version 1.0\",
                        \"creator\": {
                          \"login\": \"octocat\",
                          \"id\": 1,
                          \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                          \"gravatar_id\": \"\",
                          \"url\": \"https://api.github.com/users/octocat\",
                          \"html_url\": \"https://github.com/octocat\",
                          \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                          \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                          \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                          \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                          \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                          \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                          \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                          \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                          \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                          \"type\": \"User\",
                          \"site_admin\": false
                        },
                        \"open_issues\": 4,
                        \"closed_issues\": 8,
                        \"created_at\": \"2011-04-10T20:09:31Z\",
                        \"updated_at\": \"2014-03-03T18:58:10Z\",
                        \"closed_at\": \"2013-02-12T13:22:01Z\",
                        \"due_on\": \"2012-10-09T23:39:01Z\"
                      },
                      \"locked\": false,
                      \"comments\": 0,
                      \"pull_request\": {
                        \"url\": \"https://api.github.com/repos/octocat/Hello-World/pulls/1347\",
                        \"html_url\": \"https://github.com/octocat/Hello-World/pull/1347\",
                        \"diff_url\": \"https://github.com/octocat/Hello-World/pull/1347.diff\",
                        \"patch_url\": \"https://github.com/octocat/Hello-World/pull/1347.patch\"
                      },
                      \"closed_at\": null,
                      \"created_at\": \"2011-04-22T13:33:48Z\",
                      \"updated_at\": \"2011-04-22T13:33:48Z\"
                    }
                  }"
		}
	}
}
```

<a name="getIssueEvents"/>
## Github.getIssueEvents
List events for an issue

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name. (required)
| repositoryName| String     | The name of the repository. (required)
| number        | Number     | The number of the issue. (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"number": 0,
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"[
                    {
                      \"id\": 1,
                      \"url\": \"https://api.github.com/repos/octocat/Hello-World/issues/events/1\",
                      \"actor\": {
                        \"login\": \"octocat\",
                        \"id\": 1,
                        \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                        \"gravatar_id\": \"\",
                        \"url\": \"https://api.github.com/users/octocat\",
                        \"html_url\": \"https://github.com/octocat\",
                        \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                        \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                        \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                        \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                        \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                        \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                        \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                        \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                        \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                        \"type\": \"User\",
                        \"site_admin\": false
                      },
                      \"event\": \"closed\",
                      \"commit_id\": \"6dcb09b5b57875f334f61aebed695e2e4193db5e\",
                      \"commit_url\": \"https://api.github.com/repos/octocat/Hello-World/commits/6dcb09b5b57875f334f61aebed695e2e4193db5e\",
                      \"created_at\": \"2011-04-14T16:00:49Z\"
                    }
                  ]"
		}
	}
}
```

<a name="getIssueEventsForRepository"/>
## Github.getIssueEventsForRepository
List events for a repository

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name. (required)
| repositoryName| String     | The name of the repository. (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"[
                        {
                          \"id\": 1,
                          \"url\": \"https://api.github.com/repos/octocat/Hello-World/issues/events/1\",
                          \"actor\": {
                            \"login\": \"octocat\",
                            \"id\": 1,
                            \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                            \"gravatar_id\": \"\",
                            \"url\": \"https://api.github.com/users/octocat\",
                            \"html_url\": \"https://github.com/octocat\",
                            \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                            \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                            \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                            \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                            \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                            \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                            \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                            \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                            \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                            \"type\": \"User\",
                            \"site_admin\": false
                          },
                          \"event\": \"closed\",
                          \"commit_id\": \"6dcb09b5b57875f334f61aebed695e2e4193db5e\",
                          \"commit_url\": \"https://api.github.com/repos/octocat/Hello-World/commits/6dcb09b5b57875f334f61aebed695e2e4193db5e\",
                          \"created_at\": \"2011-04-14T16:00:49Z\",
                          \"issue\": {
                            \"id\": 1,
                            \"url\": \"https://api.github.com/repos/octocat/Hello-World/issues/1347\",
                            \"repository_url\": \"https://api.github.com/repos/octocat/Hello-World\",
                            \"labels_url\": \"https://api.github.com/repos/octocat/Hello-World/issues/1347/labels{/name}\",
                            \"comments_url\": \"https://api.github.com/repos/octocat/Hello-World/issues/1347/comments\",
                            \"events_url\": \"https://api.github.com/repos/octocat/Hello-World/issues/1347/events\",
                            \"html_url\": \"https://github.com/octocat/Hello-World/issues/1347\",
                            \"number\": 1347,
                            \"state\": \"open\",
                            \"title\": \"Found a bug\",
                            \"body\": \"I'm having a problem with this.\",
                            \"user\": {
                              \"login\": \"octocat\",
                              \"id\": 1,
                              \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                              \"gravatar_id\": \"\",
                              \"url\": \"https://api.github.com/users/octocat\",
                              \"html_url\": \"https://github.com/octocat\",
                              \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                              \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                              \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                              \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                              \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                              \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                              \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                              \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                              \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                              \"type\": \"User\",
                              \"site_admin\": false
                            },
                            \"labels\": [
                              {
                                \"url\": \"https://api.github.com/repos/octocat/Hello-World/labels/bug\",
                                \"name\": \"bug\",
                                \"color\": \"f29513\"
                              }
                            ],
                            \"assignee\": {
                              \"login\": \"octocat\",
                              \"id\": 1,
                              \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                              \"gravatar_id\": \"\",
                              \"url\": \"https://api.github.com/users/octocat\",
                              \"html_url\": \"https://github.com/octocat\",
                              \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                              \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                              \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                              \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                              \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                              \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                              \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                              \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                              \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                              \"type\": \"User\",
                              \"site_admin\": false
                            },
                            \"milestone\": {
                              \"url\": \"https://api.github.com/repos/octocat/Hello-World/milestones/1\",
                              \"html_url\": \"https://github.com/octocat/Hello-World/milestones/v1.0\",
                              \"labels_url\": \"https://api.github.com/repos/octocat/Hello-World/milestones/1/labels\",
                              \"id\": 1002604,
                              \"number\": 1,
                              \"state\": \"open\",
                              \"title\": \"v1.0\",
                              \"description\": \"Tracking milestone for version 1.0\",
                              \"creator\": {
                                \"login\": \"octocat\",
                                \"id\": 1,
                                \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                                \"gravatar_id\": \"\",
                                \"url\": \"https://api.github.com/users/octocat\",
                                \"html_url\": \"https://github.com/octocat\",
                                \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                                \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                                \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                                \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                                \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                                \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                                \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                                \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                                \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                                \"type\": \"User\",
                                \"site_admin\": false
                              },
                              \"open_issues\": 4,
                              \"closed_issues\": 8,
                              \"created_at\": \"2011-04-10T20:09:31Z\",
                              \"updated_at\": \"2014-03-03T18:58:10Z\",
                              \"closed_at\": \"2013-02-12T13:22:01Z\",
                              \"due_on\": \"2012-10-09T23:39:01Z\"
                            },
                            \"locked\": false,
                            \"comments\": 0,
                            \"pull_request\": {
                              \"url\": \"https://api.github.com/repos/octocat/Hello-World/pulls/1347\",
                              \"html_url\": \"https://github.com/octocat/Hello-World/pull/1347\",
                              \"diff_url\": \"https://github.com/octocat/Hello-World/pull/1347.diff\",
                              \"patch_url\": \"https://github.com/octocat/Hello-World/pull/1347.patch\"
                            },
                            \"closed_at\": null,
                            \"created_at\": \"2011-04-22T13:33:48Z\",
                            \"updated_at\": \"2011-04-22T13:33:48Z\"
                          }
                        }
                      ]"
		}
	}
}
```

<a name="getIssueEventsTimeline"/>
## Github.getIssueEventsTimeline
List events for an issue. (In preview period. See README.)

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name. (required)
| repositoryName| String     | The name of the repository. (required)
| number        | Number     |  The number of the issue.(required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"number": 0,
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"[
                        {
                          \"id\": 1,
                          \"url\": \"https://api.github.com/repos/octocat/Hello-World/issues/events/1\",
                          \"actor\": {
                            \"login\": \"octocat\",
                            \"id\": 1,
                            \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                            \"gravatar_id\": \"\",
                            \"url\": \"https://api.github.com/users/octocat\",
                            \"html_url\": \"https://github.com/octocat\",
                            \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                            \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                            \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                            \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                            \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                            \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                            \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                            \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                            \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                            \"type\": \"User\",
                            \"site_admin\": false
                          },
                          \"event\": \"closed\",
                          \"commit_id\": \"6dcb09b5b57875f334f61aebed695e2e4193db5e\",
                          \"commit_url\": \"https://api.github.com/repos/octocat/Hello-World/commits/6dcb09b5b57875f334f61aebed695e2e4193db5e\",
                          \"created_at\": \"2011-04-14T16:00:49Z\"
                        }
                      ]"
		}
	}
}
```

<a name="getIssuesForOrganization"/>
## Github.getIssuesForOrganization
List all issues for a given organization for the authenticated user

| Field           | Type       | Description
|-----------------|------------|----------
| accessToken     | credentials| The access_token obtained from Github. (optional)
| organizationName| String     | The name of the organization. (required)
| filter          | String     | Indicates which sorts of issues to return. Can be one of: * assigned: Issues assigned to you, * created: Issues created by you, * mentioned: Issues mentioning you, * subscribed: Issues you're subscribed to updates for, * all: All issues the authenticated user can see, regardless of participation or creation, Default: assigned (optional)
| state           | String     | Indicates the state of the issues to return. Can be either open, closed, or all. Default: open (optional)
| labels          | String     | String list of comma separated Label names. Example: bug,ui,@high (optional)
| sort            | String     | What to sort results by. Can be either created, updated, comments. Default: created (optional)
| direction       | String     | The direction of the sort. Can be either asc or desc. Default: desc (optional)
| since           | String     | Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ (optional)
| page            | Number     | Page number of the results to fetch. (optional)
| perPage         | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"organizationName": "...",
	"filter": "...",
	"state": "...",
	"labels": "...",
	"sort": "...",
	"direction": "...",
	"since": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"[
                    {
                      \"id\": 1,
                      \"url\": \"https://api.github.com/repos/octocat/Hello-World/issues/1347\",
                      \"repository_url\": \"https://api.github.com/repos/octocat/Hello-World\",
                      \"labels_url\": \"https://api.github.com/repos/octocat/Hello-World/issues/1347/labels{/name}\",
                      \"comments_url\": \"https://api.github.com/repos/octocat/Hello-World/issues/1347/comments\",
                      \"events_url\": \"https://api.github.com/repos/octocat/Hello-World/issues/1347/events\",
                      \"html_url\": \"https://github.com/octocat/Hello-World/issues/1347\",
                      \"number\": 1347,
                      \"state\": \"open\",
                      \"title\": \"Found a bug\",
                      \"body\": \"I'm having a problem with this.\",
                      \"user\": {
                        \"login\": \"octocat\",
                        \"id\": 1,
                        \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                        \"gravatar_id\": \"\",
                        \"url\": \"https://api.github.com/users/octocat\",
                        \"html_url\": \"https://github.com/octocat\",
                        \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                        \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                        \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                        \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                        \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                        \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                        \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                        \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                        \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                        \"type\": \"User\",
                        \"site_admin\": false
                      },
                      \"labels\": [
                        {
                          \"url\": \"https://api.github.com/repos/octocat/Hello-World/labels/bug\",
                          \"name\": \"bug\",
                          \"color\": \"f29513\"
                        }
                      ],
                      \"assignee\": {
                        \"login\": \"octocat\",
                        \"id\": 1,
                        \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                        \"gravatar_id\": \"\",
                        \"url\": \"https://api.github.com/users/octocat\",
                        \"html_url\": \"https://github.com/octocat\",
                        \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                        \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                        \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                        \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                        \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                        \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                        \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                        \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                        \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                        \"type\": \"User\",
                        \"site_admin\": false
                      },
                      \"milestone\": {
                        \"url\": \"https://api.github.com/repos/octocat/Hello-World/milestones/1\",
                        \"html_url\": \"https://github.com/octocat/Hello-World/milestones/v1.0\",
                        \"labels_url\": \"https://api.github.com/repos/octocat/Hello-World/milestones/1/labels\",
                        \"id\": 1002604,
                        \"number\": 1,
                        \"state\": \"open\",
                        \"title\": \"v1.0\",
                        \"description\": \"Tracking milestone for version 1.0\",
                        \"creator\": {
                          \"login\": \"octocat\",
                          \"id\": 1,
                          \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                          \"gravatar_id\": \"\",
                          \"url\": \"https://api.github.com/users/octocat\",
                          \"html_url\": \"https://github.com/octocat\",
                          \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                          \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                          \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                          \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                          \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                          \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                          \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                          \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                          \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                          \"type\": \"User\",
                          \"site_admin\": false
                        },
                        \"open_issues\": 4,
                        \"closed_issues\": 8,
                        \"created_at\": \"2011-04-10T20:09:31Z\",
                        \"updated_at\": \"2014-03-03T18:58:10Z\",
                        \"closed_at\": \"2013-02-12T13:22:01Z\",
                        \"due_on\": \"2012-10-09T23:39:01Z\"
                      },
                      \"locked\": false,
                      \"comments\": 0,
                      \"pull_request\": {
                        \"url\": \"https://api.github.com/repos/octocat/Hello-World/pulls/1347\",
                        \"html_url\": \"https://github.com/octocat/Hello-World/pull/1347\",
                        \"diff_url\": \"https://github.com/octocat/Hello-World/pull/1347.diff\",
                        \"patch_url\": \"https://github.com/octocat/Hello-World/pull/1347.patch\"
                      },
                      \"closed_at\": null,
                      \"created_at\": \"2011-04-22T13:33:48Z\",
                      \"updated_at\": \"2011-04-22T13:33:48Z\"
                    }
                  ]"
		}
	}
}
```

<a name="getIssuesForRepository"/>
## Github.getIssuesForRepository
List issues for a repository

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
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

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"milestone": "...",
	"state": "...",
	"assignee": "...",
	"creator": "...",
	"mentioned": "...",
	"labels": "...",
	"sort": "...",
	"direction": "...",
	"since": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"[
                    {
                      \"id\": 1,
                      \"url\": \"https://api.github.com/repos/octocat/Hello-World/issues/1347\",
                      \"repository_url\": \"https://api.github.com/repos/octocat/Hello-World\",
                      \"labels_url\": \"https://api.github.com/repos/octocat/Hello-World/issues/1347/labels{/name}\",
                      \"comments_url\": \"https://api.github.com/repos/octocat/Hello-World/issues/1347/comments\",
                      \"events_url\": \"https://api.github.com/repos/octocat/Hello-World/issues/1347/events\",
                      \"html_url\": \"https://github.com/octocat/Hello-World/issues/1347\",
                      \"number\": 1347,
                      \"state\": \"open\",
                      \"title\": \"Found a bug\",
                      \"body\": \"I'm having a problem with this.\",
                      \"user\": {
                        \"login\": \"octocat\",
                        \"id\": 1,
                        \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                        \"gravatar_id\": \"\",
                        \"url\": \"https://api.github.com/users/octocat\",
                        \"html_url\": \"https://github.com/octocat\",
                        \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                        \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                        \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                        \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                        \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                        \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                        \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                        \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                        \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                        \"type\": \"User\",
                        \"site_admin\": false
                      },
                      \"labels\": [
                        {
                          \"url\": \"https://api.github.com/repos/octocat/Hello-World/labels/bug\",
                          \"name\": \"bug\",
                          \"color\": \"f29513\"
                        }
                      ],
                      \"assignee\": {
                        \"login\": \"octocat\",
                        \"id\": 1,
                        \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                        \"gravatar_id\": \"\",
                        \"url\": \"https://api.github.com/users/octocat\",
                        \"html_url\": \"https://github.com/octocat\",
                        \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                        \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                        \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                        \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                        \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                        \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                        \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                        \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                        \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                        \"type\": \"User\",
                        \"site_admin\": false
                      },
                      \"milestone\": {
                        \"url\": \"https://api.github.com/repos/octocat/Hello-World/milestones/1\",
                        \"html_url\": \"https://github.com/octocat/Hello-World/milestones/v1.0\",
                        \"labels_url\": \"https://api.github.com/repos/octocat/Hello-World/milestones/1/labels\",
                        \"id\": 1002604,
                        \"number\": 1,
                        \"state\": \"open\",
                        \"title\": \"v1.0\",
                        \"description\": \"Tracking milestone for version 1.0\",
                        \"creator\": {
                          \"login\": \"octocat\",
                          \"id\": 1,
                          \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                          \"gravatar_id\": \"\",
                          \"url\": \"https://api.github.com/users/octocat\",
                          \"html_url\": \"https://github.com/octocat\",
                          \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                          \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                          \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                          \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                          \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                          \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                          \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                          \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                          \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                          \"type\": \"User\",
                          \"site_admin\": false
                        },
                        \"open_issues\": 4,
                        \"closed_issues\": 8,
                        \"created_at\": \"2011-04-10T20:09:31Z\",
                        \"updated_at\": \"2014-03-03T18:58:10Z\",
                        \"closed_at\": \"2013-02-12T13:22:01Z\",
                        \"due_on\": \"2012-10-09T23:39:01Z\"
                      },
                      \"locked\": false,
                      \"comments\": 0,
                      \"pull_request\": {
                        \"url\": \"https://api.github.com/repos/octocat/Hello-World/pulls/1347\",
                        \"html_url\": \"https://github.com/octocat/Hello-World/pull/1347\",
                        \"diff_url\": \"https://github.com/octocat/Hello-World/pull/1347.diff\",
                        \"patch_url\": \"https://github.com/octocat/Hello-World/pull/1347.patch\"
                      },
                      \"closed_at\": null,
                      \"created_at\": \"2011-04-22T13:33:48Z\",
                      \"updated_at\": \"2011-04-22T13:33:48Z\"
                    }
                  ]"
		}
	}
}
```

<a name="getUserIssues"/>
## Github.getUserIssues
List all issues across owned and member repositories for the authenticated user

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| filter     | String     | Indicates which sorts of issues to return. Can be one of: * assigned: Issues assigned to you, * created: Issues created by you, * mentioned: Issues mentioning you, * subscribed: Issues you're subscribed to updates for, * all: All issues the authenticated user can see, regardless of participation or creation, Default: assigned (optional)
| state      | String     | Indicates the state of the issues to return. Can be either open, closed, or all. Default: open (optional)
| labels     | String     | String list of comma separated Label names. Example: bug,ui,@high (optional)
| sort       | String     | What to sort results by. Can be either created, updated, comments. Default: created (optional)
| direction  | String     | The direction of the sort. Can be either asc or desc. Default: desc (optional)
| since      | String     | Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ (optional)
| page       | Number     | Page number of the results to fetch. (optional)
| perPage    | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"filter": "...",
	"state": "...",
	"labels": "...",
	"sort": "...",
	"direction": "...",
	"since": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"[
                        {
                          \"id\": 1,
                          \"url\": \"https://api.github.com/repos/octocat/Hello-World/issues/1347\",
                          \"repository_url\": \"https://api.github.com/repos/octocat/Hello-World\",
                          \"labels_url\": \"https://api.github.com/repos/octocat/Hello-World/issues/1347/labels{/name}\",
                          \"comments_url\": \"https://api.github.com/repos/octocat/Hello-World/issues/1347/comments\",
                          \"events_url\": \"https://api.github.com/repos/octocat/Hello-World/issues/1347/events\",
                          \"html_url\": \"https://github.com/octocat/Hello-World/issues/1347\",
                          \"number\": 1347,
                          \"state\": \"open\",
                          \"title\": \"Found a bug\",
                          \"body\": \"I'm having a problem with this.\",
                          \"user\": {
                            \"login\": \"octocat\",
                            \"id\": 1,
                            \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                            \"gravatar_id\": \"\",
                            \"url\": \"https://api.github.com/users/octocat\",
                            \"html_url\": \"https://github.com/octocat\",
                            \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                            \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                            \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                            \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                            \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                            \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                            \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                            \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                            \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                            \"type\": \"User\",
                            \"site_admin\": false
                          },
                          \"labels\": [
                            {
                              \"url\": \"https://api.github.com/repos/octocat/Hello-World/labels/bug\",
                              \"name\": \"bug\",
                              \"color\": \"f29513\"
                            }
                          ],
                          \"assignee\": {
                            \"login\": \"octocat\",
                            \"id\": 1,
                            \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                            \"gravatar_id\": \"\",
                            \"url\": \"https://api.github.com/users/octocat\",
                            \"html_url\": \"https://github.com/octocat\",
                            \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                            \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                            \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                            \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                            \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                            \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                            \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                            \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                            \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                            \"type\": \"User\",
                            \"site_admin\": false
                          },
                          \"milestone\": {
                            \"url\": \"https://api.github.com/repos/octocat/Hello-World/milestones/1\",
                            \"html_url\": \"https://github.com/octocat/Hello-World/milestones/v1.0\",
                            \"labels_url\": \"https://api.github.com/repos/octocat/Hello-World/milestones/1/labels\",
                            \"id\": 1002604,
                            \"number\": 1,
                            \"state\": \"open\",
                            \"title\": \"v1.0\",
                            \"description\": \"Tracking milestone for version 1.0\",
                            \"creator\": {
                              \"login\": \"octocat\",
                              \"id\": 1,
                              \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                              \"gravatar_id\": \"\",
                              \"url\": \"https://api.github.com/users/octocat\",
                              \"html_url\": \"https://github.com/octocat\",
                              \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                              \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                              \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                              \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                              \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                              \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                              \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                              \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                              \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                              \"type\": \"User\",
                              \"site_admin\": false
                            },
                            \"open_issues\": 4,
                            \"closed_issues\": 8,
                            \"created_at\": \"2011-04-10T20:09:31Z\",
                            \"updated_at\": \"2014-03-03T18:58:10Z\",
                            \"closed_at\": \"2013-02-12T13:22:01Z\",
                            \"due_on\": \"2012-10-09T23:39:01Z\"
                          },
                          \"locked\": false,
                          \"comments\": 0,
                          \"pull_request\": {
                            \"url\": \"https://api.github.com/repos/octocat/Hello-World/pulls/1347\",
                            \"html_url\": \"https://github.com/octocat/Hello-World/pull/1347\",
                            \"diff_url\": \"https://github.com/octocat/Hello-World/pull/1347.diff\",
                            \"patch_url\": \"https://github.com/octocat/Hello-World/pull/1347.patch\"
                          },
                          \"closed_at\": null,
                          \"created_at\": \"2011-04-22T13:33:48Z\",
                          \"updated_at\": \"2011-04-22T13:33:48Z\"
                        }
                      ]"
		}
	}
}
```

<a name="getIssueLabels"/>
## Github.getIssueLabels
List labels on an issue

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name. (required)
| repositoryName| String     | The name of the repository. (required)
| number        | Number     | The number of the issue. (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"number": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"[
                        {
                          \"url\": \"https://api.github.com/repos/octocat/Hello-World/labels/bug\",
                          \"name\": \"bug\",
                          \"color\": \"f29513\"
                        }
                      ]"
		}
	}
}
```

<a name="getLabel"/>
## Github.getLabel
Get a single label

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name. (required)
| repositoryName| String     | The name of the repository. (required)
| name          | String     | The name of the label. (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"name": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"{
                        \"url\": \"https://api.github.com/repos/octocat/Hello-World/labels/bug\",
                        \"name\": \"bug\",
                        \"color\": \"f29513\"
                      }"
		}
	}
}
```

<a name="getRepositoryLabels"/>
## Github.getRepositoryLabels
List all labels for this repository

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name. (required)
| repositoryName| String     | The name of the repository. (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"[
                        {
                          \"url\": \"https://api.github.com/repos/octocat/Hello-World/labels/bug\",
                          \"name\": \"bug\",
                          \"color\": \"f29513\"
                        }
                      ]"
		}
	}
}
```

<a name="getMilestone"/>
## Github.getMilestone
Get a single milestone

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name. (required)
| repositoryName| String     | The name of the repository. (required)
| number        | Number     | The number of the milestone. (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"number": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"{
                    \"url\": \"https://api.github.com/repos/octocat/Hello-World/milestones/1\",
                    \"html_url\": \"https://github.com/octocat/Hello-World/milestones/v1.0\",
                    \"labels_url\": \"https://api.github.com/repos/octocat/Hello-World/milestones/1/labels\",
                    \"id\": 1002604,
                    \"number\": 1,
                    \"state\": \"open\",
                    \"title\": \"v1.0\",
                    \"description\": \"Tracking milestone for version 1.0\",
                    \"creator\": {
                      \"login\": \"octocat\",
                      \"id\": 1,
                      \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                      \"gravatar_id\": \"\",
                      \"url\": \"https://api.github.com/users/octocat\",
                      \"html_url\": \"https://github.com/octocat\",
                      \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                      \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                      \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                      \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                      \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                      \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                      \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                      \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                      \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                      \"type\": \"User\",
                      \"site_admin\": false
                    },
                    \"open_issues\": 4,
                    \"closed_issues\": 8,
                    \"created_at\": \"2011-04-10T20:09:31Z\",
                    \"updated_at\": \"2014-03-03T18:58:10Z\",
                    \"closed_at\": \"2013-02-12T13:22:01Z\",
                    \"due_on\": \"2012-10-09T23:39:01Z\"
                  }"
		}
	}
}
```

<a name="getMilestoneLabels"/>
## Github.getMilestoneLabels
Get labels for every issue in a milestone

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name. (required)
| repositoryName| String     | The name of the repository. (required)
| number        | Number     | The number of the milestone. (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"number": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"[
                    {
                      \"url\": \"https://api.github.com/repos/octocat/Hello-World/labels/bug\",
                      \"name\": \"bug\",
                      \"color\": \"f29513\"
                    }
                  ]"
		}
	}
}
```

<a name="getRepositoryMilestones"/>
## Github.getRepositoryMilestones
List milestones for a repository

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| state         | String     | The state of the milestone. Either open, closed, or all. Default: open (optional)
| sort          | String     | What to sort results by. Either due_on or completeness. Default: due_on (optional)
| direction     | String     | The direction of the sort. Either asc or desc. Default: asc (optional)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"state": "...",
	"sort": "...",
	"direction": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"[
                        {
                          \"url\": \"https://api.github.com/repos/octocat/Hello-World/milestones/1\",
                          \"html_url\": \"https://github.com/octocat/Hello-World/milestones/v1.0\",
                          \"labels_url\": \"https://api.github.com/repos/octocat/Hello-World/milestones/1/labels\",
                          \"id\": 1002604,
                          \"number\": 1,
                          \"state\": \"open\",
                          \"title\": \"v1.0\",
                          \"description\": \"Tracking milestone for version 1.0\",
                          \"creator\": {
                            \"login\": \"octocat\",
                            \"id\": 1,
                            \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                            \"gravatar_id\": \"\",
                            \"url\": \"https://api.github.com/users/octocat\",
                            \"html_url\": \"https://github.com/octocat\",
                            \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                            \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                            \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                            \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                            \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                            \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                            \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                            \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                            \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                            \"type\": \"User\",
                            \"site_admin\": false
                          },
                          \"open_issues\": 4,
                          \"closed_issues\": 8,
                          \"created_at\": \"2011-04-10T20:09:31Z\",
                          \"updated_at\": \"2014-03-03T18:58:10Z\",
                          \"closed_at\": \"2013-02-12T13:22:01Z\",
                          \"due_on\": \"2012-10-09T23:39:01Z\"
                        }
                      ]"
		}
	}
}
```

<a name="lockIssue"/>
## Github.lockIssue
Users with push access can lock an issue's conversation.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | he owner name (required)
| repositoryName| String     | The name of the repository (required)
| number        | Number     | The number of the issue. (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"number": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"Status: 204 No Content"
		}
	}
}
```

<a name="removeIssueAllLabels"/>
## Github.removeIssueAllLabels
Remove all labels from an issue

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| number        | Number     | The number of the issue. (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"number": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"Status: 204 No Content"
		}
	}
}
```

<a name="removeAssigneesFromIssue"/>
## Github.removeAssigneesFromIssue
Remove assignees from an issue.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| number        | Number     | The number of the issue. (required)
| assignees     | JSON       | Logins for the users that should be removed from the issue. (required). Ex.: "assignees": ["hubot", "other_assignee"]

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"number": 0,
	"assignees": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"{
                        \"id\": 1,
                        \"url\": \"https://api.github.com/repos/octocat/Hello-World/issues/1347\",
                        \"repository_url\": \"https://api.github.com/repos/octocat/Hello-World\",
                        \"labels_url\": \"https://api.github.com/repos/octocat/Hello-World/issues/1347/labels{/name}\",
                        \"comments_url\": \"https://api.github.com/repos/octocat/Hello-World/issues/1347/comments\",
                        \"events_url\": \"https://api.github.com/repos/octocat/Hello-World/issues/1347/events\",
                        \"html_url\": \"https://github.com/octocat/Hello-World/issues/1347\",
                        \"number\": 1347,
                        \"state\": \"open\",
                        \"title\": \"Found a bug\",
                        \"body\": \"I'm having a problem with this.\",
                        \"user\": {
                          \"login\": \"octocat\",
                          \"id\": 1,
                          \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                          \"gravatar_id\": \"\",
                          \"url\": \"https://api.github.com/users/octocat\",
                          \"html_url\": \"https://github.com/octocat\",
                          \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                          \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                          \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                          \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                          \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                          \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                          \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                          \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                          \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                          \"type\": \"User\",
                          \"site_admin\": false
                        },
                        \"labels\": [
                          {
                            \"url\": \"https://api.github.com/repos/octocat/Hello-World/labels/bug\",
                            \"name\": \"bug\",
                            \"color\": \"f29513\"
                          }
                        ],
                        \"assignee\": {
                          \"login\": \"octocat\",
                          \"id\": 1,
                          \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                          \"gravatar_id\": \"\",
                          \"url\": \"https://api.github.com/users/octocat\",
                          \"html_url\": \"https://github.com/octocat\",
                          \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                          \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                          \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                          \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                          \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                          \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                          \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                          \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                          \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                          \"type\": \"User\",
                          \"site_admin\": false
                        },
                        \"milestone\": {
                          \"url\": \"https://api.github.com/repos/octocat/Hello-World/milestones/1\",
                          \"html_url\": \"https://github.com/octocat/Hello-World/milestones/v1.0\",
                          \"labels_url\": \"https://api.github.com/repos/octocat/Hello-World/milestones/1/labels\",
                          \"id\": 1002604,
                          \"number\": 1,
                          \"state\": \"open\",
                          \"title\": \"v1.0\",
                          \"description\": \"Tracking milestone for version 1.0\",
                          \"creator\": {
                            \"login\": \"octocat\",
                            \"id\": 1,
                            \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                            \"gravatar_id\": \"\",
                            \"url\": \"https://api.github.com/users/octocat\",
                            \"html_url\": \"https://github.com/octocat\",
                            \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                            \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                            \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                            \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                            \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                            \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                            \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                            \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                            \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                            \"type\": \"User\",
                            \"site_admin\": false
                          },
                          \"open_issues\": 4,
                          \"closed_issues\": 8,
                          \"created_at\": \"2011-04-10T20:09:31Z\",
                          \"updated_at\": \"2014-03-03T18:58:10Z\",
                          \"closed_at\": \"2013-02-12T13:22:01Z\",
                          \"due_on\": \"2012-10-09T23:39:01Z\"
                        },
                        \"locked\": false,
                        \"comments\": 0,
                        \"pull_request\": {
                          \"url\": \"https://api.github.com/repos/octocat/Hello-World/pulls/1347\",
                          \"html_url\": \"https://github.com/octocat/Hello-World/pull/1347\",
                          \"diff_url\": \"https://github.com/octocat/Hello-World/pull/1347.diff\",
                          \"patch_url\": \"https://github.com/octocat/Hello-World/pull/1347.patch\"
                        },
                        \"closed_at\": null,
                        \"created_at\": \"2011-04-22T13:33:48Z\",
                        \"updated_at\": \"2011-04-22T13:33:48Z\",
                        \"assignees\": [
                          {
                            \"login\": \"octocat\",
                            \"id\": 1,
                            \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                            \"gravatar_id\": \"\",
                            \"url\": \"https://api.github.com/users/octocat\",
                            \"html_url\": \"https://github.com/octocat\",
                            \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                            \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                            \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                            \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                            \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                            \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                            \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                            \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                            \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                            \"type\": \"User\",
                            \"site_admin\": false
                          },
                          {
                            \"login\": \"hubot\",
                            \"id\": 1,
                            \"avatar_url\": \"https://github.com/images/error/hubot_happy.gif\",
                            \"gravatar_id\": \"\",
                            \"url\": \"https://api.github.com/users/hubot\",
                            \"html_url\": \"https://github.com/hubot\",
                            \"followers_url\": \"https://api.github.com/users/hubot/followers\",
                            \"following_url\": \"https://api.github.com/users/hubot/following{/other_user}\",
                            \"gists_url\": \"https://api.github.com/users/hubot/gists{/gist_id}\",
                            \"starred_url\": \"https://api.github.com/users/hubot/starred{/owner}{/repo}\",
                            \"subscriptions_url\": \"https://api.github.com/users/hubot/subscriptions\",
                            \"organizations_url\": \"https://api.github.com/users/hubot/orgs\",
                            \"repos_url\": \"https://api.github.com/users/hubot/repos\",
                            \"events_url\": \"https://api.github.com/users/hubot/events{/privacy}\",
                            \"received_events_url\": \"https://api.github.com/users/hubot/received_events\",
                            \"type\": \"User\",
                            \"site_admin\": true
                          },
                          {
                            \"login\": \"other_user\",
                            \"id\": 1,
                            \"avatar_url\": \"https://github.com/images/error/other_user_happy.gif\",
                            \"gravatar_id\": \"\",
                            \"url\": \"https://api.github.com/users/other_user\",
                            \"html_url\": \"https://github.com/other_user\",
                            \"followers_url\": \"https://api.github.com/users/other_user/followers\",
                            \"following_url\": \"https://api.github.com/users/other_user/following{/other_user}\",
                            \"gists_url\": \"https://api.github.com/users/other_user/gists{/gist_id}\",
                            \"starred_url\": \"https://api.github.com/users/other_user/starred{/owner}{/repo}\",
                            \"subscriptions_url\": \"https://api.github.com/users/other_user/subscriptions\",
                            \"organizations_url\": \"https://api.github.com/users/other_user/orgs\",
                            \"repos_url\": \"https://api.github.com/users/other_user/repos\",
                            \"events_url\": \"https://api.github.com/users/other_user/events{/privacy}\",
                            \"received_events_url\": \"https://api.github.com/users/other_user/received_events\",
                            \"type\": \"User\",
                            \"site_admin\": false
                          }
                        ]
                      }"
		}
	}
}
```

<a name="removeIssueLabel"/>
## Github.removeIssueLabel
Remove a label from an issue

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| number        | Number     | The number of the issue. (required)
| name          | String     | The name of the label. (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"number": 0,
	"name": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"Status: 204 No Content"
		}
	}
}
```

<a name="replaceAllIssueLabels"/>
## Github.replaceAllIssueLabels
Replace all labels for an issue

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| number        | Number     | The number of the issue. (required)
| body          | JSON       | Array of the labels that should be replaced for the issue. Sending an empty array ([]) will remove all Labels from the Issue. (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"number": 0,
	"body": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"[
                        {
                          \"url\": \"https://api.github.com/repos/octocat/Hello-World/labels/bug\",
                          \"name\": \"bug\",
                          \"color\": \"f29513\"
                        }
                      ]"
		}
	}
}
```

<a name="unlockIssue"/>
## Github.unlockIssue
Users with push access can unlock an issue's conversation.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| number        | Number     | The number of the issue (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"number": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"Status: 204 No Content"
		}
	}
}
```

<a name="updateLabel"/>
## Github.updateLabel
Update a label

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| oldname       | String     | The old name of the label. (required)
| name          | String     | The new name of the label. (required)
| color         | String     | 6 character hex code, without a leading #. (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"oldname": "...",
	"name": "...",
	"color": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"{
                    \"url\": \"https://api.github.com/repos/octocat/Hello-World/labels/bug\",
                    \"name\": \"bug\",
                    \"color\": \"f29513\"
                  }"
		}
	}
}
```

<a name="updateMilestone"/>
## Github.updateMilestone
Update a milestone

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| number        | Number     | The number of the milestone (required)
| title         | String     | The title of the milestone. (required)
| state         | String     | The state of the milestone. Either open or closed. Default: open (optional)
| description   | String     | A description of the milestone. (optional)
| dueOn         | String     | The milestone due date. Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"number": 0,
	"title": "...",
	"state": "...",
	"description": "...",
	"dueOn": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"{
                    \"url\": \"https://api.github.com/repos/octocat/Hello-World/milestones/1\",
                    \"html_url\": \"https://github.com/octocat/Hello-World/milestones/v1.0\",
                    \"labels_url\": \"https://api.github.com/repos/octocat/Hello-World/milestones/1/labels\",
                    \"id\": 1002604,
                    \"number\": 1,
                    \"state\": \"open\",
                    \"title\": \"v1.0\",
                    \"description\": \"Tracking milestone for version 1.0\",
                    \"creator\": {
                      \"login\": \"octocat\",
                      \"id\": 1,
                      \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                      \"gravatar_id\": \"\",
                      \"url\": \"https://api.github.com/users/octocat\",
                      \"html_url\": \"https://github.com/octocat\",
                      \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                      \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                      \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                      \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                      \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                      \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                      \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                      \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                      \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                      \"type\": \"User\",
                      \"site_admin\": false
                    },
                    \"open_issues\": 4,
                    \"closed_issues\": 8,
                    \"created_at\": \"2011-04-10T20:09:31Z\",
                    \"updated_at\": \"2014-03-03T18:58:10Z\",
                    \"closed_at\": \"2013-02-12T13:22:01Z\",
                    \"due_on\": \"2012-10-09T23:39:01Z\"
                  }"
		}
	}
}
```

<a name="cancelImport"/>
## Github.cancelImport
Cancel an import. (In preview period. See README.)

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"[
                    {
                      \"ref_name\": \"refs/heads/master\",
                      \"path\": \"foo/bar/1\",
                      \"oid\": \"d3d9446802a44259755d38e6d163e820\",
                      \"size\": 10485760
                    },
                    {
                      \"ref_name\": \"refs/heads/master\",
                      \"path\": \"foo/bar/2\",
                      \"oid\": \"6512bd43d9caa6e02c990b0a82652dca\",
                      \"size\": 11534336
                    },
                    {
                      \"ref_name\": \"refs/heads/master\",
                      \"path\": \"foo/bar/3\",
                      \"oid\": \"c20ad4d76fe97759aa27a0c99bff6710\",
                      \"size\": 12582912
                    }
                  ]"
		}
	}
}
```

<a name="deleteMigrationArchive"/>
## Github.deleteMigrationArchive
Delete a migration archive

| Field           | Type       | Description
|-----------------|------------|----------
| accessToken     | credentials| The access_token obtained from Github. (optional)
| organizationName| String     | The name of the organization (required)
| id              | String     | The migration ID. (required)

#### Request example
```json
{	"accessToken": "...",
	"organizationName": "...",
	"id": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"Status: 204 No Content"
		}
	}
}
```

<a name="getImportCommitAuthors"/>
## Github.getImportCommitAuthors
Get import commit authors. (In preview period. See README.)

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| since         | String     | Only authors found after this id are returned. Provide the highest author ID you've seen so far. New authors may be added to the list at any point while the importer is performing the raw step. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"since": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"[
                    {
                      \"id\": 2268557,
                      \"remote_id\": \"nobody@fc7da526-431c-80fe-3c8c-c148ff18d7ef\",
                      \"remote_name\": \"nobody\",
                      \"email\": \"hubot@github.com\",
                      \"name\": \"Hubot\",
                      \"url\": \"https://api.github.com/repos/octocat/socm/import/authors/2268557\",
                      \"import_url\": \"https://api.github.com/repos/octocat/socm/import\"
                    },
                    {
                      \"id\": 2268558,
                      \"remote_id\": \"svner@fc7da526-431c-80fe-3c8c-c148ff18d7ef\",
                      \"remote_name\": \"svner\",
                      \"email\": \"svner@fc7da526-431c-80fe-3c8c-c148ff18d7ef\",
                      \"name\": \"svner\",
                      \"url\": \"https://api.github.com/repos/octocat/socm/import/authors/2268558\",
                      \"import_url\": \"https://api.github.com/repos/octocat/socm/import\"
                    },
                    {
                      \"id\": 2268559,
                      \"remote_id\": \"svner@example.com@fc7da526-431c-80fe-3c8c-c148ff18d7ef\",
                      \"remote_name\": \"svner@example.com\",
                      \"email\": \"svner@example.com@fc7da526-431c-80fe-3c8c-c148ff18d7ef\",
                      \"name\": \"svner@example.com\",
                      \"url\": \"https://api.github.com/repos/octocat/socm/import/authors/2268559\",
                      \"import_url\": \"https://api.github.com/repos/octocat/socm/import\"
                    }
                  ]"
		}
	}
}
```

<a name="getImportProgress"/>
## Github.getImportProgress
Get import progress. (In preview period. See README.)

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"{
                    \"vcs\": \"subversion\",
                    \"use_lfs\": \"opt_in\",
                    \"vcs_url\": \"http://svn.mycompany.com/svn/myproject\",
                    \"status\": \"complete\",
                    \"status_text\": \"Done\",
                    \"has_large_files\": true,
                    \"large_files_size\": 132331036,
                    \"large_files_count\": 1,
                    \"authors_count\": 4,
                    \"url\": \"https://api.github.com/repos/octocat/socm/import\",
                    \"html_url\": \"https://import.github.com/octocat/socm/import\",
                    \"authors_url\": \"https://api.github.com/repos/octocat/socm/import/authors\",
                    \"repository_url\": \"https://api.github.com/repos/octocat/socm\"
                  }"
		}
	}
}
```

<a name="getLargeImportFiles"/>
## Github.getLargeImportFiles
List files larger than 100MB found during the import. (In preview period. See README.)

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| user       | String     | The owner name (required)
| name       | String     | The name of the system to import from (required). Supported Subversion, Mercurial, and TFS.

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"name": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"[
                    {
                      \"ref_name\": \"refs/heads/master\",
                      \"path\": \"foo/bar/1\",
                      \"oid\": \"d3d9446802a44259755d38e6d163e820\",
                      \"size\": 10485760
                    },
                    {
                      \"ref_name\": \"refs/heads/master\",
                      \"path\": \"foo/bar/2\",
                      \"oid\": \"6512bd43d9caa6e02c990b0a82652dca\",
                      \"size\": 11534336
                    },
                    {
                      \"ref_name\": \"refs/heads/master\",
                      \"path\": \"foo/bar/3\",
                      \"oid\": \"c20ad4d76fe97759aa27a0c99bff6710\",
                      \"size\": 12582912
                    }
                  ]"
		}
	}
}
```

<a name="getMigrationArchiveLink"/>
## Github.getMigrationArchiveLink
Get the URL to a migration archive.

| Field           | Type       | Description
|-----------------|------------|----------
| accessToken     | credentials| The access_token obtained from Github. (optional)
| organizationName| String     | The name of the organization (required)
| id              | String     | The ID of the migration (required)

#### Request example
```json
{	"accessToken": "...",
	"organizationName": "...",
	"id": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"https://s3.amazonaws.com/github-cloud/migration/79/67?response-content-disposition=filename%3D0b989ba4-242f-11e5-81e1.tar.gz&response-content-type=application/x-gzip"
		}
	}
}
```

<a name="getMigrationStatus"/>
## Github.getMigrationStatus
Get the status of a migration

| Field           | Type       | Description
|-----------------|------------|----------
| accessToken     | credentials| The access_token obtained from Github. (optional)
| organizationName| String     | The name of the organization (required)
| id              | String     | The ID of the migration (required)

#### Request example
```json
{	"accessToken": "...",
	"organizationName": "...",
	"id": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"{
                    \"id\": 79,
                    \"guid\": \"0b989ba4-242f-11e5-81e1-c7b6966d2516\",
                    \"state\": \"exported\",
                    \"lock_repositories\": true,
                    \"exclude_attachments\": false,
                    \"url\": \"https://api.github.com/orgs/octo-org/migrations/79\",
                    \"created_at\": \"2015-07-06T15:33:38-07:00\",
                    \"updated_at\": \"2015-07-06T15:33:38-07:00\",
                    \"repositories\": [
                      {
                        \"id\": 1296269,
                        \"owner\": {
                          \"login\": \"octocat\",
                          \"id\": 1,
                          \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                          \"gravatar_id\": \"\",
                          \"url\": \"https://api.github.com/users/octocat\",
                          \"html_url\": \"https://github.com/octocat\",
                          \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                          \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                          \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                          \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                          \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                          \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                          \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                          \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                          \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                          \"type\": \"User\",
                          \"site_admin\": false
                        },
                        \"name\": \"Hello-World\",
                        \"full_name\": \"octocat/Hello-World\",
                        \"description\": \"This your first repo!\",
                        \"private\": false,
                        \"fork\": false,
                        \"url\": \"https://api.github.com/repos/octocat/Hello-World\",
                        \"html_url\": \"https://github.com/octocat/Hello-World\",
                        \"archive_url\": \"http://api.github.com/repos/octocat/Hello-World/{archive_format}{/ref}\",
                        \"assignees_url\": \"http://api.github.com/repos/octocat/Hello-World/assignees{/user}\",
                        \"blobs_url\": \"http://api.github.com/repos/octocat/Hello-World/git/blobs{/sha}\",
                        \"branches_url\": \"http://api.github.com/repos/octocat/Hello-World/branches{/branch}\",
                        \"clone_url\": \"https://github.com/octocat/Hello-World.git\",
                        \"collaborators_url\": \"http://api.github.com/repos/octocat/Hello-World/collaborators{/collaborator}\",
                        \"comments_url\": \"http://api.github.com/repos/octocat/Hello-World/comments{/number}\",
                        \"commits_url\": \"http://api.github.com/repos/octocat/Hello-World/commits{/sha}\",
                        \"compare_url\": \"http://api.github.com/repos/octocat/Hello-World/compare/{base}...{head}\",
                        \"contents_url\": \"http://api.github.com/repos/octocat/Hello-World/contents/{+path}\",
                        \"contributors_url\": \"http://api.github.com/repos/octocat/Hello-World/contributors\",
                        \"deployments_url\": \"http://api.github.com/repos/octocat/Hello-World/deployments\",
                        \"downloads_url\": \"http://api.github.com/repos/octocat/Hello-World/downloads\",
                        \"events_url\": \"http://api.github.com/repos/octocat/Hello-World/events\",
                        \"forks_url\": \"http://api.github.com/repos/octocat/Hello-World/forks\",
                        \"git_commits_url\": \"http://api.github.com/repos/octocat/Hello-World/git/commits{/sha}\",
                        \"git_refs_url\": \"http://api.github.com/repos/octocat/Hello-World/git/refs{/sha}\",
                        \"git_tags_url\": \"http://api.github.com/repos/octocat/Hello-World/git/tags{/sha}\",
                        \"git_url\": \"git:github.com/octocat/Hello-World.git\",
                        \"hooks_url\": \"http://api.github.com/repos/octocat/Hello-World/hooks\",
                        \"issue_comment_url\": \"http://api.github.com/repos/octocat/Hello-World/issues/comments{/number}\",
                        \"issue_events_url\": \"http://api.github.com/repos/octocat/Hello-World/issues/events{/number}\",
                        \"issues_url\": \"http://api.github.com/repos/octocat/Hello-World/issues{/number}\",
                        \"keys_url\": \"http://api.github.com/repos/octocat/Hello-World/keys{/key_id}\",
                        \"labels_url\": \"http://api.github.com/repos/octocat/Hello-World/labels{/name}\",
                        \"languages_url\": \"http://api.github.com/repos/octocat/Hello-World/languages\",
                        \"merges_url\": \"http://api.github.com/repos/octocat/Hello-World/merges\",
                        \"milestones_url\": \"http://api.github.com/repos/octocat/Hello-World/milestones{/number}\",
                        \"mirror_url\": \"git:git.example.com/octocat/Hello-World\",
                        \"notifications_url\": \"http://api.github.com/repos/octocat/Hello-World/notifications{?since, all, participating}\",
                        \"pulls_url\": \"http://api.github.com/repos/octocat/Hello-World/pulls{/number}\",
                        \"releases_url\": \"http://api.github.com/repos/octocat/Hello-World/releases{/id}\",
                        \"ssh_url\": \"git@github.com:octocat/Hello-World.git\",
                        \"stargazers_url\": \"http://api.github.com/repos/octocat/Hello-World/stargazers\",
                        \"statuses_url\": \"http://api.github.com/repos/octocat/Hello-World/statuses/{sha}\",
                        \"subscribers_url\": \"http://api.github.com/repos/octocat/Hello-World/subscribers\",
                        \"subscription_url\": \"http://api.github.com/repos/octocat/Hello-World/subscription\",
                        \"svn_url\": \"https://svn.github.com/octocat/Hello-World\",
                        \"tags_url\": \"http://api.github.com/repos/octocat/Hello-World/tags\",
                        \"teams_url\": \"http://api.github.com/repos/octocat/Hello-World/teams\",
                        \"trees_url\": \"http://api.github.com/repos/octocat/Hello-World/git/trees{/sha}\",
                        \"homepage\": \"https://github.com\",
                        \"language\": null,
                        \"forks_count\": 9,
                        \"stargazers_count\": 80,
                        \"watchers_count\": 80,
                        \"size\": 108,
                        \"default_branch\": \"master\",
                        \"open_issues_count\": 0,
                        \"has_issues\": true,
                        \"has_wiki\": true,
                        \"has_pages\": false,
                        \"has_downloads\": true,
                        \"pushed_at\": \"2011-01-26T19:06:43Z\",
                        \"created_at\": \"2011-01-26T19:01:12Z\",
                        \"updated_at\": \"2011-01-26T19:14:43Z\",
                        \"permissions\": {
                          \"admin\": false,
                          \"push\": false,
                          \"pull\": true
                        }
                      }
                    ]
                  }"
		}
	}
}
```

<a name="getMigrations"/>
## Github.getMigrations
Get a list of migrations

| Field           | Type       | Description
|-----------------|------------|----------
| accessToken     | credentials| The access_token obtained from Github. (optional)
| organizationName| String     | The name of the organization (required)
| page            | Number     | Page number of the results to fetch. (optional)
| perPage         | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"organizationName": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"[
                    {
                      \"id\": 79,
                      \"guid\": \"0b989ba4-242f-11e5-81e1-c7b6966d2516\",
                      \"state\": \"pending\",
                      \"lock_repositories\": true,
                      \"exclude_attachments\": false,
                      \"url\": \"https://api.github.com/orgs/octo-org/migrations/79\",
                      \"created_at\": \"2015-07-06T15:33:38-07:00\",
                      \"updated_at\": \"2015-07-06T15:33:38-07:00\",
                      \"repositories\": [
                        {
                          \"id\": 1296269,
                          \"owner\": {
                            \"login\": \"octocat\",
                            \"id\": 1,
                            \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                            \"gravatar_id\": \"\",
                            \"url\": \"https://api.github.com/users/octocat\",
                            \"html_url\": \"https://github.com/octocat\",
                            \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                            \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                            \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                            \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                            \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                            \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                            \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                            \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                            \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                            \"type\": \"User\",
                            \"site_admin\": false
                          },
                          \"name\": \"Hello-World\",
                          \"full_name\": \"octocat/Hello-World\",
                          \"description\": \"This your first repo!\",
                          \"private\": false,
                          \"fork\": false,
                          \"url\": \"https://api.github.com/repos/octocat/Hello-World\",
                          \"html_url\": \"https://github.com/octocat/Hello-World\",
                          \"archive_url\": \"http://api.github.com/repos/octocat/Hello-World/{archive_format}{/ref}\",
                          \"assignees_url\": \"http://api.github.com/repos/octocat/Hello-World/assignees{/user}\",
                          \"blobs_url\": \"http://api.github.com/repos/octocat/Hello-World/git/blobs{/sha}\",
                          \"branches_url\": \"http://api.github.com/repos/octocat/Hello-World/branches{/branch}\",
                          \"clone_url\": \"https://github.com/octocat/Hello-World.git\",
                          \"collaborators_url\": \"http://api.github.com/repos/octocat/Hello-World/collaborators{/collaborator}\",
                          \"comments_url\": \"http://api.github.com/repos/octocat/Hello-World/comments{/number}\",
                          \"commits_url\": \"http://api.github.com/repos/octocat/Hello-World/commits{/sha}\",
                          \"compare_url\": \"http://api.github.com/repos/octocat/Hello-World/compare/{base}...{head}\",
                          \"contents_url\": \"http://api.github.com/repos/octocat/Hello-World/contents/{+path}\",
                          \"contributors_url\": \"http://api.github.com/repos/octocat/Hello-World/contributors\",
                          \"deployments_url\": \"http://api.github.com/repos/octocat/Hello-World/deployments\",
                          \"downloads_url\": \"http://api.github.com/repos/octocat/Hello-World/downloads\",
                          \"events_url\": \"http://api.github.com/repos/octocat/Hello-World/events\",
                          \"forks_url\": \"http://api.github.com/repos/octocat/Hello-World/forks\",
                          \"git_commits_url\": \"http://api.github.com/repos/octocat/Hello-World/git/commits{/sha}\",
                          \"git_refs_url\": \"http://api.github.com/repos/octocat/Hello-World/git/refs{/sha}\",
                          \"git_tags_url\": \"http://api.github.com/repos/octocat/Hello-World/git/tags{/sha}\",
                          \"git_url\": \"git:github.com/octocat/Hello-World.git\",
                          \"hooks_url\": \"http://api.github.com/repos/octocat/Hello-World/hooks\",
                          \"issue_comment_url\": \"http://api.github.com/repos/octocat/Hello-World/issues/comments{/number}\",
                          \"issue_events_url\": \"http://api.github.com/repos/octocat/Hello-World/issues/events{/number}\",
                          \"issues_url\": \"http://api.github.com/repos/octocat/Hello-World/issues{/number}\",
                          \"keys_url\": \"http://api.github.com/repos/octocat/Hello-World/keys{/key_id}\",
                          \"labels_url\": \"http://api.github.com/repos/octocat/Hello-World/labels{/name}\",
                          \"languages_url\": \"http://api.github.com/repos/octocat/Hello-World/languages\",
                          \"merges_url\": \"http://api.github.com/repos/octocat/Hello-World/merges\",
                          \"milestones_url\": \"http://api.github.com/repos/octocat/Hello-World/milestones{/number}\",
                          \"mirror_url\": \"git:git.example.com/octocat/Hello-World\",
                          \"notifications_url\": \"http://api.github.com/repos/octocat/Hello-World/notifications{?since, all, participating}\",
                          \"pulls_url\": \"http://api.github.com/repos/octocat/Hello-World/pulls{/number}\",
                          \"releases_url\": \"http://api.github.com/repos/octocat/Hello-World/releases{/id}\",
                          \"ssh_url\": \"git@github.com:octocat/Hello-World.git\",
                          \"stargazers_url\": \"http://api.github.com/repos/octocat/Hello-World/stargazers\",
                          \"statuses_url\": \"http://api.github.com/repos/octocat/Hello-World/statuses/{sha}\",
                          \"subscribers_url\": \"http://api.github.com/repos/octocat/Hello-World/subscribers\",
                          \"subscription_url\": \"http://api.github.com/repos/octocat/Hello-World/subscription\",
                          \"svn_url\": \"https://svn.github.com/octocat/Hello-World\",
                          \"tags_url\": \"http://api.github.com/repos/octocat/Hello-World/tags\",
                          \"teams_url\": \"http://api.github.com/repos/octocat/Hello-World/teams\",
                          \"trees_url\": \"http://api.github.com/repos/octocat/Hello-World/git/trees{/sha}\",
                          \"homepage\": \"https://github.com\",
                          \"language\": null,
                          \"forks_count\": 9,
                          \"stargazers_count\": 80,
                          \"watchers_count\": 80,
                          \"size\": 108,
                          \"default_branch\": \"master\",
                          \"open_issues_count\": 0,
                          \"has_issues\": true,
                          \"has_wiki\": true,
                          \"has_pages\": false,
                          \"has_downloads\": true,
                          \"pushed_at\": \"2011-01-26T19:06:43Z\",
                          \"created_at\": \"2011-01-26T19:01:12Z\",
                          \"updated_at\": \"2011-01-26T19:14:43Z\",
                          \"permissions\": {
                            \"admin\": false,
                            \"push\": false,
                            \"pull\": true
                          }
                        }
                      ]
                    }
                  ]"
		}
	}
}
```

<a name="mapImportCommitAuthor"/>
## Github.mapImportCommitAuthor
Map a commit author. (In preview period. See README.)

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| authorId      | String     | The commit author id. (required)
| email         | String     | The new Git author email. (optional)
| name          | String     | The new Git author name. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"authorId": "...",
	"email": "...",
	"name": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"{
                    \"id\": 2268557,
                    \"remote_id\": \"nobody@fc7da526-431c-80fe-3c8c-c148ff18d7ef\",
                    \"remote_name\": \"nobody\",
                    \"email\": \"hubot@github.com\",
                    \"name\": \"Hubot\",
                    \"url\": \"https://api.github.com/repos/octocat/socm/import/authors/2268557\",
                    \"import_url\": \"https://api.github.com/repos/octocat/socm/import\"
                  }"
		}
	}
}
```

<a name="setImportLfsPreference"/>
## Github.setImportLfsPreference
Set import LFS preference. (In preview period. See README.)

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| user       | String     | The owner name (required)
| systemName | String     | The name of the system to import from (required). Supported Subversion, Mercurial, and TFS.

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"systemName": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"{
                    \"vcs\": \"subversion\",
                    \"use_lfs\": \"opt_in\",
                    \"vcs_url\": \"http://svn.mycompany.com/svn/myproject\",
                    \"status\": \"complete\",
                    \"status_text\": \"Done\",
                    \"has_large_files\": true,
                    \"large_files_size\": 132331036,
                    \"large_files_count\": 1,
                    \"authors_count\": 4,
                    \"url\": \"https://api.github.com/repos/octocat/socm/import\",
                    \"html_url\": \"https://import.github.com/octocat/socm/import\",
                    \"authors_url\": \"https://api.github.com/repos/octocat/socm/import/authors\",
                    \"repository_url\": \"https://api.github.com/repos/octocat/socm\"
                  }"
		}
	}
}
```

<a name="startImport"/>
## Github.startImport
Start an import. (In preview period. See README.)

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| vcsUrl        | String     | The URL of the originating repository. (required)
| vcs           | String     | The originating VCS type. Can be one of subversion, git, mercurial, or tfvc. Please be aware that without this parameter, the import job will take additional time to detect the VCS type before beginning the import. This detection step will be reflected in the response. (optional)
| vcsUsername   | String     | If authentication is required, the username to provide to vcs_url. (optional)
| vcsPassword   | String     | If authentication is required, the password to provide to vcs_url. (optional)
| tfvcProject   | String     | For a tfvc import, the name of the project that is being imported. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"vcsUrl": "...",
	"vcs": "...",
	"vcsUsername": "...",
	"vcsPassword": "...",
	"tfvcProject": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"{
                    \"vcs\": \"subversion\",
                    \"use_lfs\": \"undecided\",
                    \"vcs_url\": \"http://svn.mycompany.com/svn/myproject\",
                    \"status\": \"importing\",
                    \"status_text\": \"Importing...\",
                    \"has_large_files\": false,
                    \"large_files_size\": 0,
                    \"large_files_count\": 0,
                    \"authors_count\": 0,
                    \"percent\": 42,
                    \"commit_count\": 1042,
                    \"url\": \"https://api.github.com/repos/octocat/socm/import\",
                    \"html_url\": \"https://import.github.com/octocat/socm/import\",
                    \"authors_url\": \"https://api.github.com/repos/octocat/socm/import/authors\",
                    \"repository_url\": \"https://api.github.com/repos/octocat/socm\"
                  }"
		}
	}
}
```

<a name="startMigration"/>
## Github.startMigration
Start a migration.

| Field             | Type       | Description
|-------------------|------------|----------
| accessToken       | credentials| The access_token obtained from Github. (optional)
| organizationName  | String     | The name of the organization (required)
| repositories      | JSON       | A list of arrays indicating which repositories should be migrated. (required)
| lockRepositories  | String     | Indicates whether repositories should be locked (to prevent manipulation) while migrating data. Default: false. (optional)
| excludeAttachments| String     | Indicates whether attachments should be excluded from the migration (to reduce migration archive file size). Default: false. (optional)

#### Request example
```json
{	"accessToken": "...",
	"organizationName": "...",
	"repositories": "...",
	"lockRepositories": "...",
	"excludeAttachments": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"{
                    \"vcs\": \"subversion\",
                    \"use_lfs\": \"undecided\",
                    \"vcs_url\": \"http://svn.mycompany.com/svn/myproject\",
                    \"status\": \"importing\",
                    \"status_text\": \"Importing...\",
                    \"has_large_files\": false,
                    \"large_files_size\": 0,
                    \"large_files_count\": 0,
                    \"authors_count\": 0,
                    \"percent\": 42,
                    \"commit_count\": 1042,
                    \"url\": \"https://api.github.com/repos/octocat/socm/import\",
                    \"html_url\": \"https://import.github.com/octocat/socm/import\",
                    \"authors_url\": \"https://api.github.com/repos/octocat/socm/import/authors\",
                    \"repository_url\": \"https://api.github.com/repos/octocat/socm\"
                  }"
		}
	}
}
```

<a name="unlockRepositoryLockedForMigration"/>
## Github.unlockRepositoryLockedForMigration
Unlock a repository that was locked for migration.

| Field           | Type       | Description
|-----------------|------------|----------
| accessToken     | credentials| The access_token obtained from Github. (optional)
| organizationName| String     | The name of the organization (required)
| id              | String     | The ID of the migration (required)
| repositoryName  | String     | The name of the repository (required)

#### Request example
```json
{	"accessToken": "...",
	"organizationName": "...",
	"id": "...",
	"repositoryName": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"Status: 204 No Content"
		}
	}
}
```

<a name="updateImport"/>
## Github.updateImport
Update existing import. (In preview period. See README.)

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| data          | String     | Json object with data to be updating (optional). If no data are provided, the import will be restarted. Ex.: {"vcs": "tfvc", "tfvc_project": "project1", "human_name": "project1 (tfs)"}

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"data": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"{
                    \"vcs\": \"subversion\",
                    \"use_lfs\": \"undecided\",
                    \"vcs_url\": \"http://svn.mycompany.com/svn/myproject\",
                    \"status\": \"detecting\",
                    \"url\": \"https://api.github.com/repos/octocat/socm/import\",
                    \"html_url\": \"https://import.github.com/octocat/socm/import\",
                    \"authors_url\": \"https://api.github.com/repos/octocat/socm/import/authors\",
                    \"repository_url\": \"https://api.github.com/repos/octocat/socm\"
                  }"
		}
	}
}
```

<a name="getEmojis"/>
## Github.getEmojis
Lists all the emojis available to use on GitHub.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)

#### Request example
```json
{	"accessToken": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"{
                    \"+1\": \"https://github.global.ssl.fastly.net/images/icons/emoji/+1.png?v5\",
                    \"-1\": \"https://github.global.ssl.fastly.net/images/icons/emoji/-1.png?v5\",
                    \"100\": \"https://github.global.ssl.fastly.net/images/icons/emoji/100.png?v5\",
                    \"1234\": \"https://github.global.ssl.fastly.net/images/icons/emoji/1234.png?v5\",
                    \"8ball\": \"https://github.global.ssl.fastly.net/images/icons/emoji/8ball.png?v5\",
                    \"a\": \"https://github.global.ssl.fastly.net/images/icons/emoji/a.png?v5\",
                    \"ab\": \"https://github.global.ssl.fastly.net/images/icons/emoji/ab.png?v5\"
                  }"
		}
	}
}
```

<a name="getGitignoreTemplate"/>
## Github.getGitignoreTemplate
Get a single gitignore template

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| name       | String     | The name of the .gitignore template to get e.g. 'C' (required)

#### Request example
```json
{	"accessToken": "...",
	"name": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"{
                    \"name\": \"C\",
                    \"source\": \"# Object files\n*.o\n\n# Libraries\n*.lib\n*.a\n\n# Shared objects (inc. Windows DLLs)\n*.dll\n*.so\n*.so.*\n*.dylib\n\n# Executables\n*.exe\n*.out\n*.app\n\"
                  }"
		}
	}
}
```

<a name="getGitignoreTemplates"/>
## Github.getGitignoreTemplates
Lists available gitignore templates

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)

#### Request example
```json
{	"accessToken": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"[
                    \"Actionscript\",
                    \"Android\",
                    \"AppceleratorTitanium\",
                    \"Autotools\",
                    \"Bancha\",
                    \"C\",
                    \"C++\"
                  ]"
		}
	}
}
```

<a name="getLicense"/>
## Github.getLicense
Get an individual license. (In preview period. See README.)

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| license    | String     | The name of the license. Ex: mit (required)

#### Request example
```json
{	"accessToken": "...",
	"license": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"{
                    \"key\": \"mit\",
                    \"name\": \"MIT License\",
                    \"url\": \"https://api.github.com/licenses/mit\",
                    \"html_url\": \"http://choosealicense.com/licenses/mit/\",
                    \"featured\": true,
                    \"description\": \"A permissive license that is short and to the point. It lets people do anything with your code with proper attribution and without warranty.\",
                    \"implementation\": \"Create a text file (typically named LICENSE or LICENSE.txt) in the root of your source code and copy the text of the license into the file. Replace [year] with the current year and [fullname] with the name (or names) of the copyright holders.\",
                    \"permissions\": [
                      \"commercial-use\",
                      \"modifications\",
                      \"distribution\",
                      \"sublicense\",
                      \"private-use\"
                    ],
                    \"conditions\": [
                      \"include-copyright\"
                    ],
                    \"limitations\": [
                      \"no-liability\"
                    ],
                    \"body\": \"\n\nThe MIT License (MIT)\n\nCopyright (c) [year] [fullname]\n\nPermission is hereby granted, free of charge, to any person obtaining a copy\nof this software and associated documentation files (the \\"Software\\"), to deal\nin the Software without restriction, including without limitation the rights\nto use, copy, modify, merge, publish, distribute, sublicense, and/or sell\ncopies of the Software, and to permit persons to whom the Software is\nfurnished to do so, subject to the following conditions:\n\nThe above copyright notice and this permission notice shall be included in all\ncopies or substantial portions of the Software.\n\nTHE SOFTWARE IS PROVIDED \\"AS IS\\", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR\nIMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,\nFITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE\nAUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER\nLIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,\nOUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE\nSOFTWARE.\n\"
                  }"
		}
	}
}
```

<a name="getLicenses"/>
## Github.getLicenses
List all licenses. (In preview period. See README.)

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)

#### Request example
```json
{	"accessToken": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"[
                    {
                      \"key\": \"mit\",
                      \"name\": \"MIT License\",
                      \"url\": \"https://api.github.com/licenses/mit\",
                      \"featured\": true
                    },
                    {
                      \"key\": \"mpl-2.0\",
                      \"name\": \"Mozilla Public License 2.0\",
                      \"url\": \"https://api.github.com/licenses/mpl-2.0\",
                      \"featured\": false
                    },
                    {
                      \"key\": \"gpl-3.0\",
                      \"name\": \"GNU General Public License v3.0\",
                      \"url\": \"https://api.github.com/licenses/gpl-3.0\",
                      \"featured\": true
                    },
                    {
                      \"key\": \"lgpl-3.0\",
                      \"name\": \"GNU Lesser General Public License v3.0\",
                      \"url\": \"https://api.github.com/licenses/lgpl-3.0\",
                      \"featured\": false
                    },
                    {
                      \"key\": \"unlicense\",
                      \"name\": \"The Unlicense\",
                      \"url\": \"https://api.github.com/licenses/unlicense\",
                      \"featured\": false
                    },
                    {
                      \"key\": \"bsd-2-clause\",
                      \"name\": \"BSD 2-clause \\"Simplified\\" License\",
                      \"url\": \"https://api.github.com/licenses/bsd-2-clause\",
                      \"featured\": false
                    },
                    {
                      \"key\": \"isc\",
                      \"name\": \"ISC License\",
                      \"url\": \"https://api.github.com/licenses/isc\",
                      \"featured\": false
                    },
                    {
                      \"key\": \"lgpl-2.1\",
                      \"name\": \"GNU Lesser General Public License v2.1\",
                      \"url\": \"https://api.github.com/licenses/lgpl-2.1\",
                      \"featured\": false
                    },
                    {
                      \"key\": \"gpl-2.0\",
                      \"name\": \"GNU General Public License v2.0\",
                      \"url\": \"https://api.github.com/licenses/gpl-2.0\",
                      \"featured\": false
                    },
                    {
                      \"key\": \"apache-2.0\",
                      \"name\": \"Apache License 2.0\",
                      \"url\": \"https://api.github.com/licenses/apache-2.0\",
                      \"featured\": true
                    },
                    {
                      \"key\": \"cc0-1.0\",
                      \"name\": \"Creative Commons Zero v1.0 Universal\",
                      \"url\": \"https://api.github.com/licenses/cc0-1.0\",
                      \"featured\": false
                    },
                    {
                      \"key\": \"artistic-2.0\",
                      \"name\": \"Artistic License 2.0\",
                      \"url\": \"https://api.github.com/licenses/artistic-2.0\",
                      \"featured\": false
                    },
                    {
                      \"key\": \"bsd-3-clause\",
                      \"name\": \"BSD 3-clause \\"New\\" or \\"Revised\\" License\",
                      \"url\": \"https://api.github.com/licenses/bsd-3-clause\",
                      \"featured\": false
                    },
                    {
                      \"key\": \"agpl-3.0\",
                      \"name\": \"GNU Affero General Public License v3.0\",
                      \"url\": \"https://api.github.com/licenses/agpl-3.0\",
                      \"featured\": false
                    },
                    {
                      \"key\": \"epl-1.0\",
                      \"name\": \"Eclipse Public License 1.0\",
                      \"url\": \"https://api.github.com/licenses/epl-1.0\",
                      \"featured\": false
                    }
                  ]"
		}
	}
}
```

<a name="getMeta"/>
## Github.getMeta
This endpoint provides information about GitHub.com, the service. Or, if you access this endpoint on your organization's GitHub Enterprise installation, this endpoint provides information about that installation.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)

#### Request example
```json
{	"accessToken": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"{
                    \"verifiable_password_authentication\": true,
                    \"github_services_sha\": \"3a0f86fb8db8eea7ccbb9a95f325ddbedfb25e15\",
                    \"hooks\": [
                      \"127.0.0.1/32\"
                    ],
                    \"git\": [
                      \"127.0.0.1/32\"
                    ],
                    \"pages\": [
                      \"192.30.252.153/32\",
                      \"192.30.252.154/32\"
                    ],
                    \"importer\": [
                      \"54.158.161.132\",
                      \"54.226.70.38\"
                    ]
                  }"
		}
	}
}
```

<a name="getRateLimit"/>
## Github.getRateLimit
Get your current rate limit status

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)

#### Request example
```json
{	"accessToken": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"{
                    \"resources\": {
                      \"core\": {
                        \"limit\": 5000,
                        \"remaining\": 4999,
                        \"reset\": 1372700873
                      },
                      \"search\": {
                        \"limit\": 30,
                        \"remaining\": 18,
                        \"reset\": 1372697452
                      }
                    },
                    \"rate\": {
                      \"limit\": 5000,
                      \"remaining\": 4999,
                      \"reset\": 1372700873
                    }
                  }"
		}
	}
}
```

<a name="getRepoLicenseMisc"/>
## Github.getRepoLicenseMisc
Get the contents of a repository's license. (In preview period. See README.)

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"{
                    \"id\": 23022377,
                    \"name\": \"licensee\",
                    \"full_name\": \"benbalter/licensee\",
                    \"owner\": {
                      \"login\": \"benbalter\",
                      \"id\": 282759,
                      \"avatar_url\": \"https://avatars.githubusercontent.com/u/282759?v=3\",
                      \"gravatar_id\": \"\",
                      \"url\": \"https://api.github.com/users/benbalter\",
                      \"html_url\": \"https://github.com/benbalter\",
                      \"followers_url\": \"https://api.github.com/users/benbalter/followers\",
                      \"following_url\": \"https://api.github.com/users/benbalter/following{/other_user}\",
                      \"gists_url\": \"https://api.github.com/users/benbalter/gists{/gist_id}\",
                      \"starred_url\": \"https://api.github.com/users/benbalter/starred{/owner}{/repo}\",
                      \"subscriptions_url\": \"https://api.github.com/users/benbalter/subscriptions\",
                      \"organizations_url\": \"https://api.github.com/users/benbalter/orgs\",
                      \"repos_url\": \"https://api.github.com/users/benbalter/repos\",
                      \"events_url\": \"https://api.github.com/users/benbalter/events{/privacy}\",
                      \"received_events_url\": \"https://api.github.com/users/benbalter/received_events\",
                      \"type\": \"User\",
                      \"site_admin\": true
                    },
                    \"private\": false,
                    \"html_url\": \"https://github.com/benbalter/licensee\",
                    \"description\": \"A Ruby Gem to detect under what license a project is distributed.\",
                    \"fork\": false,
                    \"url\": \"https://api.github.com/repos/benbalter/licensee\",
                    \"forks_url\": \"https://api.github.com/repos/benbalter/licensee/forks\",
                    \"keys_url\": \"https://api.github.com/repos/benbalter/licensee/keys{/key_id}\",
                    \"collaborators_url\": \"https://api.github.com/repos/benbalter/licensee/collaborators{/collaborator}\",
                    \"teams_url\": \"https://api.github.com/repos/benbalter/licensee/teams\",
                    \"hooks_url\": \"https://api.github.com/repos/benbalter/licensee/hooks\",
                    \"issue_events_url\": \"https://api.github.com/repos/benbalter/licensee/issues/events{/number}\",
                    \"events_url\": \"https://api.github.com/repos/benbalter/licensee/events\",
                    \"assignees_url\": \"https://api.github.com/repos/benbalter/licensee/assignees{/user}\",
                    \"branches_url\": \"https://api.github.com/repos/benbalter/licensee/branches{/branch}\",
                    \"tags_url\": \"https://api.github.com/repos/benbalter/licensee/tags\",
                    \"blobs_url\": \"https://api.github.com/repos/benbalter/licensee/git/blobs{/sha}\",
                    \"git_tags_url\": \"https://api.github.com/repos/benbalter/licensee/git/tags{/sha}\",
                    \"git_refs_url\": \"https://api.github.com/repos/benbalter/licensee/git/refs{/sha}\",
                    \"trees_url\": \"https://api.github.com/repos/benbalter/licensee/git/trees{/sha}\",
                    \"statuses_url\": \"https://api.github.com/repos/benbalter/licensee/statuses/{sha}\",
                    \"languages_url\": \"https://api.github.com/repos/benbalter/licensee/languages\",
                    \"stargazers_url\": \"https://api.github.com/repos/benbalter/licensee/stargazers\",
                    \"contributors_url\": \"https://api.github.com/repos/benbalter/licensee/contributors\",
                    \"subscribers_url\": \"https://api.github.com/repos/benbalter/licensee/subscribers\",
                    \"subscription_url\": \"https://api.github.com/repos/benbalter/licensee/subscription\",
                    \"commits_url\": \"https://api.github.com/repos/benbalter/licensee/commits{/sha}\",
                    \"git_commits_url\": \"https://api.github.com/repos/benbalter/licensee/git/commits{/sha}\",
                    \"comments_url\": \"https://api.github.com/repos/benbalter/licensee/comments{/number}\",
                    \"issue_comment_url\": \"https://api.github.com/repos/benbalter/licensee/issues/comments{/number}\",
                    \"contents_url\": \"https://api.github.com/repos/benbalter/licensee/contents/{+path}\",
                    \"compare_url\": \"https://api.github.com/repos/benbalter/licensee/compare/{base}...{head}\",
                    \"merges_url\": \"https://api.github.com/repos/benbalter/licensee/merges\",
                    \"archive_url\": \"https://api.github.com/repos/benbalter/licensee/{archive_format}{/ref}\",
                    \"downloads_url\": \"https://api.github.com/repos/benbalter/licensee/downloads\",
                    \"issues_url\": \"https://api.github.com/repos/benbalter/licensee/issues{/number}\",
                    \"pulls_url\": \"https://api.github.com/repos/benbalter/licensee/pulls{/number}\",
                    \"milestones_url\": \"https://api.github.com/repos/benbalter/licensee/milestones{/number}\",
                    \"notifications_url\": \"https://api.github.com/repos/benbalter/licensee/notifications{?since,all,participating}\",
                    \"labels_url\": \"https://api.github.com/repos/benbalter/licensee/labels{/name}\",
                    \"releases_url\": \"https://api.github.com/repos/benbalter/licensee/releases{/id}\",
                    \"created_at\": \"2014-08-16T16:39:56Z\",
                    \"updated_at\": \"2015-02-26T18:58:36Z\",
                    \"pushed_at\": \"2015-02-26T19:09:18Z\",
                    \"git_url\": \"git://github.com/benbalter/licensee.git\",
                    \"ssh_url\": \"git@github.com:benbalter/licensee.git\",
                    \"clone_url\": \"https://github.com/benbalter/licensee.git\",
                    \"svn_url\": \"https://github.com/benbalter/licensee\",
                    \"homepage\": \"\",
                    \"size\": 687,
                    \"stargazers_count\": 20,
                    \"watchers_count\": 20,
                    \"language\": \"Ruby\",
                    \"has_issues\": true,
                    \"has_downloads\": true,
                    \"has_wiki\": false,
                    \"has_pages\": false,
                    \"forks_count\": 6,
                    \"mirror_url\": null,
                    \"open_issues_count\": 2,
                    \"forks\": 6,
                    \"open_issues\": 2,
                    \"watchers\": 20,
                    \"default_branch\": \"master\",
                    \"master_branch\": \"master\",
                    \"license\": {
                      \"key\": \"mit\",
                      \"name\": \"MIT License\",
                      \"url\": \"https://api.github.com/licenses/mit\"
                    },
                    \"network_count\": 6,
                    \"subscribers_count\": 6
                  }"
		}
	}
}
```

<a name="renderMarkdown"/>
## Github.renderMarkdown
Render an arbitrary Markdown document

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| text       | String     | The Markdown text to render (required)
| mode       | String     | The rendering mode, `markdown` to render a document as plain Markdown, just like README files are rendered. `gfm` to render a document as user-content, e.g. like user comments or issues are rendered. In GFM mode, hard line breaks are always taken into account, and issue and user mentions are linked accordingly. (optional)
| context    | String     | The repository context. Only taken into account when rendering as `gfm` (optional)

#### Request example
```json
{	"accessToken": "...",
	"text": "...",
	"mode": "...",
	"context": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"<p>Hello world <a href=\"http://github.com/github/linguist/issues/1\" class=\"issue-link\" title=\"This is a simple issue\">github/linguist#1</a> <strong>cool</strong>, and <a href=\"http://github.com/github/gollum/issues/1\" class=\"issue-link\" title=\"This is another issue\">#1</a>!</p>"
		}
	}
}
```

<a name="renderMarkdownRaw"/>
## Github.renderMarkdownRaw
Render a Markdown document in raw mode

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| data       | String     | Raw data to send as the body of the request (required)

#### Request example
```json
{	"accessToken": "...",
	"data": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"<p>Hello world github/linguist#1 <strong>cool</strong>, and #1!</p>"
		}
	}
}
```

<a name="addOrganizationMembership"/>
## Github.addOrganizationMembership
Add or update organization membership

| Field           | Type       | Description
|-----------------|------------|----------
| accessToken     | credentials| The access_token obtained from Github. (optional)
| orginizationName| String     | The name of the organization (required)
| user            | String     | The user name (required)
| role            | String     | The role to give the user in the organization. (required). * admin - The user will become an owner of the organization, * member - The user will become a non-owner member of the organization. Default: member

#### Request example
```json
{	"accessToken": "...",
	"orginizationName": "...",
	"user": "...",
	"role": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"{
                    \"url\": \"https://api.github.com/orgs/invitocat/memberships/defunkt\",
                    \"state\": \"pending\",
                    \"role\": \"admin\",
                    \"organization_url\": \"https://api.github.com/orgs/invitocat\",
                    \"organization\": {
                      \"login\": \"invitocat\",
                      \"url\": \"https://api.github.com/orgs/invitocat\",
                      \"id\": 2,
                      \"repos_url\": \"https://api.github.com/users/invitocat/repos\",
                      \"events_url\": \"https://api.github.com/users/invitocat/events{/privacy}\",
                      \"members_url\": \"https://api.github.com/users/invitocat/members{/member}\",
                      \"public_members_url\": \"https://api.github/com/users/invitocat/public_members{/member}\",
                      \"avatar_url\": \"https://secure.gravatar.com/avatar/7ad39074b0584bc555d0417ae3e7d974?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png\"
                    },
                    \"user\": {
                      \"login\": \"defunkt\",
                      \"id\": 3,
                      \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                      \"gravatar_id\": \"\",
                      \"url\": \"https://api.github.com/users/defunkt\",
                      \"html_url\": \"https://github.com/defunkt\",
                      \"followers_url\": \"https://api.github.com/users/defunkt/followers\",
                      \"following_url\": \"https://api.github.com/users/defunkt/following{/other_user}\",
                      \"gists_url\": \"https://api.github.com/users/defunkt/gists{/gist_id}\",
                      \"starred_url\": \"https://api.github.com/users/defunkt/starred{/owner}{/repo}\",
                      \"subscriptions_url\": \"https://api.github.com/users/defunkt/subscriptions\",
                      \"organizations_url\": \"https://api.github.com/users/defunkt/orgs\",
                      \"repos_url\": \"https://api.github.com/users/defunkt/repos\",
                      \"events_url\": \"https://api.github.com/users/defunkt/events{/privacy}\",
                      \"received_events_url\": \"https://api.github.com/users/defunkt/received_events\",
                      \"type\": \"User\",
                      \"site_admin\": false
                    }
                  }"
		}
	}
}
```

<a name="addOrganizationTeamMembership"/>
## Github.addOrganizationTeamMembership
Add team membership

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| id         | String     | The team ID (required)
| user       | String     | The user name (required)
| role       | String     | The role that this user should have in the team. (optional). The role that this user should have in the team. Can be one of: * member - a normal member of the team, * maintainer - a team maintainer. Able to add/remove other team members, promote other team members to team maintainer, and edit the team's name and description. Default: member

#### Request example
```json
{	"accessToken": "...",
	"id": "...",
	"user": "...",
	"role": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"{
                        \"url\": \"https://api.github.com/teams/1/memberships/octocat\",
                        \"role\": \"member\",
                        \"state\": \"pending\"
                      }"
		}
	}
}
```

<a name="addOrganizationTeamRepository"/>
## Github.addOrganizationTeamRepository
Add team repository

| Field           | Type       | Description
|-----------------|------------|----------
| accessToken     | credentials| The access_token obtained from Github. (optional)
| id              | String     | The team ID (required)
| orginizationName| String     | The name of the organization (required)
| repositoryName  | String     | The name of the repository (required)
| permission      | String     | `pull` - team members can pull, but not push or administer this repository, `push` - team members can pull and push, but not administer this repository, `admin` - team members can pull, push and administer this repository. (optional)

#### Request example
```json
{	"accessToken": "...",
	"id": "...",
	"orginizationName": "...",
	"repositoryName": "...",
	"permission": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"Status: 204 No Content"
		}
	}
}
```

<a name="checkOrganizationMembership"/>
## Github.checkOrganizationMembership
Check membership

| Field           | Type       | Description
|-----------------|------------|----------
| accessToken     | credentials| The access_token obtained from Github. (optional)
| orginizationName| String     | The name of the organization (required)
| user            | String     | The user name (required)

#### Request example
```json
{	"accessToken": "...",
	"orginizationName": "...",
	"user": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"Status: 204 No Content"
		}
	}
}
```

<a name="checkOrganizationPublicMembership"/>
## Github.checkOrganizationPublicMembership
Check public membership

| Field           | Type       | Description
|-----------------|------------|----------
| accessToken     | credentials| The access_token obtained from Github. (optional)
| orginizationName| String     | The name of the organization (required)
| user            | String     | The user name (required)

#### Request example
```json
{	"accessToken": "...",
	"orginizationName": "...",
	"user": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"Status: 204 No Content"
		}
	}
}
```

<a name="checkOrganizationTeamRepository"/>
## Github.checkOrganizationTeamRepository
Check if a team manages a repository

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| id            | String     | The team ID (required)
| user          | String     | The user name (required)
| repositoryName| String     | The name of the repository (required)

#### Request example
```json
{	"accessToken": "...",
	"id": "...",
	"user": "...",
	"repositoryName": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"Status: 204 No Content"
		}
	}
}
```

<a name="cancelOrganizationMembership"/>
## Github.cancelOrganizationMembership
Conceal a user's membership

| Field           | Type       | Description
|-----------------|------------|----------
| accessToken     | credentials| The access_token obtained from Github. (optional)
| orginizationName| String     | The name of the organization (required)
| user            | String     | The user name (required)

#### Request example
```json
{	"accessToken": "...",
	"orginizationName": "...",
	"user": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"Status: 204 No Content"
		}
	}
}
```

<a name="createOrganizationHook"/>
## Github.createOrganizationHook
Create a hook

| Field           | Type       | Description
|-----------------|------------|----------
| accessToken     | credentials| The access_token obtained from Github. (optional)
| orginizationName| String     | The name of the organization (required)
| name            | String     | Must be passed as "web". (required)
| config          | JSON       | Key/value pairs to provide settings for this webhook (required). The config object can accept the following keys: *url (Required) - The URL to which the payloads will be delivered; *content_type (string) - The media type used to serialize the payloads. Supported values include json and form. The default is form; *secret (string) - If provided, payloads will be delivered with an X-Hub-Signature header. The value of this header is computed as the [HMAC hex digest of the body, using the secret as the key][hub-signature]; *insecure_ssl (string) - Determines whether the SSL certificate of the host for url will be verified when delivering payloads. Supported values include "0" (verification is performed) and "1" (verification is not performed). The default is "0". We strongly recommend not setting this to "1" as you are subject to man-in-the-middle and other attacks.
| events          | JSON       | Determines what events the hook is triggered for. Default: ["push"]. (optional)
| active          | String     | Determines whether the hook is actually triggered on pushes. (optional)

#### Request example
```json
{	"accessToken": "...",
	"orginizationName": "...",
	"name": "...",
	"config": "...",
	"events": "...",
	"active": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"{
                    \"id\": 1,
                    \"url\": \"https://api.github.com/orgs/octocat/hooks/1\",
                    \"ping_url\": \"https://api.github.com/orgs/octocat/hooks/1/pings\",
                    \"name\": \"web\",
                    \"events\": [
                      \"push\",
                      \"pull_request\"
                    ],
                    \"active\": true,
                    \"config\": {
                      \"url\": \"http://example.com\",
                      \"content_type\": \"json\"
                    },
                    \"updated_at\": \"2011-09-06T20:39:23Z\",
                    \"created_at\": \"2011-09-06T17:26:27Z\"
                  }"
		}
	}
}
```

<a name="createOrganizationTeam"/>
## Github.createOrganizationTeam
Create team

| Field           | Type       | Description
|-----------------|------------|----------
| accessToken     | credentials| The access_token obtained from Github. (optional)
| orginizationName| String     | The name of the organization (required)
| name            | String     | The name of the team. (required)
| description     | String     | The description of the team. (optional)
| repoNames       | JSON       | The full name (e.g., "organization-name/repository-name") of repositories to add the team to. (optional)
| privacy         | String     | The level of privacy this team should have. (optional). Can be one of: * secret - only visible to organization owners and members of this team. * closed - visible to all members of this organization. Default: secret

#### Request example
```json
{	"accessToken": "...",
	"orginizationName": "...",
	"name": "...",
	"description": "...",
	"repoNames": "...",
	"privacy": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"{
                    \"id\": 1,
                    \"url\": \"https://api.github.com/teams/1\",
                    \"name\": \"Justice League\",
                    \"slug\": \"justice-league\",
                    \"description\": \"A great team.\",
                    \"privacy\": \"closed\",
                    \"permission\": \"admin\",
                    \"members_url\": \"https://api.github.com/teams/1/members{/member}\",
                    \"repositories_url\": \"https://api.github.com/teams/1/repos\",
                    \"members_count\": 3,
                    \"repos_count\": 10,
                    \"organization\": {
                      \"login\": \"github\",
                      \"id\": 1,
                      \"url\": \"https://api.github.com/orgs/github\",
                      \"repos_url\": \"https://api.github.com/orgs/github/repos\",
                      \"events_url\": \"https://api.github.com/orgs/github/events\",
                      \"hooks_url\": \"https://api.github.com/orgs/github/hooks\",
                      \"issues_url\": \"https://api.github.com/orgs/github/issues\",
                      \"members_url\": \"https://api.github.com/orgs/github/members{/member}\",
                      \"public_members_url\": \"https://api.github.com/orgs/github/public_members{/member}\",
                      \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                      \"description\": \"A great organization\"
                    }
                  }"
		}
	}
}
```

<a name="deleteOrganizationHook"/>
## Github.deleteOrganizationHook
Delete a hook

| Field           | Type       | Description
|-----------------|------------|----------
| accessToken     | credentials| The access_token obtained from Github. (optional)
| orginizationName| String     | The name of the organization (required)
| id              | String     | The hook ID (required)

#### Request example
```json
{	"accessToken": "...",
	"orginizationName": "...",
	"id": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"{
                    \"id\": 1,
                    \"url\": \"https://api.github.com/orgs/octocat/hooks/1\",
                    \"ping_url\": \"https://api.github.com/orgs/octocat/hooks/1/pings\",
                    \"name\": \"web\",
                    \"events\": [
                      \"push\",
                      \"pull_request\"
                    ],
                    \"active\": true,
                    \"config\": {
                      \"url\": \"http://example.com\",
                      \"content_type\": \"json\"
                    },
                    \"updated_at\": \"2011-09-06T20:39:23Z\",
                    \"created_at\": \"2011-09-06T17:26:27Z\"
                  }"
		}
	}
}
```

<a name="deleteOrganizationTeam"/>
## Github.deleteOrganizationTeam
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| id         | String     | The team ID (required)

#### Request example
```json
{	"accessToken": "...",
	"id": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"Status: 204 No Content"
		}
	}
}
```

<a name="deleteOrganizationTeamRepository"/>
## Github.deleteOrganizationTeamRepository
Remove team repository

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| id            | String     | The team ID (required)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)

#### Request example
```json
{	"accessToken": "...",
	"id": "...",
	"user": "...",
	"repositoryName": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"Status: 204 No Content"
		}
	}
}
```

<a name="editOrganizationHook"/>
## Github.editOrganizationHook
Edit a hook

| Field           | Type       | Description
|-----------------|------------|----------
| accessToken     | credentials| The access_token obtained from Github. (optional)
| orginizationName| String     | The name of the organization (required)
| id              | String     | The hook ID (required)
| config          | JSON       | Key/value pairs to provide settings for this webhook (required). The config object can accept the following keys: *url (Required) - The URL to which the payloads will be delivered; *content_type (string) - The media type used to serialize the payloads. Supported values include json and form. The default is form; *secret (string) - If provided, payloads will be delivered with an X-Hub-Signature header. The value of this header is computed as the [HMAC hex digest of the body, using the secret as the key][hub-signature]; *insecure_ssl (string) - Determines whether the SSL certificate of the host for url will be verified when delivering payloads. Supported values include "0" (verification is performed) and "1" (verification is not performed). The default is "0". We strongly recommend not setting this to "1" as you are subject to man-in-the-middle and other attacks.
| events          | JSON       | Determines what events the hook is triggered for. Default: ["push"]. (optional)
| active          | String     | Determines whether the hook is actually triggered on pushes. (optional)

#### Request example
```json
{	"accessToken": "...",
	"orginizationName": "...",
	"id": "...",
	"config": "...",
	"events": "...",
	"active": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"{
                    \"id\": 1,
                    \"url\": \"https://api.github.com/orgs/octocat/hooks/1\",
                    \"ping_url\": \"https://api.github.com/orgs/octocat/hooks/1/pings\",
                    \"name\": \"web\",
                    \"events\": [
                      \"pull_request\"
                    ],
                    \"active\": true,
                    \"config\": {
                      \"url\": \"http://example.com\",
                      \"content_type\": \"json\"
                    },
                    \"updated_at\": \"2011-09-06T20:39:23Z\",
                    \"created_at\": \"2011-09-06T17:26:27Z\"
                  }"
		}
	}
}
```

<a name="editOrganizationTeam"/>
## Github.editOrganizationTeam
Edit team

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| id         | String     | The team ID (required)
| name       | String     | The name of the team. (required)
| description| String     | The description of the team. (optional)
| privacy    | String     | The level of privacy this team should have. (optional). Can be one of: * secret - only visible to organization owners and members of this team. * closed - visible to all members of this organization. Default: secret

#### Request example
```json
{	"accessToken": "...",
	"id": "...",
	"name": "...",
	"description": "...",
	"privacy": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"{
                    \"id\": 1,
                    \"url\": \"https://api.github.com/teams/1\",
                    \"name\": \"Justice League\",
                    \"slug\": \"justice-league\",
                    \"description\": \"A great team.\",
                    \"privacy\": \"closed\",
                    \"permission\": \"admin\",
                    \"members_url\": \"https://api.github.com/teams/1/members{/member}\",
                    \"repositories_url\": \"https://api.github.com/teams/1/repos\",
                    \"members_count\": 3,
                    \"repos_count\": 10,
                    \"organization\": {
                      \"login\": \"github\",
                      \"id\": 1,
                      \"url\": \"https://api.github.com/orgs/github\",
                      \"repos_url\": \"https://api.github.com/orgs/github/repos\",
                      \"events_url\": \"https://api.github.com/orgs/github/events\",
                      \"hooks_url\": \"https://api.github.com/orgs/github/hooks\",
                      \"issues_url\": \"https://api.github.com/orgs/github/issues\",
                      \"members_url\": \"https://api.github.com/orgs/github/members{/member}\",
                      \"public_members_url\": \"https://api.github.com/orgs/github/public_members{/member}\",
                      \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                      \"description\": \"A great organization\"
                    }
                  }"
		}
	}
}
```

<a name="getOrganization"/>
## Github.getOrganization
Get an organization

| Field           | Type       | Description
|-----------------|------------|----------
| accessToken     | credentials| The access_token obtained from Github. (optional)
| orginizationName| String     | The name of the organization (required)
| page            | Number     | Page number of the results to fetch. (optional)
| perPage         | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"orginizationName": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"{
                    \"login\": \"github\",
                    \"id\": 1,
                    \"url\": \"https://api.github.com/orgs/github\",
                    \"repos_url\": \"https://api.github.com/orgs/github/repos\",
                    \"events_url\": \"https://api.github.com/orgs/github/events\",
                    \"hooks_url\": \"https://api.github.com/orgs/github/hooks\",
                    \"issues_url\": \"https://api.github.com/orgs/github/issues\",
                    \"members_url\": \"https://api.github.com/orgs/github/members{/member}\",
                    \"public_members_url\": \"https://api.github.com/orgs/github/public_members{/member}\",
                    \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                    \"description\": \"A great organization\",
                    \"name\": \"github\",
                    \"company\": \"GitHub\",
                    \"blog\": \"https://github.com/blog\",
                    \"location\": \"San Francisco\",
                    \"email\": \"octocat@github.com\",
                    \"public_repos\": 2,
                    \"public_gists\": 1,
                    \"followers\": 20,
                    \"following\": 0,
                    \"html_url\": \"https://github.com/octocat\",
                    \"created_at\": \"2008-01-14T04:33:35Z\",
                    \"type\": \"Organization\"
                  }"
		}
	}
}
```

<a name="getAllOrganizations"/>
## Github.getAllOrganizations
List all organizations

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| since      | String     | The integer ID of the last Organization that you've seen. (optional)
| page       | Number     | Page number of the results to fetch. (optional)
| perPage    | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"since": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"[
                        {
                          \"login\": \"github\",
                          \"id\": 1,
                          \"url\": \"https://api.github.com/orgs/github\",
                          \"repos_url\": \"https://api.github.com/orgs/github/repos\",
                          \"events_url\": \"https://api.github.com/orgs/github/events\",
                          \"hooks_url\": \"https://api.github.com/orgs/github/hooks\",
                          \"issues_url\": \"https://api.github.com/orgs/github/issues\",
                          \"members_url\": \"https://api.github.com/orgs/github/members{/member}\",
                          \"public_members_url\": \"https://api.github.com/orgs/github/public_members{/member}\",
                          \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                          \"description\": \"A great organization\"
                        }
                      ]"
		}
	}
}
```

<a name="getUserOrganizations"/>
## Github.getUserOrganizations
List organizations for the authenticated user.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| user       | String     | The user name (required)
| page       | Number     | Page number of the results to fetch. (optional)
| perPage    | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"[
                        {
                          \"login\": \"github\",
                          \"id\": 1,
                          \"url\": \"https://api.github.com/orgs/github\",
                          \"repos_url\": \"https://api.github.com/orgs/github/repos\",
                          \"events_url\": \"https://api.github.com/orgs/github/events\",
                          \"hooks_url\": \"https://api.github.com/orgs/github/hooks\",
                          \"issues_url\": \"https://api.github.com/orgs/github/issues\",
                          \"members_url\": \"https://api.github.com/orgs/github/members{/member}\",
                          \"public_members_url\": \"https://api.github.com/orgs/github/public_members{/member}\",
                          \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                          \"description\": \"A great organization\"
                        }
                      ]"
		}
	}
}
```

<a name="getOrganizationHook"/>
## Github.getOrganizationHook
Get single hook

| Field           | Type       | Description
|-----------------|------------|----------
| accessToken     | credentials| The access_token obtained from Github. (optional)
| orginizationName| String     | The name of the organization (required)
| id              | String     | The hook ID (required)

#### Request example
```json
{	"accessToken": "...",
	"orginizationName": "...",
	"id": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"{
                        \"id\": 1,
                        \"url\": \"https://api.github.com/orgs/octocat/hooks/1\",
                        \"ping_url\": \"https://api.github.com/orgs/octocat/hooks/1/pings\",
                        \"name\": \"web\",
                        \"events\": [
                          \"push\",
                          \"pull_request\"
                        ],
                        \"active\": true,
                        \"config\": {
                          \"url\": \"http://example.com\",
                          \"content_type\": \"json\"
                        },
                        \"updated_at\": \"2011-09-06T20:39:23Z\",
                        \"created_at\": \"2011-09-06T17:26:27Z\"
                      }"
		}
	}
}
```

<a name="getOrganizationHooks"/>
## Github.getOrganizationHooks
List hooks

| Field           | Type       | Description
|-----------------|------------|----------
| accessToken     | credentials| The access_token obtained from Github. (optional)
| orginizationName| String     | The name of the organization (required)
| page            | Number     | Page number of the results to fetch. (optional)
| perPage         | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"orginizationName": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"[
                    {
                      \"id\": 1,
                      \"url\": \"https://api.github.com/orgs/octocat/hooks/1\",
                      \"ping_url\": \"https://api.github.com/orgs/octocat/hooks/1/pings\",
                      \"name\": \"web\",
                      \"events\": [
                        \"push\",
                        \"pull_request\"
                      ],
                      \"active\": true,
                      \"config\": {
                        \"url\": \"http://example.com\",
                        \"content_type\": \"json\"
                      },
                      \"updated_at\": \"2011-09-06T20:39:23Z\",
                      \"created_at\": \"2011-09-06T17:26:27Z\"
                    }
                  ]"
		}
	}
}
```

<a name="getOrganizationMembers"/>
## Github.getOrganizationMembers
Members list

| Field           | Type       | Description
|-----------------|------------|----------
| accessToken     | credentials| The access_token obtained from Github. (optional)
| orginizationName| String     | The name of the organization (required)
| filter          | String     | Filter members returned in the list. (optional). Can be one of: * 2fa_disabled: Members without two-factor authentication enabled. Available for organization owners. * all: All members the authenticated user can see.
| role            | String     | Filter members returned by their role. (optional). Can be one of: * all: All members of the organization, regardless of role. * admin: Organization owners. * member: Non-owner organization members. Default: all
| page            | Number     | Page number of the results to fetch. (optional)
| perPage         | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"orginizationName": "...",
	"filter": "...",
	"role": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"[
                        {
                          \"login\": \"octocat\",
                          \"id\": 1,
                          \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                          \"gravatar_id\": \"\",
                          \"url\": \"https://api.github.com/users/octocat\",
                          \"html_url\": \"https://github.com/octocat\",
                          \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                          \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                          \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                          \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                          \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                          \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                          \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                          \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                          \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                          \"type\": \"User\",
                          \"site_admin\": false
                        }
                      ]"
		}
	}
}
```

<a name="getOrganizationMembership"/>
## Github.getOrganizationMembership
Get organization membership

| Field           | Type       | Description
|-----------------|------------|----------
| accessToken     | credentials| The access_token obtained from Github. (optional)
| orginizationName| String     | The name of the organization (required)
| user            | String     | The user name (required)

#### Request example
```json
{	"accessToken": "...",
	"orginizationName": "...",
	"user": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"{
                    \"url\": \"https://api.github.com/orgs/octocat/memberships/defunkt\",
                    \"state\": \"active\",
                    \"role\": \"admin\",
                    \"organization_url\": \"https://api.github.com/orgs/octocat\",
                    \"organization\": {
                      \"login\": \"octocat\",
                      \"url\": \"https://api.github.com/orgs/octocat\",
                      \"id\": 1,
                      \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                      \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                      \"members_url\": \"https://api.github.com/users/octocat/members{/member}\",
                      \"public_members_url\": \"https://api.github/com/users/octocat/public_members{/member}\",
                      \"avatar_url\": \"https://secure.gravatar.com/avatar/7ad39074b0584bc555d0417ae3e7d974?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png\"
                    },
                    \"user\": {
                      \"login\": \"defunkt\",
                      \"id\": 3,
                      \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                      \"gravatar_id\": \"\",
                      \"url\": \"https://api.github.com/users/defunkt\",
                      \"html_url\": \"https://github.com/defunkt\",
                      \"followers_url\": \"https://api.github.com/users/defunkt/followers\",
                      \"following_url\": \"https://api.github.com/users/defunkt/following{/other_user}\",
                      \"gists_url\": \"https://api.github.com/users/defunkt/gists{/gist_id}\",
                      \"starred_url\": \"https://api.github.com/users/defunkt/starred{/owner}{/repo}\",
                      \"subscriptions_url\": \"https://api.github.com/users/defunkt/subscriptions\",
                      \"organizations_url\": \"https://api.github.com/users/defunkt/orgs\",
                      \"repos_url\": \"https://api.github.com/users/defunkt/repos\",
                      \"events_url\": \"https://api.github.com/users/defunkt/events{/privacy}\",
                      \"received_events_url\": \"https://api.github.com/users/defunkt/received_events\",
                      \"type\": \"User\",
                      \"site_admin\": false
                    }
                  }"
		}
	}
}
```

<a name="getOrganizationMemberships"/>
## Github.getOrganizationMemberships
List your organization memberships

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| state      | String     | Indicates the state of the memberships to return. Can be either active or pending. If not specified, both active and pending memberships are returned. (optional)

#### Request example
```json
{	"accessToken": "...",
	"state": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"[
                        {
                          \"url\": \"https://api.github.com/orgs/octocat/memberships/defunkt\",
                          \"state\": \"active\",
                          \"role\": \"admin\",
                          \"organization_url\": \"https://api.github.com/orgs/octocat\",
                          \"organization\": {
                            \"login\": \"octocat\",
                            \"url\": \"https://api.github.com/orgs/octocat\",
                            \"id\": 1,
                            \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                            \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                            \"members_url\": \"https://api.github.com/users/octocat/members{/member}\",
                            \"public_members_url\": \"https://api.github/com/users/octocat/public_members{/member}\",
                            \"avatar_url\": \"https://secure.gravatar.com/avatar/7ad39074b0584bc555d0417ae3e7d974?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png\"
                          },
                          \"user\": {
                            \"login\": \"defunkt\",
                            \"id\": 3,
                            \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                            \"gravatar_id\": \"\",
                            \"url\": \"https://api.github.com/users/defunkt\",
                            \"html_url\": \"https://github.com/defunkt\",
                            \"followers_url\": \"https://api.github.com/users/defunkt/followers\",
                            \"following_url\": \"https://api.github.com/users/defunkt/following{/other_user}\",
                            \"gists_url\": \"https://api.github.com/users/defunkt/gists{/gist_id}\",
                            \"starred_url\": \"https://api.github.com/users/defunkt/starred{/owner}{/repo}\",
                            \"subscriptions_url\": \"https://api.github.com/users/defunkt/subscriptions\",
                            \"organizations_url\": \"https://api.github.com/users/defunkt/orgs\",
                            \"repos_url\": \"https://api.github.com/users/defunkt/repos\",
                            \"events_url\": \"https://api.github.com/users/defunkt/events{/privacy}\",
                            \"received_events_url\": \"https://api.github.com/users/defunkt/received_events\",
                            \"type\": \"User\",
                            \"site_admin\": false
                          }
                        },
                        {
                          \"url\": \"https://api.github.com/orgs/invitocat/memberships/defunkt\",
                          \"state\": \"pending\",
                          \"role\": \"admin\",
                          \"organization_url\": \"https://api.github.com/orgs/invitocat\",
                          \"organization\": {
                            \"login\": \"invitocat\",
                            \"url\": \"https://api.github.com/orgs/invitocat\",
                            \"id\": 2,
                            \"repos_url\": \"https://api.github.com/users/invitocat/repos\",
                            \"events_url\": \"https://api.github.com/users/invitocat/events{/privacy}\",
                            \"members_url\": \"https://api.github.com/users/invitocat/members{/member}\",
                            \"public_members_url\": \"https://api.github/com/users/invitocat/public_members{/member}\",
                            \"avatar_url\": \"https://secure.gravatar.com/avatar/7ad39074b0584bc555d0417ae3e7d974?d=https://a248.e.akamai.net/assets.github.com%2Fimages%2Fgravatars%2Fgravatar-140.png\"
                          },
                          \"user\": {
                            \"login\": \"defunkt\",
                            \"id\": 3,
                            \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                            \"gravatar_id\": \"\",
                            \"url\": \"https://api.github.com/users/defunkt\",
                            \"html_url\": \"https://github.com/defunkt\",
                            \"followers_url\": \"https://api.github.com/users/defunkt/followers\",
                            \"following_url\": \"https://api.github.com/users/defunkt/following{/other_user}\",
                            \"gists_url\": \"https://api.github.com/users/defunkt/gists{/gist_id}\",
                            \"starred_url\": \"https://api.github.com/users/defunkt/starred{/owner}{/repo}\",
                            \"subscriptions_url\": \"https://api.github.com/users/defunkt/subscriptions\",
                            \"organizations_url\": \"https://api.github.com/users/defunkt/orgs\",
                            \"repos_url\": \"https://api.github.com/users/defunkt/repos\",
                            \"events_url\": \"https://api.github.com/users/defunkt/events{/privacy}\",
                            \"received_events_url\": \"https://api.github.com/users/defunkt/received_events\",
                            \"type\": \"User\",
                            \"site_admin\": false
                          }
                        }
                      ]"
		}
	}
}
```

<a name="getOrganizationPublicMembers"/>
## Github.getOrganizationPublicMembers
Public members list

| Field           | Type       | Description
|-----------------|------------|----------
| accessToken     | credentials| The access_token obtained from Github. (optional)
| orginizationName| String     | The name of the organization (required)

#### Request example
```json
{	"accessToken": "...",
	"orginizationName": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"[
                    {
                      \"login\": \"octocat\",
                      \"id\": 1,
                      \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                      \"gravatar_id\": \"\",
                      \"url\": \"https://api.github.com/users/octocat\",
                      \"html_url\": \"https://github.com/octocat\",
                      \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                      \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                      \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                      \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                      \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                      \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                      \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                      \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                      \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                      \"type\": \"User\",
                      \"site_admin\": false
                    }
                  ]"
		}
	}
}
```

<a name="getOrganizationTeam"/>
## Github.getOrganizationTeam
Get team

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| id         | String     | The team ID (required)

#### Request example
```json
{	"accessToken": "...",
	"id": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"{
                    \"id\": 1,
                    \"url\": \"https://api.github.com/teams/1\",
                    \"name\": \"Justice League\",
                    \"slug\": \"justice-league\",
                    \"description\": \"A great team.\",
                    \"privacy\": \"closed\",
                    \"permission\": \"admin\",
                    \"members_url\": \"https://api.github.com/teams/1/members{/member}\",
                    \"repositories_url\": \"https://api.github.com/teams/1/repos\",
                    \"members_count\": 3,
                    \"repos_count\": 10,
                    \"organization\": {
                      \"login\": \"github\",
                      \"id\": 1,
                      \"url\": \"https://api.github.com/orgs/github\",
                      \"repos_url\": \"https://api.github.com/orgs/github/repos\",
                      \"events_url\": \"https://api.github.com/orgs/github/events\",
                      \"hooks_url\": \"https://api.github.com/orgs/github/hooks\",
                      \"issues_url\": \"https://api.github.com/orgs/github/issues\",
                      \"members_url\": \"https://api.github.com/orgs/github/members{/member}\",
                      \"public_members_url\": \"https://api.github.com/orgs/github/public_members{/member}\",
                      \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                      \"description\": \"A great organization\"
                    }
                  }"
		}
	}
}
```

<a name="getOrganizationTeamMembers"/>
## Github.getOrganizationTeamMembers
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| id         | String     |  The team ID(required)
| role       | String     | Filters members returned by their role in the team. (optional). Can be one of: * member - normal members of the team. * maintainer - team maintainers. * all - all members of the team. Default: all
| page       | Number     | Page number of the results to fetch. (optional)
| perPage    | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"id": "...",
	"role": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"[
                    {
                      \"login\": \"octocat\",
                      \"id\": 1,
                      \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                      \"gravatar_id\": \"\",
                      \"url\": \"https://api.github.com/users/octocat\",
                      \"html_url\": \"https://github.com/octocat\",
                      \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                      \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                      \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                      \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                      \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                      \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                      \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                      \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                      \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                      \"type\": \"User\",
                      \"site_admin\": false
                    }
                  ]"
		}
	}
}
```

<a name="getOrganizationTeamMembership"/>
## Github.getOrganizationTeamMembership
Get team membership

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| id         | String     | The team ID (required)
| user       | String     | The user name (required)

#### Request example
```json
{	"accessToken": "...",
	"id": "...",
	"user": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"{
                    \"url\": \"https://api.github.com/teams/1/memberships/octocat\",
                    \"role\": \"member\",
                    \"state\": \"pending\"
                  }"
		}
	}
}
```

<a name="getOrganizationTeamRepositories"/>
## Github.getOrganizationTeamRepositories
Get team repos

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| id         | String     | The team ID (required)
| page       | Number     | Page number of the results to fetch. (optional)
| perPage    | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"id": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"[
                    {
                      \"id\": 1296269,
                      \"owner\": {
                        \"login\": \"octocat\",
                        \"id\": 1,
                        \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                        \"gravatar_id\": \"\",
                        \"url\": \"https://api.github.com/users/octocat\",
                        \"html_url\": \"https://github.com/octocat\",
                        \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                        \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                        \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                        \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                        \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                        \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                        \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                        \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                        \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                        \"type\": \"User\",
                        \"site_admin\": false
                      },
                      \"name\": \"Hello-World\",
                      \"full_name\": \"octocat/Hello-World\",
                      \"description\": \"This your first repo!\",
                      \"private\": false,
                      \"fork\": false,
                      \"url\": \"https://api.github.com/repos/octocat/Hello-World\",
                      \"html_url\": \"https://github.com/octocat/Hello-World\",
                      \"archive_url\": \"http://api.github.com/repos/octocat/Hello-World/{archive_format}{/ref}\",
                      \"assignees_url\": \"http://api.github.com/repos/octocat/Hello-World/assignees{/user}\",
                      \"blobs_url\": \"http://api.github.com/repos/octocat/Hello-World/git/blobs{/sha}\",
                      \"branches_url\": \"http://api.github.com/repos/octocat/Hello-World/branches{/branch}\",
                      \"clone_url\": \"https://github.com/octocat/Hello-World.git\",
                      \"collaborators_url\": \"http://api.github.com/repos/octocat/Hello-World/collaborators{/collaborator}\",
                      \"comments_url\": \"http://api.github.com/repos/octocat/Hello-World/comments{/number}\",
                      \"commits_url\": \"http://api.github.com/repos/octocat/Hello-World/commits{/sha}\",
                      \"compare_url\": \"http://api.github.com/repos/octocat/Hello-World/compare/{base}...{head}\",
                      \"contents_url\": \"http://api.github.com/repos/octocat/Hello-World/contents/{+path}\",
                      \"contributors_url\": \"http://api.github.com/repos/octocat/Hello-World/contributors\",
                      \"deployments_url\": \"http://api.github.com/repos/octocat/Hello-World/deployments\",
                      \"downloads_url\": \"http://api.github.com/repos/octocat/Hello-World/downloads\",
                      \"events_url\": \"http://api.github.com/repos/octocat/Hello-World/events\",
                      \"forks_url\": \"http://api.github.com/repos/octocat/Hello-World/forks\",
                      \"git_commits_url\": \"http://api.github.com/repos/octocat/Hello-World/git/commits{/sha}\",
                      \"git_refs_url\": \"http://api.github.com/repos/octocat/Hello-World/git/refs{/sha}\",
                      \"git_tags_url\": \"http://api.github.com/repos/octocat/Hello-World/git/tags{/sha}\",
                      \"git_url\": \"git:github.com/octocat/Hello-World.git\",
                      \"hooks_url\": \"http://api.github.com/repos/octocat/Hello-World/hooks\",
                      \"issue_comment_url\": \"http://api.github.com/repos/octocat/Hello-World/issues/comments{/number}\",
                      \"issue_events_url\": \"http://api.github.com/repos/octocat/Hello-World/issues/events{/number}\",
                      \"issues_url\": \"http://api.github.com/repos/octocat/Hello-World/issues{/number}\",
                      \"keys_url\": \"http://api.github.com/repos/octocat/Hello-World/keys{/key_id}\",
                      \"labels_url\": \"http://api.github.com/repos/octocat/Hello-World/labels{/name}\",
                      \"languages_url\": \"http://api.github.com/repos/octocat/Hello-World/languages\",
                      \"merges_url\": \"http://api.github.com/repos/octocat/Hello-World/merges\",
                      \"milestones_url\": \"http://api.github.com/repos/octocat/Hello-World/milestones{/number}\",
                      \"mirror_url\": \"git:git.example.com/octocat/Hello-World\",
                      \"notifications_url\": \"http://api.github.com/repos/octocat/Hello-World/notifications{?since, all, participating}\",
                      \"pulls_url\": \"http://api.github.com/repos/octocat/Hello-World/pulls{/number}\",
                      \"releases_url\": \"http://api.github.com/repos/octocat/Hello-World/releases{/id}\",
                      \"ssh_url\": \"git@github.com:octocat/Hello-World.git\",
                      \"stargazers_url\": \"http://api.github.com/repos/octocat/Hello-World/stargazers\",
                      \"statuses_url\": \"http://api.github.com/repos/octocat/Hello-World/statuses/{sha}\",
                      \"subscribers_url\": \"http://api.github.com/repos/octocat/Hello-World/subscribers\",
                      \"subscription_url\": \"http://api.github.com/repos/octocat/Hello-World/subscription\",
                      \"svn_url\": \"https://svn.github.com/octocat/Hello-World\",
                      \"tags_url\": \"http://api.github.com/repos/octocat/Hello-World/tags\",
                      \"teams_url\": \"http://api.github.com/repos/octocat/Hello-World/teams\",
                      \"trees_url\": \"http://api.github.com/repos/octocat/Hello-World/git/trees{/sha}\",
                      \"homepage\": \"https://github.com\",
                      \"language\": null,
                      \"forks_count\": 9,
                      \"stargazers_count\": 80,
                      \"watchers_count\": 80,
                      \"size\": 108,
                      \"default_branch\": \"master\",
                      \"open_issues_count\": 0,
                      \"has_issues\": true,
                      \"has_wiki\": true,
                      \"has_pages\": false,
                      \"has_downloads\": true,
                      \"pushed_at\": \"2011-01-26T19:06:43Z\",
                      \"created_at\": \"2011-01-26T19:01:12Z\",
                      \"updated_at\": \"2011-01-26T19:14:43Z\",
                      \"permissions\": {
                        \"admin\": false,
                        \"push\": false,
                        \"pull\": trues
                      }
                    }
                  ]"
		}
	}
}
```

<a name="getOrganizationTeams"/>
## Github.getOrganizationTeams
List teams

| Field           | Type       | Description
|-----------------|------------|----------
| accessToken     | credentials| The access_token obtained from Github. (optional)
| orginizationName| String     | The name of the organization (required)
| page            | Number     | Page number of the results to fetch. (optional)
| perPage         | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"orginizationName": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"[
                        {
                          \"id\": 1,
                          \"url\": \"https://api.github.com/teams/1\",
                          \"name\": \"Justice League\",
                          \"slug\": \"justice-league\",
                          \"description\": \"A great team.\",
                          \"privacy\": \"closed\",
                          \"permission\": \"admin\",
                          \"members_url\": \"https://api.github.com/teams/1/members{/member}\",
                          \"repositories_url\": \"https://api.github.com/teams/1/repos\"
                        }
                      ]"
		}
	}
}
```

<a name="pingOrganizationHook"/>
## Github.pingOrganizationHook
Ping a hook

| Field           | Type       | Description
|-----------------|------------|----------
| accessToken     | credentials| The access_token obtained from Github. (optional)
| orginizationName| String     | The name of the organization (required)
| id              | String     | The hook ID (required)

#### Request example
```json
{	"accessToken": "...",
	"orginizationName": "...",
	"id": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"Status: 204 No Content"
		}
	}
}
```

<a name="publicizeOrganizationMembership"/>
## Github.publicizeOrganizationMembership
Publicize a user's membership

| Field           | Type       | Description
|-----------------|------------|----------
| accessToken     | credentials| The access_token obtained from Github. (optional)
| orginizationName| String     | The name of the organization (required)
| user            | String     | The user name (required)

#### Request example
```json
{	"accessToken": "...",
	"orginizationName": "...",
	"user": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"Status: 204 No Content"
		}
	}
}
```

<a name="removeOrganizationMember"/>
## Github.removeOrganizationMember
Remove a member

| Field           | Type       | Description
|-----------------|------------|----------
| accessToken     | credentials| The access_token obtained from Github. (optional)
| orginizationName| String     | The name of the organization (required)
| user            | String     | The user name (required)

#### Request example
```json
{	"accessToken": "...",
	"orginizationName": "...",
	"user": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"Status: 204 No Content"
		}
	}
}
```

<a name="removeOrganizationMembership"/>
## Github.removeOrganizationMembership
Remove organization membership

| Field           | Type       | Description
|-----------------|------------|----------
| accessToken     | credentials| The access_token obtained from Github. (optional)
| orginizationName| String     | The name of the organization (required)
| user            | String     | The user name (required)

#### Request example
```json
{	"accessToken": "...",
	"orginizationName": "...",
	"user": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"Status: 204 No Content"
		}
	}
}
```

<a name="removeOrganizationTeamMembership"/>
## Github.removeOrganizationTeamMembership
Remove team membership

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| id         | String     | The team ID (required)
| user       | String     | The user name (required)

#### Request example
```json
{	"accessToken": "...",
	"id": "...",
	"user": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"Status: 204 No Content"
		}
	}
}
```

<a name="updateOrganization"/>
## Github.updateOrganization
Edit an organization

| Field           | Type       | Description
|-----------------|------------|----------
| accessToken     | credentials| The access_token obtained from Github. (optional)
| orginizationName| String     | The name of the organization (required)
| billingEmail    | String     | Billing email address. This address is not publicized. (optional)
| company         | String     | The company name. (optional)
| email           | String     | The publicly visible email address. (optional)
| location        | String     | The location. (optional)
| name            | String     | The shorthand name of the company. (optional)
| description     | String     | The description of the company. (optional)

#### Request example
```json
{	"accessToken": "...",
	"orginizationName": "...",
	"billingEmail": "...",
	"company": "...",
	"email": "...",
	"location": "...",
	"name": "...",
	"description": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"{
                    \"login\": \"github\",
                    \"id\": 1,
                    \"url\": \"https://api.github.com/orgs/github\",
                    \"repos_url\": \"https://api.github.com/orgs/github/repos\",
                    \"events_url\": \"https://api.github.com/orgs/github/events\",
                    \"hooks_url\": \"https://api.github.com/orgs/github/hooks\",
                    \"issues_url\": \"https://api.github.com/orgs/github/issues\",
                    \"members_url\": \"https://api.github.com/orgs/github/members{/member}\",
                    \"public_members_url\": \"https://api.github.com/orgs/github/public_members{/member}\",
                    \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                    \"description\": \"A great organization\",
                    \"name\": \"github\",
                    \"company\": \"GitHub\",
                    \"blog\": \"https://github.com/blog\",
                    \"location\": \"San Francisco\",
                    \"email\": \"octocat@github.com\",
                    \"public_repos\": 2,
                    \"public_gists\": 1,
                    \"followers\": 20,
                    \"following\": 0,
                    \"html_url\": \"https://github.com/octocat\",
                    \"created_at\": \"2008-01-14T04:33:35Z\",
                    \"type\": \"Organization\",
                    \"total_private_repos\": 100,
                    \"owned_private_repos\": 100,
                    \"private_gists\": 81,
                    \"disk_usage\": 10000,
                    \"collaborators\": 8,
                    \"billing_email\": \"support@github.com\",
                    \"plan\": {
                      \"name\": \"Medium\",
                      \"space\": 400,
                      \"private_repos\": 20
                    }
                  }"
		}
	}
}
```

<a name="checkMergedPullRequest"/>
## Github.checkMergedPullRequest
Get if a pull request has been merged

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| number        | Number     | The number of the pull request (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"number": 0,
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"Status: 204 No Content"
		}
	}
}
```

<a name="createPullRequest"/>
## Github.createPullRequest
Create a pull request

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| title         | String     | The title of the pull request. (required)
| head          | String     | The branch (or git ref) where your changes are implemented. (required). For cross-repository pull requests in the same network, namespace head with a user like this: username:branch.
| base          | String     | The branch (or git ref) you want your changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repositoryName that requests a merge to a base of another repositoryName. (required)
| body          | String     | The contents of the pull request. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"title": "...",
	"head": "...",
	"base": "...",
	"body": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"{
                    \"id\": 1,
                    \"url\": \"https://api.github.com/repos/octocat/Hello-World/pulls/1347\",
                    \"html_url\": \"https://github.com/octocat/Hello-World/pull/1347\",
                    \"diff_url\": \"https://github.com/octocat/Hello-World/pull/1347.diff\",
                    \"patch_url\": \"https://github.com/octocat/Hello-World/pull/1347.patch\",
                    \"issue_url\": \"https://api.github.com/repos/octocat/Hello-World/issues/1347\",
                    \"commits_url\": \"https://api.github.com/repos/octocat/Hello-World/pulls/1347/commits\",
                    \"review_comments_url\": \"https://api.github.com/repos/octocat/Hello-World/pulls/1347/comments\",
                    \"review_comment_url\": \"https://api.github.com/repos/octocat/Hello-World/pulls/comments/{number}\",
                    \"comments_url\": \"https://api.github.com/repos/octocat/Hello-World/issues/1347/comments\",
                    \"statuses_url\": \"https://api.github.com/repos/octocat/Hello-World/statuses/6dcb09b5b57875f334f61aebed695e2e4193db5e\",
                    \"number\": 1347,
                    \"state\": \"open\",
                    \"title\": \"new-feature\",
                    \"body\": \"Please pull these awesome changes\",
                    \"assignee\": {
                      \"login\": \"octocat\",
                      \"id\": 1,
                      \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                      \"gravatar_id\": \"\",
                      \"url\": \"https://api.github.com/users/octocat\",
                      \"html_url\": \"https://github.com/octocat\",
                      \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                      \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                      \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                      \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                      \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                      \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                      \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                      \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                      \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                      \"type\": \"User\",
                      \"site_admin\": false
                    },
                    \"milestone\": {
                      \"url\": \"https://api.github.com/repos/octocat/Hello-World/milestones/1\",
                      \"html_url\": \"https://github.com/octocat/Hello-World/milestones/v1.0\",
                      \"labels_url\": \"https://api.github.com/repos/octocat/Hello-World/milestones/1/labels\",
                      \"id\": 1002604,
                      \"number\": 1,
                      \"state\": \"open\",
                      \"title\": \"v1.0\",
                      \"description\": \"Tracking milestone for version 1.0\",
                      \"creator\": {
                        \"login\": \"octocat\",
                        \"id\": 1,
                        \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                        \"gravatar_id\": \"\",
                        \"url\": \"https://api.github.com/users/octocat\",
                        \"html_url\": \"https://github.com/octocat\",
                        \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                        \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                        \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                        \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                        \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                        \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                        \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                        \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                        \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                        \"type\": \"User\",
                        \"site_admin\": false
                      },
                      \"open_issues\": 4,
                      \"closed_issues\": 8,
                      \"created_at\": \"2011-04-10T20:09:31Z\",
                      \"updated_at\": \"2014-03-03T18:58:10Z\",
                      \"closed_at\": \"2013-02-12T13:22:01Z\",
                      \"due_on\": \"2012-10-09T23:39:01Z\"
                    },
                    \"locked\": false,
                    \"created_at\": \"2011-01-26T19:01:12Z\",
                    \"updated_at\": \"2011-01-26T19:01:12Z\",
                    \"closed_at\": \"2011-01-26T19:01:12Z\",
                    \"merged_at\": \"2011-01-26T19:01:12Z\",
                    \"head\": {
                      \"label\": \"new-topic\",
                      \"ref\": \"new-topic\",
                      \"sha\": \"6dcb09b5b57875f334f61aebed695e2e4193db5e\",
                      \"user\": {
                        \"login\": \"octocat\",
                        \"id\": 1,
                        \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                        \"gravatar_id\": \"\",
                        \"url\": \"https://api.github.com/users/octocat\",
                        \"html_url\": \"https://github.com/octocat\",
                        \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                        \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                        \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                        \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                        \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                        \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                        \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                        \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                        \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                        \"type\": \"User\",
                        \"site_admin\": false
                      },
                      \"repo\": {
                        \"id\": 1296269,
                        \"owner\": {
                          \"login\": \"octocat\",
                          \"id\": 1,
                          \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                          \"gravatar_id\": \"\",
                          \"url\": \"https://api.github.com/users/octocat\",
                          \"html_url\": \"https://github.com/octocat\",
                          \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                          \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                          \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                          \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                          \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                          \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                          \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                          \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                          \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                          \"type\": \"User\",
                          \"site_admin\": false
                        },
                        \"name\": \"Hello-World\",
                        \"full_name\": \"octocat/Hello-World\",
                        \"description\": \"This your first repo!\",
                        \"private\": false,
                        \"fork\": false,
                        \"url\": \"https://api.github.com/repos/octocat/Hello-World\",
                        \"html_url\": \"https://github.com/octocat/Hello-World\",
                        \"archive_url\": \"http://api.github.com/repos/octocat/Hello-World/{archive_format}{/ref}\",
                        \"assignees_url\": \"http://api.github.com/repos/octocat/Hello-World/assignees{/user}\",
                        \"blobs_url\": \"http://api.github.com/repos/octocat/Hello-World/git/blobs{/sha}\",
                        \"branches_url\": \"http://api.github.com/repos/octocat/Hello-World/branches{/branch}\",
                        \"clone_url\": \"https://github.com/octocat/Hello-World.git\",
                        \"collaborators_url\": \"http://api.github.com/repos/octocat/Hello-World/collaborators{/collaborator}\",
                        \"comments_url\": \"http://api.github.com/repos/octocat/Hello-World/comments{/number}\",
                        \"commits_url\": \"http://api.github.com/repos/octocat/Hello-World/commits{/sha}\",
                        \"compare_url\": \"http://api.github.com/repos/octocat/Hello-World/compare/{base}...{head}\",
                        \"contents_url\": \"http://api.github.com/repos/octocat/Hello-World/contents/{+path}\",
                        \"contributors_url\": \"http://api.github.com/repos/octocat/Hello-World/contributors\",
                        \"deployments_url\": \"http://api.github.com/repos/octocat/Hello-World/deployments\",
                        \"downloads_url\": \"http://api.github.com/repos/octocat/Hello-World/downloads\",
                        \"events_url\": \"http://api.github.com/repos/octocat/Hello-World/events\",
                        \"forks_url\": \"http://api.github.com/repos/octocat/Hello-World/forks\",
                        \"git_commits_url\": \"http://api.github.com/repos/octocat/Hello-World/git/commits{/sha}\",
                        \"git_refs_url\": \"http://api.github.com/repos/octocat/Hello-World/git/refs{/sha}\",
                        \"git_tags_url\": \"http://api.github.com/repos/octocat/Hello-World/git/tags{/sha}\",
                        \"git_url\": \"git:github.com/octocat/Hello-World.git\",
                        \"hooks_url\": \"http://api.github.com/repos/octocat/Hello-World/hooks\",
                        \"issue_comment_url\": \"http://api.github.com/repos/octocat/Hello-World/issues/comments{/number}\",
                        \"issue_events_url\": \"http://api.github.com/repos/octocat/Hello-World/issues/events{/number}\",
                        \"issues_url\": \"http://api.github.com/repos/octocat/Hello-World/issues{/number}\",
                        \"keys_url\": \"http://api.github.com/repos/octocat/Hello-World/keys{/key_id}\",
                        \"labels_url\": \"http://api.github.com/repos/octocat/Hello-World/labels{/name}\",
                        \"languages_url\": \"http://api.github.com/repos/octocat/Hello-World/languages\",
                        \"merges_url\": \"http://api.github.com/repos/octocat/Hello-World/merges\",
                        \"milestones_url\": \"http://api.github.com/repos/octocat/Hello-World/milestones{/number}\",
                        \"mirror_url\": \"git:git.example.com/octocat/Hello-World\",
                        \"notifications_url\": \"http://api.github.com/repos/octocat/Hello-World/notifications{?since, all, participating}\",
                        \"pulls_url\": \"http://api.github.com/repos/octocat/Hello-World/pulls{/number}\",
                        \"releases_url\": \"http://api.github.com/repos/octocat/Hello-World/releases{/id}\",
                        \"ssh_url\": \"git@github.com:octocat/Hello-World.git\",
                        \"stargazers_url\": \"http://api.github.com/repos/octocat/Hello-World/stargazers\",
                        \"statuses_url\": \"http://api.github.com/repos/octocat/Hello-World/statuses/{sha}\",
                        \"subscribers_url\": \"http://api.github.com/repos/octocat/Hello-World/subscribers\",
                        \"subscription_url\": \"http://api.github.com/repos/octocat/Hello-World/subscription\",
                        \"svn_url\": \"https://svn.github.com/octocat/Hello-World\",
                        \"tags_url\": \"http://api.github.com/repos/octocat/Hello-World/tags\",
                        \"teams_url\": \"http://api.github.com/repos/octocat/Hello-World/teams\",
                        \"trees_url\": \"http://api.github.com/repos/octocat/Hello-World/git/trees{/sha}\",
                        \"homepage\": \"https://github.com\",
                        \"language\": null,
                        \"forks_count\": 9,
                        \"stargazers_count\": 80,
                        \"watchers_count\": 80,
                        \"size\": 108,
                        \"default_branch\": \"master\",
                        \"open_issues_count\": 0,
                        \"has_issues\": true,
                        \"has_wiki\": true,
                        \"has_pages\": false,
                        \"has_downloads\": true,
                        \"pushed_at\": \"2011-01-26T19:06:43Z\",
                        \"created_at\": \"2011-01-26T19:01:12Z\",
                        \"updated_at\": \"2011-01-26T19:14:43Z\",
                        \"permissions\": {
                          \"admin\": false,
                          \"push\": false,
                          \"pull\": true
                        }
                      }
                    },
                    \"base\": {
                      \"label\": \"master\",
                      \"ref\": \"master\",
                      \"sha\": \"6dcb09b5b57875f334f61aebed695e2e4193db5e\",
                      \"user\": {
                        \"login\": \"octocat\",
                        \"id\": 1,
                        \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                        \"gravatar_id\": \"\",
                        \"url\": \"https://api.github.com/users/octocat\",
                        \"html_url\": \"https://github.com/octocat\",
                        \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                        \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                        \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                        \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                        \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                        \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                        \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                        \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                        \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                        \"type\": \"User\",
                        \"site_admin\": false
                      },
                      \"repo\": {
                        \"id\": 1296269,
                        \"owner\": {
                          \"login\": \"octocat\",
                          \"id\": 1,
                          \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                          \"gravatar_id\": \"\",
                          \"url\": \"https://api.github.com/users/octocat\",
                          \"html_url\": \"https://github.com/octocat\",
                          \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                          \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                          \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                          \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                          \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                          \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                          \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                          \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                          \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                          \"type\": \"User\",
                          \"site_admin\": false
                        },
                        \"name\": \"Hello-World\",
                        \"full_name\": \"octocat/Hello-World\",
                        \"description\": \"This your first repo!\",
                        \"private\": false,
                        \"fork\": false,
                        \"url\": \"https://api.github.com/repos/octocat/Hello-World\",
                        \"html_url\": \"https://github.com/octocat/Hello-World\",
                        \"archive_url\": \"http://api.github.com/repos/octocat/Hello-World/{archive_format}{/ref}\",
                        \"assignees_url\": \"http://api.github.com/repos/octocat/Hello-World/assignees{/user}\",
                        \"blobs_url\": \"http://api.github.com/repos/octocat/Hello-World/git/blobs{/sha}\",
                        \"branches_url\": \"http://api.github.com/repos/octocat/Hello-World/branches{/branch}\",
                        \"clone_url\": \"https://github.com/octocat/Hello-World.git\",
                        \"collaborators_url\": \"http://api.github.com/repos/octocat/Hello-World/collaborators{/collaborator}\",
                        \"comments_url\": \"http://api.github.com/repos/octocat/Hello-World/comments{/number}\",
                        \"commits_url\": \"http://api.github.com/repos/octocat/Hello-World/commits{/sha}\",
                        \"compare_url\": \"http://api.github.com/repos/octocat/Hello-World/compare/{base}...{head}\",
                        \"contents_url\": \"http://api.github.com/repos/octocat/Hello-World/contents/{+path}\",
                        \"contributors_url\": \"http://api.github.com/repos/octocat/Hello-World/contributors\",
                        \"deployments_url\": \"http://api.github.com/repos/octocat/Hello-World/deployments\",
                        \"downloads_url\": \"http://api.github.com/repos/octocat/Hello-World/downloads\",
                        \"events_url\": \"http://api.github.com/repos/octocat/Hello-World/events\",
                        \"forks_url\": \"http://api.github.com/repos/octocat/Hello-World/forks\",
                        \"git_commits_url\": \"http://api.github.com/repos/octocat/Hello-World/git/commits{/sha}\",
                        \"git_refs_url\": \"http://api.github.com/repos/octocat/Hello-World/git/refs{/sha}\",
                        \"git_tags_url\": \"http://api.github.com/repos/octocat/Hello-World/git/tags{/sha}\",
                        \"git_url\": \"git:github.com/octocat/Hello-World.git\",
                        \"hooks_url\": \"http://api.github.com/repos/octocat/Hello-World/hooks\",
                        \"issue_comment_url\": \"http://api.github.com/repos/octocat/Hello-World/issues/comments{/number}\",
                        \"issue_events_url\": \"http://api.github.com/repos/octocat/Hello-World/issues/events{/number}\",
                        \"issues_url\": \"http://api.github.com/repos/octocat/Hello-World/issues{/number}\",
                        \"keys_url\": \"http://api.github.com/repos/octocat/Hello-World/keys{/key_id}\",
                        \"labels_url\": \"http://api.github.com/repos/octocat/Hello-World/labels{/name}\",
                        \"languages_url\": \"http://api.github.com/repos/octocat/Hello-World/languages\",
                        \"merges_url\": \"http://api.github.com/repos/octocat/Hello-World/merges\",
                        \"milestones_url\": \"http://api.github.com/repos/octocat/Hello-World/milestones{/number}\",
                        \"mirror_url\": \"git:git.example.com/octocat/Hello-World\",
                        \"notifications_url\": \"http://api.github.com/repos/octocat/Hello-World/notifications{?since, all, participating}\",
                        \"pulls_url\": \"http://api.github.com/repos/octocat/Hello-World/pulls{/number}\",
                        \"releases_url\": \"http://api.github.com/repos/octocat/Hello-World/releases{/id}\",
                        \"ssh_url\": \"git@github.com:octocat/Hello-World.git\",
                        \"stargazers_url\": \"http://api.github.com/repos/octocat/Hello-World/stargazers\",
                        \"statuses_url\": \"http://api.github.com/repos/octocat/Hello-World/statuses/{sha}\",
                        \"subscribers_url\": \"http://api.github.com/repos/octocat/Hello-World/subscribers\",
                        \"subscription_url\": \"http://api.github.com/repos/octocat/Hello-World/subscription\",
                        \"svn_url\": \"https://svn.github.com/octocat/Hello-World\",
                        \"tags_url\": \"http://api.github.com/repos/octocat/Hello-World/tags\",
                        \"teams_url\": \"http://api.github.com/repos/octocat/Hello-World/teams\",
                        \"trees_url\": \"http://api.github.com/repos/octocat/Hello-World/git/trees{/sha}\",
                        \"homepage\": \"https://github.com\",
                        \"language\": null,
                        \"forks_count\": 9,
                        \"stargazers_count\": 80,
                        \"watchers_count\": 80,
                        \"size\": 108,
                        \"default_branch\": \"master\",
                        \"open_issues_count\": 0,
                        \"has_issues\": true,
                        \"has_wiki\": true,
                        \"has_pages\": false,
                        \"has_downloads\": true,
                        \"pushed_at\": \"2011-01-26T19:06:43Z\",
                        \"created_at\": \"2011-01-26T19:01:12Z\",
                        \"updated_at\": \"2011-01-26T19:14:43Z\",
                        \"permissions\": {
                          \"admin\": false,
                          \"push\": false,
                          \"pull\": true
                        }
                      }
                    },
                    \"_links\": {
                      \"self\": {
                        \"href\": \"https://api.github.com/repos/octocat/Hello-World/pulls/1347\"
                      },
                      \"html\": {
                        \"href\": \"https://github.com/octocat/Hello-World/pull/1347\"
                      },
                      \"issue\": {
                        \"href\": \"https://api.github.com/repos/octocat/Hello-World/issues/1347\"
                      },
                      \"comments\": {
                        \"href\": \"https://api.github.com/repos/octocat/Hello-World/issues/1347/comments\"
                      },
                      \"review_comments\": {
                        \"href\": \"https://api.github.com/repos/octocat/Hello-World/pulls/1347/comments\"
                      },
                      \"review_comment\": {
                        \"href\": \"https://api.github.com/repos/octocat/Hello-World/pulls/comments/{number}\"
                      },
                      \"commits\": {
                        \"href\": \"https://api.github.com/repos/octocat/Hello-World/pulls/1347/commits\"
                      },
                      \"statuses\": {
                        \"href\": \"https://api.github.com/repos/octocat/Hello-World/statuses/6dcb09b5b57875f334f61aebed695e2e4193db5e\"
                      }
                    },
                    \"user\": {
                      \"login\": \"octocat\",
                      \"id\": 1,
                      \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                      \"gravatar_id\": \"\",
                      \"url\": \"https://api.github.com/users/octocat\",
                      \"html_url\": \"https://github.com/octocat\",
                      \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                      \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                      \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                      \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                      \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                      \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                      \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                      \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                      \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                      \"type\": \"User\",
                      \"site_admin\": false
                    }
                  }"
		}
	}
}
```

<a name="createPullRequestComment"/>
## Github.createPullRequestComment
Create a comment

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| number        | Number     | The number of the pull request (required)
| body          | String     | The text of the comment (required)
| commitId      | String     | Sha of the commit to comment on. (required)
| path          | String     | Relative path of the file to comment on. (required)
| position      | Number     | Column index in the diff to comment on. (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"number": 0,
	"body": "...",
	"commitId": "...",
	"path": "...",
	"position": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"{
                    \"url\": \"https://api.github.com/repos/octocat/Hello-World/pulls/comments/1\",
                    \"id\": 1,
                    \"diff_hunk\": \"@@ -16,33 +16,40 @@ public class Connection : IConnection...\",
                    \"path\": \"file1.txt\",
                    \"position\": 1,
                    \"original_position\": 4,
                    \"commit_id\": \"6dcb09b5b57875f334f61aebed695e2e4193db5e\",
                    \"original_commit_id\": \"9c48853fa3dc5c1c3d6f1f1cd1f2743e72652840\",
                    \"user\": {
                      \"login\": \"octocat\",
                      \"id\": 1,
                      \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                      \"gravatar_id\": \"\",
                      \"url\": \"https://api.github.com/users/octocat\",
                      \"html_url\": \"https://github.com/octocat\",
                      \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                      \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                      \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                      \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                      \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                      \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                      \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                      \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                      \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                      \"type\": \"User\",
                      \"site_admin\": false
                    },
                    \"body\": \"Great stuff\",
                    \"created_at\": \"2011-04-14T16:00:49Z\",
                    \"updated_at\": \"2011-04-14T16:00:49Z\",
                    \"html_url\": \"https://github.com/octocat/Hello-World/pull/1#discussion-diff-1\",
                    \"pull_request_url\": \"https://api.github.com/repos/octocat/Hello-World/pulls/1\",
                    \"_links\": {
                      \"self\": {
                        \"href\": \"https://api.github.com/repos/octocat/Hello-World/pulls/comments/1\"
                      },
                      \"html\": {
                        \"href\": \"https://github.com/octocat/Hello-World/pull/1#discussion-diff-1\"
                      },
                      \"pull_request\": {
                        \"href\": \"https://api.github.com/repos/octocat/Hello-World/pulls/1\"
                      }
                    }
                  }"
		}
	}
}
```

<a name="createPullRequestCommentReply"/>
## Github.createPullRequestCommentReply
Reply to existing pull request comment

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| number        | Number     | The number of the pull request (required)
| body          | String     | The text of the comment (required)
| inReplyTo     | Number     | The comment id to reply to. (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"number": 0,
	"body": "...",
	"inReplyTo": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"{
                    \"url\": \"https://api.github.com/repos/octocat/Hello-World/pulls/comments/1\",
                    \"id\": 1,
                    \"diff_hunk\": \"@@ -16,33 +16,40 @@ public class Connection : IConnection...\",
                    \"path\": \"file1.txt\",
                    \"position\": 1,
                    \"original_position\": 4,
                    \"commit_id\": \"6dcb09b5b57875f334f61aebed695e2e4193db5e\",
                    \"original_commit_id\": \"9c48853fa3dc5c1c3d6f1f1cd1f2743e72652840\",
                    \"user\": {
                      \"login\": \"octocat\",
                      \"id\": 1,
                      \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                      \"gravatar_id\": \"\",
                      \"url\": \"https://api.github.com/users/octocat\",
                      \"html_url\": \"https://github.com/octocat\",
                      \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                      \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                      \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                      \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                      \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                      \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                      \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                      \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                      \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                      \"type\": \"User\",
                      \"site_admin\": false
                    },
                    \"body\": \"Great stuff\",
                    \"created_at\": \"2011-04-14T16:00:49Z\",
                    \"updated_at\": \"2011-04-14T16:00:49Z\",
                    \"html_url\": \"https://github.com/octocat/Hello-World/pull/1#discussion-diff-1\",
                    \"pull_request_url\": \"https://api.github.com/repos/octocat/Hello-World/pulls/1\",
                    \"_links\": {
                      \"self\": {
                        \"href\": \"https://api.github.com/repos/octocat/Hello-World/pulls/comments/1\"
                      },
                      \"html\": {
                        \"href\": \"https://github.com/octocat/Hello-World/pull/1#discussion-diff-1\"
                      },
                      \"pull_request\": {
                        \"href\": \"https://api.github.com/repos/octocat/Hello-World/pulls/1\"
                      }
                    }
                  }"
		}
	}
}
```

<a name="createPullRequestFromIssue"/>
## Github.createPullRequestFromIssue
Create a pull request from an existing issue

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| issue         | Number     | The issue number in this repository to turn into a Pull Request. (required)
| head          | String     | The branch (or git ref) where your changes are implemented. (required)
| base          | String     | The branch (or git ref) you want your changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repositoryName that requests a merge to a base of another repositoryName. (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"issue": 0,
	"head": "...",
	"base": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"{
                    \"id\": 1,
                    \"url\": \"https://api.github.com/repos/octocat/Hello-World/pulls/1347\",
                    \"html_url\": \"https://github.com/octocat/Hello-World/pull/1347\",
                    \"diff_url\": \"https://github.com/octocat/Hello-World/pull/1347.diff\",
                    \"patch_url\": \"https://github.com/octocat/Hello-World/pull/1347.patch\",
                    \"issue_url\": \"https://api.github.com/repos/octocat/Hello-World/issues/1347\",
                    \"commits_url\": \"https://api.github.com/repos/octocat/Hello-World/pulls/1347/commits\",
                    \"review_comments_url\": \"https://api.github.com/repos/octocat/Hello-World/pulls/1347/comments\",
                    \"review_comment_url\": \"https://api.github.com/repos/octocat/Hello-World/pulls/comments/{number}\",
                    \"comments_url\": \"https://api.github.com/repos/octocat/Hello-World/issues/1347/comments\",
                    \"statuses_url\": \"https://api.github.com/repos/octocat/Hello-World/statuses/6dcb09b5b57875f334f61aebed695e2e4193db5e\",
                    \"number\": 1347,
                    \"state\": \"open\",
                    \"title\": \"new-feature\",
                    \"body\": \"Please pull these awesome changes\",
                    \"assignee\": {
                      \"login\": \"octocat\",
                      \"id\": 1,
                      \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                      \"gravatar_id\": \"\",
                      \"url\": \"https://api.github.com/users/octocat\",
                      \"html_url\": \"https://github.com/octocat\",
                      \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                      \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                      \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                      \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                      \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                      \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                      \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                      \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                      \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                      \"type\": \"User\",
                      \"site_admin\": false
                    },
                    \"milestone\": {
                      \"url\": \"https://api.github.com/repos/octocat/Hello-World/milestones/1\",
                      \"html_url\": \"https://github.com/octocat/Hello-World/milestones/v1.0\",
                      \"labels_url\": \"https://api.github.com/repos/octocat/Hello-World/milestones/1/labels\",
                      \"id\": 1002604,
                      \"number\": 1,
                      \"state\": \"open\",
                      \"title\": \"v1.0\",
                      \"description\": \"Tracking milestone for version 1.0\",
                      \"creator\": {
                        \"login\": \"octocat\",
                        \"id\": 1,
                        \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                        \"gravatar_id\": \"\",
                        \"url\": \"https://api.github.com/users/octocat\",
                        \"html_url\": \"https://github.com/octocat\",
                        \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                        \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                        \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                        \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                        \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                        \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                        \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                        \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                        \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                        \"type\": \"User\",
                        \"site_admin\": false
                      },
                      \"open_issues\": 4,
                      \"closed_issues\": 8,
                      \"created_at\": \"2011-04-10T20:09:31Z\",
                      \"updated_at\": \"2014-03-03T18:58:10Z\",
                      \"closed_at\": \"2013-02-12T13:22:01Z\",
                      \"due_on\": \"2012-10-09T23:39:01Z\"
                    },
                    \"locked\": false,
                    \"created_at\": \"2011-01-26T19:01:12Z\",
                    \"updated_at\": \"2011-01-26T19:01:12Z\",
                    \"closed_at\": \"2011-01-26T19:01:12Z\",
                    \"merged_at\": \"2011-01-26T19:01:12Z\",
                    \"head\": {
                      \"label\": \"new-topic\",
                      \"ref\": \"new-topic\",
                      \"sha\": \"6dcb09b5b57875f334f61aebed695e2e4193db5e\",
                      \"user\": {
                        \"login\": \"octocat\",
                        \"id\": 1,
                        \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                        \"gravatar_id\": \"\",
                        \"url\": \"https://api.github.com/users/octocat\",
                        \"html_url\": \"https://github.com/octocat\",
                        \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                        \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                        \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                        \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                        \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                        \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                        \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                        \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                        \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                        \"type\": \"User\",
                        \"site_admin\": false
                      },
                      \"repo\": {
                        \"id\": 1296269,
                        \"owner\": {
                          \"login\": \"octocat\",
                          \"id\": 1,
                          \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                          \"gravatar_id\": \"\",
                          \"url\": \"https://api.github.com/users/octocat\",
                          \"html_url\": \"https://github.com/octocat\",
                          \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                          \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                          \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                          \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                          \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                          \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                          \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                          \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                          \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                          \"type\": \"User\",
                          \"site_admin\": false
                        },
                        \"name\": \"Hello-World\",
                        \"full_name\": \"octocat/Hello-World\",
                        \"description\": \"This your first repo!\",
                        \"private\": false,
                        \"fork\": false,
                        \"url\": \"https://api.github.com/repos/octocat/Hello-World\",
                        \"html_url\": \"https://github.com/octocat/Hello-World\",
                        \"archive_url\": \"http://api.github.com/repos/octocat/Hello-World/{archive_format}{/ref}\",
                        \"assignees_url\": \"http://api.github.com/repos/octocat/Hello-World/assignees{/user}\",
                        \"blobs_url\": \"http://api.github.com/repos/octocat/Hello-World/git/blobs{/sha}\",
                        \"branches_url\": \"http://api.github.com/repos/octocat/Hello-World/branches{/branch}\",
                        \"clone_url\": \"https://github.com/octocat/Hello-World.git\",
                        \"collaborators_url\": \"http://api.github.com/repos/octocat/Hello-World/collaborators{/collaborator}\",
                        \"comments_url\": \"http://api.github.com/repos/octocat/Hello-World/comments{/number}\",
                        \"commits_url\": \"http://api.github.com/repos/octocat/Hello-World/commits{/sha}\",
                        \"compare_url\": \"http://api.github.com/repos/octocat/Hello-World/compare/{base}...{head}\",
                        \"contents_url\": \"http://api.github.com/repos/octocat/Hello-World/contents/{+path}\",
                        \"contributors_url\": \"http://api.github.com/repos/octocat/Hello-World/contributors\",
                        \"deployments_url\": \"http://api.github.com/repos/octocat/Hello-World/deployments\",
                        \"downloads_url\": \"http://api.github.com/repos/octocat/Hello-World/downloads\",
                        \"events_url\": \"http://api.github.com/repos/octocat/Hello-World/events\",
                        \"forks_url\": \"http://api.github.com/repos/octocat/Hello-World/forks\",
                        \"git_commits_url\": \"http://api.github.com/repos/octocat/Hello-World/git/commits{/sha}\",
                        \"git_refs_url\": \"http://api.github.com/repos/octocat/Hello-World/git/refs{/sha}\",
                        \"git_tags_url\": \"http://api.github.com/repos/octocat/Hello-World/git/tags{/sha}\",
                        \"git_url\": \"git:github.com/octocat/Hello-World.git\",
                        \"hooks_url\": \"http://api.github.com/repos/octocat/Hello-World/hooks\",
                        \"issue_comment_url\": \"http://api.github.com/repos/octocat/Hello-World/issues/comments{/number}\",
                        \"issue_events_url\": \"http://api.github.com/repos/octocat/Hello-World/issues/events{/number}\",
                        \"issues_url\": \"http://api.github.com/repos/octocat/Hello-World/issues{/number}\",
                        \"keys_url\": \"http://api.github.com/repos/octocat/Hello-World/keys{/key_id}\",
                        \"labels_url\": \"http://api.github.com/repos/octocat/Hello-World/labels{/name}\",
                        \"languages_url\": \"http://api.github.com/repos/octocat/Hello-World/languages\",
                        \"merges_url\": \"http://api.github.com/repos/octocat/Hello-World/merges\",
                        \"milestones_url\": \"http://api.github.com/repos/octocat/Hello-World/milestones{/number}\",
                        \"mirror_url\": \"git:git.example.com/octocat/Hello-World\",
                        \"notifications_url\": \"http://api.github.com/repos/octocat/Hello-World/notifications{?since, all, participating}\",
                        \"pulls_url\": \"http://api.github.com/repos/octocat/Hello-World/pulls{/number}\",
                        \"releases_url\": \"http://api.github.com/repos/octocat/Hello-World/releases{/id}\",
                        \"ssh_url\": \"git@github.com:octocat/Hello-World.git\",
                        \"stargazers_url\": \"http://api.github.com/repos/octocat/Hello-World/stargazers\",
                        \"statuses_url\": \"http://api.github.com/repos/octocat/Hello-World/statuses/{sha}\",
                        \"subscribers_url\": \"http://api.github.com/repos/octocat/Hello-World/subscribers\",
                        \"subscription_url\": \"http://api.github.com/repos/octocat/Hello-World/subscription\",
                        \"svn_url\": \"https://svn.github.com/octocat/Hello-World\",
                        \"tags_url\": \"http://api.github.com/repos/octocat/Hello-World/tags\",
                        \"teams_url\": \"http://api.github.com/repos/octocat/Hello-World/teams\",
                        \"trees_url\": \"http://api.github.com/repos/octocat/Hello-World/git/trees{/sha}\",
                        \"homepage\": \"https://github.com\",
                        \"language\": null,
                        \"forks_count\": 9,
                        \"stargazers_count\": 80,
                        \"watchers_count\": 80,
                        \"size\": 108,
                        \"default_branch\": \"master\",
                        \"open_issues_count\": 0,
                        \"has_issues\": true,
                        \"has_wiki\": true,
                        \"has_pages\": false,
                        \"has_downloads\": true,
                        \"pushed_at\": \"2011-01-26T19:06:43Z\",
                        \"created_at\": \"2011-01-26T19:01:12Z\",
                        \"updated_at\": \"2011-01-26T19:14:43Z\",
                        \"permissions\": {
                          \"admin\": false,
                          \"push\": false,
                          \"pull\": true
                        }
                      }
                    },
                    \"base\": {
                      \"label\": \"master\",
                      \"ref\": \"master\",
                      \"sha\": \"6dcb09b5b57875f334f61aebed695e2e4193db5e\",
                      \"user\": {
                        \"login\": \"octocat\",
                        \"id\": 1,
                        \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                        \"gravatar_id\": \"\",
                        \"url\": \"https://api.github.com/users/octocat\",
                        \"html_url\": \"https://github.com/octocat\",
                        \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                        \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                        \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                        \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                        \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                        \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                        \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                        \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                        \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                        \"type\": \"User\",
                        \"site_admin\": false
                      },
                      \"repo\": {
                        \"id\": 1296269,
                        \"owner\": {
                          \"login\": \"octocat\",
                          \"id\": 1,
                          \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                          \"gravatar_id\": \"\",
                          \"url\": \"https://api.github.com/users/octocat\",
                          \"html_url\": \"https://github.com/octocat\",
                          \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                          \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                          \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                          \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                          \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                          \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                          \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                          \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                          \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                          \"type\": \"User\",
                          \"site_admin\": false
                        },
                        \"name\": \"Hello-World\",
                        \"full_name\": \"octocat/Hello-World\",
                        \"description\": \"This your first repo!\",
                        \"private\": false,
                        \"fork\": false,
                        \"url\": \"https://api.github.com/repos/octocat/Hello-World\",
                        \"html_url\": \"https://github.com/octocat/Hello-World\",
                        \"archive_url\": \"http://api.github.com/repos/octocat/Hello-World/{archive_format}{/ref}\",
                        \"assignees_url\": \"http://api.github.com/repos/octocat/Hello-World/assignees{/user}\",
                        \"blobs_url\": \"http://api.github.com/repos/octocat/Hello-World/git/blobs{/sha}\",
                        \"branches_url\": \"http://api.github.com/repos/octocat/Hello-World/branches{/branch}\",
                        \"clone_url\": \"https://github.com/octocat/Hello-World.git\",
                        \"collaborators_url\": \"http://api.github.com/repos/octocat/Hello-World/collaborators{/collaborator}\",
                        \"comments_url\": \"http://api.github.com/repos/octocat/Hello-World/comments{/number}\",
                        \"commits_url\": \"http://api.github.com/repos/octocat/Hello-World/commits{/sha}\",
                        \"compare_url\": \"http://api.github.com/repos/octocat/Hello-World/compare/{base}...{head}\",
                        \"contents_url\": \"http://api.github.com/repos/octocat/Hello-World/contents/{+path}\",
                        \"contributors_url\": \"http://api.github.com/repos/octocat/Hello-World/contributors\",
                        \"deployments_url\": \"http://api.github.com/repos/octocat/Hello-World/deployments\",
                        \"downloads_url\": \"http://api.github.com/repos/octocat/Hello-World/downloads\",
                        \"events_url\": \"http://api.github.com/repos/octocat/Hello-World/events\",
                        \"forks_url\": \"http://api.github.com/repos/octocat/Hello-World/forks\",
                        \"git_commits_url\": \"http://api.github.com/repos/octocat/Hello-World/git/commits{/sha}\",
                        \"git_refs_url\": \"http://api.github.com/repos/octocat/Hello-World/git/refs{/sha}\",
                        \"git_tags_url\": \"http://api.github.com/repos/octocat/Hello-World/git/tags{/sha}\",
                        \"git_url\": \"git:github.com/octocat/Hello-World.git\",
                        \"hooks_url\": \"http://api.github.com/repos/octocat/Hello-World/hooks\",
                        \"issue_comment_url\": \"http://api.github.com/repos/octocat/Hello-World/issues/comments{/number}\",
                        \"issue_events_url\": \"http://api.github.com/repos/octocat/Hello-World/issues/events{/number}\",
                        \"issues_url\": \"http://api.github.com/repos/octocat/Hello-World/issues{/number}\",
                        \"keys_url\": \"http://api.github.com/repos/octocat/Hello-World/keys{/key_id}\",
                        \"labels_url\": \"http://api.github.com/repos/octocat/Hello-World/labels{/name}\",
                        \"languages_url\": \"http://api.github.com/repos/octocat/Hello-World/languages\",
                        \"merges_url\": \"http://api.github.com/repos/octocat/Hello-World/merges\",
                        \"milestones_url\": \"http://api.github.com/repos/octocat/Hello-World/milestones{/number}\",
                        \"mirror_url\": \"git:git.example.com/octocat/Hello-World\",
                        \"notifications_url\": \"http://api.github.com/repos/octocat/Hello-World/notifications{?since, all, participating}\",
                        \"pulls_url\": \"http://api.github.com/repos/octocat/Hello-World/pulls{/number}\",
                        \"releases_url\": \"http://api.github.com/repos/octocat/Hello-World/releases{/id}\",
                        \"ssh_url\": \"git@github.com:octocat/Hello-World.git\",
                        \"stargazers_url\": \"http://api.github.com/repos/octocat/Hello-World/stargazers\",
                        \"statuses_url\": \"http://api.github.com/repos/octocat/Hello-World/statuses/{sha}\",
                        \"subscribers_url\": \"http://api.github.com/repos/octocat/Hello-World/subscribers\",
                        \"subscription_url\": \"http://api.github.com/repos/octocat/Hello-World/subscription\",
                        \"svn_url\": \"https://svn.github.com/octocat/Hello-World\",
                        \"tags_url\": \"http://api.github.com/repos/octocat/Hello-World/tags\",
                        \"teams_url\": \"http://api.github.com/repos/octocat/Hello-World/teams\",
                        \"trees_url\": \"http://api.github.com/repos/octocat/Hello-World/git/trees{/sha}\",
                        \"homepage\": \"https://github.com\",
                        \"language\": null,
                        \"forks_count\": 9,
                        \"stargazers_count\": 80,
                        \"watchers_count\": 80,
                        \"size\": 108,
                        \"default_branch\": \"master\",
                        \"open_issues_count\": 0,
                        \"has_issues\": true,
                        \"has_wiki\": true,
                        \"has_pages\": false,
                        \"has_downloads\": true,
                        \"pushed_at\": \"2011-01-26T19:06:43Z\",
                        \"created_at\": \"2011-01-26T19:01:12Z\",
                        \"updated_at\": \"2011-01-26T19:14:43Z\",
                        \"permissions\": {
                          \"admin\": false,
                          \"push\": false,
                          \"pull\": true
                        }
                      }
                    },
                    \"_links\": {
                      \"self\": {
                        \"href\": \"https://api.github.com/repos/octocat/Hello-World/pulls/1347\"
                      },
                      \"html\": {
                        \"href\": \"https://github.com/octocat/Hello-World/pull/1347\"
                      },
                      \"issue\": {
                        \"href\": \"https://api.github.com/repos/octocat/Hello-World/issues/1347\"
                      },
                      \"comments\": {
                        \"href\": \"https://api.github.com/repos/octocat/Hello-World/issues/1347/comments\"
                      },
                      \"review_comments\": {
                        \"href\": \"https://api.github.com/repos/octocat/Hello-World/pulls/1347/comments\"
                      },
                      \"review_comment\": {
                        \"href\": \"https://api.github.com/repos/octocat/Hello-World/pulls/comments/{number}\"
                      },
                      \"commits\": {
                        \"href\": \"https://api.github.com/repos/octocat/Hello-World/pulls/1347/commits\"
                      },
                      \"statuses\": {
                        \"href\": \"https://api.github.com/repos/octocat/Hello-World/statuses/6dcb09b5b57875f334f61aebed695e2e4193db5e\"
                      }
                    },
                    \"user\": {
                      \"login\": \"octocat\",
                      \"id\": 1,
                      \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                      \"gravatar_id\": \"\",
                      \"url\": \"https://api.github.com/users/octocat\",
                      \"html_url\": \"https://github.com/octocat\",
                      \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                      \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                      \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                      \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                      \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                      \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                      \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                      \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                      \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                      \"type\": \"User\",
                      \"site_admin\": false
                    }
                  }"
		}
	}
}
```

<a name="deletePullRequestComment"/>
## Github.deletePullRequestComment
Delete a comment

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| number        | Number     | The number of the comment (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"number": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"Status: 204 No Content"
		}
	}
}
```

<a name="editPullRequestComment"/>
## Github.editPullRequestComment
Edit a comment

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| number        | Number     | The number of the comment (required)
| body          | String     | The text of the comment (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"number": 0,
	"body": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"{
                    \"url\": \"https://api.github.com/repos/octocat/Hello-World/pulls/comments/1\",
                    \"id\": 1,
                    \"diff_hunk\": \"@@ -16,33 +16,40 @@ public class Connection : IConnection...\",
                    \"path\": \"file1.txt\",
                    \"position\": 1,
                    \"original_position\": 4,
                    \"commit_id\": \"6dcb09b5b57875f334f61aebed695e2e4193db5e\",
                    \"original_commit_id\": \"9c48853fa3dc5c1c3d6f1f1cd1f2743e72652840\",
                    \"user\": {
                      \"login\": \"octocat\",
                      \"id\": 1,
                      \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                      \"gravatar_id\": \"\",
                      \"url\": \"https://api.github.com/users/octocat\",
                      \"html_url\": \"https://github.com/octocat\",
                      \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                      \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                      \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                      \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                      \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                      \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                      \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                      \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                      \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                      \"type\": \"User\",
                      \"site_admin\": false
                    },
                    \"body\": \"Great stuff\",
                    \"created_at\": \"2011-04-14T16:00:49Z\",
                    \"updated_at\": \"2011-04-14T16:00:49Z\",
                    \"html_url\": \"https://github.com/octocat/Hello-World/pull/1#discussion-diff-1\",
                    \"pull_request_url\": \"https://api.github.com/repos/octocat/Hello-World/pulls/1\",
                    \"_links\": {
                      \"self\": {
                        \"href\": \"https://api.github.com/repos/octocat/Hello-World/pulls/comments/1\"
                      },
                      \"html\": {
                        \"href\": \"https://github.com/octocat/Hello-World/pull/1#discussion-diff-1\"
                      },
                      \"pull_request\": {
                        \"href\": \"https://api.github.com/repos/octocat/Hello-World/pulls/1\"
                      }
                    }
                  }"
		}
	}
}
```

<a name="getPullRequest"/>
## Github.getPullRequest
Get a single pull request

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| number        | Number     | The number of the pull request (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"number": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"{
                    \"id\": 1,
                    \"url\": \"https://api.github.com/repos/octocat/Hello-World/pulls/1347\",
                    \"html_url\": \"https://github.com/octocat/Hello-World/pull/1347\",
                    \"diff_url\": \"https://github.com/octocat/Hello-World/pull/1347.diff\",
                    \"patch_url\": \"https://github.com/octocat/Hello-World/pull/1347.patch\",
                    \"issue_url\": \"https://api.github.com/repos/octocat/Hello-World/issues/1347\",
                    \"commits_url\": \"https://api.github.com/repos/octocat/Hello-World/pulls/1347/commits\",
                    \"review_comments_url\": \"https://api.github.com/repos/octocat/Hello-World/pulls/1347/comments\",
                    \"review_comment_url\": \"https://api.github.com/repos/octocat/Hello-World/pulls/comments/{number}\",
                    \"comments_url\": \"https://api.github.com/repos/octocat/Hello-World/issues/1347/comments\",
                    \"statuses_url\": \"https://api.github.com/repos/octocat/Hello-World/statuses/6dcb09b5b57875f334f61aebed695e2e4193db5e\",
                    \"number\": 1347,
                    \"state\": \"open\",
                    \"title\": \"new-feature\",
                    \"body\": \"Please pull these awesome changes\",
                    \"assignee\": {
                      \"login\": \"octocat\",
                      \"id\": 1,
                      \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                      \"gravatar_id\": \"\",
                      \"url\": \"https://api.github.com/users/octocat\",
                      \"html_url\": \"https://github.com/octocat\",
                      \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                      \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                      \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                      \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                      \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                      \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                      \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                      \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                      \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                      \"type\": \"User\",
                      \"site_admin\": false
                    },
                    \"milestone\": {
                      \"url\": \"https://api.github.com/repos/octocat/Hello-World/milestones/1\",
                      \"html_url\": \"https://github.com/octocat/Hello-World/milestones/v1.0\",
                      \"labels_url\": \"https://api.github.com/repos/octocat/Hello-World/milestones/1/labels\",
                      \"id\": 1002604,
                      \"number\": 1,
                      \"state\": \"open\",
                      \"title\": \"v1.0\",
                      \"description\": \"Tracking milestone for version 1.0\",
                      \"creator\": {
                        \"login\": \"octocat\",
                        \"id\": 1,
                        \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                        \"gravatar_id\": \"\",
                        \"url\": \"https://api.github.com/users/octocat\",
                        \"html_url\": \"https://github.com/octocat\",
                        \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                        \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                        \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                        \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                        \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                        \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                        \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                        \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                        \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                        \"type\": \"User\",
                        \"site_admin\": false
                      },
                      \"open_issues\": 4,
                      \"closed_issues\": 8,
                      \"created_at\": \"2011-04-10T20:09:31Z\",
                      \"updated_at\": \"2014-03-03T18:58:10Z\",
                      \"closed_at\": \"2013-02-12T13:22:01Z\",
                      \"due_on\": \"2012-10-09T23:39:01Z\"
                    },
                    \"locked\": false,
                    \"created_at\": \"2011-01-26T19:01:12Z\",
                    \"updated_at\": \"2011-01-26T19:01:12Z\",
                    \"closed_at\": \"2011-01-26T19:01:12Z\",
                    \"merged_at\": \"2011-01-26T19:01:12Z\",
                    \"head\": {
                      \"label\": \"new-topic\",
                      \"ref\": \"new-topic\",
                      \"sha\": \"6dcb09b5b57875f334f61aebed695e2e4193db5e\",
                      \"user\": {
                        \"login\": \"octocat\",
                        \"id\": 1,
                        \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                        \"gravatar_id\": \"\",
                        \"url\": \"https://api.github.com/users/octocat\",
                        \"html_url\": \"https://github.com/octocat\",
                        \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                        \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                        \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                        \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                        \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                        \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                        \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                        \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                        \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                        \"type\": \"User\",
                        \"site_admin\": false
                      },
                      \"repo\": {
                        \"id\": 1296269,
                        \"owner\": {
                          \"login\": \"octocat\",
                          \"id\": 1,
                          \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                          \"gravatar_id\": \"\",
                          \"url\": \"https://api.github.com/users/octocat\",
                          \"html_url\": \"https://github.com/octocat\",
                          \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                          \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                          \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                          \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                          \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                          \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                          \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                          \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                          \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                          \"type\": \"User\",
                          \"site_admin\": false
                        },
                        \"name\": \"Hello-World\",
                        \"full_name\": \"octocat/Hello-World\",
                        \"description\": \"This your first repo!\",
                        \"private\": false,
                        \"fork\": false,
                        \"url\": \"https://api.github.com/repos/octocat/Hello-World\",
                        \"html_url\": \"https://github.com/octocat/Hello-World\",
                        \"archive_url\": \"http://api.github.com/repos/octocat/Hello-World/{archive_format}{/ref}\",
                        \"assignees_url\": \"http://api.github.com/repos/octocat/Hello-World/assignees{/user}\",
                        \"blobs_url\": \"http://api.github.com/repos/octocat/Hello-World/git/blobs{/sha}\",
                        \"branches_url\": \"http://api.github.com/repos/octocat/Hello-World/branches{/branch}\",
                        \"clone_url\": \"https://github.com/octocat/Hello-World.git\",
                        \"collaborators_url\": \"http://api.github.com/repos/octocat/Hello-World/collaborators{/collaborator}\",
                        \"comments_url\": \"http://api.github.com/repos/octocat/Hello-World/comments{/number}\",
                        \"commits_url\": \"http://api.github.com/repos/octocat/Hello-World/commits{/sha}\",
                        \"compare_url\": \"http://api.github.com/repos/octocat/Hello-World/compare/{base}...{head}\",
                        \"contents_url\": \"http://api.github.com/repos/octocat/Hello-World/contents/{+path}\",
                        \"contributors_url\": \"http://api.github.com/repos/octocat/Hello-World/contributors\",
                        \"deployments_url\": \"http://api.github.com/repos/octocat/Hello-World/deployments\",
                        \"downloads_url\": \"http://api.github.com/repos/octocat/Hello-World/downloads\",
                        \"events_url\": \"http://api.github.com/repos/octocat/Hello-World/events\",
                        \"forks_url\": \"http://api.github.com/repos/octocat/Hello-World/forks\",
                        \"git_commits_url\": \"http://api.github.com/repos/octocat/Hello-World/git/commits{/sha}\",
                        \"git_refs_url\": \"http://api.github.com/repos/octocat/Hello-World/git/refs{/sha}\",
                        \"git_tags_url\": \"http://api.github.com/repos/octocat/Hello-World/git/tags{/sha}\",
                        \"git_url\": \"git:github.com/octocat/Hello-World.git\",
                        \"hooks_url\": \"http://api.github.com/repos/octocat/Hello-World/hooks\",
                        \"issue_comment_url\": \"http://api.github.com/repos/octocat/Hello-World/issues/comments{/number}\",
                        \"issue_events_url\": \"http://api.github.com/repos/octocat/Hello-World/issues/events{/number}\",
                        \"issues_url\": \"http://api.github.com/repos/octocat/Hello-World/issues{/number}\",
                        \"keys_url\": \"http://api.github.com/repos/octocat/Hello-World/keys{/key_id}\",
                        \"labels_url\": \"http://api.github.com/repos/octocat/Hello-World/labels{/name}\",
                        \"languages_url\": \"http://api.github.com/repos/octocat/Hello-World/languages\",
                        \"merges_url\": \"http://api.github.com/repos/octocat/Hello-World/merges\",
                        \"milestones_url\": \"http://api.github.com/repos/octocat/Hello-World/milestones{/number}\",
                        \"mirror_url\": \"git:git.example.com/octocat/Hello-World\",
                        \"notifications_url\": \"http://api.github.com/repos/octocat/Hello-World/notifications{?since, all, participating}\",
                        \"pulls_url\": \"http://api.github.com/repos/octocat/Hello-World/pulls{/number}\",
                        \"releases_url\": \"http://api.github.com/repos/octocat/Hello-World/releases{/id}\",
                        \"ssh_url\": \"git@github.com:octocat/Hello-World.git\",
                        \"stargazers_url\": \"http://api.github.com/repos/octocat/Hello-World/stargazers\",
                        \"statuses_url\": \"http://api.github.com/repos/octocat/Hello-World/statuses/{sha}\",
                        \"subscribers_url\": \"http://api.github.com/repos/octocat/Hello-World/subscribers\",
                        \"subscription_url\": \"http://api.github.com/repos/octocat/Hello-World/subscription\",
                        \"svn_url\": \"https://svn.github.com/octocat/Hello-World\",
                        \"tags_url\": \"http://api.github.com/repos/octocat/Hello-World/tags\",
                        \"teams_url\": \"http://api.github.com/repos/octocat/Hello-World/teams\",
                        \"trees_url\": \"http://api.github.com/repos/octocat/Hello-World/git/trees{/sha}\",
                        \"homepage\": \"https://github.com\",
                        \"language\": null,
                        \"forks_count\": 9,
                        \"stargazers_count\": 80,
                        \"watchers_count\": 80,
                        \"size\": 108,
                        \"default_branch\": \"master\",
                        \"open_issues_count\": 0,
                        \"has_issues\": true,
                        \"has_wiki\": true,
                        \"has_pages\": false,
                        \"has_downloads\": true,
                        \"pushed_at\": \"2011-01-26T19:06:43Z\",
                        \"created_at\": \"2011-01-26T19:01:12Z\",
                        \"updated_at\": \"2011-01-26T19:14:43Z\",
                        \"permissions\": {
                          \"admin\": false,
                          \"push\": false,
                          \"pull\": true
                        }
                      }
                    },
                    \"base\": {
                      \"label\": \"master\",
                      \"ref\": \"master\",
                      \"sha\": \"6dcb09b5b57875f334f61aebed695e2e4193db5e\",
                      \"user\": {
                        \"login\": \"octocat\",
                        \"id\": 1,
                        \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                        \"gravatar_id\": \"\",
                        \"url\": \"https://api.github.com/users/octocat\",
                        \"html_url\": \"https://github.com/octocat\",
                        \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                        \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                        \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                        \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                        \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                        \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                        \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                        \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                        \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                        \"type\": \"User\",
                        \"site_admin\": false
                      },
                      \"repo\": {
                        \"id\": 1296269,
                        \"owner\": {
                          \"login\": \"octocat\",
                          \"id\": 1,
                          \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                          \"gravatar_id\": \"\",
                          \"url\": \"https://api.github.com/users/octocat\",
                          \"html_url\": \"https://github.com/octocat\",
                          \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                          \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                          \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                          \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                          \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                          \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                          \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                          \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                          \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                          \"type\": \"User\",
                          \"site_admin\": false
                        },
                        \"name\": \"Hello-World\",
                        \"full_name\": \"octocat/Hello-World\",
                        \"description\": \"This your first repo!\",
                        \"private\": false,
                        \"fork\": false,
                        \"url\": \"https://api.github.com/repos/octocat/Hello-World\",
                        \"html_url\": \"https://github.com/octocat/Hello-World\",
                        \"archive_url\": \"http://api.github.com/repos/octocat/Hello-World/{archive_format}{/ref}\",
                        \"assignees_url\": \"http://api.github.com/repos/octocat/Hello-World/assignees{/user}\",
                        \"blobs_url\": \"http://api.github.com/repos/octocat/Hello-World/git/blobs{/sha}\",
                        \"branches_url\": \"http://api.github.com/repos/octocat/Hello-World/branches{/branch}\",
                        \"clone_url\": \"https://github.com/octocat/Hello-World.git\",
                        \"collaborators_url\": \"http://api.github.com/repos/octocat/Hello-World/collaborators{/collaborator}\",
                        \"comments_url\": \"http://api.github.com/repos/octocat/Hello-World/comments{/number}\",
                        \"commits_url\": \"http://api.github.com/repos/octocat/Hello-World/commits{/sha}\",
                        \"compare_url\": \"http://api.github.com/repos/octocat/Hello-World/compare/{base}...{head}\",
                        \"contents_url\": \"http://api.github.com/repos/octocat/Hello-World/contents/{+path}\",
                        \"contributors_url\": \"http://api.github.com/repos/octocat/Hello-World/contributors\",
                        \"deployments_url\": \"http://api.github.com/repos/octocat/Hello-World/deployments\",
                        \"downloads_url\": \"http://api.github.com/repos/octocat/Hello-World/downloads\",
                        \"events_url\": \"http://api.github.com/repos/octocat/Hello-World/events\",
                        \"forks_url\": \"http://api.github.com/repos/octocat/Hello-World/forks\",
                        \"git_commits_url\": \"http://api.github.com/repos/octocat/Hello-World/git/commits{/sha}\",
                        \"git_refs_url\": \"http://api.github.com/repos/octocat/Hello-World/git/refs{/sha}\",
                        \"git_tags_url\": \"http://api.github.com/repos/octocat/Hello-World/git/tags{/sha}\",
                        \"git_url\": \"git:github.com/octocat/Hello-World.git\",
                        \"hooks_url\": \"http://api.github.com/repos/octocat/Hello-World/hooks\",
                        \"issue_comment_url\": \"http://api.github.com/repos/octocat/Hello-World/issues/comments{/number}\",
                        \"issue_events_url\": \"http://api.github.com/repos/octocat/Hello-World/issues/events{/number}\",
                        \"issues_url\": \"http://api.github.com/repos/octocat/Hello-World/issues{/number}\",
                        \"keys_url\": \"http://api.github.com/repos/octocat/Hello-World/keys{/key_id}\",
                        \"labels_url\": \"http://api.github.com/repos/octocat/Hello-World/labels{/name}\",
                        \"languages_url\": \"http://api.github.com/repos/octocat/Hello-World/languages\",
                        \"merges_url\": \"http://api.github.com/repos/octocat/Hello-World/merges\",
                        \"milestones_url\": \"http://api.github.com/repos/octocat/Hello-World/milestones{/number}\",
                        \"mirror_url\": \"git:git.example.com/octocat/Hello-World\",
                        \"notifications_url\": \"http://api.github.com/repos/octocat/Hello-World/notifications{?since, all, participating}\",
                        \"pulls_url\": \"http://api.github.com/repos/octocat/Hello-World/pulls{/number}\",
                        \"releases_url\": \"http://api.github.com/repos/octocat/Hello-World/releases{/id}\",
                        \"ssh_url\": \"git@github.com:octocat/Hello-World.git\",
                        \"stargazers_url\": \"http://api.github.com/repos/octocat/Hello-World/stargazers\",
                        \"statuses_url\": \"http://api.github.com/repos/octocat/Hello-World/statuses/{sha}\",
                        \"subscribers_url\": \"http://api.github.com/repos/octocat/Hello-World/subscribers\",
                        \"subscription_url\": \"http://api.github.com/repos/octocat/Hello-World/subscription\",
                        \"svn_url\": \"https://svn.github.com/octocat/Hello-World\",
                        \"tags_url\": \"http://api.github.com/repos/octocat/Hello-World/tags\",
                        \"teams_url\": \"http://api.github.com/repos/octocat/Hello-World/teams\",
                        \"trees_url\": \"http://api.github.com/repos/octocat/Hello-World/git/trees{/sha}\",
                        \"homepage\": \"https://github.com\",
                        \"language\": null,
                        \"forks_count\": 9,
                        \"stargazers_count\": 80,
                        \"watchers_count\": 80,
                        \"size\": 108,
                        \"default_branch\": \"master\",
                        \"open_issues_count\": 0,
                        \"has_issues\": true,
                        \"has_wiki\": true,
                        \"has_pages\": false,
                        \"has_downloads\": true,
                        \"pushed_at\": \"2011-01-26T19:06:43Z\",
                        \"created_at\": \"2011-01-26T19:01:12Z\",
                        \"updated_at\": \"2011-01-26T19:14:43Z\",
                        \"permissions\": {
                          \"admin\": false,
                          \"push\": false,
                          \"pull\": true
                        }
                      }
                    },
                    \"_links\": {
                      \"self\": {
                        \"href\": \"https://api.github.com/repos/octocat/Hello-World/pulls/1347\"
                      },
                      \"html\": {
                        \"href\": \"https://github.com/octocat/Hello-World/pull/1347\"
                      },
                      \"issue\": {
                        \"href\": \"https://api.github.com/repos/octocat/Hello-World/issues/1347\"
                      },
                      \"comments\": {
                        \"href\": \"https://api.github.com/repos/octocat/Hello-World/issues/1347/comments\"
                      },
                      \"review_comments\": {
                        \"href\": \"https://api.github.com/repos/octocat/Hello-World/pulls/1347/comments\"
                      },
                      \"review_comment\": {
                        \"href\": \"https://api.github.com/repos/octocat/Hello-World/pulls/comments/{number}\"
                      },
                      \"commits\": {
                        \"href\": \"https://api.github.com/repos/octocat/Hello-World/pulls/1347/commits\"
                      },
                      \"statuses\": {
                        \"href\": \"https://api.github.com/repos/octocat/Hello-World/statuses/6dcb09b5b57875f334f61aebed695e2e4193db5e\"
                      }
                    },
                    \"user\": {
                      \"login\": \"octocat\",
                      \"id\": 1,
                      \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                      \"gravatar_id\": \"\",
                      \"url\": \"https://api.github.com/users/octocat\",
                      \"html_url\": \"https://github.com/octocat\",
                      \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                      \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                      \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                      \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                      \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                      \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                      \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                      \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                      \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                      \"type\": \"User\",
                      \"site_admin\": false
                    },
                    \"merge_commit_sha\": \"e5bd3914e2e596debea16f433f57875b5b90bcd6\",
                    \"merged\": false,
                    \"mergeable\": true,
                    \"merged_by\": {
                      \"login\": \"octocat\",
                      \"id\": 1,
                      \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                      \"gravatar_id\": \"\",
                      \"url\": \"https://api.github.com/users/octocat\",
                      \"html_url\": \"https://github.com/octocat\",
                      \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                      \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                      \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                      \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                      \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                      \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                      \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                      \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                      \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                      \"type\": \"User\",
                      \"site_admin\": false
                    },
                    \"comments\": 10,
                    \"commits\": 3,
                    \"additions\": 100,
                    \"deletions\": 3,
                    \"changed_files\": 5
                  }"
		}
	}
}
```

<a name="getAllPullRequests"/>
## Github.getAllPullRequests
List pull requests

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| state         | String     | Either open, closed, or all to filter by state. Default: open (optional)
| head          | String     | Filter pulls by head user and branch name in the format of user:ref-name. Example: github:new-script-format. (optional)
| base          | String     | Filter pulls by base branch name. Example: gh-pages. (optional)
| sort          | String     | Possible values are: `created`, `updated`, `popularity`, `long-running`, Default: `created` (optional)
| direction     | String     | The direction of the sort. Can be either asc or desc. Default: desc, when sort is created or sort is not specified, otherwise asc. (optional)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"state": "...",
	"head": "...",
	"base": "...",
	"sort": "...",
	"direction": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"[
                    {
                      \"id\": 1,
                      \"url\": \"https://api.github.com/repos/octocat/Hello-World/pulls/1347\",
                      \"html_url\": \"https://github.com/octocat/Hello-World/pull/1347\",
                      \"diff_url\": \"https://github.com/octocat/Hello-World/pull/1347.diff\",
                      \"patch_url\": \"https://github.com/octocat/Hello-World/pull/1347.patch\",
                      \"issue_url\": \"https://api.github.com/repos/octocat/Hello-World/issues/1347\",
                      \"commits_url\": \"https://api.github.com/repos/octocat/Hello-World/pulls/1347/commits\",
                      \"review_comments_url\": \"https://api.github.com/repos/octocat/Hello-World/pulls/1347/comments\",
                      \"review_comment_url\": \"https://api.github.com/repos/octocat/Hello-World/pulls/comments/{number}\",
                      \"comments_url\": \"https://api.github.com/repos/octocat/Hello-World/issues/1347/comments\",
                      \"statuses_url\": \"https://api.github.com/repos/octocat/Hello-World/statuses/6dcb09b5b57875f334f61aebed695e2e4193db5e\",
                      \"number\": 1347,
                      \"state\": \"open\",
                      \"title\": \"new-feature\",
                      \"body\": \"Please pull these awesome changes\",
                      \"assignee\": {
                        \"login\": \"octocat\",
                        \"id\": 1,
                        \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                        \"gravatar_id\": \"\",
                        \"url\": \"https://api.github.com/users/octocat\",
                        \"html_url\": \"https://github.com/octocat\",
                        \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                        \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                        \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                        \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                        \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                        \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                        \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                        \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                        \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                        \"type\": \"User\",
                        \"site_admin\": false
                      },
                      \"milestone\": {
                        \"url\": \"https://api.github.com/repos/octocat/Hello-World/milestones/1\",
                        \"html_url\": \"https://github.com/octocat/Hello-World/milestones/v1.0\",
                        \"labels_url\": \"https://api.github.com/repos/octocat/Hello-World/milestones/1/labels\",
                        \"id\": 1002604,
                        \"number\": 1,
                        \"state\": \"open\",
                        \"title\": \"v1.0\",
                        \"description\": \"Tracking milestone for version 1.0\",
                        \"creator\": {
                          \"login\": \"octocat\",
                          \"id\": 1,
                          \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                          \"gravatar_id\": \"\",
                          \"url\": \"https://api.github.com/users/octocat\",
                          \"html_url\": \"https://github.com/octocat\",
                          \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                          \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                          \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                          \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                          \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                          \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                          \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                          \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                          \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                          \"type\": \"User\",
                          \"site_admin\": false
                        },
                        \"open_issues\": 4,
                        \"closed_issues\": 8,
                        \"created_at\": \"2011-04-10T20:09:31Z\",
                        \"updated_at\": \"2014-03-03T18:58:10Z\",
                        \"closed_at\": \"2013-02-12T13:22:01Z\",
                        \"due_on\": \"2012-10-09T23:39:01Z\"
                      },
                      \"locked\": false,
                      \"created_at\": \"2011-01-26T19:01:12Z\",
                      \"updated_at\": \"2011-01-26T19:01:12Z\",
                      \"closed_at\": \"2011-01-26T19:01:12Z\",
                      \"merged_at\": \"2011-01-26T19:01:12Z\",
                      \"head\": {
                        \"label\": \"new-topic\",
                        \"ref\": \"new-topic\",
                        \"sha\": \"6dcb09b5b57875f334f61aebed695e2e4193db5e\",
                        \"user\": {
                          \"login\": \"octocat\",
                          \"id\": 1,
                          \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                          \"gravatar_id\": \"\",
                          \"url\": \"https://api.github.com/users/octocat\",
                          \"html_url\": \"https://github.com/octocat\",
                          \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                          \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                          \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                          \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                          \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                          \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                          \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                          \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                          \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                          \"type\": \"User\",
                          \"site_admin\": false
                        },
                        \"repo\": {
                          \"id\": 1296269,
                          \"owner\": {
                            \"login\": \"octocat\",
                            \"id\": 1,
                            \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                            \"gravatar_id\": \"\",
                            \"url\": \"https://api.github.com/users/octocat\",
                            \"html_url\": \"https://github.com/octocat\",
                            \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                            \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                            \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                            \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                            \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                            \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                            \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                            \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                            \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                            \"type\": \"User\",
                            \"site_admin\": false
                          },
                          \"name\": \"Hello-World\",
                          \"full_name\": \"octocat/Hello-World\",
                          \"description\": \"This your first repo!\",
                          \"private\": false,
                          \"fork\": false,
                          \"url\": \"https://api.github.com/repos/octocat/Hello-World\",
                          \"html_url\": \"https://github.com/octocat/Hello-World\",
                          \"archive_url\": \"http://api.github.com/repos/octocat/Hello-World/{archive_format}{/ref}\",
                          \"assignees_url\": \"http://api.github.com/repos/octocat/Hello-World/assignees{/user}\",
                          \"blobs_url\": \"http://api.github.com/repos/octocat/Hello-World/git/blobs{/sha}\",
                          \"branches_url\": \"http://api.github.com/repos/octocat/Hello-World/branches{/branch}\",
                          \"clone_url\": \"https://github.com/octocat/Hello-World.git\",
                          \"collaborators_url\": \"http://api.github.com/repos/octocat/Hello-World/collaborators{/collaborator}\",
                          \"comments_url\": \"http://api.github.com/repos/octocat/Hello-World/comments{/number}\",
                          \"commits_url\": \"http://api.github.com/repos/octocat/Hello-World/commits{/sha}\",
                          \"compare_url\": \"http://api.github.com/repos/octocat/Hello-World/compare/{base}...{head}\",
                          \"contents_url\": \"http://api.github.com/repos/octocat/Hello-World/contents/{+path}\",
                          \"contributors_url\": \"http://api.github.com/repos/octocat/Hello-World/contributors\",
                          \"deployments_url\": \"http://api.github.com/repos/octocat/Hello-World/deployments\",
                          \"downloads_url\": \"http://api.github.com/repos/octocat/Hello-World/downloads\",
                          \"events_url\": \"http://api.github.com/repos/octocat/Hello-World/events\",
                          \"forks_url\": \"http://api.github.com/repos/octocat/Hello-World/forks\",
                          \"git_commits_url\": \"http://api.github.com/repos/octocat/Hello-World/git/commits{/sha}\",
                          \"git_refs_url\": \"http://api.github.com/repos/octocat/Hello-World/git/refs{/sha}\",
                          \"git_tags_url\": \"http://api.github.com/repos/octocat/Hello-World/git/tags{/sha}\",
                          \"git_url\": \"git:github.com/octocat/Hello-World.git\",
                          \"hooks_url\": \"http://api.github.com/repos/octocat/Hello-World/hooks\",
                          \"issue_comment_url\": \"http://api.github.com/repos/octocat/Hello-World/issues/comments{/number}\",
                          \"issue_events_url\": \"http://api.github.com/repos/octocat/Hello-World/issues/events{/number}\",
                          \"issues_url\": \"http://api.github.com/repos/octocat/Hello-World/issues{/number}\",
                          \"keys_url\": \"http://api.github.com/repos/octocat/Hello-World/keys{/key_id}\",
                          \"labels_url\": \"http://api.github.com/repos/octocat/Hello-World/labels{/name}\",
                          \"languages_url\": \"http://api.github.com/repos/octocat/Hello-World/languages\",
                          \"merges_url\": \"http://api.github.com/repos/octocat/Hello-World/merges\",
                          \"milestones_url\": \"http://api.github.com/repos/octocat/Hello-World/milestones{/number}\",
                          \"mirror_url\": \"git:git.example.com/octocat/Hello-World\",
                          \"notifications_url\": \"http://api.github.com/repos/octocat/Hello-World/notifications{?since, all, participating}\",
                          \"pulls_url\": \"http://api.github.com/repos/octocat/Hello-World/pulls{/number}\",
                          \"releases_url\": \"http://api.github.com/repos/octocat/Hello-World/releases{/id}\",
                          \"ssh_url\": \"git@github.com:octocat/Hello-World.git\",
                          \"stargazers_url\": \"http://api.github.com/repos/octocat/Hello-World/stargazers\",
                          \"statuses_url\": \"http://api.github.com/repos/octocat/Hello-World/statuses/{sha}\",
                          \"subscribers_url\": \"http://api.github.com/repos/octocat/Hello-World/subscribers\",
                          \"subscription_url\": \"http://api.github.com/repos/octocat/Hello-World/subscription\",
                          \"svn_url\": \"https://svn.github.com/octocat/Hello-World\",
                          \"tags_url\": \"http://api.github.com/repos/octocat/Hello-World/tags\",
                          \"teams_url\": \"http://api.github.com/repos/octocat/Hello-World/teams\",
                          \"trees_url\": \"http://api.github.com/repos/octocat/Hello-World/git/trees{/sha}\",
                          \"homepage\": \"https://github.com\",
                          \"language\": null,
                          \"forks_count\": 9,
                          \"stargazers_count\": 80,
                          \"watchers_count\": 80,
                          \"size\": 108,
                          \"default_branch\": \"master\",
                          \"open_issues_count\": 0,
                          \"has_issues\": true,
                          \"has_wiki\": true,
                          \"has_pages\": false,
                          \"has_downloads\": true,
                          \"pushed_at\": \"2011-01-26T19:06:43Z\",
                          \"created_at\": \"2011-01-26T19:01:12Z\",
                          \"updated_at\": \"2011-01-26T19:14:43Z\",
                          \"permissions\": {
                            \"admin\": false,
                            \"push\": false,
                            \"pull\": true
                          }
                        }
                      },
                      \"base\": {
                        \"label\": \"master\",
                        \"ref\": \"master\",
                        \"sha\": \"6dcb09b5b57875f334f61aebed695e2e4193db5e\",
                        \"user\": {
                          \"login\": \"octocat\",
                          \"id\": 1,
                          \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                          \"gravatar_id\": \"\",
                          \"url\": \"https://api.github.com/users/octocat\",
                          \"html_url\": \"https://github.com/octocat\",
                          \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                          \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                          \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                          \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                          \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                          \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                          \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                          \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                          \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                          \"type\": \"User\",
                          \"site_admin\": false
                        },
                        \"repo\": {
                          \"id\": 1296269,
                          \"owner\": {
                            \"login\": \"octocat\",
                            \"id\": 1,
                            \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                            \"gravatar_id\": \"\",
                            \"url\": \"https://api.github.com/users/octocat\",
                            \"html_url\": \"https://github.com/octocat\",
                            \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                            \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                            \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                            \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                            \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                            \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                            \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                            \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                            \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                            \"type\": \"User\",
                            \"site_admin\": false
                          },
                          \"name\": \"Hello-World\",
                          \"full_name\": \"octocat/Hello-World\",
                          \"description\": \"This your first repo!\",
                          \"private\": false,
                          \"fork\": false,
                          \"url\": \"https://api.github.com/repos/octocat/Hello-World\",
                          \"html_url\": \"https://github.com/octocat/Hello-World\",
                          \"archive_url\": \"http://api.github.com/repos/octocat/Hello-World/{archive_format}{/ref}\",
                          \"assignees_url\": \"http://api.github.com/repos/octocat/Hello-World/assignees{/user}\",
                          \"blobs_url\": \"http://api.github.com/repos/octocat/Hello-World/git/blobs{/sha}\",
                          \"branches_url\": \"http://api.github.com/repos/octocat/Hello-World/branches{/branch}\",
                          \"clone_url\": \"https://github.com/octocat/Hello-World.git\",
                          \"collaborators_url\": \"http://api.github.com/repos/octocat/Hello-World/collaborators{/collaborator}\",
                          \"comments_url\": \"http://api.github.com/repos/octocat/Hello-World/comments{/number}\",
                          \"commits_url\": \"http://api.github.com/repos/octocat/Hello-World/commits{/sha}\",
                          \"compare_url\": \"http://api.github.com/repos/octocat/Hello-World/compare/{base}...{head}\",
                          \"contents_url\": \"http://api.github.com/repos/octocat/Hello-World/contents/{+path}\",
                          \"contributors_url\": \"http://api.github.com/repos/octocat/Hello-World/contributors\",
                          \"deployments_url\": \"http://api.github.com/repos/octocat/Hello-World/deployments\",
                          \"downloads_url\": \"http://api.github.com/repos/octocat/Hello-World/downloads\",
                          \"events_url\": \"http://api.github.com/repos/octocat/Hello-World/events\",
                          \"forks_url\": \"http://api.github.com/repos/octocat/Hello-World/forks\",
                          \"git_commits_url\": \"http://api.github.com/repos/octocat/Hello-World/git/commits{/sha}\",
                          \"git_refs_url\": \"http://api.github.com/repos/octocat/Hello-World/git/refs{/sha}\",
                          \"git_tags_url\": \"http://api.github.com/repos/octocat/Hello-World/git/tags{/sha}\",
                          \"git_url\": \"git:github.com/octocat/Hello-World.git\",
                          \"hooks_url\": \"http://api.github.com/repos/octocat/Hello-World/hooks\",
                          \"issue_comment_url\": \"http://api.github.com/repos/octocat/Hello-World/issues/comments{/number}\",
                          \"issue_events_url\": \"http://api.github.com/repos/octocat/Hello-World/issues/events{/number}\",
                          \"issues_url\": \"http://api.github.com/repos/octocat/Hello-World/issues{/number}\",
                          \"keys_url\": \"http://api.github.com/repos/octocat/Hello-World/keys{/key_id}\",
                          \"labels_url\": \"http://api.github.com/repos/octocat/Hello-World/labels{/name}\",
                          \"languages_url\": \"http://api.github.com/repos/octocat/Hello-World/languages\",
                          \"merges_url\": \"http://api.github.com/repos/octocat/Hello-World/merges\",
                          \"milestones_url\": \"http://api.github.com/repos/octocat/Hello-World/milestones{/number}\",
                          \"mirror_url\": \"git:git.example.com/octocat/Hello-World\",
                          \"notifications_url\": \"http://api.github.com/repos/octocat/Hello-World/notifications{?since, all, participating}\",
                          \"pulls_url\": \"http://api.github.com/repos/octocat/Hello-World/pulls{/number}\",
                          \"releases_url\": \"http://api.github.com/repos/octocat/Hello-World/releases{/id}\",
                          \"ssh_url\": \"git@github.com:octocat/Hello-World.git\",
                          \"stargazers_url\": \"http://api.github.com/repos/octocat/Hello-World/stargazers\",
                          \"statuses_url\": \"http://api.github.com/repos/octocat/Hello-World/statuses/{sha}\",
                          \"subscribers_url\": \"http://api.github.com/repos/octocat/Hello-World/subscribers\",
                          \"subscription_url\": \"http://api.github.com/repos/octocat/Hello-World/subscription\",
                          \"svn_url\": \"https://svn.github.com/octocat/Hello-World\",
                          \"tags_url\": \"http://api.github.com/repos/octocat/Hello-World/tags\",
                          \"teams_url\": \"http://api.github.com/repos/octocat/Hello-World/teams\",
                          \"trees_url\": \"http://api.github.com/repos/octocat/Hello-World/git/trees{/sha}\",
                          \"homepage\": \"https://github.com\",
                          \"language\": null,
                          \"forks_count\": 9,
                          \"stargazers_count\": 80,
                          \"watchers_count\": 80,
                          \"size\": 108,
                          \"default_branch\": \"master\",
                          \"open_issues_count\": 0,
                          \"has_issues\": true,
                          \"has_wiki\": true,
                          \"has_pages\": false,
                          \"has_downloads\": true,
                          \"pushed_at\": \"2011-01-26T19:06:43Z\",
                          \"created_at\": \"2011-01-26T19:01:12Z\",
                          \"updated_at\": \"2011-01-26T19:14:43Z\",
                          \"permissions\": {
                            \"admin\": false,
                            \"push\": false,
                            \"pull\": true
                          }
                        }
                      },
                      \"_links\": {
                        \"self\": {
                          \"href\": \"https://api.github.com/repos/octocat/Hello-World/pulls/1347\"
                        },
                        \"html\": {
                          \"href\": \"https://github.com/octocat/Hello-World/pull/1347\"
                        },
                        \"issue\": {
                          \"href\": \"https://api.github.com/repos/octocat/Hello-World/issues/1347\"
                        },
                        \"comments\": {
                          \"href\": \"https://api.github.com/repos/octocat/Hello-World/issues/1347/comments\"
                        },
                        \"review_comments\": {
                          \"href\": \"https://api.github.com/repos/octocat/Hello-World/pulls/1347/comments\"
                        },
                        \"review_comment\": {
                          \"href\": \"https://api.github.com/repos/octocat/Hello-World/pulls/comments/{number}\"
                        },
                        \"commits\": {
                          \"href\": \"https://api.github.com/repos/octocat/Hello-World/pulls/1347/commits\"
                        },
                        \"statuses\": {
                          \"href\": \"https://api.github.com/repos/octocat/Hello-World/statuses/6dcb09b5b57875f334f61aebed695e2e4193db5e\"
                        }
                      },
                      \"user\": {
                        \"login\": \"octocat\",
                        \"id\": 1,
                        \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                        \"gravatar_id\": \"\",
                        \"url\": \"https://api.github.com/users/octocat\",
                        \"html_url\": \"https://github.com/octocat\",
                        \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                        \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                        \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                        \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                        \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                        \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                        \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                        \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                        \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                        \"type\": \"User\",
                        \"site_admin\": false
                      }
                    }
                  ]"
		}
	}
}
```

<a name="getPullRequestComment"/>
## Github.getPullRequestComment
Get a single comment

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| number        | Number     | The number of the comment (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"number": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"{
                    \"url\": \"https://api.github.com/repos/octocat/Hello-World/pulls/comments/1\",
                    \"id\": 1,
                    \"diff_hunk\": \"@@ -16,33 +16,40 @@ public class Connection : IConnection...\",
                    \"path\": \"file1.txt\",
                    \"position\": 1,
                    \"original_position\": 4,
                    \"commit_id\": \"6dcb09b5b57875f334f61aebed695e2e4193db5e\",
                    \"original_commit_id\": \"9c48853fa3dc5c1c3d6f1f1cd1f2743e72652840\",
                    \"user\": {
                      \"login\": \"octocat\",
                      \"id\": 1,
                      \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                      \"gravatar_id\": \"\",
                      \"url\": \"https://api.github.com/users/octocat\",
                      \"html_url\": \"https://github.com/octocat\",
                      \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                      \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                      \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                      \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                      \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                      \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                      \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                      \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                      \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                      \"type\": \"User\",
                      \"site_admin\": false
                    },
                    \"body\": \"Great stuff\",
                    \"created_at\": \"2011-04-14T16:00:49Z\",
                    \"updated_at\": \"2011-04-14T16:00:49Z\",
                    \"html_url\": \"https://github.com/octocat/Hello-World/pull/1#discussion-diff-1\",
                    \"pull_request_url\": \"https://api.github.com/repos/octocat/Hello-World/pulls/1\",
                    \"_links\": {
                      \"self\": {
                        \"href\": \"https://api.github.com/repos/octocat/Hello-World/pulls/comments/1\"
                      },
                      \"html\": {
                        \"href\": \"https://github.com/octocat/Hello-World/pull/1#discussion-diff-1\"
                      },
                      \"pull_request\": {
                        \"href\": \"https://api.github.com/repos/octocat/Hello-World/pulls/1\"
                      }
                    }
                  }"
		}
	}
}
```

<a name="getPullRequestComments"/>
## Github.getPullRequestComments
List comments on a pull request

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| number        | Number     | The number of the pull request (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"number": 0,
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"[
                    {
                      \"url\": \"https://api.github.com/repos/octocat/Hello-World/pulls/comments/1\",
                      \"id\": 1,
                      \"diff_hunk\": \"@@ -16,33 +16,40 @@ public class Connection : IConnection...\",
                      \"path\": \"file1.txt\",
                      \"position\": 1,
                      \"original_position\": 4,
                      \"commit_id\": \"6dcb09b5b57875f334f61aebed695e2e4193db5e\",
                      \"original_commit_id\": \"9c48853fa3dc5c1c3d6f1f1cd1f2743e72652840\",
                      \"user\": {
                        \"login\": \"octocat\",
                        \"id\": 1,
                        \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                        \"gravatar_id\": \"\",
                        \"url\": \"https://api.github.com/users/octocat\",
                        \"html_url\": \"https://github.com/octocat\",
                        \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                        \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                        \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                        \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                        \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                        \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                        \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                        \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                        \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                        \"type\": \"User\",
                        \"site_admin\": false
                      },
                      \"body\": \"Great stuff\",
                      \"created_at\": \"2011-04-14T16:00:49Z\",
                      \"updated_at\": \"2011-04-14T16:00:49Z\",
                      \"html_url\": \"https://github.com/octocat/Hello-World/pull/1#discussion-diff-1\",
                      \"pull_request_url\": \"https://api.github.com/repos/octocat/Hello-World/pulls/1\",
                      \"_links\": {
                        \"self\": {
                          \"href\": \"https://api.github.com/repos/octocat/Hello-World/pulls/comments/1\"
                        },
                        \"html\": {
                          \"href\": \"https://github.com/octocat/Hello-World/pull/1#discussion-diff-1\"
                        },
                        \"pull_request\": {
                          \"href\": \"https://api.github.com/repos/octocat/Hello-World/pulls/1\"
                        }
                      }
                    }
                  ]"
		}
	}
}
```

<a name="getPullRequestCommentsForRepository"/>
## Github.getPullRequestCommentsForRepository
List comments in a repository

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| sort          | String     | Possible values are: `created`, `updated`, Default: `created` (optional)
| direction     | String     | Can be either asc or desc. Ignored without sort parameter. (optional)
| since         | String     | Only comments updated at or after this time are returned. Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ (optional)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"sort": "...",
	"direction": "...",
	"since": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"[
                    {
                      \"url\": \"https://api.github.com/repos/octocat/Hello-World/pulls/comments/1\",
                      \"id\": 1,
                      \"diff_hunk\": \"@@ -16,33 +16,40 @@ public class Connection : IConnection...\",
                      \"path\": \"file1.txt\",
                      \"position\": 1,
                      \"original_position\": 4,
                      \"commit_id\": \"6dcb09b5b57875f334f61aebed695e2e4193db5e\",
                      \"original_commit_id\": \"9c48853fa3dc5c1c3d6f1f1cd1f2743e72652840\",
                      \"user\": {
                        \"login\": \"octocat\",
                        \"id\": 1,
                        \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                        \"gravatar_id\": \"\",
                        \"url\": \"https://api.github.com/users/octocat\",
                        \"html_url\": \"https://github.com/octocat\",
                        \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                        \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                        \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                        \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                        \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                        \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                        \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                        \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                        \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                        \"type\": \"User\",
                        \"site_admin\": false
                      },
                      \"body\": \"Great stuff\",
                      \"created_at\": \"2011-04-14T16:00:49Z\",
                      \"updated_at\": \"2011-04-14T16:00:49Z\",
                      \"html_url\": \"https://github.com/octocat/Hello-World/pull/1#discussion-diff-1\",
                      \"pull_request_url\": \"https://api.github.com/repos/octocat/Hello-World/pulls/1\",
                      \"_links\": {
                        \"self\": {
                          \"href\": \"https://api.github.com/repos/octocat/Hello-World/pulls/comments/1\"
                        },
                        \"html\": {
                          \"href\": \"https://github.com/octocat/Hello-World/pull/1#discussion-diff-1\"
                        },
                        \"pull_request\": {
                          \"href\": \"https://api.github.com/repos/octocat/Hello-World/pulls/1\"
                        }
                      }
                    }
                  ]"
		}
	}
}
```

<a name="getPullRequestCommits"/>
## Github.getPullRequestCommits
List commits on a pull request

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| number        | Number     | The number of the pull request (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"number": 0,
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"[
                    {
                      \"url\": \"https://api.github.com/repos/octocat/Hello-World/pulls/comments/1\",
                      \"id\": 1,
                      \"diff_hunk\": \"@@ -16,33 +16,40 @@ public class Connection : IConnection...\",
                      \"path\": \"file1.txt\",
                      \"position\": 1,
                      \"original_position\": 4,
                      \"commit_id\": \"6dcb09b5b57875f334f61aebed695e2e4193db5e\",
                      \"original_commit_id\": \"9c48853fa3dc5c1c3d6f1f1cd1f2743e72652840\",
                      \"user\": {
                        \"login\": \"octocat\",
                        \"id\": 1,
                        \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                        \"gravatar_id\": \"\",
                        \"url\": \"https://api.github.com/users/octocat\",
                        \"html_url\": \"https://github.com/octocat\",
                        \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                        \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                        \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                        \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                        \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                        \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                        \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                        \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                        \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                        \"type\": \"User\",
                        \"site_admin\": false
                      },
                      \"body\": \"Great stuff\",
                      \"created_at\": \"2011-04-14T16:00:49Z\",
                      \"updated_at\": \"2011-04-14T16:00:49Z\",
                      \"html_url\": \"https://github.com/octocat/Hello-World/pull/1#discussion-diff-1\",
                      \"pull_request_url\": \"https://api.github.com/repos/octocat/Hello-World/pulls/1\",
                      \"_links\": {
                        \"self\": {
                          \"href\": \"https://api.github.com/repos/octocat/Hello-World/pulls/comments/1\"
                        },
                        \"html\": {
                          \"href\": \"https://github.com/octocat/Hello-World/pull/1#discussion-diff-1\"
                        },
                        \"pull_request\": {
                          \"href\": \"https://api.github.com/repos/octocat/Hello-World/pulls/1\"
                        }
                      }
                    }
                  ]"
		}
	}
}
```

<a name="getPullRequestFiles"/>
## Github.getPullRequestFiles
List pull requests files

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| number        | Number     | The number of the pull request (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"number": 0,
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"[
                    {
                      \"sha\": \"bbcd538c8e72b8c175046e27cc8f907076331401\",
                      \"filename\": \"file1.txt\",
                      \"status\": \"added\",
                      \"additions\": 103,
                      \"deletions\": 21,
                      \"changes\": 124,
                      \"blob_url\": \"https://github.com/octocat/Hello-World/blob/6dcb09b5b57875f334f61aebed695e2e4193db5e/file1.txt\",
                      \"raw_url\": \"https://github.com/octocat/Hello-World/raw/6dcb09b5b57875f334f61aebed695e2e4193db5e/file1.txt\",
                      \"contents_url\": \"https://api.github.com/repos/octocat/Hello-World/contents/file1.txt?ref=6dcb09b5b57875f334f61aebed695e2e4193db5e\",
                      \"patch\": \"@@ -132,7 +132,7 @@ module Test @@ -1000,7 +1000,7 @@ module Test\"
                    }
                  ]"
		}
	}
}
```

<a name="mergePullRequest"/>
## Github.mergePullRequest
Merge a pull request (Merge Button)

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| number        | Number     | The number of the pull request (required)
| commitTitle   | String     | Title for the automatic commit message. (In preview period. See README.) (optional)
| commitMessage | String     | Extra detail to append to automatic commit message. (optional)
| sha           | String     | SHA that pull request head must match to allow merge (optional)
| mergeMethod   | String     | Merge method to use. Possible values are `merge`, `squash`, or `rebase`. (In preview period. See README.) (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"number": 0,
	"commitTitle": "...",
	"commitMessage": "...",
	"sha": "...",
	"mergeMethod": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"{
                        \"sha\": \"6dcb09b5b57875f334f61aebed695e2e4193db5e\",
                        \"merged\": true,
                        \"message\": \"Pull Request successfully merged\"
                      }"
		}
	}
}
```

<a name="updatePullRequest"/>
## Github.updatePullRequest
Update a pull request

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| number        | Number     | The number of the pull request (required)
| title         | String     | The title of the pull request. (optional)
| body          | String     | The contents of the pull request. (optional)
| state         | String     | State of this Pull Request. Either open or closed. (optional)
| base          | String     | The name of the branch you want your changes pulled into. This should be an existing branch on the current repository. You cannot update the base branch on a pull request to point to another repository. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"number": 0,
	"title": "...",
	"body": "...",
	"state": "...",
	"base": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"{
                    \"id\": 1,
                    \"url\": \"https://api.github.com/repos/octocat/Hello-World/pulls/1347\",
                    \"html_url\": \"https://github.com/octocat/Hello-World/pull/1347\",
                    \"diff_url\": \"https://github.com/octocat/Hello-World/pull/1347.diff\",
                    \"patch_url\": \"https://github.com/octocat/Hello-World/pull/1347.patch\",
                    \"issue_url\": \"https://api.github.com/repos/octocat/Hello-World/issues/1347\",
                    \"commits_url\": \"https://api.github.com/repos/octocat/Hello-World/pulls/1347/commits\",
                    \"review_comments_url\": \"https://api.github.com/repos/octocat/Hello-World/pulls/1347/comments\",
                    \"review_comment_url\": \"https://api.github.com/repos/octocat/Hello-World/pulls/comments/{number}\",
                    \"comments_url\": \"https://api.github.com/repos/octocat/Hello-World/issues/1347/comments\",
                    \"statuses_url\": \"https://api.github.com/repos/octocat/Hello-World/statuses/6dcb09b5b57875f334f61aebed695e2e4193db5e\",
                    \"number\": 1347,
                    \"state\": \"open\",
                    \"title\": \"new-feature\",
                    \"body\": \"Please pull these awesome changes\",
                    \"assignee\": {
                      \"login\": \"octocat\",
                      \"id\": 1,
                      \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                      \"gravatar_id\": \"\",
                      \"url\": \"https://api.github.com/users/octocat\",
                      \"html_url\": \"https://github.com/octocat\",
                      \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                      \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                      \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                      \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                      \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                      \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                      \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                      \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                      \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                      \"type\": \"User\",
                      \"site_admin\": false
                    },
                    \"milestone\": {
                      \"url\": \"https://api.github.com/repos/octocat/Hello-World/milestones/1\",
                      \"html_url\": \"https://github.com/octocat/Hello-World/milestones/v1.0\",
                      \"labels_url\": \"https://api.github.com/repos/octocat/Hello-World/milestones/1/labels\",
                      \"id\": 1002604,
                      \"number\": 1,
                      \"state\": \"open\",
                      \"title\": \"v1.0\",
                      \"description\": \"Tracking milestone for version 1.0\",
                      \"creator\": {
                        \"login\": \"octocat\",
                        \"id\": 1,
                        \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                        \"gravatar_id\": \"\",
                        \"url\": \"https://api.github.com/users/octocat\",
                        \"html_url\": \"https://github.com/octocat\",
                        \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                        \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                        \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                        \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                        \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                        \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                        \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                        \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                        \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                        \"type\": \"User\",
                        \"site_admin\": false
                      },
                      \"open_issues\": 4,
                      \"closed_issues\": 8,
                      \"created_at\": \"2011-04-10T20:09:31Z\",
                      \"updated_at\": \"2014-03-03T18:58:10Z\",
                      \"closed_at\": \"2013-02-12T13:22:01Z\",
                      \"due_on\": \"2012-10-09T23:39:01Z\"
                    },
                    \"locked\": false,
                    \"created_at\": \"2011-01-26T19:01:12Z\",
                    \"updated_at\": \"2011-01-26T19:01:12Z\",
                    \"closed_at\": \"2011-01-26T19:01:12Z\",
                    \"merged_at\": \"2011-01-26T19:01:12Z\",
                    \"head\": {
                      \"label\": \"new-topic\",
                      \"ref\": \"new-topic\",
                      \"sha\": \"6dcb09b5b57875f334f61aebed695e2e4193db5e\",
                      \"user\": {
                        \"login\": \"octocat\",
                        \"id\": 1,
                        \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                        \"gravatar_id\": \"\",
                        \"url\": \"https://api.github.com/users/octocat\",
                        \"html_url\": \"https://github.com/octocat\",
                        \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                        \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                        \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                        \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                        \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                        \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                        \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                        \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                        \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                        \"type\": \"User\",
                        \"site_admin\": false
                      },
                      \"repo\": {
                        \"id\": 1296269,
                        \"owner\": {
                          \"login\": \"octocat\",
                          \"id\": 1,
                          \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                          \"gravatar_id\": \"\",
                          \"url\": \"https://api.github.com/users/octocat\",
                          \"html_url\": \"https://github.com/octocat\",
                          \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                          \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                          \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                          \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                          \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                          \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                          \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                          \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                          \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                          \"type\": \"User\",
                          \"site_admin\": false
                        },
                        \"name\": \"Hello-World\",
                        \"full_name\": \"octocat/Hello-World\",
                        \"description\": \"This your first repo!\",
                        \"private\": false,
                        \"fork\": false,
                        \"url\": \"https://api.github.com/repos/octocat/Hello-World\",
                        \"html_url\": \"https://github.com/octocat/Hello-World\",
                        \"archive_url\": \"http://api.github.com/repos/octocat/Hello-World/{archive_format}{/ref}\",
                        \"assignees_url\": \"http://api.github.com/repos/octocat/Hello-World/assignees{/user}\",
                        \"blobs_url\": \"http://api.github.com/repos/octocat/Hello-World/git/blobs{/sha}\",
                        \"branches_url\": \"http://api.github.com/repos/octocat/Hello-World/branches{/branch}\",
                        \"clone_url\": \"https://github.com/octocat/Hello-World.git\",
                        \"collaborators_url\": \"http://api.github.com/repos/octocat/Hello-World/collaborators{/collaborator}\",
                        \"comments_url\": \"http://api.github.com/repos/octocat/Hello-World/comments{/number}\",
                        \"commits_url\": \"http://api.github.com/repos/octocat/Hello-World/commits{/sha}\",
                        \"compare_url\": \"http://api.github.com/repos/octocat/Hello-World/compare/{base}...{head}\",
                        \"contents_url\": \"http://api.github.com/repos/octocat/Hello-World/contents/{+path}\",
                        \"contributors_url\": \"http://api.github.com/repos/octocat/Hello-World/contributors\",
                        \"deployments_url\": \"http://api.github.com/repos/octocat/Hello-World/deployments\",
                        \"downloads_url\": \"http://api.github.com/repos/octocat/Hello-World/downloads\",
                        \"events_url\": \"http://api.github.com/repos/octocat/Hello-World/events\",
                        \"forks_url\": \"http://api.github.com/repos/octocat/Hello-World/forks\",
                        \"git_commits_url\": \"http://api.github.com/repos/octocat/Hello-World/git/commits{/sha}\",
                        \"git_refs_url\": \"http://api.github.com/repos/octocat/Hello-World/git/refs{/sha}\",
                        \"git_tags_url\": \"http://api.github.com/repos/octocat/Hello-World/git/tags{/sha}\",
                        \"git_url\": \"git:github.com/octocat/Hello-World.git\",
                        \"hooks_url\": \"http://api.github.com/repos/octocat/Hello-World/hooks\",
                        \"issue_comment_url\": \"http://api.github.com/repos/octocat/Hello-World/issues/comments{/number}\",
                        \"issue_events_url\": \"http://api.github.com/repos/octocat/Hello-World/issues/events{/number}\",
                        \"issues_url\": \"http://api.github.com/repos/octocat/Hello-World/issues{/number}\",
                        \"keys_url\": \"http://api.github.com/repos/octocat/Hello-World/keys{/key_id}\",
                        \"labels_url\": \"http://api.github.com/repos/octocat/Hello-World/labels{/name}\",
                        \"languages_url\": \"http://api.github.com/repos/octocat/Hello-World/languages\",
                        \"merges_url\": \"http://api.github.com/repos/octocat/Hello-World/merges\",
                        \"milestones_url\": \"http://api.github.com/repos/octocat/Hello-World/milestones{/number}\",
                        \"mirror_url\": \"git:git.example.com/octocat/Hello-World\",
                        \"notifications_url\": \"http://api.github.com/repos/octocat/Hello-World/notifications{?since, all, participating}\",
                        \"pulls_url\": \"http://api.github.com/repos/octocat/Hello-World/pulls{/number}\",
                        \"releases_url\": \"http://api.github.com/repos/octocat/Hello-World/releases{/id}\",
                        \"ssh_url\": \"git@github.com:octocat/Hello-World.git\",
                        \"stargazers_url\": \"http://api.github.com/repos/octocat/Hello-World/stargazers\",
                        \"statuses_url\": \"http://api.github.com/repos/octocat/Hello-World/statuses/{sha}\",
                        \"subscribers_url\": \"http://api.github.com/repos/octocat/Hello-World/subscribers\",
                        \"subscription_url\": \"http://api.github.com/repos/octocat/Hello-World/subscription\",
                        \"svn_url\": \"https://svn.github.com/octocat/Hello-World\",
                        \"tags_url\": \"http://api.github.com/repos/octocat/Hello-World/tags\",
                        \"teams_url\": \"http://api.github.com/repos/octocat/Hello-World/teams\",
                        \"trees_url\": \"http://api.github.com/repos/octocat/Hello-World/git/trees{/sha}\",
                        \"homepage\": \"https://github.com\",
                        \"language\": null,
                        \"forks_count\": 9,
                        \"stargazers_count\": 80,
                        \"watchers_count\": 80,
                        \"size\": 108,
                        \"default_branch\": \"master\",
                        \"open_issues_count\": 0,
                        \"has_issues\": true,
                        \"has_wiki\": true,
                        \"has_pages\": false,
                        \"has_downloads\": true,
                        \"pushed_at\": \"2011-01-26T19:06:43Z\",
                        \"created_at\": \"2011-01-26T19:01:12Z\",
                        \"updated_at\": \"2011-01-26T19:14:43Z\",
                        \"permissions\": {
                          \"admin\": false,
                          \"push\": false,
                          \"pull\": true
                        }
                      }
                    },
                    \"base\": {
                      \"label\": \"master\",
                      \"ref\": \"master\",
                      \"sha\": \"6dcb09b5b57875f334f61aebed695e2e4193db5e\",
                      \"user\": {
                        \"login\": \"octocat\",
                        \"id\": 1,
                        \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                        \"gravatar_id\": \"\",
                        \"url\": \"https://api.github.com/users/octocat\",
                        \"html_url\": \"https://github.com/octocat\",
                        \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                        \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                        \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                        \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                        \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                        \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                        \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                        \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                        \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                        \"type\": \"User\",
                        \"site_admin\": false
                      },
                      \"repo\": {
                        \"id\": 1296269,
                        \"owner\": {
                          \"login\": \"octocat\",
                          \"id\": 1,
                          \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                          \"gravatar_id\": \"\",
                          \"url\": \"https://api.github.com/users/octocat\",
                          \"html_url\": \"https://github.com/octocat\",
                          \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                          \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                          \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                          \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                          \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                          \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                          \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                          \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                          \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                          \"type\": \"User\",
                          \"site_admin\": false
                        },
                        \"name\": \"Hello-World\",
                        \"full_name\": \"octocat/Hello-World\",
                        \"description\": \"This your first repo!\",
                        \"private\": false,
                        \"fork\": false,
                        \"url\": \"https://api.github.com/repos/octocat/Hello-World\",
                        \"html_url\": \"https://github.com/octocat/Hello-World\",
                        \"archive_url\": \"http://api.github.com/repos/octocat/Hello-World/{archive_format}{/ref}\",
                        \"assignees_url\": \"http://api.github.com/repos/octocat/Hello-World/assignees{/user}\",
                        \"blobs_url\": \"http://api.github.com/repos/octocat/Hello-World/git/blobs{/sha}\",
                        \"branches_url\": \"http://api.github.com/repos/octocat/Hello-World/branches{/branch}\",
                        \"clone_url\": \"https://github.com/octocat/Hello-World.git\",
                        \"collaborators_url\": \"http://api.github.com/repos/octocat/Hello-World/collaborators{/collaborator}\",
                        \"comments_url\": \"http://api.github.com/repos/octocat/Hello-World/comments{/number}\",
                        \"commits_url\": \"http://api.github.com/repos/octocat/Hello-World/commits{/sha}\",
                        \"compare_url\": \"http://api.github.com/repos/octocat/Hello-World/compare/{base}...{head}\",
                        \"contents_url\": \"http://api.github.com/repos/octocat/Hello-World/contents/{+path}\",
                        \"contributors_url\": \"http://api.github.com/repos/octocat/Hello-World/contributors\",
                        \"deployments_url\": \"http://api.github.com/repos/octocat/Hello-World/deployments\",
                        \"downloads_url\": \"http://api.github.com/repos/octocat/Hello-World/downloads\",
                        \"events_url\": \"http://api.github.com/repos/octocat/Hello-World/events\",
                        \"forks_url\": \"http://api.github.com/repos/octocat/Hello-World/forks\",
                        \"git_commits_url\": \"http://api.github.com/repos/octocat/Hello-World/git/commits{/sha}\",
                        \"git_refs_url\": \"http://api.github.com/repos/octocat/Hello-World/git/refs{/sha}\",
                        \"git_tags_url\": \"http://api.github.com/repos/octocat/Hello-World/git/tags{/sha}\",
                        \"git_url\": \"git:github.com/octocat/Hello-World.git\",
                        \"hooks_url\": \"http://api.github.com/repos/octocat/Hello-World/hooks\",
                        \"issue_comment_url\": \"http://api.github.com/repos/octocat/Hello-World/issues/comments{/number}\",
                        \"issue_events_url\": \"http://api.github.com/repos/octocat/Hello-World/issues/events{/number}\",
                        \"issues_url\": \"http://api.github.com/repos/octocat/Hello-World/issues{/number}\",
                        \"keys_url\": \"http://api.github.com/repos/octocat/Hello-World/keys{/key_id}\",
                        \"labels_url\": \"http://api.github.com/repos/octocat/Hello-World/labels{/name}\",
                        \"languages_url\": \"http://api.github.com/repos/octocat/Hello-World/languages\",
                        \"merges_url\": \"http://api.github.com/repos/octocat/Hello-World/merges\",
                        \"milestones_url\": \"http://api.github.com/repos/octocat/Hello-World/milestones{/number}\",
                        \"mirror_url\": \"git:git.example.com/octocat/Hello-World\",
                        \"notifications_url\": \"http://api.github.com/repos/octocat/Hello-World/notifications{?since, all, participating}\",
                        \"pulls_url\": \"http://api.github.com/repos/octocat/Hello-World/pulls{/number}\",
                        \"releases_url\": \"http://api.github.com/repos/octocat/Hello-World/releases{/id}\",
                        \"ssh_url\": \"git@github.com:octocat/Hello-World.git\",
                        \"stargazers_url\": \"http://api.github.com/repos/octocat/Hello-World/stargazers\",
                        \"statuses_url\": \"http://api.github.com/repos/octocat/Hello-World/statuses/{sha}\",
                        \"subscribers_url\": \"http://api.github.com/repos/octocat/Hello-World/subscribers\",
                        \"subscription_url\": \"http://api.github.com/repos/octocat/Hello-World/subscription\",
                        \"svn_url\": \"https://svn.github.com/octocat/Hello-World\",
                        \"tags_url\": \"http://api.github.com/repos/octocat/Hello-World/tags\",
                        \"teams_url\": \"http://api.github.com/repos/octocat/Hello-World/teams\",
                        \"trees_url\": \"http://api.github.com/repos/octocat/Hello-World/git/trees{/sha}\",
                        \"homepage\": \"https://github.com\",
                        \"language\": null,
                        \"forks_count\": 9,
                        \"stargazers_count\": 80,
                        \"watchers_count\": 80,
                        \"size\": 108,
                        \"default_branch\": \"master\",
                        \"open_issues_count\": 0,
                        \"has_issues\": true,
                        \"has_wiki\": true,
                        \"has_pages\": false,
                        \"has_downloads\": true,
                        \"pushed_at\": \"2011-01-26T19:06:43Z\",
                        \"created_at\": \"2011-01-26T19:01:12Z\",
                        \"updated_at\": \"2011-01-26T19:14:43Z\",
                        \"permissions\": {
                          \"admin\": false,
                          \"push\": false,
                          \"pull\": true
                        }
                      }
                    },
                    \"_links\": {
                      \"self\": {
                        \"href\": \"https://api.github.com/repos/octocat/Hello-World/pulls/1347\"
                      },
                      \"html\": {
                        \"href\": \"https://github.com/octocat/Hello-World/pull/1347\"
                      },
                      \"issue\": {
                        \"href\": \"https://api.github.com/repos/octocat/Hello-World/issues/1347\"
                      },
                      \"comments\": {
                        \"href\": \"https://api.github.com/repos/octocat/Hello-World/issues/1347/comments\"
                      },
                      \"review_comments\": {
                        \"href\": \"https://api.github.com/repos/octocat/Hello-World/pulls/1347/comments\"
                      },
                      \"review_comment\": {
                        \"href\": \"https://api.github.com/repos/octocat/Hello-World/pulls/comments/{number}\"
                      },
                      \"commits\": {
                        \"href\": \"https://api.github.com/repos/octocat/Hello-World/pulls/1347/commits\"
                      },
                      \"statuses\": {
                        \"href\": \"https://api.github.com/repos/octocat/Hello-World/statuses/6dcb09b5b57875f334f61aebed695e2e4193db5e\"
                      }
                    },
                    \"user\": {
                      \"login\": \"octocat\",
                      \"id\": 1,
                      \"avatar_url\": \"https://github.com/images/error/octocat_happy.gif\",
                      \"gravatar_id\": \"\",
                      \"url\": \"https://api.github.com/users/octocat\",
                      \"html_url\": \"https://github.com/octocat\",
                      \"followers_url\": \"https://api.github.com/users/octocat/followers\",
                      \"following_url\": \"https://api.github.com/users/octocat/following{/other_user}\",
                      \"gists_url\": \"https://api.github.com/users/octocat/gists{/gist_id}\",
                      \"starred_url\": \"https://api.github.com/users/octocat/starred{/owner}{/repo}\",
                      \"subscriptions_url\": \"https://api.github.com/users/octocat/subscriptions\",
                      \"organizations_url\": \"https://api.github.com/users/octocat/orgs\",
                      \"repos_url\": \"https://api.github.com/users/octocat/repos\",
                      \"events_url\": \"https://api.github.com/users/octocat/events{/privacy}\",
                      \"received_events_url\": \"https://api.github.com/users/octocat/received_events\",
                      \"type\": \"User\",
                      \"site_admin\": false
                    }
                  }"
		}
	}
}
```

<a name="createReactionForCommitComment"/>
## Github.createReactionForCommitComment
Create reaction for a commit comment. (In preview period. See README.)

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The comment ID (required)
| content       | String     | The reaction type. (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"id": "...",
	"content": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="createReactionForIssue"/>
## Github.createReactionForIssue
Create reaction for an issue. (In preview period. See README.)

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | Te owner name (required)
| repositoryName| String     | The name of the repository (required)
| number        | Number     | Tne number of the issue (required)
| content       | String     | The reaction type. (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"number": 0,
	"content": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="createReactionForIssueComment"/>
## Github.createReactionForIssueComment
Create reaction for an issue comment. (In preview period. See README.)

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The comment ID (required)
| content       | String     | The reaction type. (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"id": "...",
	"content": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="createReactionForPullRequestReviewComment"/>
## Github.createReactionForPullRequestReviewComment
Create reaction for a pull request review comment. (In preview period. See README.)

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The comment ID (required)
| content       | String     | The reaction type. (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"id": "...",
	"content": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="deleteReaction"/>
## Github.deleteReaction
Delete a reaction. (In preview period. See README.)

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| id         | String     | The reaction ID (required)

#### Request example
```json
{	"accessToken": "...",
	"id": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getReactionForCommitComment"/>
## Github.getReactionForCommitComment
List reactions for a commit comment. (In preview period. See README.)

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The comment ID (required)
| content       | String     | Indicates which type of reaction to return. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"id": "...",
	"content": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getReactionForIssue"/>
## Github.getReactionForIssue
List reactions for an issue. (In preview period. See README.)

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| number        | Number     | The number of the issue (required)
| content       | String     | Indicates which type of reaction to return. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"number": 0,
	"content": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getReactionForIssueComment"/>
## Github.getReactionForIssueComment
List reactions for an issue comment. (In preview period. See README.)

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The comment ID (required)
| content       | String     | Indicates which type of reaction to return. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"id": "...",
	"content": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getReactionForPullRequestReviewComment"/>
## Github.getReactionForPullRequestReviewComment
List reactions for a pull request review comment. (In preview period. See README.)

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The comment ID (required)
| content       | String     | Indicates which type of reaction to return. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"id": "...",
	"content": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="addRepositoryCollaborator"/>
## Github.addRepositoryCollaborator
Add user as a collaborator

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| collabuser    | String     | The name of the collaborator (required)
| permission    | String     | `pull` - can pull, but not push to or administer this repository, `push` - can pull and push, but not administer this repository, `admin` - can pull, push and administer this repository. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"collabuser": "...",
	"permission": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="addProtectedBranchRequiredStatusChecksContexts"/>
## Github.addProtectedBranchRequiredStatusChecksContexts
Add required status checks contexts of protected branch. (In preview period. See README.)

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| branch        | String     | The branch name (required)
| body          | JSON       | An array of protected branch required status checks contexts (e.g. continuous-integration/jenkins). (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"branch": "...",
	"body": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="addProtectedBranchTeamRestrictions"/>
## Github.addProtectedBranchTeamRestrictions
Add team restrictions of protected branch. (In preview period. See README.)

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| branch        | String     | The name of the branch (required)
| body          | JSON       | An array of team slugs (e.g. justice-league). (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"branch": "...",
	"body": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="addProtectedBranchUserRestrictions"/>
## Github.addProtectedBranchUserRestrictions
Add user restrictions of protected branch. (In preview period. See README.)

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| branch        | String     | The name of the branch (required)
| body          | JSON       | An array of team slugs (e.g. justice-league). (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"branch": "...",
	"body": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="checkRepositoryCollaborator"/>
## Github.checkRepositoryCollaborator
Check if user is a collaborator.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| collabuser    | String     | The name of the collaborator (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"collabuser": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="compareRepositoryCommits"/>
## Github.compareRepositoryCommits
Compare two commits.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| base          | String     | The branch (or git ref) you want your changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repositoryName that requests a merge to a base of another repositoryName. (required)
| head          | String     | The branch (or git ref) where your changes are implemented. (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"base": "...",
	"head": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="createRepository"/>
## Github.createRepository
Create a new repository for the authenticated user.

| Field            | Type       | Description
|------------------|------------|----------
| accessToken      | credentials| The access_token obtained from Github. (optional)
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

#### Request example
```json
{	"accessToken": "...",
	"name": "...",
	"description": "...",
	"homepage": "...",
	"private": "...",
	"hasIssues": "...",
	"hasWiki": "...",
	"hasDownloads": "...",
	"teamId": "...",
	"autoInit": "...",
	"gitignoreTemplate": "...",
	"licenseTemplate": "...",
	"allowSquashMerge": "...",
	"allowMergeCommit": "...",
	"allowRebaseMerge": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="createRepositoryCommitComment"/>
## Github.createRepositoryCommitComment
Create a commit comment.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| sha           | String     | SHA1 hash of the commit (required)
| body          | String     | The contents of the comment. (required)
| path          | String     | Relative path of the file to comment on. (optional)
| position      | Number     | Line index in the diff to comment on. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"sha": "...",
	"body": "...",
	"path": "...",
	"position": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="createRepositoryDeployment"/>
## Github.createRepositoryDeployment
Create a deployment.

| Field                | Type       | Description
|----------------------|------------|----------
| accessToken          | credentials| The access_token obtained from Github. (optional)
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

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"ref": "...",
	"task": "...",
	"autoMerge": "...",
	"requiredContexts": "...",
	"payload": "...",
	"environment": "...",
	"description": "...",
	"transientEnvironment": "...",
	"productionEnvironment": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="createRepositoryDeploymentStatus"/>
## Github.createRepositoryDeploymentStatus
Create a deployment status.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The deployment ID (required)
| state         | String     | The state of the status. Can be one of pending, success, error, or failure. (optional)
| targetUrl     | String     | The target URL to associate with this status. This URL should contain output to keep the user updated while the task is running or serve as historical information for what happened in the deployment. Default: "" (optional)
| logUrl        | String     | Functionally equivalent to target_url. Default: "". (In preview period. See README.) (optional)
| description   | String     | A short description of the status. Default: "" (optional)
| environmentUrl| String     | URL for accessing the deployment environment. Default: "". (In preview period. See README.) (optional)
| autoInactive  | String     | When true the new `inactive` status is added to all other non-transient, non-production environment deployments with the same repository and environment name as the created status's deployment. Default: true. (In preview period. See README.) (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"id": "...",
	"state": "...",
	"targetUrl": "...",
	"logUrl": "...",
	"description": "...",
	"environmentUrl": "...",
	"autoInactive": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="createRepositoryFile"/>
## Github.createRepositoryFile
Create a new file in the given repository.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| path          | String     | The content path. (required)
| message       | String     | The commit message. (required)
| content       | String     | The new file content, Base64 encoded. (required)
| branch        | String     | The branch name. If not provided, uses the repository’s default branch (usually master). (optional)
| committer     | JSON       | Object containing information about the committer. You must provide values for both name and email (optional). Ex.: "committer": {"name": "Scott Chacon", "email": "schacon@gmail.com"}

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"path": "...",
	"message": "...",
	"content": "...",
	"branch": "...",
	"committer": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="createRepositoryForOrganization"/>
## Github.createRepositoryForOrganization
Create a new repository for an organization.

| Field            | Type       | Description
|------------------|------------|----------
| accessToken      | credentials| The access_token obtained from Github. (optional)
| orginizationName | String     | The name of the organization (required)
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

#### Request example
```json
{	"accessToken": "...",
	"orginizationName": "...",
	"name": "...",
	"description": "...",
	"homepage": "...",
	"private": "...",
	"hasIssues": "...",
	"hasWiki": "...",
	"hasDownloads": "...",
	"teamId": 0,
	"autoInit": "...",
	"gitignoreTemplate": "...",
	"licenseTemplate": "...",
	"allowSquashMerge": "...",
	"allowMergeCommit": "...",
	"allowRebaseMerge": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="createRepositoryHook"/>
## Github.createRepositoryHook
Create a hook.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| name          | String     | Use web for a webhook or use the name of a valid service. (required)
| config        | JSON       | A Hash containing key/value pairs to provide settings for this hook. These settings vary between the services and are defined in the github-services repositoryName. Booleans are stored internally as `1` for true, and `0` for false. Any JSON true/false values will be converted automatically. (required)
| events        | JSON       | Determines what events the hook is triggered for. Default: `['push']`. (optional)
| active        | String     | Determines whether the hook is actually triggered on pushes. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"name": "...",
	"config": "...",
	"events": "...",
	"active": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="createRepositoryKey"/>
## Github.createRepositoryKey
Add a new deploy key.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| title         | String     | A name for the key. (required)
| key           | String     | The contents of the key. (required)
| readOnly      | String     | If true, the key will only be able to read repository contents. Otherwise, the key will be able to read and write. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"title": "...",
	"key": "...",
	"readOnly": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="createRepositoryProject"/>
## Github.createRepositoryProject
Create a project.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| name          | String     | The name of the project (required)
| body          | String     | The body of the project (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"name": "...",
	"body": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="createRepositoryProjectCard"/>
## Github.createRepositoryProjectCard
Create a project card.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The column ID (required)
| note          | String     | The note of the card. (optional)
| contentId     | String     | The id of the Issue or Pull Request to associate with this card. (optional)
| contentType   | String     | The type of content to associate with this card. Can be either 'Issue' or 'PullRequest'. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"id": "...",
	"note": "...",
	"contentId": "...",
	"contentType": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="createRepositoryProjectColumn"/>
## Github.createRepositoryProjectColumn
Create a project column.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| number        | Number     | The number of the project (required)
| name          | String     | The name of the column. (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"number": 0,
	"name": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="createRepositoryRelease"/>
## Github.createRepositoryRelease
Create a release.

| Field          | Type       | Description
|----------------|------------|----------
| accessToken    | credentials| The access_token obtained from Github. (optional)
| user           | String     | The owner name (required)
| repositoryName | String     | The name of the repository (required)
| tagName        | String     | String of the tag (required)
| targetCommitish| String     | Specifies the commitish value that determines where the Git tag is created from. Can be any branch or commit SHA. Unused if the Git tag already exists. Default: the repository's default branch (usually master). (optional)
| name           | String     | The name of the release (optional)
| body           | String     | Text describing the contents of the tag. (optional)
| draft          | String     | true to create a draft (unpublished) release, false to create a published one. Default: false (optional)
| prerelease     | String     | true to identify the release as a prerelease. false to identify the release as a full release. Default: false (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"tagName": "...",
	"targetCommitish": "...",
	"name": "...",
	"body": "...",
	"draft": "...",
	"prerelease": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="createRepositoryStatus"/>
## Github.createRepositoryStatus
Create a status.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| sha           | String     | SHA1 hash of the status (required)
| state         | String     | State of the status - can be one of pending, success, error, or failure. (required)
| targetUrl     | String     | Target url to associate with this status. This URL will be linked from the GitHub UI to allow users to easily see the ‘source’ of the Status. (optional)
| description   | String     | Short description of the status. (optional)
| context       | String     | A string label to differentiate this status from the status of other systems. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"sha": "...",
	"state": "...",
	"targetUrl": "...",
	"description": "...",
	"context": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="deleteRepository"/>
## Github.deleteRepository
Delete a repository.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="deleteRepositoryAsset"/>
## Github.deleteRepositoryAsset
Delete a release asset.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The asset ID (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"id": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="deleteRepositoryCommitComment"/>
## Github.deleteRepositoryCommitComment
Delete a commit comment.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The comment ID (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"id": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="deleteRepositoryDownload"/>
## Github.deleteRepositoryDownload
Delete a download.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The download ID (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"id": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="deleteRepositoryFile"/>
## Github.deleteRepositoryFile
Delete a file.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| path          | String     | The content path. (required)
| message       | String     | The commit message. (required)
| sha           | String     | The blob SHA of the file being removed. (required)
| branch        | String     | The branch name. If not provided, uses the repository’s default branch (usually master). (optional)
| committer     | JSON       | Object containing information about the committer. You must provide values for both name and email (optional). Ex.: "committer": {"name": "Scott Chacon", "email": "schacon@gmail.com"} (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"path": "...",
	"message": "...",
	"sha": "...",
	"branch": "...",
	"committer": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="deleteRepositoryHook"/>
## Github.deleteRepositoryHook
Deleate a hook.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The hook ID (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"id": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="deleteRepositoryInvite"/>
## Github.deleteRepositoryInvite
Delete a repository invitation. (In preview period. See README.)

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The invitation ID (required)

#### Request example
```json
{	"accessToken": "...",
	"repositoryName": "...",
	"id": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="deleteRepositoryKey"/>
## Github.deleteRepositoryKey
Remove a deploy key.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The key ID (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"id": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="deleteRepositoryProject"/>
## Github.deleteRepositoryProject
Delete a project.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| number        | Number     | The number of the project (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"number": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="deleteRepositoryProjectCard"/>
## Github.deleteRepositoryProjectCard
Delete a project card.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The card ID (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"id": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="deleteRepositoryProjectColumn"/>
## Github.deleteRepositoryProjectColumn
Delete a project column.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The column ID (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"id": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="deleteRepositoryRelease"/>
## Github.deleteRepositoryRelease
Delete a release

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The release ID (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"id": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="editRepository"/>
## Github.editRepository
Update a repo.

| Field           | Type       | Description
|-----------------|------------|----------
| accessToken     | credentials| The access_token obtained from Github. (optional)
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

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"name": "...",
	"description": "...",
	"homepage": "...",
	"private": "...",
	"hasIssues": "...",
	"hasWiki": "...",
	"hasDownloads": "...",
	"defaultBranch": "...",
	"allowSquashMerge": "...",
	"allowMergeCommit": "...",
	"allowRebaseMerge": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="editRepositoryAsset"/>
## Github.editRepositoryAsset
Edit a release asset.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The asset ID (required)
| name          | String     | The file name of the asset (required)
| label         | String     | An alternate short description of the asset. Used in place of the filename. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"id": "...",
	"name": "...",
	"label": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="editRepositoryHook"/>
## Github.editRepositoryHook
Edit a hook.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The hook ID (required)
| config        | JSON       | A Hash containing key/value pairs to provide settings for this hook. Modifying this will replace the entire config object. These settings vary between the services and are defined in the github-services repositoryName. Booleans are stored internally as `1` for true, and `0` for false. Any JSON true/false values will be converted automatically. (required)
| events        | JSON       | Determines what events the hook is triggered for. This replaces the entire array of events. Default: `['push']`. (optional)
| addEvents     | JSON       | Determines a list of events to be added to the list of events that the Hook triggers for. (optional)
| removeEvents  | JSON       | Determines a list of events to be removed from the list of events that the Hook triggers for. (optional)
| active        | String     | Determines whether the hook is actually triggered on pushes. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"id": "...",
	"config": "...",
	"events": "...",
	"addEvents": "...",
	"removeEvents": "...",
	"active": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="editRepositoryRelease"/>
## Github.editRepositoryRelease
Edit a release.

| Field          | Type       | Description
|----------------|------------|----------
| accessToken    | credentials| The access_token obtained from Github. (optional)
| user           | String     | The owner name (required)
| repositoryName | String     | The name of the repository (required)
| id             | String     | The release ID (required)
| tagName        | String     | String of the tag (required)
| targetCommitish| String     | Specifies the commitish value that determines where the Git tag is created from. Can be any branch or commit SHA. Unused if the Git tag already exists. Default: the repository's default branch (usually master). (optional)
| name           | String     | The name of the release. (optional)
| body           | String     | Text describing the contents of the tag. (optional)
| draft          | String     | true to create a draft (unpublished) release, false to create a published one. Default: false (optional)
| prerelease     | String     | true to identify the release as a prerelease. false to identify the release as a full release. Default: false (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"id": "...",
	"tagName": "...",
	"targetCommitish": "...",
	"name": "...",
	"body": "...",
	"draft": "...",
	"prerelease": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="forkRepository"/>
## Github.forkRepository
Create a fork.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| organization  | String     | Optional parameter to specify the organization name if forking into an organization. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"organization": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getRepository"/>
## Github.getRepository
Get a repo for a user.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getAllRepositories"/>
## Github.getAllRepositories
List your repositories

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| visibility | String     | Can be one of `all`, `public`, or `private`. Default: `all`. (optional)
| affiliation| String     | Comma-separated list of values. Can include: `owner`, `collaborator`, `organization_member`. (optional)
| type       | String     | Possible values: `all`, `owner`, `public`, `private`, `member`. Default: `all`. (optional)
| sort       | String     | Possible values: `created`, `updated`, `pushed`, `full_name`. Default: `full_name`. (optional)
| direction  | String     |  (optional)
| page       | Number     | Page number of the results to fetch. (optional)
| perPage    | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"visibility": "...",
	"affiliation": "...",
	"type": "...",
	"sort": "...",
	"direction": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getRepositoryAllCommitComments"/>
## Github.getRepositoryAllCommitComments
List commit comments for a repository.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getRepositoryArchiveLink"/>
## Github.getRepositoryArchiveLink
Get archive link.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| archiveFormat | String     | Either tarball or zipball, Deafult: tarball. (required)
| ref           | String     | String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"archiveFormat": "...",
	"ref": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getRepositoryAsset"/>
## Github.getRepositoryAsset
Get a single release asset.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The assetID (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"id": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getRepositoryBranch"/>
## Github.getRepositoryBranch
Get branch. (In preview period. See README.)

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| branch        | String     | The name of the branch (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"branch": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getRepositoryBranchProtection"/>
## Github.getRepositoryBranchProtection
Get branch protection. (In preview period. See README.)

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| branch        | String     | The name of the branch (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"branch": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getRepositoryBranches"/>
## Github.getRepositoryBranches
List branches. (In preview period. See README.)

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| protected     | String     | Set to true to only return protected branches (optional)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"protected": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getRepositoryById"/>
## Github.getRepositoryById
Get a single repo by id.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| id         | String     | The repository ID (required)

#### Request example
```json
{	"accessToken": "...",
	"id": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getRepositoryClones"/>
## Github.getRepositoryClones
Get the total number of clones and breakdown per day or week for the last 14 days.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getRepositoryCollaborators"/>
## Github.getRepositoryCollaborators
List collaborators

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getRepositoryCombinedStatus"/>
## Github.getRepositoryCombinedStatus
Get the combined status for a specific ref.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| sha           | String     | Ref to fetch the status for. It can be a SHA, a branch name, or a tag name. (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"sha": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getRepositoryCommit"/>
## Github.getRepositoryCommit
Get a single commit.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| sha           | String     | SHA1 hash of the commit (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"sha": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getRepositoryCommitComment"/>
## Github.getRepositoryCommitComment
Get a single commit comment.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The comment ID (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"id": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getRepositoryCommitComments"/>
## Github.getRepositoryCommitComments
List comments for a single commit.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| sha           | String     | SHA1 hash of the commit (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"sha": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getRepositoryCommits"/>
## Github.getRepositoryCommits
List commits on a repository.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| sha           | String     | Sha or branch to start listing commits from. (optional)
| path          | String     | Only commits containing this file path will be returned. (optional)
| author        | String     | GitHub login or email address by which to filter by commit author. (optional)
| since         | String     | Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ (optional)
| until         | String     | Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ (optional)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"sha": "...",
	"path": "...",
	"author": "...",
	"since": "...",
	"until": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getRepositoryContent"/>
## Github.getRepositoryContent
Get the contents of a file or directory in a repository.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| path          | String     | The content path. (required)
| ref           | String     | The String name of the Commit/Branch/Tag. Defaults to master. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"path": "...",
	"ref": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getRepositoryContributors"/>
## Github.getRepositoryContributors
Get contributors for the specified repository.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| anon          | String     | Set to 1 or true to include anonymous contributors in results. (optional)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"anon": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getRepositoryDeploymentStatuses"/>
## Github.getRepositoryDeploymentStatuses
List deployment statuses.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The deployment ID (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"id": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getRepositoryDeployments"/>
## Github.getRepositoryDeployments
List deployments.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| sha           | String     | The short or long sha that was recorded at creation time. Default: none. (optional)
| ref           | String     | The name of the ref. This can be a branch, tag, or sha. Default: none. (optional)
| task          | String     | The name of the task for the deployment. e.g. deploy or deploy:migrations. Default: none. (optional)
| environment   | String     | The name of the environment that was deployed to. e.g. staging or production. Default: none. (optional)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"sha": "...",
	"ref": "...",
	"task": "...",
	"environment": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getRepositoryDownload"/>
## Github.getRepositoryDownload
Get a single download.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The download ID (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"id": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getRepositoryDownloads"/>
## Github.getRepositoryDownloads
List downloads for repository.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getOrganizationRepositories"/>
## Github.getOrganizationRepositories
List repositories for the specified org.

| Field           | Type       | Description
|-----------------|------------|----------
| accessToken     | credentials| The access_token obtained from Github. (optional)
| orginizationName| String     | The name of the organization (required)
| type            | String     | Possible values: `all`, `public`, `private`, `forks`, `sources`, `member`. Default: `all`. (optional)
| page            | Number     | Page number of the results to fetch. (optional)
| perPage         | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"orginizationName": "...",
	"type": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getUserRepositories"/>
## Github.getUserRepositories
List public repositories for the specified user.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| user       | String     | The user name (required)
| type       | String     | Possible values: `all`, `owner`, `member`. Default: `owner`. (optional)
| sort       | String     | Possible values: `created`, `updated`, `pushed`, `full_name`. Default: `full_name`. (optional)
| direction  | String     | Can be one of asc or desc. Default: when using full_name: asc, otherwise desc (optional)
| page       | Number     | Page number of the results to fetch. (optional)
| perPage    | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"type": "...",
	"sort": "...",
	"direction": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getRepositoryForks"/>
## Github.getRepositoryForks
List forks.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| sort          | String     | Possible values: `newest`, `oldest`, `stargazers`, default: `newest`. (optional)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"sort": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getRepositoryHook"/>
## Github.getRepositoryHook
Get single hook.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The hook ID (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"id": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getRepositoryHooks"/>
## Github.getRepositoryHooks
List hooks.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getRepositoryInvites"/>
## Github.getRepositoryInvites
List a user's repository invitations. (In preview period. See README.)

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| repositoryName| String     | The name of the repository (required)

#### Request example
```json
{	"accessToken": "...",
	"repositoryName": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getRepositoryKey"/>
## Github.getRepositoryKey
Get a deploy key.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The key ID (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"id": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getRepositoryKeys"/>
## Github.getRepositoryKeys
List deploy keys.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getRepositoryLanguages"/>
## Github.getRepositoryLanguages
Get languages for the specified repository.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getRepositoryLatestPagesBuild"/>
## Github.getRepositoryLatestPagesBuild
Get latest Pages build

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getRepositoryLatestRelease"/>
## Github.getRepositoryLatestRelease
Get the latest release.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getRepositoryPages"/>
## Github.getRepositoryPages
Get information about a Pages site. (Use preview header to include additional info.)

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getRepositoryPagesBuild"/>
## Github.getRepositoryPagesBuild
Get a specific Pages build

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The build ID (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"id": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getRepositoryPagesBuilds"/>
## Github.getRepositoryPagesBuilds
List Pages builds

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getRepositoryPaths"/>
## Github.getRepositoryPaths
Get the top 10 popular contents over the last 14 days.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getRepositoryProject"/>
## Github.getRepositoryProject
List a project.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| number        | Number     | The number of the project (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"number": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getRepositoryProjectCard"/>
## Github.getRepositoryProjectCard
Get project card.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The card ID (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"id": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getRepositoryProjectCards"/>
## Github.getRepositoryProjectCards
List project cards.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The column ID (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"id": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getRepositoryProjectColumn"/>
## Github.getRepositoryProjectColumn
Get a project column.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The column ID (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"id": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getRepositoryProjectColumns"/>
## Github.getRepositoryProjectColumns
List a project's columns.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| number        | Number     | The number of the project (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"number": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getRepositoryProjects"/>
## Github.getRepositoryProjects
List projects.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getProtectedBranchRequiredStatusChecks"/>
## Github.getProtectedBranchRequiredStatusChecks
Get required status checks of protected branch. (In preview period. See README.)

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| branch        | String     | The name of the branch (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"branch": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getProtectedBranchRequiredStatusChecksContexts"/>
## Github.getProtectedBranchRequiredStatusChecksContexts
List required status checks contexts of protected branch. (In preview period. See README.)

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| branch        | String     | The name of the branch (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"branch": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getProtectedBranchRestrictions"/>
## Github.getProtectedBranchRestrictions
Get restrictions of protected branch. (In preview period. See README.)

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| branch        | String     | The name of the branch (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"branch": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getProtectedBranchTeamRestrictions"/>
## Github.getProtectedBranchTeamRestrictions
List team restrictions of protected branch. (In preview period. See README.)

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| branch        | String     | The name of the branch (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"branch": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getProtectedBranchUserRestrictions"/>
## Github.getProtectedBranchUserRestrictions
List user restrictions of protected branch. (In preview period. See README.)

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| branch        | String     | The name of the branch (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"branch": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getPublicRepositories"/>
## Github.getPublicRepositories
List all public repositories

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| since      | String     | The integer ID of the last Repository that you've seen. (optional)

#### Request example
```json
{	"accessToken": "...",
	"since": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getRepositoryReadme"/>
## Github.getRepositoryReadme
Get the README for the given repository.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| ref           | String     | The name of the commit/branch/tag. Default: the repository’s default branch (usually master) (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"ref": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getRepositoryReferrers"/>
## Github.getRepositoryReferrers
Get the top 10 referrers over the last 14 days.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getRepositoryRelease"/>
## Github.getRepositoryRelease
Get a single release.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The release ID (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"id": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getRepositoryReleaseByTag"/>
## Github.getRepositoryReleaseByTag
Get a release by tag name.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| tag           | String     | String of the tag (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"tag": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getRepositoryReleases"/>
## Github.getRepositoryReleases
List releases for a repository.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getRepositoryShaOfCommitRef"/>
## Github.getRepositoryShaOfCommitRef
Get the SHA-1 of a commit reference.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| ref           | String     | String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected. (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"ref": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getRepositoryStatsCodeFrequency"/>
## Github.getRepositoryStatsCodeFrequency
Get the number of additions and deletions per week.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getRepositoryStatsCommitActivity"/>
## Github.getRepositoryStatsCommitActivity
Get the last year of commit activity data.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getRepositoryStatsContributors"/>
## Github.getRepositoryStatsContributors
Get contributors list with additions, deletions, and commit counts.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getRepositoryStatsParticipation"/>
## Github.getRepositoryStatsParticipation
Get the weekly commit count for the repository owner and everyone else.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getRepositoryStatsPunchCard"/>
## Github.getRepositoryStatsPunchCard
Get the number of commits per hour in each day.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getRepositoryStatuses"/>
## Github.getRepositoryStatuses
Get status for a specfic ref.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| sha           | String     | SHA hash of the commit (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"sha": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getRepositoryTags"/>
## Github.getRepositoryTags
Get tags for the specified repository.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getRepositoryTeams"/>
## Github.getRepositoryTeams
Get teams for the specified repository.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getRepositoryViews"/>
## Github.getRepositoryViews
Get the total number of views and breakdown per day or week for the last 14 days.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getRepositoryAssets"/>
## Github.getRepositoryAssets
List assets for a release.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The release ID (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"id": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="mergeRepository"/>
## Github.mergeRepository
Perform a merge.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| base          | String     | The branch (or git ref) you want your changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repositoryName that requests a merge to a base of another repositoryName. (required)
| head          | String     | The branch (or git ref) where your changes are implemented. (required)
| commitMessage | String     | Commit message to use for the merge commit. If omitted, a default message will be used. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"base": "...",
	"head": "...",
	"commitMessage": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="moveRepositoryProjectCard"/>
## Github.moveRepositoryProjectCard
Move a project card.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The card ID (required)
| position      | String     | Can be one of first, last, or after:, where is the id value of a column in the same project. (required)
| columnId      | String     | The id value of a column in the same project. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"id": "...",
	"position": "...",
	"columnId": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="moveRepositoryProjectColumn"/>
## Github.moveRepositoryProjectColumn
Move a project column.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The column ID (required)
| position      | String     | Can be one of first, last, or after:, where is the id value of a column in the same project. (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"id": "...",
	"position": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="pingRepositoryHook"/>
## Github.pingRepositoryHook
Ping a hook.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The hook ID (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"id": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="removeBranchProtection"/>
## Github.removeBranchProtection
Remove branch protection. (In preview period. See README.)

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| branch        | String     | The name of the branch (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"branch": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="removeRepositoryCollaborator"/>
## Github.removeRepositoryCollaborator
Remove user as a collaborator.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| collabuser    | String     | The name of the collaborator (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"collabuser": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="removeProtectedBranchRequiredStatusChecks"/>
## Github.removeProtectedBranchRequiredStatusChecks
Remove required status checks of protected branch. (In preview period. See README.)

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| branch        | String     | The name of the branch (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"branch": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="removeProtectedBranchRequiredStatusChecksContexts"/>
## Github.removeProtectedBranchRequiredStatusChecksContexts
Remove required status checks contexts of protected branch. (In preview period. See README.)

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| branch        | String     | The name of the branch (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"branch": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="removeProtectedBranchRestrictions"/>
## Github.removeProtectedBranchRestrictions
Remove restrictions of protected branch. (In preview period. See README.)

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| branch        | String     | The name of the branch (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"branch": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="removeProtectedBranchTeamRestrictions"/>
## Github.removeProtectedBranchTeamRestrictions
Remove team restrictions of protected branch. (In preview period. See README.)

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| branch        | String     | The name of the branch (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"branch": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="removeProtectedBranchUserRestrictions"/>
## Github.removeProtectedBranchUserRestrictions
Remove user restrictions of protected branch. (In preview period. See README.)

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| branch        | String     | The name of the branch (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"branch": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="replaceProtectedBranchRequiredStatusChecksContexts"/>
## Github.replaceProtectedBranchRequiredStatusChecksContexts
Replace required status checks contexts of protected branch. (In preview period. See README.)

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| branch        | String     | The name of the branch (required)
| body          | JSON       | An array of protected branch required status checks contexts (e.g. continuous-integration/jenkins). (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"branch": "...",
	"body": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="replaceProtectedBranchTeamRestrictions"/>
## Github.replaceProtectedBranchTeamRestrictions
Replace team restrictions of protected branch. (In preview period. See README.)

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| branch        | String     | The name of the branch (required)
| body          | JSON       | An array of team slugs (e.g. justice-league). (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"branch": "...",
	"body": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="replaceProtectedBranchUserRestrictions"/>
## Github.replaceProtectedBranchUserRestrictions
Replace user restrictions of protected branch. (In preview period. See README.)

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| branch        | String     | The name of the branch (required)
| body          | JSON       | An array of team slugs (e.g. justice-league). (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"branch": "...",
	"body": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="requestRepositoryPageBuild"/>
## Github.requestRepositoryPageBuild
Request a page build. (In preview period. See README.)

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="testRepositoryHook"/>
## Github.testRepositoryHook
Test a [push] hook.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The hook ID (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"id": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="updateRepositoryBranchProtection"/>
## Github.updateRepositoryBranchProtection
Update branch protection. (In preview period. See README.)

| Field               | Type       | Description
|---------------------|------------|----------
| accessToken         | credentials| The access_token obtained from Github. (optional)
| user                | String     | The owner name (required)
| repositoryName      | String     | The name of the repository (required)
| branch              | String     | The name of the branch (required)
| requiredStatusChecks| JSON       | JSON object that contains the following keys: `include_admins` - Enforce required status checks for repository administrators, `strict` - Require branches to be up to date before merging, `contexts` - The list of status checks to require in order to merge into this branch. This object can have the value of `null` for disabled. (required)
| restrictions        | JSON       | JSON object that contains the following keys: `users` - The list of user logins with push access, `teams` - The list of team slugs with push access. This object can have the value of `null` for disabled. (required)
| page                | Number     | Page number of the results to fetch. (optional)
| perPage             | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"branch": "...",
	"requiredStatusChecks": "...",
	"restrictions": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="updateRepositoryCommitComment"/>
## Github.updateRepositoryCommitComment
Update a commit comment.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The comment ID (required)
| body          | String     | The contents of the comment (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"id": "...",
	"body": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="updateRepositoryFile"/>
## Github.updateRepositoryFile
Update a file.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| path          | String     | The content path. (required)
| message       | String     | The commit message. (required)
| content       | String     | The updated file content, Base64 encoded. (required)
| sha           | String     | The blob SHA of the file being replaced. (required)
| branch        | String     | The branch name. If not provided, uses the repository’s default branch (usually master). (optional)
| committer     | JSON       | Object containing information about the committer. You must provide values for both name and email (optional). Ex.: "committer": {"name": "Scott Chacon", "email": "schacon@gmail.com"} (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"path": "...",
	"message": "...",
	"content": "...",
	"sha": "...",
	"branch": "...",
	"committer": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="updateRepositoryInvite"/>
## Github.updateRepositoryInvite
Update a repository invitation. (In preview period. See README.)

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The invitation ID (required)
| permission    | String     | The permissions that the associated user will have on the repository. (optional)

#### Request example
```json
{	"accessToken": "...",
	"repositoryName": "...",
	"id": "...",
	"permission": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="updateRepositoryProject"/>
## Github.updateRepositoryProject
Update a project.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| number        | Number     | The number of the project (required)
| name          | String     | The name of the project (required)
| body          | String     | The body of the project (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"number": 0,
	"name": "...",
	"body": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="updateRepositoryProjectCard"/>
## Github.updateRepositoryProjectCard
Update a project card.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The card ID (required)
| note          | String     | The note of the card. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"id": "...",
	"note": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="updateRepositoryProjectColumn"/>
## Github.updateRepositoryProjectColumn
Update a project column.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The column ID (required)
| name          | String     | The new name of the column (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"id": "...",
	"name": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="updateProtectedBranchRequiredStatusChecks"/>
## Github.updateProtectedBranchRequiredStatusChecks
Update required status checks of protected branch. (In preview period. See README.)

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The new name of the column (required)
| branch        | String     | The branch name (required)
| body          | JSON       | JSON object that contains the following keys: `include_admins` - Enforce required status checks for repository administrators, `strict` - Require branches to be up to date before merging, `contexts` - The list of status checks to require in order to merge into this branch. (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"branch": "...",
	"body": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="uploadRepositoryAsset"/>
## Github.uploadRepositoryAsset
Upload a release asset.

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github. (optional)
| user          | String     | The owner name (required)
| repositoryName| String     | The new name of the repository (required)
| id            | String     | The release ID (required)
| filepath      | String     | The file path of the asset. (required)
| name          | String     | The file name of the asset. This should be set in a URI query parameter. (required)
| label         | String     | An alternate short description of the asset. Used in place of the filename. This should be set in a URI query parameter. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"repositoryName": "...",
	"id": "...",
	"filepath": "...",
	"name": "...",
	"label": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="codeSearch"/>
## Github.codeSearch
Search code.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| q          | String     | Search Term (required)
| sort       | String     | The sort field. Can only be indexed, which indicates how recently a file has been indexed by the GitHub search infrastructure. Default: results are sorted by best match. (optional)
| order      | String     | asc or desc (optional)
| page       | Number     | Page number of the results to fetch. (optional)
| perPage    | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"q": "...",
	"sort": "...",
	"order": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="emailSearch"/>
## Github.emailSearch
Search against public email addresses.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| email      | String     | The email address (required)

#### Request example
```json
{	"accessToken": "...",
	"email": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="issuesSearch"/>
## Github.issuesSearch
Search issues.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| q          | String     | Search Term (required)
| sort       | String     | The sort field. Can be comments, created, or updated. Default: results are sorted by best match. (optional)
| order      | String     | asc or desc (optional)
| page       | Number     | Page number of the results to fetch. (optional)
| perPage    | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"q": "...",
	"sort": "...",
	"order": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="repositorySearch"/>
## Github.repositorySearch
Search repositories.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| q          | String     | Search Term (required)
| sort       | String     | stars, forks, or updated (optional)
| order      | String     | asc or desc (optional)
| page       | Number     | Page number of the results to fetch. (optional)
| perPage    | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"q": "...",
	"sort": "...",
	"order": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="usersSearch"/>
## Github.usersSearch
Search users.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| q          | String     | Search Term (required)
| sort       | String     | The sort field. Can be followers, repositories, or joined. Default: results are sorted by best match. (optional)
| order      | String     | asc or desc (optional)
| page       | Number     | Page number of the results to fetch. (optional)
| perPage    | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"q": "...",
	"sort": "...",
	"order": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="acceptRepositoryInvite"/>
## Github.acceptRepositoryInvite
Accept a repository invitation. (In preview period. See README.)

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| id         | String     | The invitation ID (required)

#### Request example
```json
{	"accessToken": "...",
	"id": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="addEmails"/>
## Github.addEmails
Add email address(es)

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| body       | JSON       | You can post a single email address or an array of addresses. (required)

#### Request example
```json
{	"accessToken": "...",
	"body": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="checkFollowing"/>
## Github.checkFollowing
Check if you are following a user

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| user       | String     | The user name (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="checkIfOneFollowersOther"/>
## Github.checkIfOneFollowersOther
Check if one user follows another

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| user       | String     | The user name (required)
| otherUser  | String     | Other user name (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"otherUser": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="createGpgKey"/>
## Github.createGpgKey
Create a GPG key. (In preview period. See README.)

| Field           | Type       | Description
|-----------------|------------|----------
| accessToken     | credentials| The access_token obtained from Github. (optional)
| armoredPublicKey| String     | GPG key contents (required)

#### Request example
```json
{	"accessToken": "...",
	"armoredPublicKey": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="createKey"/>
## Github.createKey
Create a public key

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| title      | String     | The key title (required)
| key        | String     | The SSH key (required)

#### Request example
```json
{	"accessToken": "...",
	"title": "...",
	"key": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="declineRepositoryInvite"/>
## Github.declineRepositoryInvite
Decline a repository invitation. (In preview period. See README.)

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| id         | String     | The invitation ID (required)

#### Request example
```json
{	"accessToken": "...",
	"id": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="deleteEmails"/>
## Github.deleteEmails
Delete email address(es)

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| body       | JSON       | You can post a single email address or an array of addresses. (required)

#### Request example
```json
{	"accessToken": "...",
	"body": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="deleteGpgKey"/>
## Github.deleteGpgKey
Delete a GPG key. (In preview period. See README.)

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| id         | String     | The GPG key ID (required)

#### Request example
```json
{	"accessToken": "...",
	"id": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="deleteKey"/>
## Github.deleteKey
Delete a public key

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| id         | String     | The key ID (required)

#### Request example
```json
{	"accessToken": "...",
	"id": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="demoteUser"/>
## Github.demoteUser
Demote a site administrator to an ordinary user

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| user       | String     | The user name (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="editOrganizationMembership"/>
## Github.editOrganizationMembership
Edit your organization membership

| Field           | Type       | Description
|-----------------|------------|----------
| accessToken     | credentials| The access_token obtained from Github. (optional)
| orginizationName| String     | The new name of the organization (required)
| state           | String     | The state that the membership should be in. Only "active" will be accepted. (required)

#### Request example
```json
{	"accessToken": "...",
	"orginizationName": "...",
	"state": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="followUser"/>
## Github.followUser
Follow a user

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| user       | String     | The user name (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getUser"/>
## Github.getUser
Get the authenticated user

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)

#### Request example
```json
{	"accessToken": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getAllUsers"/>
## Github.getAllUsers
Get all users

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| since      | Number     | The integer ID of the last User that you’ve seen. (optional)

#### Request example
```json
{	"accessToken": "...",
	"since": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getUserById"/>
## Github.getUserById
Get a single user by GitHub ID

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| id         | String     | The GitHub user ID (required)

#### Request example
```json
{	"accessToken": "...",
	"id": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getUserEmails"/>
## Github.getUserEmails
List email addresses for a user

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| page       | Number     | Page number of the results to fetch. (optional)
| perPage    | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getUserFollowers"/>
## Github.getUserFollowers
List the authenticated user's followers

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| page       | Number     | Page number of the results to fetch. (optional)
| perPage    | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getFollowersForUser"/>
## Github.getFollowersForUser
List a user's followers

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| user       | String     | The user name (required)
| page       | Number     | Page number of the results to fetch. (optional)
| perPage    | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getUserFollowing"/>
## Github.getUserFollowing
List who the authenticated user is following

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| page       | Number     | Page number of the results to fetch. (optional)
| perPage    | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getFollowingForUser"/>
## Github.getFollowingForUser
List who a user is following

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| user       | String     | The user name (required)
| page       | Number     | Page number of the results to fetch. (optional)
| perPage    | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getSingleUser"/>
## Github.getSingleUser
Get a single user

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| user       | String     | The user name (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getGpgKey"/>
## Github.getGpgKey
Get a single GPG key. (In preview period. See README.)

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| id         | String     | The GPG key ID (required)

#### Request example
```json
{	"accessToken": "...",
	"id": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getGpgKeys"/>
## Github.getGpgKeys
List your GPG keys. (In preview period. See README.)

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| page       | Number     | Page number of the results to fetch. (optional)
| perPage    | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getKey"/>
## Github.getKey
Get a single public key

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| id         | String     | The key ID (required)

#### Request example
```json
{	"accessToken": "...",
	"id": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getKeys"/>
## Github.getKeys
List your public keys

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| page       | Number     | Page number of the results to fetch. (optional)
| perPage    | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getKeysForUser"/>
## Github.getKeysForUser
List public keys for a user

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| user       | String     | The user name (required)
| page       | Number     | Page number of the results to fetch. (optional)
| perPage    | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"user": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getUserOrganizationMembership"/>
## Github.getUserOrganizationMembership
Get your organization membership

| Field           | Type       | Description
|-----------------|------------|----------
| accessToken     | credentials| The access_token obtained from Github. (optional)
| orginizationName| String     | The name of the organization (required)

#### Request example
```json
{	"accessToken": "...",
	"orginizationName": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getUserOrganizations"/>
## Github.getUserOrganizations
List organizations for the authenticated user.

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| page       | Number     | Page number of the results to fetch. (optional)
| perPage    | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getRepositoryInvites"/>
## Github.getRepositoryInvites
List a user's repository invitations. (In preview period. See README.)

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)

#### Request example
```json
{	"accessToken": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="getUserTeams"/>
## Github.getUserTeams
Get your teams

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| page       | Number     | Page number of the results to fetch. (optional)
| perPage    | Number     | A custom page size up to 100. Default is 30. (optional)

#### Request example
```json
{	"accessToken": "...",
	"page": 0,
	"perPage": 0
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="promoteUser"/>
## Github.promoteUser
Promote an ordinary user to a site administrator

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| user       | String     | The user name (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="suspendUser"/>
## Github.suspendUser
Suspend a user

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| user       | String     | The user name (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="unfollowUserUser"/>
## Github.unfollowUserUser
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| user       | String     | The user name (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="unsuspendUser"/>
## Github.unsuspendUser
Unsuspend a user

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| user       | String     | The user name (required)

#### Request example
```json
{	"accessToken": "...",
	"user": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

<a name="updateUser"/>
## Github.updateUser
Update the authenticated user

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github. (optional)
| name       | String     | The new name of the user (optional)
| email      | String     | Publicly visible email address. (optional)
| blog       | String     | The new blog URL of the user. (optional)
| company    | String     | The new company of the user. (optional)
| location   | String     | The new location of the user. (optional)
| hireable   | String     | The new hiring availability of the user. (optional)
| bio        | String     | The new short biography of the user. (optional)

#### Request example
```json
{	"accessToken": "...",
	"name": "...",
	"email": "...",
	"blog": "...",
	"company": "...",
	"location": "...",
	"hireable": "...",
	"bio": "..."
}
```
#### Response example
```json
{
	"callback":"success",
	"contextWrites":{
		"#":{
			"to":"..."
		}
	}
}
```

