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
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| id         | String     | The thread ID (required)

<a name="checkRepositoryStarring"/>
## Github.checkRepositoryStarring
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

<a name="deleteNotificationThreadSubscription"/>
## Github.deleteNotificationThreadSubscription
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| id         | String     | The thread ID (required)

<a name="getPublicEvents"/>
## Github.getPublicEvents
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| page       | Number     | Page number of the results to fetch. (optional)
| perPage    | Number     | A custom page size up to 100. Default is 30. (optional)

<a name="getOrganizationEvents"/>
## Github.getOrganizationEvents
Method description

| Field           | Type       | Description
|-----------------|------------|----------
| accessToken     | credentials| The access_token obtained from Github.
| organizationName| String     | The name of organization (required)
| page            | Number     | Page number of the results to fetch. (optional)
| perPage         | Number     | A custom page size up to 100. Default is 30. (optional)

<a name="getRepositoryEvents"/>
## Github.getRepositoryEvents
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

<a name="getRepositoryIssuesEvents"/>
## Github.getRepositoryIssuesEvents
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

<a name="getRepositoryNetworkEvents"/>
## Github.getRepositoryNetworkEvents
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The repository name (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

<a name="getUserPerformedEvents"/>
## Github.getUserPerformedEvents
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| user       | String     | The user name (required)
| page       | Number     | Page number of the results to fetch. (optional)
| perPage    | Number     | A custom page size up to 100. Default is 30. (optional)

<a name="getUserOrganizationEvents"/>
## Github.getUserOrganizationEvents
Method description

| Field           | Type       | Description
|-----------------|------------|----------
| accessToken     | credentials| The access_token obtained from Github.
| user            | String     | The user name (required)
| organizationName| String     | The name of the organization (required)
| page            | Number     | Page number of the results to fetch. (optional)
| perPage         | Number     | A custom page size up to 100. Default is 30. (optional)

<a name="getUserPublicPerformedEvents"/>
## Github.getUserPublicPerformedEvents
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| user       | String     | The user name (required)
| page       | Number     | Page number of the results to fetch. (optional)
| perPage    | Number     | A custom page size up to 100. Default is 30. (optional)

<a name="getUserReceivedEvents"/>
## Github.getUserReceivedEvents
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| user       | String     | The user name (required)
| page       | Number     | Page number of the results to fetch. (optional)
| perPage    | Number     | A custom page size up to 100. Default is 30. (optional)

<a name="getUserReceivedPublicEvents"/>
## Github.getUserReceivedPublicEvents
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| user       | String     | The user name (required)
| page       | Number     | Page number of the results to fetch. (optional)
| perPage    | Number     | A custom page size up to 100. Default is 30. (optional)

<a name="getFeeds"/>
## Github.getFeeds
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.

<a name="getNotificationThread"/>
## Github.getNotificationThread
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| id         | String     | The ID of the thread (required)

<a name="getUserNotifications"/>
## Github.getUserNotifications
Method description

| Field        | Type       | Description
|--------------|------------|----------
| accessToken  | credentials| The access_token obtained from Github.
| all          | String     | If true, show notifications marked as read. Default: false (optional)
| participating| String     | If true, only shows notifications in which the user is directly participating or mentioned. Default: false (optional)
| since        | String     | Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ (optional)
| before       | String     | Only show notifications updated before the given time. This is a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ. (optional)

<a name="getUserRepositoryNotifications"/>
## Github.getUserRepositoryNotifications
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| all           | String     | If true, show notifications marked as read. Default: false (optional)
| participating | String     | If true, only shows notifications in which the user is directly participating or mentioned. Default: false (optional)
| since         | String     | Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ (optional)
| before        | String     | Only show notifications updated before the given time. This is a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ. (optional)

<a name="getRepositorySubscription"/>
## Github.getRepositorySubscription
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The onwer name (required)
| repositoryName| String     | The name of the repository (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

<a name="getRepositoryStargazers"/>
## Github.getRepositoryStargazers
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

<a name="getStarredRepositories"/>
## Github.getStarredRepositories
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| page       | Number     | Page number of the results to fetch. (optional)
| perPage    | Number     | A custom page size up to 100. Default is 30. (optional)

<a name="getUserStarredRepositories"/>
## Github.getUserStarredRepositories
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| user       | String     | The user name (required)
| page       | Number     | Page number of the results to fetch. (optional)
| perPage    | Number     | A custom page size up to 100. Default is 30. (optional)

<a name="getWatchedRepositories"/>
## Github.getWatchedRepositories
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| page       | Number     | Page number of the results to fetch. (optional)
| perPage    | Number     | A custom page size up to 100. Default is 30. (optional)

<a name="getUserWatchedRepositories"/>
## Github.getUserWatchedRepositories
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| user       | String     | The user name (required)
| page       | Number     | Page number of the results to fetch. (optional)
| perPage    | Number     | A custom page size up to 100. Default is 30. (optional)

<a name="getRepositoryWatchers"/>
## Github.getRepositoryWatchers
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

<a name="markNotificationThreadAsRead"/>
## Github.markNotificationThreadAsRead
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| id         | String     | The Id of the thread (required)

<a name="markNotificationsAsRead"/>
## Github.markNotificationsAsRead
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| lastReadAt | String     | Describes the last point that notifications were checked. Anything updated since this time will not be updated. This is a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ. Default: Time.now (optional)

<a name="markNotificationsAsReadForRepository"/>
## Github.markNotificationsAsReadForRepository
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| lastReadAt    | String     | Describes the last point that notifications were checked. Anything updated since this time will not be updated. This is a timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ. Default: Time.now (optional)

<a name="setNotificationThreadSubscription"/>
## Github.setNotificationThreadSubscription
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| id         | String     | The ID of the thread (required)
| subscribed | String     | Determines if notifications should be received from this thread (optional)
| ignored    | String     | Determines if all notifications should be blocked from this thread (optional)

<a name="setRepositorySubscription"/>
## Github.setRepositorySubscription
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| subscribed    | String     | Determines if notifications should be received from this repository. (optional)
| ignored       | String     | Determines if all notifications should be blocked from this repository. (optional)

<a name="starRepository"/>
## Github.starRepository
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)

<a name="unstarRepository"/>
## Github.unstarRepository
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)

<a name="unwatchRepository"/>
## Github.unwatchRepository
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)

<a name="checkAuthorization"/>
## Github.checkAuthorization
Method description

| Field       | Type  | Description
|-------------|-------|----------
| token       | String| The access token to check. (required)
| clientId    | String| The 20 character OAuth app client key for which to create the token. (required)
| clientSecret| String| The username obtained from Github. (required)

<a name="createAuthorization"/>
## Github.createAuthorization
Method description

| Field       | Type  | Description
|-------------|-------|----------
| scopes      | Array | A list of scopes that this authorization is in. (optional)
| note        | String| A note to remind you what the OAuth token is for. (optional)
| noteUrl     | String| A URL to remind you what app the OAuth token is for. (optional)
| clientId    | String| The 20 character OAuth app client key for which to create the token. (required)
| clientSecret| String| The 40 character OAuth app client secret for which to create the token. (optional)
| fingerprint | String| A unique string to distinguish an authorization from others created for the same client ID and user. (optional)

<a name="deleteAuthorization"/>
## Github.deleteAuthorization
Method description

| Field   | Type  | Description
|---------|-------|----------
| username| String| The username obtained from Github. (required)
| password| String| The password obtained from Github. (required)
| id      | String| The authorization ID (required)

<a name="deleteGrantAuthorization"/>
## Github.deleteGrantAuthorization
Method description

| Field   | Type  | Description
|---------|-------|----------
| username| String| The username obtained from Github. (required)
| password| String| The password obtained from Github. (required)
| id      | String| The authorization ID (required)

<a name="getAuthorization"/>
## Github.getAuthorization
Method description

| Field        | Type       | Description
|--------------|------------|----------
| accessToken  | credentials| The access_token obtained from Github.
| username     | String     | The username obtained from Github. (required)
| password     | String     | The password obtained from Github. (required)
| twoFactorCode| String     | Required for two-factor auth method. (optional)
| id           | String     | The authorization ID (required)

<a name="getAllAuthorization"/>
## Github.getAllAuthorization
Method description

| Field   | Type  | Description
|---------|-------|----------
| username| String| The username obtained from Github. (required)
| password| String| The password obtained from Github. (required)
| page    | Number| Page number of the results to fetch. (optional)
| perPage | Number| A custom page size up to 100. Default is 30. (optional)

<a name="getGrantAuthorization"/>
## Github.getGrantAuthorization
Method description

| Field        | Type  | Description
|--------------|-------|----------
| id           | String| The authorization ID (required)
| username     | String| The username obtained from Github. (required)
| password     | String| The password obtained from Github. (required)
| twoFactorCode| String| Required for two-factor auth method. (optional)
| page         | Number| Page number of the results to fetch. (optional)
| perPage      | Number| A custom page size up to 100. Default is 30. (optional)

<a name="getGrantsAuthorization"/>
## Github.getGrantsAuthorization
Method description

| Field        | Type  | Description
|--------------|-------|----------
| username     | String| The username obtained from Github. (required)
| password     | String| The password obtained from Github. (required)
| twoFactorCode| String| Required for two-factor auth method. (optional)
| page         | Number| Page number of the results to fetch. (optional)
| perPage      | Number| A custom page size up to 100. Default is 30. (optional)

<a name="getOrCreateAuthorizationForApp"/>
## Github.getOrCreateAuthorizationForApp
Method description

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

<a name="getOrCreateAuthorizationForAppAndFingerprint"/>
## Github.getOrCreateAuthorizationForAppAndFingerprint
Method description

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

<a name="resetAuthorization"/>
## Github.resetAuthorization
Method description

| Field       | Type  | Description
|-------------|-------|----------
| token       | String| The access token to check. (required)
| clientId    | String| The 20 character OAuth app client key for which to create the token. (required)
| clientSecret| String| The 40 character OAuth app client secret associated with the client ID specified in the URL. (required)

<a name="revokeAuthorization"/>
## Github.revokeAuthorization
Method description

| Field       | Type  | Description
|-------------|-------|----------
| token       | String| The access token to check. (required)
| clientId    | String| The 20 character OAuth app client key for which to create the token. (required)
| clientSecret| String| The 40 character OAuth app client secret associated with the client ID specified in the URL. (required)

<a name="updateAuthorization"/>
## Github.updateAuthorization
Method description

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

<a name="createOrganizationEnterprise"/>
## Github.createOrganizationEnterprise
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| login      | String     | The organization's username. (required)
| admin      | String     | The login of the user who will manage this organization. (required)
| profileName| String     | The organization's display name. (optional)

<a name="getLicenseEnterprise"/>
## Github.getLicenseEnterprise
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.

<a name="queueIndexingJobEnterprise"/>
## Github.queueIndexingJobEnterprise
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| target     | String     | A string representing the item to index. (required)

<a name="statsEnterprise"/>
## Github.statsEnterprise
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| type       | String     | Possible values: issues, hooks, milestones, orgs, comments, pages, users, gists, pulls, repos, all. (required)

<a name="syncLdapForTeamEnterprise"/>
## Github.syncLdapForTeamEnterprise
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| teamId     | Number     | The ID of the team (required)

<a name="syncLdapForUserEnterprise"/>
## Github.syncLdapForUserEnterprise
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| user       | String     | The user name (required)

<a name="updateLdapForTeamEnterprise"/>
## Github.updateLdapForTeamEnterprise
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| teamId     | Number     | The ID of the team (required)
| data       | String     | JSON payload with the new LDAP data. (optional). Ex.: {"ldap_dn": "cn=Enterprise Ops,ou=teams,dc=github,dc=com"}

<a name="updateLdapForUserEnterprise"/>
## Github.updateLdapForUserEnterprise
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| user       | String     | The user name (required)
| data       | String     | JSON payload with the new LDAP data. (optional). Ex.: {"ldap_dn": "uid=asdf,ou=users,dc=github,dc=com"}

<a name="checkGistStar"/>
## Github.checkGistStar
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| id         | String     | Id (SHA1 hash) of the gist (required)

<a name="createGist"/>
## Github.createGist
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| files      | JSON       | Files that make up this gist. The key of which should be a required string filename and the value another required hash with parameters: 'content' (required)
| description| String     | A description of the gist. (optional)
| public     | String     | Indicates whether the gist is public. Default: false (required)

<a name="createGistComment"/>
## Github.createGistComment
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| gistId     | String     | Id (SHA1 hash) of the gist. (required)
| body       | String     | The comment text. (required)

<a name="deleteGist"/>
## Github.deleteGist
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| id         | String     | Id (SHA1 hash) of the gist. (required)

<a name="deleteGistComment"/>
## Github.deleteGistComment
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| gistId     | String     | Id (SHA1 hash) of the gist. (required)
| commentId  | String     | The comment ID. (required)

<a name="editGist"/>
## Github.editGist
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| id         | String     | Id (SHA1 hash) of the gist. (required)
| description| String     | A description of the gist. (optional)
| files      | JSON       | Files that make up this gist. The key of which should be a required string filename and the value another required hash with parameters: 'content' (required)

<a name="updateGistComment"/>
## Github.updateGistComment
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| gistId     | String     | Id (SHA1 hash) of the gist. (required)
| commentId  | String     | The comment ID. (required)
| body       | String     | The comment text. (required)

<a name="forkGist"/>
## Github.forkGist
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| id         | String     | Id (SHA1 hash) of the gist. (required)

<a name="getGist"/>
## Github.getGist
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| id         | String     | Id (SHA1 hash) of the gist. (required)

<a name="getAllGists"/>
## Github.getAllGists
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| page       | Number     | Page number of the results to fetch. (optional)
| perPage    | Number     | A custom page size up to 100. Default is 30. (optional)
| since      | String     | Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ (optional)

<a name="getGistComment"/>
## Github.getGistComment
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| gistId     | String     | Id (SHA1 hash) of the gist. (required)
| id         | String     | The comment ID. (required)

<a name="getGistComments"/>
## Github.getGistComments
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| gistId     | String     | Id (SHA1 hash) of the gist. (required)

<a name="getGistCommits"/>
## Github.getGistCommits
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| id         | String     | Id (SHA1 hash) of the gist. (required)

<a name="getUserGists"/>
## Github.getUserGists
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| user       | String     | The user name (required)
| page       | Number     | Page number of the results to fetch. (optional)
| perPage    | Number     | A custom page size up to 100. Default is 30. (optional)
| since      | String     | Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ (optional)

<a name="getGistForks"/>
## Github.getGistForks
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| id         | String     | Id (SHA1 hash) of the gist. (required)
| page       | Number     | Page number of the results to fetch. (optional)
| perPage    | Number     | A custom page size up to 100. Default is 30. (optional)

<a name="getPublicGists"/>
## Github.getPublicGists
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| since      | String     | Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ (optional)

<a name="getGistByRevision"/>
## Github.getGistByRevision
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| id         | String     | Id (SHA1 hash) of the gist. (required)
| sha        | String     | The SHA1 hash of the revision (required)

<a name="getStarredGists"/>
## Github.getStarredGists
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| since      | String     | Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ (optional)

<a name="starGist"/>
## Github.starGist
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| id         | String     | Id (SHA1 hash) of the gist. (required)

<a name="unstarGist"/>
## Github.unstarGist
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| id         | String     | Id (SHA1 hash) of the gist. (required)

<a name="createBlob"/>
## Github.createBlob
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| content       | String     | The new blob's content. (required)
| encoding      | String     | The encoding used for content. Currently, "utf-8" and "base64" are supported. Default: "utf-8". (required)

<a name="createCommit"/>
## Github.createCommit
Method description

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

<a name="createReference"/>
## Github.createReference
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| ref           | String     | String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected. (required)
| sha           | String     | The SHA1 value to set this reference to (required)

<a name="createTag"/>
## Github.createTag
Method description

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

<a name="createTree"/>
## Github.createTree
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| tree          | JSON       | Array of Hash objects (of path, mode, type and sha) specifying a tree structure (required)
| baseTree      | String     | String of the SHA1 of the tree you want to update with new data (optional)

<a name="deleteReference"/>
## Github.deleteReference
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| ref           | String     | String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected. (required)

<a name="getBlob"/>
## Github.getBlob
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| sha           | String     | The SHA1 value to set this reference to (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

<a name="getCommit"/>
## Github.getCommit
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| sha           | String     | The SHA1 value to set this reference to (required)

<a name="getCommitSignatureVerification"/>
## Github.getCommitSignatureVerification
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| sha           | String     | The SHA1 value to set this reference to (required)

<a name="getReference"/>
## Github.getReference
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| ref           | String     | String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected. (required)

<a name="getReferences"/>
## Github.getReferences
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

<a name="getTag"/>
## Github.getTag
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| sha           | String     | The SHA1 value to set this reference to (required)

<a name="getTagSignatureVerification"/>
## Github.getTagSignatureVerification
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| sha           | String     | The SHA1 value to set this reference to (required)

<a name="getTags"/>
## Github.getTags
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

<a name="getTree"/>
## Github.getTree
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| sha           | String     | The SHA1 value to set this reference to (required)
| recursive     | String     | Get a Tree Recursively (optional). True or false

<a name="updateReference"/>
## Github.updateReference
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| ref           | String     | String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected. (required)
| sha           | String     | The SHA1 value to set this reference to (required)
| force         | String     | Boolean indicating whether to force the update or to make sure the update is a fast-forward update. The default is false, so leaving this out or setting it to false will make sure you’re not overwriting work. (optional)

<a name="createInstallation"/>
## Github.createInstallation
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| installationId| Number     | The id of the installation for this integration. (required)
| userId        | Number     | The id of the user for whom the integration is acting on behalf of. (optional)

<a name="addAssigneesToIssue"/>
## Github.addAssigneesToIssue
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| number        | Number     | The number of the issue (required)
| assignees     | JSON       | Logins for the users that should be added to the issue. (required)

<a name="addIssueLabels"/>
## Github.addIssueLabels
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| number        | Number     | The number of the issue (required)
| body          | JSON       | Array of the labels that should be added to the issue. (required)

<a name="checkAssignee"/>
## Github.checkAssignee
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| assignee      | String     | Login for the user that this issue should be assigned to. (required)

<a name="createIssue"/>
## Github.createIssue
Method description

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

<a name="createIssueComment"/>
## Github.createIssueComment
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| number        | Number     | The number of the issue (required)
| body          | String     | The contents of the comment. (required) Ex.: {"body": "Me too"}

<a name="createLabel"/>
## Github.createLabel
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name. (required)
| repositoryName| String     | The name of the repository. (required)
| name          | String     | The name of the label. (required)
| color         | String     | 6 character hex code, without a leading #. (required)

<a name="createMilestone"/>
## Github.createMilestone
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name. (required)
| repositoryName| String     | The name of the repository. (required)
| title         | String     | The title of the milestone. (required)
| state         | String     | The state of the milestone. Either open or closed. Default: open (optional)
| description   | String     | A description of the milestone. (optional)
| dueOn         | String     | Timestamp in ISO 8601 format: YYYY-MM-DDTHH:MM:SSZ (optional)

<a name="deleteIssueComment"/>
## Github.deleteIssueComment
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name. (required)
| repositoryName| String     | The name of the repository. (required)
| id            | String     | The ID of the comment (required)

<a name="deleteLabel"/>
## Github.deleteLabel
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name. (required)
| repositoryName| String     | The name of the repository. (required)
| name          | String     | The name of the label. (required)

<a name="deleteMilestone"/>
## Github.deleteMilestone
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name. (required)
| repositoryName| String     | The name of the repository (required)
| number        | Number     | The number of the milestone. (required)

<a name="updateIssue"/>
## Github.updateIssue
Method description

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

<a name="updateIssueComment"/>
## Github.updateIssueComment
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name. (required)
| repositoryName| String     | The name of the repository. (required)
| id            | String     | The ID of the comment. (required)
| body          | String     | The contents of the comment. (required). Ex.: {"body": "Me too"}

<a name="getIssue"/>
## Github.getIssue
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name. (required)
| repositoryName| String     | The name of the repository. (required)
| number        | Number     | The number of the issue. (required)

<a name="getAllIssues"/>
## Github.getAllIssues
Method description

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

<a name="getAssignees"/>
## Github.getAssignees
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name. (required)
| repositoryName| String     | The name of the repository. (required)

<a name="getIssueComment"/>
## Github.getIssueComment
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name. (required)
| repositoryName| String     | The name of the repository. (required)
| id            | String     | The ID of the comment. (required)

<a name="getIssueComments"/>
## Github.getIssueComments
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name. (required)
| repositoryName| String     | The name of the repository. (required)
| number        | Number     | The number of the issue. (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

<a name="getIssuesCommentsForRepository"/>
## Github.getIssuesCommentsForRepository
Method description

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

<a name="getIssueEvent"/>
## Github.getIssueEvent
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name. (required)
| repositoryName| String     | The name of the reposotiry. (required)
| id            | String     | The ID of the event. (required)

<a name="getIssueEvents"/>
## Github.getIssueEvents
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name. (required)
| repositoryName| String     | The name of the repository. (required)
| number        | Number     | The number of the issue. (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

<a name="getIssueEventsForRepository"/>
## Github.getIssueEventsForRepository
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name. (required)
| repositoryName| String     | The name of the repository. (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

<a name="getIssueEventsTimeline"/>
## Github.getIssueEventsTimeline
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name. (required)
| repositoryName| String     | The name of the repository. (required)
| number        | Number     |  The number of the issue.(required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

<a name="getIssuesForOrganization"/>
## Github.getIssuesForOrganization
Method description

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

<a name="getIssuesForRepository"/>
## Github.getIssuesForRepository
Method description

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

<a name="getUserIssues"/>
## Github.getUserIssues
Method description

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

<a name="getIssueLabels"/>
## Github.getIssueLabels
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name. (required)
| repositoryName| String     | The name of the repository. (required)
| number        | Number     | The number of the issue. (required)

<a name="getLabel"/>
## Github.getLabel
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name. (required)
| repositoryName| String     | The name of the repository. (required)
| name          | String     | The name of the label. (required)

<a name="getRepositoryLabels"/>
## Github.getRepositoryLabels
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name. (required)
| repositoryName| String     | The name of the repository. (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

<a name="getMilestone"/>
## Github.getMilestone
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name. (required)
| repositoryName| String     | The name of the repository. (required)
| number        | Number     | The number of the milestone. (required)

<a name="getMilestoneLabels"/>
## Github.getMilestoneLabels
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name. (required)
| repositoryName| String     | The name of the repository. (required)
| number        | Number     | The number of the milestone. (required)

<a name="getRepositoryMilestones"/>
## Github.getRepositoryMilestones
Method description

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

<a name="lockIssue"/>
## Github.lockIssue
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | he owner name (required)
| repositoryName| String     | The name of the repository (required)
| number        | Number     | The number of the issue. (required)

<a name="removeIssueAllLabels"/>
## Github.removeIssueAllLabels
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| number        | Number     | The number of the issue. (required)

<a name="removeAssigneesFromIssue"/>
## Github.removeAssigneesFromIssue
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| number        | Number     | The number of the issue. (required)
| assignees     | JSON       | Logins for the users that should be removed from the issue. (required). Ex.: "assignees": ["hubot", "other_assignee"]

<a name="removeIssueLabel"/>
## Github.removeIssueLabel
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| number        | Number     | The number of the issue. (required)
| name          | String     | The name of the label. (required)

<a name="replaceAllIssueLabels"/>
## Github.replaceAllIssueLabels
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| number        | Number     | The number of the issue. (required)
| body          | JSON       | Array of the labels that should be replaced for the issue. Sending an empty array ([]) will remove all Labels from the Issue. (required)

<a name="unlockIssue"/>
## Github.unlockIssue
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| number        | Number     | The number of the issue (required)

<a name="updateLabel"/>
## Github.updateLabel
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| oldname       | String     | The old name of the label. (required)
| name          | String     | The new name of the label. (required)
| color         | String     | 6 character hex code, without a leading #. (required)

<a name="updateMilestone"/>
## Github.updateMilestone
Method description

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

<a name="cancelImport"/>
## Github.cancelImport
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)

<a name="deleteMigrationArchive"/>
## Github.deleteMigrationArchive
Method description

| Field           | Type       | Description
|-----------------|------------|----------
| accessToken     | credentials| The access_token obtained from Github.
| organizationName| String     | The name of the organization (required)
| id              | String     | The migration ID. (required)

<a name="getImportCommitAuthors"/>
## Github.getImportCommitAuthors
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| since         | String     | Only authors found after this id are returned. Provide the highest author ID you've seen so far. New authors may be added to the list at any point while the importer is performing the raw step. (optional)

<a name="getImportProgress"/>
## Github.getImportProgress
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)

<a name="getLargeImportFiles"/>
## Github.getLargeImportFiles
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| user       | String     | The owner name (required)
| name       | String     | The name of the system to import from (required). Supported Subversion, Mercurial, and TFS.

<a name="getMigrationArchiveLink"/>
## Github.getMigrationArchiveLink
Method description

| Field           | Type       | Description
|-----------------|------------|----------
| accessToken     | credentials| The access_token obtained from Github.
| organizationName| String     | The name of the organization (required)
| id              | String     | The ID of the migration (required)

<a name="getMigrationStatus"/>
## Github.getMigrationStatus
Method description

| Field           | Type       | Description
|-----------------|------------|----------
| accessToken     | credentials| The access_token obtained from Github.
| organizationName| String     | The name of the organization (required)
| id              | String     | The ID of the migration (required)

<a name="getMigrations"/>
## Github.getMigrations
Method description

| Field           | Type       | Description
|-----------------|------------|----------
| accessToken     | credentials| The access_token obtained from Github.
| organizationName| String     | The name of the organization (required)
| page            | Number     | Page number of the results to fetch. (optional)
| perPage         | Number     | A custom page size up to 100. Default is 30. (optional)

<a name="mapImportCommitAuthor"/>
## Github.mapImportCommitAuthor
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| authorId      | String     | The commit author id. (required)
| email         | String     | The new Git author email. (optional)
| name          | String     | The new Git author name. (optional)

<a name="setImportLfsPreference"/>
## Github.setImportLfsPreference
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| user       | String     | The owner name (required)
| systemName | String     | The name of the system to import from (required). Supported Subversion, Mercurial, and TFS.

<a name="startImport"/>
## Github.startImport
Method description

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

<a name="startMigration"/>
## Github.startMigration
Method description

| Field             | Type       | Description
|-------------------|------------|----------
| accessToken       | credentials| The access_token obtained from Github.
| organizationName  | String     | The name of the organization (required)
| repositories      | JSON       | A list of arrays indicating which repositories should be migrated. (required)
| lockRepositories  | String     | Indicates whether repositories should be locked (to prevent manipulation) while migrating data. Default: false. (optional)
| excludeAttachments| String     | Indicates whether attachments should be excluded from the migration (to reduce migration archive file size). Default: false. (optional)

<a name="unlockRepositoryLockedForMigration"/>
## Github.unlockRepositoryLockedForMigration
Method description

| Field           | Type       | Description
|-----------------|------------|----------
| accessToken     | credentials| The access_token obtained from Github.
| organizationName| String     | The name of the organization (required)
| id              | String     | The ID of the migration (required)
| repositoryName  | String     | The name of the repository (required)

<a name="updateImport"/>
## Github.updateImport
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| data          | String     | Json object with data to be updating (optional). If no data are provided, the import will be restarted. Ex.: {"vcs": "tfvc", "tfvc_project": "project1", "human_name": "project1 (tfs)"}

<a name="getEmojis"/>
## Github.getEmojis
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.

<a name="getGitignoreTemplate"/>
## Github.getGitignoreTemplate
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| name       | String     | The name of the .gitignore template to get e.g. 'C' (required)

<a name="getGitignoreTemplates"/>
## Github.getGitignoreTemplates
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.

<a name="getLicense"/>
## Github.getLicense
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| license    | String     | The name of the license. Ex: mit (required)

<a name="getLicenses"/>
## Github.getLicenses
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.

<a name="getMeta"/>
## Github.getMeta
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.

<a name="getRateLimit"/>
## Github.getRateLimit
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.

<a name="getRepoLicenseMisc"/>
## Github.getRepoLicenseMisc
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)

<a name="renderMarkdown"/>
## Github.renderMarkdown
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| text       | String     | The Markdown text to render (required)
| mode       | String     | The rendering mode, `markdown` to render a document as plain Markdown, just like README files are rendered. `gfm` to render a document as user-content, e.g. like user comments or issues are rendered. In GFM mode, hard line breaks are always taken into account, and issue and user mentions are linked accordingly. (optional)
| context    | String     | The repository context. Only taken into account when rendering as `gfm` (optional)

<a name="renderMarkdownRaw"/>
## Github.renderMarkdownRaw
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| data       | String     | Raw data to send as the body of the request (required)

<a name="addOrganizationMembership"/>
## Github.addOrganizationMembership
Method description

| Field           | Type       | Description
|-----------------|------------|----------
| accessToken     | credentials| The access_token obtained from Github.
| organizationName| String     | The name of the organization (required)
| user            | String     | The user name (required)
| role            | String     | The role to give the user in the organization. (required). * admin - The user will become an owner of the organization, * member - The user will become a non-owner member of the organization. Default: member

<a name="addOrganizationTeamMembership"/>
## Github.addOrganizationTeamMembership
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| id         | String     | The team ID (required)
| user       | String     | The user name (required)
| role       | String     | The role that this user should have in the team. (optional). The role that this user should have in the team. Can be one of: * member - a normal member of the team, * maintainer - a team maintainer. Able to add/remove other team members, promote other team members to team maintainer, and edit the team's name and description. Default: member

<a name="addOrganizationTeamRepository"/>
## Github.addOrganizationTeamRepository
Method description

| Field           | Type       | Description
|-----------------|------------|----------
| accessToken     | credentials| The access_token obtained from Github.
| id              | String     | The team ID (required)
| organizationName| String     | The name of the organization (required)
| repositoryName  | String     | The name of the repository (required)
| permission      | String     | `pull` - team members can pull, but not push or administer this repository, `push` - team members can pull and push, but not administer this repository, `admin` - team members can pull, push and administer this repository. (optional)

<a name="checkOrganizationMembership"/>
## Github.checkOrganizationMembership
Method description

| Field           | Type       | Description
|-----------------|------------|----------
| accessToken     | credentials| The access_token obtained from Github.
| organizationName| String     | The name of the organization (required)
| user            | String     | The user name (required)

<a name="checkOrganizationPublicMembership"/>
## Github.checkOrganizationPublicMembership
Method description

| Field           | Type       | Description
|-----------------|------------|----------
| accessToken     | credentials| The access_token obtained from Github.
| organizationName| String     | The name of the organization (required)
| user            | String     | The user name (required)

<a name="checkOrganizationTeamRepository"/>
## Github.checkOrganizationTeamRepository
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| id            | String     | The team ID (required)
| user          | String     | The user name (required)
| repositoryName| String     | The name of the repository (required)

<a name="cancelOrganizationMembership"/>
## Github.cancelOrganizationMembership
Method description

| Field           | Type       | Description
|-----------------|------------|----------
| accessToken     | credentials| The access_token obtained from Github.
| organizationName| String     | The name of the organization (required)
| user            | String     | The user name (required)

<a name="createOrganizationHook"/>
## Github.createOrganizationHook
Method description

| Field           | Type       | Description
|-----------------|------------|----------
| accessToken     | credentials| The access_token obtained from Github.
| organizationName| String     | The name of the organization (required)
| name            | String     | Must be passed as "web". (required)
| config          | JSON       | Key/value pairs to provide settings for this webhook (required). The config object can accept the following keys: *url (Required) - The URL to which the payloads will be delivered; *content_type (string) - The media type used to serialize the payloads. Supported values include json and form. The default is form; *secret (string) - If provided, payloads will be delivered with an X-Hub-Signature header. The value of this header is computed as the [HMAC hex digest of the body, using the secret as the key][hub-signature]; *insecure_ssl (string) - Determines whether the SSL certificate of the host for url will be verified when delivering payloads. Supported values include "0" (verification is performed) and "1" (verification is not performed). The default is "0". We strongly recommend not setting this to "1" as you are subject to man-in-the-middle and other attacks.
| events          | JSON       | Determines what events the hook is triggered for. Default: ["push"]. (optional)
| active          | String     | Determines whether the hook is actually triggered on pushes. (optional)

<a name="createOrganizationTeam"/>
## Github.createOrganizationTeam
Method description

| Field           | Type       | Description
|-----------------|------------|----------
| accessToken     | credentials| The access_token obtained from Github.
| organizationName| String     | The name of the organization (required)
| name            | String     | The name of the team. (required)
| description     | String     | The description of the team. (optional)
| repoNames       | JSON       | The full name (e.g., "organization-name/repository-name") of repositories to add the team to. (optional)
| privacy         | String     | The level of privacy this team should have. (optional). Can be one of: * secret - only visible to organization owners and members of this team. * closed - visible to all members of this organization. Default: secret

<a name="deleteOrganizationHook"/>
## Github.deleteOrganizationHook
Method description

| Field           | Type       | Description
|-----------------|------------|----------
| accessToken     | credentials| The access_token obtained from Github.
| organizationName| String     | The name of the organization (required)
| id              | String     | The hook ID (required)

<a name="deleteOrganizationTeam"/>
## Github.deleteOrganizationTeam
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| id         | String     | The team ID (required)

<a name="deleteOrganizationTeamRepository"/>
## Github.deleteOrganizationTeamRepository
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| id            | String     | The team ID (required)
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)

<a name="editOrganizationHook"/>
## Github.editOrganizationHook
Method description

| Field           | Type       | Description
|-----------------|------------|----------
| accessToken     | credentials| The access_token obtained from Github.
| organizationName| String     | The name of the organization (required)
| id              | String     | The hook ID (required)
| config          | JSON       | Key/value pairs to provide settings for this webhook (required). The config object can accept the following keys: *url (Required) - The URL to which the payloads will be delivered; *content_type (string) - The media type used to serialize the payloads. Supported values include json and form. The default is form; *secret (string) - If provided, payloads will be delivered with an X-Hub-Signature header. The value of this header is computed as the [HMAC hex digest of the body, using the secret as the key][hub-signature]; *insecure_ssl (string) - Determines whether the SSL certificate of the host for url will be verified when delivering payloads. Supported values include "0" (verification is performed) and "1" (verification is not performed). The default is "0". We strongly recommend not setting this to "1" as you are subject to man-in-the-middle and other attacks.
| events          | JSON       | Determines what events the hook is triggered for. Default: ["push"]. (optional)
| active          | String     | Determines whether the hook is actually triggered on pushes. (optional)

<a name="editOrganizationTeam"/>
## Github.editOrganizationTeam
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| id         | String     | The team ID (required)
| name       | String     | The name of the team. (required)
| description| String     | The description of the team. (optional)
| privacy    | String     | The level of privacy this team should have. (optional). Can be one of: * secret - only visible to organization owners and members of this team. * closed - visible to all members of this organization. Default: secret

<a name="getOrganization"/>
## Github.getOrganization
Method description

| Field           | Type       | Description
|-----------------|------------|----------
| accessToken     | credentials| The access_token obtained from Github.
| organizationName| String     | The name of the organization (required)
| page            | Number     | Page number of the results to fetch. (optional)
| perPage         | Number     | A custom page size up to 100. Default is 30. (optional)

<a name="getAllOrganizations"/>
## Github.getAllOrganizations
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| since      | String     | The integer ID of the last Organization that you've seen. (optional)
| page       | Number     | Page number of the results to fetch. (optional)
| perPage    | Number     | A custom page size up to 100. Default is 30. (optional)

<a name="getUserOrganizations"/>
## Github.getUserOrganizations
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| user       | String     | The user name (required)
| page       | Number     | Page number of the results to fetch. (optional)
| perPage    | Number     | A custom page size up to 100. Default is 30. (optional)

<a name="getOrganizationHook"/>
## Github.getOrganizationHook
Method description

| Field           | Type       | Description
|-----------------|------------|----------
| accessToken     | credentials| The access_token obtained from Github.
| organizationName| String     | The name of the organization (required)
| id              | String     | The hook ID (required)

<a name="getOrganizationHooks"/>
## Github.getOrganizationHooks
Method description

| Field           | Type       | Description
|-----------------|------------|----------
| accessToken     | credentials| The access_token obtained from Github.
| organizationName| String     | The name of the organization (required)
| page            | Number     | Page number of the results to fetch. (optional)
| perPage         | Number     | A custom page size up to 100. Default is 30. (optional)

<a name="getOrganizationMembers"/>
## Github.getOrganizationMembers
Method description

| Field           | Type       | Description
|-----------------|------------|----------
| accessToken     | credentials| The access_token obtained from Github.
| organizationName| String     | The name of the organization (required)
| filter          | String     | Filter members returned in the list. (optional). Can be one of: * 2fa_disabled: Members without two-factor authentication enabled. Available for organization owners. * all: All members the authenticated user can see.
| role            | String     | Filter members returned by their role. (optional). Can be one of: * all: All members of the organization, regardless of role. * admin: Organization owners. * member: Non-owner organization members. Default: all
| page            | Number     | Page number of the results to fetch. (optional)
| perPage         | Number     | A custom page size up to 100. Default is 30. (optional)

<a name="getOrganizationMembership"/>
## Github.getOrganizationMembership
Method description

| Field           | Type       | Description
|-----------------|------------|----------
| accessToken     | credentials| The access_token obtained from Github.
| organizationName| String     | The name of the organization (required)
| user            | String     | The user name (required)

<a name="getOrganizationMemberships"/>
## Github.getOrganizationMemberships
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| state      | String     | Indicates the state of the memberships to return. Can be either active or pending. If not specified, both active and pending memberships are returned. (optional)

<a name="getOrganizationPublicMembers"/>
## Github.getOrganizationPublicMembers
Method description

| Field           | Type       | Description
|-----------------|------------|----------
| accessToken     | credentials| The access_token obtained from Github.
| organizationName| String     | The name of the organization (required)

<a name="getOrganizationTeam"/>
## Github.getOrganizationTeam
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| id         | String     | The team ID (required)

<a name="getOrganizationTeamMembers"/>
## Github.getOrganizationTeamMembers
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| id         | String     |  The team ID(required)
| role       | String     | Filters members returned by their role in the team. (optional). Can be one of: * member - normal members of the team. * maintainer - team maintainers. * all - all members of the team. Default: all
| page       | Number     | Page number of the results to fetch. (optional)
| perPage    | Number     | A custom page size up to 100. Default is 30. (optional)

<a name="getOrganizationTeamMembership"/>
## Github.getOrganizationTeamMembership
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| id         | String     | The team ID (required)
| user       | String     | The user name (required)

<a name="getOrganizationTeamRepositories"/>
## Github.getOrganizationTeamRepositories
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| id         | String     | The team ID (required)
| page       | Number     | Page number of the results to fetch. (optional)
| perPage    | Number     | A custom page size up to 100. Default is 30. (optional)

<a name="getOrganizationTeams"/>
## Github.getOrganizationTeams
Method description

| Field           | Type       | Description
|-----------------|------------|----------
| accessToken     | credentials| The access_token obtained from Github.
| organizationName| String     | The name of the organization (required)
| page            | Number     | Page number of the results to fetch. (optional)
| perPage         | Number     | A custom page size up to 100. Default is 30. (optional)

<a name="pingOrganizationHook"/>
## Github.pingOrganizationHook
Method description

| Field           | Type       | Description
|-----------------|------------|----------
| accessToken     | credentials| The access_token obtained from Github.
| organizationName| String     | The name of the organization (required)
| id              | String     | The hook ID (required)

<a name="publicizeOrganizationMembership"/>
## Github.publicizeOrganizationMembership
Method description

| Field           | Type       | Description
|-----------------|------------|----------
| accessToken     | credentials| The access_token obtained from Github.
| organizationName| String     | The name of the organization (required)
| user            | String     | The user name (required)

<a name="removeOrganizationMember"/>
## Github.removeOrganizationMember
Method description

| Field           | Type       | Description
|-----------------|------------|----------
| accessToken     | credentials| The access_token obtained from Github.
| organizationName| String     | The name of the organization (required)
| user            | String     | The user name (required)

<a name="removeOrganizationMembership"/>
## Github.removeOrganizationMembership
Method description

| Field           | Type       | Description
|-----------------|------------|----------
| accessToken     | credentials| The access_token obtained from Github.
| organizationName| String     | The name of the organization (required)
| user            | String     | The user name (required)

<a name="removeOrganizationTeamMembership"/>
## Github.removeOrganizationTeamMembership
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| id         | String     | The team ID (required)
| user       | String     | The user name (required)

<a name="updateOrganization"/>
## Github.updateOrganization
Method description

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

<a name="checkMergedPullRequest"/>
## Github.checkMergedPullRequest
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| number        | Number     | The number of the pull request (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

<a name="createPullRequest"/>
## Github.createPullRequest
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| title         | String     | The title of the pull request. (required)
| head          | String     | The branch (or git ref) where your changes are implemented. (required). For cross-repository pull requests in the same network, namespace head with a user like this: username:branch.
| base          | String     | The branch (or git ref) you want your changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repositoryName that requests a merge to a base of another repositoryName. (required)
| body          | String     | The contents of the pull request. (optional)

<a name="createPullRequestComment"/>
## Github.createPullRequestComment
Method description

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

<a name="createPullRequestCommentReply"/>
## Github.createPullRequestCommentReply
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| number        | Number     | The number of the pull request (required)
| body          | String     | The text of the comment (required)
| inReplyTo     | Number     | The comment id to reply to. (required)

<a name="createPullRequestFromIssue"/>
## Github.createPullRequestFromIssue
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| issue         | Number     | The issue number in this repository to turn into a Pull Request. (required)
| head          | String     | The branch (or git ref) where your changes are implemented. (required)
| base          | String     | The branch (or git ref) you want your changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repositoryName that requests a merge to a base of another repositoryName. (required)

<a name="deletePullRequestComment"/>
## Github.deletePullRequestComment
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| number        | Number     | The number of the comment (required)

<a name="editPullRequestComment"/>
## Github.editPullRequestComment
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| number        | Number     | The number of the comment (required)
| body          | String     | The text of the comment (required)

<a name="getPullRequest"/>
## Github.getPullRequest
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| number        | Number     | The number of the pull request (required)

<a name="getAllPullRequests"/>
## Github.getAllPullRequests
Method description

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

<a name="getPullRequestComment"/>
## Github.getPullRequestComment
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| number        | Number     | The number of the comment (required)

<a name="getPullRequestComments"/>
## Github.getPullRequestComments
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| number        | Number     | The number of the pull request (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

<a name="getPullRequestCommentsForRepository"/>
## Github.getPullRequestCommentsForRepository
Method description

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

<a name="getPullRequestCommits"/>
## Github.getPullRequestCommits
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| number        | Number     | The number of the pull request (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

<a name="getPullRequestFiles"/>
## Github.getPullRequestFiles
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| number        | Number     | The number of the pull request (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

<a name="mergePullRequest"/>
## Github.mergePullRequest
Method description

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

<a name="updatePullRequest"/>
## Github.updatePullRequest
Method description

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

<a name="createReactionForCommitComment"/>
## Github.createReactionForCommitComment
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The comment ID (required)
| content       | String     | The reaction type. (required)

<a name="createReactionForIssue"/>
## Github.createReactionForIssue
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | Te owner name (required)
| repositoryName| String     | The name of the repository (required)
| number        | Number     | Tne number of the issue (required)
| content       | String     | The reaction type. (required)

<a name="createReactionForIssueComment"/>
## Github.createReactionForIssueComment
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The comment ID (required)
| content       | String     | The reaction type. (required)

<a name="createReactionForPullRequestReviewComment"/>
## Github.createReactionForPullRequestReviewComment
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The comment ID (required)
| content       | String     | The reaction type. (required)

<a name="deleteReaction"/>
## Github.deleteReaction
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| id         | String     | The reaction ID (required)

<a name="getReactionForCommitComment"/>
## Github.getReactionForCommitComment
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The comment ID (required)
| content       | String     | Indicates which type of reaction to return. (optional)

<a name="getReactionForIssue"/>
## Github.getReactionForIssue
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| number        | Number     | The number of the issue (required)
| content       | String     | Indicates which type of reaction to return. (optional)

<a name="getReactionForIssueComment"/>
## Github.getReactionForIssueComment
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The comment ID (required)
| content       | String     | Indicates which type of reaction to return. (optional)

<a name="getReactionForPullRequestReviewComment"/>
## Github.getReactionForPullRequestReviewComment
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The comment ID (required)
| content       | String     | Indicates which type of reaction to return. (optional)

<a name="addRepositoryCollaborator"/>
## Github.addRepositoryCollaborator
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| collabuser    | String     | The name of the collaborator (required)
| permission    | String     | `pull` - can pull, but not push to or administer this repository, `push` - can pull and push, but not administer this repository, `admin` - can pull, push and administer this repository. (optional)

<a name="addProtectedBranchRequiredStatusChecksContexts"/>
## Github.addProtectedBranchRequiredStatusChecksContexts
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| branch        | String     | The branch name (required)
| body          | JSON       | An array of protected branch required status checks contexts (e.g. continuous-integration/jenkins). (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

<a name="addProtectedBranchTeamRestrictions"/>
## Github.addProtectedBranchTeamRestrictions
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| branch        | String     | The name of the branch (required)
| body          | JSON       | An array of team slugs (e.g. justice-league). (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

<a name="addProtectedBranchUserRestrictions"/>
## Github.addProtectedBranchUserRestrictions
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| branch        | String     | The name of the branch (required)
| body          | JSON       | An array of team slugs (e.g. justice-league). (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

<a name="checkRepositoryCollaborator"/>
## Github.checkRepositoryCollaborator
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| collabuser    | String     | The name of the collaborator (required)

<a name="compareRepositoryCommits"/>
## Github.compareRepositoryCommits
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| base          | String     | The branch (or git ref) you want your changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repositoryName that requests a merge to a base of another repositoryName. (required)
| head          | String     | The branch (or git ref) where your changes are implemented. (required)

<a name="createRepository"/>
## Github.createRepository
Method description

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

<a name="createRepositoryCommitComment"/>
## Github.createRepositoryCommitComment
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| sha           | String     | SHA1 hash of the commit (required)
| body          | String     | The contents of the comment. (required)
| path          | String     | Relative path of the file to comment on. (optional)
| position      | Number     | Line index in the diff to comment on. (optional)

<a name="createRepositoryDeployment"/>
## Github.createRepositoryDeployment
Method description

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

<a name="createRepositoryDeploymentStatus"/>
## Github.createRepositoryDeploymentStatus
Method description

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

<a name="createRepositoryFile"/>
## Github.createRepositoryFile
Method description

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

<a name="createRepositoryForOrganization"/>
## Github.createRepositoryForOrganization
Method description

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

<a name="createRepositoryHook"/>
## Github.createRepositoryHook
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| name          | String     | Use web for a webhook or use the name of a valid service. (required)
| config        | JSON       | A Hash containing key/value pairs to provide settings for this hook. These settings vary between the services and are defined in the github-services repositoryName. Booleans are stored internally as `1` for true, and `0` for false. Any JSON true/false values will be converted automatically. (required)
| events        | JSON       | Determines what events the hook is triggered for. Default: `['push']`. (optional)
| active        | String     | Determines whether the hook is actually triggered on pushes. (optional)

<a name="createRepositoryKey"/>
## Github.createRepositoryKey
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| title         | String     | A name for the key. (required)
| key           | String     | The contents of the key. (required)
| readOnly      | String     | If true, the key will only be able to read repository contents. Otherwise, the key will be able to read and write. (optional)

<a name="createRepositoryProject"/>
## Github.createRepositoryProject
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| name          | String     | The name of the project (required)
| body          | String     | The body of the project (required)

<a name="createRepositoryProjectCard"/>
## Github.createRepositoryProjectCard
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The column ID (required)
| note          | String     | The note of the card. (optional)
| contentId     | String     | The id of the Issue or Pull Request to associate with this card. (optional)
| contentType   | String     | The type of content to associate with this card. Can be either 'Issue' or 'PullRequest'. (optional)

<a name="createRepositoryProjectColumn"/>
## Github.createRepositoryProjectColumn
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| number        | Number     | The number of the project (required)
| name          | String     | The name of the column. (required)

<a name="createRepositoryRelease"/>
## Github.createRepositoryRelease
Method description

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

<a name="createRepositoryStatus"/>
## Github.createRepositoryStatus
Method description

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

<a name="deleteRepository"/>
## Github.deleteRepository
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)

<a name="deleteRepositoryAsset"/>
## Github.deleteRepositoryAsset
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The asset ID (required)

<a name="deleteRepositoryCommitComment"/>
## Github.deleteRepositoryCommitComment
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The comment ID (required)

<a name="deleteRepositoryDownload"/>
## Github.deleteRepositoryDownload
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The download ID (required)

<a name="deleteRepositoryFile"/>
## Github.deleteRepositoryFile
Method description

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

<a name="deleteRepositoryHook"/>
## Github.deleteRepositoryHook
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The hook ID (required)

<a name="deleteRepositoryInvite"/>
## Github.deleteRepositoryInvite
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| repositoryName| String     | The name of the repository (required)
| id            | String     | The invitation ID (required)

<a name="deleteRepositoryKey"/>
## Github.deleteRepositoryKey
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The key ID (required)

<a name="deleteRepositoryProject"/>
## Github.deleteRepositoryProject
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| number        | Number     | The number of the project (required)

<a name="deleteRepositoryProjectCard"/>
## Github.deleteRepositoryProjectCard
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The card ID (required)

<a name="deleteRepositoryProjectColumn"/>
## Github.deleteRepositoryProjectColumn
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The column ID (required)

<a name="deleteRepositoryRelease"/>
## Github.deleteRepositoryRelease
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The release ID (required)

<a name="editRepository"/>
## Github.editRepository
Method description

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

<a name="editRepositoryAsset"/>
## Github.editRepositoryAsset
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The asset ID (required)
| name          | String     | The file name of the asset (required)
| label         | String     | An alternate short description of the asset. Used in place of the filename. (optional)

<a name="editRepositoryHook"/>
## Github.editRepositoryHook
Method description

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

<a name="editRepositoryRelease"/>
## Github.editRepositoryRelease
Method description

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

<a name="forkRepository"/>
## Github.forkRepository
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| organization  | String     | Optional parameter to specify the organization name if forking into an organization. (optional)

<a name="getRepository"/>
## Github.getRepository
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)

<a name="getAllRepositories"/>
## Github.getAllRepositories
Method description

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

<a name="getRepositoryAllCommitComments"/>
## Github.getRepositoryAllCommitComments
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

<a name="getRepositoryArchiveLink"/>
## Github.getRepositoryArchiveLink
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| archiveFormat | String     | Either tarball or zipball, Deafult: tarball. (required)
| ref           | String     | String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected. (optional)

<a name="getRepositoryAsset"/>
## Github.getRepositoryAsset
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The assetID (required)

<a name="getRepositoryBranch"/>
## Github.getRepositoryBranch
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| branch        | String     | The name of the branch (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

<a name="getRepositoryBranchProtection"/>
## Github.getRepositoryBranchProtection
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| branch        | String     | The name of the branch (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

<a name="getRepositoryBranches"/>
## Github.getRepositoryBranches
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| protected     | String     | Set to true to only return protected branches (optional)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

<a name="getRepositoryById"/>
## Github.getRepositoryById
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| id         | String     | The repository ID (required)

<a name="getRepositoryClones"/>
## Github.getRepositoryClones
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

<a name="getRepositoryCollaborators"/>
## Github.getRepositoryCollaborators
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

<a name="getRepositoryCombinedStatus"/>
## Github.getRepositoryCombinedStatus
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| sha           | String     | Ref to fetch the status for. It can be a SHA, a branch name, or a tag name. (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

<a name="getRepositoryCommit"/>
## Github.getRepositoryCommit
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| sha           | String     | SHA1 hash of the commit (required)

<a name="getRepositoryCommitComment"/>
## Github.getRepositoryCommitComment
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The comment ID (required)

<a name="getRepositoryCommitComments"/>
## Github.getRepositoryCommitComments
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| sha           | String     | SHA1 hash of the commit (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

<a name="getRepositoryCommits"/>
## Github.getRepositoryCommits
Method description

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

<a name="getRepositoryContent"/>
## Github.getRepositoryContent
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| path          | String     | The content path. (required)
| ref           | String     | The String name of the Commit/Branch/Tag. Defaults to master. (optional)

<a name="getRepositoryContributors"/>
## Github.getRepositoryContributors
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| anon          | String     | Set to 1 or true to include anonymous contributors in results. (optional)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

<a name="getRepositoryDeploymentStatuses"/>
## Github.getRepositoryDeploymentStatuses
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The deployment ID (required)

<a name="getRepositoryDeployments"/>
## Github.getRepositoryDeployments
Method description

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

<a name="getRepositoryDownload"/>
## Github.getRepositoryDownload
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The download ID (required)

<a name="getRepositoryDownloads"/>
## Github.getRepositoryDownloads
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

<a name="getOrganizationRepositories"/>
## Github.getOrganizationRepositories
Method description

| Field           | Type       | Description
|-----------------|------------|----------
| accessToken     | credentials| The access_token obtained from Github.
| organizationName| String     | The name of the organization (required)
| type            | String     | Possible values: `all`, `public`, `private`, `forks`, `sources`, `member`. Default: `all`. (optional)
| page            | Number     | Page number of the results to fetch. (optional)
| perPage         | Number     | A custom page size up to 100. Default is 30. (optional)

<a name="getUserRepositories"/>
## Github.getUserRepositories
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| user       | String     | The user name (required)
| type       | String     | Possible values: `all`, `owner`, `member`. Default: `owner`. (optional)
| sort       | String     | Possible values: `created`, `updated`, `pushed`, `full_name`. Default: `full_name`. (optional)
| direction  | String     | Can be one of asc or desc. Default: when using full_name: asc, otherwise desc (optional)
| page       | Number     | Page number of the results to fetch. (optional)
| perPage    | Number     | A custom page size up to 100. Default is 30. (optional)

<a name="getRepositoryForks"/>
## Github.getRepositoryForks
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| sort          | String     | Possible values: `newest`, `oldest`, `stargazers`, default: `newest`. (optional)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

<a name="getRepositoryHook"/>
## Github.getRepositoryHook
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The hook ID (required)

<a name="getRepositoryHooks"/>
## Github.getRepositoryHooks
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

<a name="getRepositoryInvites"/>
## Github.getRepositoryInvites
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| repositoryName| String     | The name of the repository (required)

<a name="getRepositoryKey"/>
## Github.getRepositoryKey
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The key ID (required)

<a name="getRepositoryKeys"/>
## Github.getRepositoryKeys
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

<a name="getRepositoryLanguages"/>
## Github.getRepositoryLanguages
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

<a name="getRepositoryLatestPagesBuild"/>
## Github.getRepositoryLatestPagesBuild
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)

<a name="getRepositoryLatestRelease"/>
## Github.getRepositoryLatestRelease
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)

<a name="getRepositoryPages"/>
## Github.getRepositoryPages
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

<a name="getRepositoryPagesBuild"/>
## Github.getRepositoryPagesBuild
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The build ID (required)

<a name="getRepositoryPagesBuilds"/>
## Github.getRepositoryPagesBuilds
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

<a name="getRepositoryPaths"/>
## Github.getRepositoryPaths
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

<a name="getRepositoryProject"/>
## Github.getRepositoryProject
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| number        | Number     | The number of the project (required)

<a name="getRepositoryProjectCard"/>
## Github.getRepositoryProjectCard
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The card ID (required)

<a name="getRepositoryProjectCards"/>
## Github.getRepositoryProjectCards
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The column ID (required)

<a name="getRepositoryProjectColumn"/>
## Github.getRepositoryProjectColumn
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The column ID (required)

<a name="getRepositoryProjectColumns"/>
## Github.getRepositoryProjectColumns
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| number        | Number     | The number of the project (required)

<a name="getRepositoryProjects"/>
## Github.getRepositoryProjects
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)

<a name="getProtectedBranchRequiredStatusChecks"/>
## Github.getProtectedBranchRequiredStatusChecks
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| branch        | String     | The name of the branch (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

<a name="getProtectedBranchRequiredStatusChecksContexts"/>
## Github.getProtectedBranchRequiredStatusChecksContexts
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| branch        | String     | The name of the branch (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

<a name="getProtectedBranchRestrictions"/>
## Github.getProtectedBranchRestrictions
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| branch        | String     | The name of the branch (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

<a name="getProtectedBranchTeamRestrictions"/>
## Github.getProtectedBranchTeamRestrictions
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| branch        | String     | The name of the branch (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

<a name="getProtectedBranchUserRestrictions"/>
## Github.getProtectedBranchUserRestrictions
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| branch        | String     | The name of the branch (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

<a name="getPublicRepositories"/>
## Github.getPublicRepositories
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| since      | String     | The integer ID of the last Repository that you've seen. (optional)

<a name="getRepositoryReadme"/>
## Github.getRepositoryReadme
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| ref           | String     | The name of the commit/branch/tag. Default: the repository’s default branch (usually master) (optional)

<a name="getRepositoryReferrers"/>
## Github.getRepositoryReferrers
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

<a name="getRepositoryRelease"/>
## Github.getRepositoryRelease
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The release ID (required)

<a name="getRepositoryReleaseByTag"/>
## Github.getRepositoryReleaseByTag
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| tag           | String     | String of the tag (required)

<a name="getRepositoryReleases"/>
## Github.getRepositoryReleases
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

<a name="getRepositoryShaOfCommitRef"/>
## Github.getRepositoryShaOfCommitRef
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| ref           | String     | String of the name of the fully qualified reference (ie: heads/master). If it doesn’t have at least one slash, it will be rejected. (required)

<a name="getRepositoryStatsCodeFrequency"/>
## Github.getRepositoryStatsCodeFrequency
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)

<a name="getRepositoryStatsCommitActivity"/>
## Github.getRepositoryStatsCommitActivity
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)

<a name="getRepositoryStatsContributors"/>
## Github.getRepositoryStatsContributors
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)

<a name="getRepositoryStatsParticipation"/>
## Github.getRepositoryStatsParticipation
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)

<a name="getRepositoryStatsPunchCard"/>
## Github.getRepositoryStatsPunchCard
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)

<a name="getRepositoryStatuses"/>
## Github.getRepositoryStatuses
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| sha           | String     | SHA hash of the commit (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

<a name="getRepositoryTags"/>
## Github.getRepositoryTags
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

<a name="getRepositoryTeams"/>
## Github.getRepositoryTeams
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

<a name="getRepositoryViews"/>
## Github.getRepositoryViews
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

<a name="getRepositoryAssets"/>
## Github.getRepositoryAssets
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The release ID (required)

<a name="mergeRepository"/>
## Github.mergeRepository
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| base          | String     | The branch (or git ref) you want your changes pulled into. This should be an existing branch on the current repository. You cannot submit a pull request to one repositoryName that requests a merge to a base of another repositoryName. (required)
| head          | String     | The branch (or git ref) where your changes are implemented. (required)
| commitMessage | String     | Commit message to use for the merge commit. If omitted, a default message will be used. (optional)

<a name="moveRepositoryProjectCard"/>
## Github.moveRepositoryProjectCard
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The card ID (required)
| position      | String     | Can be one of first, last, or after:, where is the id value of a column in the same project. (required)
| columnId      | String     | The id value of a column in the same project. (optional)

<a name="moveRepositoryProjectColumn"/>
## Github.moveRepositoryProjectColumn
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The column ID (required)
| position      | String     | Can be one of first, last, or after:, where is the id value of a column in the same project. (required)

<a name="pingRepositoryHook"/>
## Github.pingRepositoryHook
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The hook ID (required)

<a name="removeBranchProtection"/>
## Github.removeBranchProtection
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| branch        | String     | The name of the branch (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

<a name="removeRepositoryCollaborator"/>
## Github.removeRepositoryCollaborator
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| collabuser    | String     | The name of the collaborator (required)

<a name="removeProtectedBranchRequiredStatusChecks"/>
## Github.removeProtectedBranchRequiredStatusChecks
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| branch        | String     | The name of the branch (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

<a name="removeProtectedBranchRequiredStatusChecksContexts"/>
## Github.removeProtectedBranchRequiredStatusChecksContexts
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| branch        | String     | The name of the branch (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

<a name="removeProtectedBranchRestrictions"/>
## Github.removeProtectedBranchRestrictions
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| branch        | String     | The name of the branch (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

<a name="removeProtectedBranchTeamRestrictions"/>
## Github.removeProtectedBranchTeamRestrictions
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| branch        | String     | The name of the branch (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

<a name="removeProtectedBranchUserRestrictions"/>
## Github.removeProtectedBranchUserRestrictions
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| branch        | String     | The name of the branch (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

<a name="replaceProtectedBranchRequiredStatusChecksContexts"/>
## Github.replaceProtectedBranchRequiredStatusChecksContexts
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| branch        | String     | The name of the branch (required)
| body          | JSON       | An array of protected branch required status checks contexts (e.g. continuous-integration/jenkins). (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

<a name="replaceProtectedBranchTeamRestrictions"/>
## Github.replaceProtectedBranchTeamRestrictions
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| branch        | String     | The name of the branch (required)
| body          | JSON       | An array of team slugs (e.g. justice-league). (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

<a name="replaceProtectedBranchUserRestrictions"/>
## Github.replaceProtectedBranchUserRestrictions
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| branch        | String     | The name of the branch (required)
| body          | JSON       | An array of team slugs (e.g. justice-league). (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

<a name="requestRepositoryPageBuild"/>
## Github.requestRepositoryPageBuild
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)

<a name="testRepositoryHook"/>
## Github.testRepositoryHook
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The hook ID (required)

<a name="updateRepositoryBranchProtection"/>
## Github.updateRepositoryBranchProtection
Method description

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

<a name="updateRepositoryCommitComment"/>
## Github.updateRepositoryCommitComment
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The comment ID (required)
| body          | String     | The contents of the comment (required)

<a name="updateRepositoryFile"/>
## Github.updateRepositoryFile
Method description

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

<a name="updateRepositoryInvite"/>
## Github.updateRepositoryInvite
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| repositoryName| String     | The name of the repository (required)
| id            | String     | The invitation ID (required)
| permission    | String     | The permissions that the associated user will have on the repository. (optional)

<a name="updateRepositoryProject"/>
## Github.updateRepositoryProject
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| number        | Number     | The number of the project (required)
| name          | String     | The name of the project (required)
| body          | String     | The body of the project (required)

<a name="updateRepositoryProjectCard"/>
## Github.updateRepositoryProjectCard
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The card ID (required)
| note          | String     | The note of the card. (optional)

<a name="updateRepositoryProjectColumn"/>
## Github.updateRepositoryProjectColumn
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The name of the repository (required)
| id            | String     | The column ID (required)
| name          | String     | The new name of the column (required)

<a name="updateProtectedBranchRequiredStatusChecks"/>
## Github.updateProtectedBranchRequiredStatusChecks
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The new name of the column (required)
| branch        | String     | The branch name (required)
| body          | JSON       | JSON object that contains the following keys: `include_admins` - Enforce required status checks for repository administrators, `strict` - Require branches to be up to date before merging, `contexts` - The list of status checks to require in order to merge into this branch. (required)
| page          | Number     | Page number of the results to fetch. (optional)
| perPage       | Number     | A custom page size up to 100. Default is 30. (optional)

<a name="uploadRepositoryAsset"/>
## Github.uploadRepositoryAsset
Method description

| Field         | Type       | Description
|---------------|------------|----------
| accessToken   | credentials| The access_token obtained from Github.
| user          | String     | The owner name (required)
| repositoryName| String     | The new name of the repository (required)
| id            | String     | The release ID (required)
| filepath      | String     | The file path of the asset. (required)
| name          | String     | The file name of the asset. This should be set in a URI query parameter. (required)
| label         | String     | An alternate short description of the asset. Used in place of the filename. This should be set in a URI query parameter. (optional)

<a name="codeSearch"/>
## Github.codeSearch
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| q          | String     | Search Term (required)
| sort       | String     | The sort field. Can only be indexed, which indicates how recently a file has been indexed by the GitHub search infrastructure. Default: results are sorted by best match. (optional)
| order      | String     | asc or desc (optional)
| page       | Number     | Page number of the results to fetch. (optional)
| perPage    | Number     | A custom page size up to 100. Default is 30. (optional)

<a name="emailSearch"/>
## Github.emailSearch
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| email      | String     | The email address (required)

<a name="issuesSearch"/>
## Github.issuesSearch
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| q          | String     | Search Term (required)
| sort       | String     | The sort field. Can be comments, created, or updated. Default: results are sorted by best match. (optional)
| order      | String     | asc or desc (optional)
| page       | Number     | Page number of the results to fetch. (optional)
| perPage    | Number     | A custom page size up to 100. Default is 30. (optional)

<a name="repositorySearch"/>
## Github.repositorySearch
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| q          | String     | Search Term (required)
| sort       | String     | stars, forks, or updated (optional)
| order      | String     | asc or desc (optional)
| page       | Number     | Page number of the results to fetch. (optional)
| perPage    | Number     | A custom page size up to 100. Default is 30. (optional)

<a name="usersSearch"/>
## Github.usersSearch
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| q          | String     | Search Term (required)
| sort       | String     | The sort field. Can be followers, repositories, or joined. Default: results are sorted by best match. (optional)
| order      | String     | asc or desc (optional)
| page       | Number     | Page number of the results to fetch. (optional)
| perPage    | Number     | A custom page size up to 100. Default is 30. (optional)

<a name="acceptRepositoryInvite"/>
## Github.acceptRepositoryInvite
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| id         | String     | The invitation ID (required)

<a name="addEmails"/>
## Github.addEmails
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| body       | JSON       | You can post a single email address or an array of addresses. (required)

<a name="checkFollowing"/>
## Github.checkFollowing
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| user       | String     | The user name (required)

<a name="checkIfOneFollowersOther"/>
## Github.checkIfOneFollowersOther
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| user       | String     | The user name (required)
| otherUser  | String     | Other user name (required)

<a name="createGpgKey"/>
## Github.createGpgKey
Method description

| Field           | Type       | Description
|-----------------|------------|----------
| accessToken     | credentials| The access_token obtained from Github.
| armoredPublicKey| String     | GPG key contents (required)

<a name="createKey"/>
## Github.createKey
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| title      | String     | The key title (required)
| key        | String     | The SSH key (required)

<a name="declineRepositoryInvite"/>
## Github.declineRepositoryInvite
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| id         | String     | The invitation ID (required)

<a name="deleteEmails"/>
## Github.deleteEmails
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| body       | JSON       | You can post a single email address or an array of addresses. (required)

<a name="deleteGpgKey"/>
## Github.deleteGpgKey
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| id         | String     | The GPG key ID (required)

<a name="deleteKey"/>
## Github.deleteKey
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| id         | String     | The key ID (required)

<a name="demoteUser"/>
## Github.demoteUser
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| user       | String     | The user name (required)

<a name="editOrganizationMembership"/>
## Github.editOrganizationMembership
Method description

| Field           | Type       | Description
|-----------------|------------|----------
| accessToken     | credentials| The access_token obtained from Github.
| organizationName| String     | The new name of the organization (required)
| state           | String     | The state that the membership should be in. Only "active" will be accepted. (required)

<a name="followUser"/>
## Github.followUser
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| user       | String     | The user name (required)

<a name="getUser"/>
## Github.getUser
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.

<a name="getAllUsers"/>
## Github.getAllUsers
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| since      | Number     | The integer ID of the last User that you’ve seen. (optional)

<a name="getUserById"/>
## Github.getUserById
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| id         | String     | The GitHub user ID (required)

<a name="getUserEmails"/>
## Github.getUserEmails
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| page       | Number     | Page number of the results to fetch. (optional)
| perPage    | Number     | A custom page size up to 100. Default is 30. (optional)

<a name="getUserFollowers"/>
## Github.getUserFollowers
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| page       | Number     | Page number of the results to fetch. (optional)
| perPage    | Number     | A custom page size up to 100. Default is 30. (optional)

<a name="getFollowersForUser"/>
## Github.getFollowersForUser
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| user       | String     | The user name (required)
| page       | Number     | Page number of the results to fetch. (optional)
| perPage    | Number     | A custom page size up to 100. Default is 30. (optional)

<a name="getUserFollowing"/>
## Github.getUserFollowing
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| page       | Number     | Page number of the results to fetch. (optional)
| perPage    | Number     | A custom page size up to 100. Default is 30. (optional)

<a name="getFollowingForUser"/>
## Github.getFollowingForUser
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| user       | String     | The user name (required)
| page       | Number     | Page number of the results to fetch. (optional)
| perPage    | Number     | A custom page size up to 100. Default is 30. (optional)

<a name="getSingleUser"/>
## Github.getSingleUser
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| user       | String     | The user name (required)

<a name="getGpgKey"/>
## Github.getGpgKey
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| id         | String     | The GPG key ID (required)

<a name="getGpgKeys"/>
## Github.getGpgKeys
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| page       | Number     | Page number of the results to fetch. (optional)
| perPage    | Number     | A custom page size up to 100. Default is 30. (optional)

<a name="getKey"/>
## Github.getKey
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| id         | String     | The key ID (required)

<a name="getKeys"/>
## Github.getKeys
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| page       | Number     | Page number of the results to fetch. (optional)
| perPage    | Number     | A custom page size up to 100. Default is 30. (optional)

<a name="getKeysForUser"/>
## Github.getKeysForUser
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| user       | String     | The user name (required)
| page       | Number     | Page number of the results to fetch. (optional)
| perPage    | Number     | A custom page size up to 100. Default is 30. (optional)

<a name="getUserOrganizationMembership"/>
## Github.getUserOrganizationMembership
Method description

| Field           | Type       | Description
|-----------------|------------|----------
| accessToken     | credentials| The access_token obtained from Github.
| organizationName| String     | The name of the organization (required)

<a name="getUserOrganizations"/>
## Github.getUserOrganizations
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| page       | Number     | Page number of the results to fetch. (optional)
| perPage    | Number     | A custom page size up to 100. Default is 30. (optional)

<a name="getRepositoryInvites"/>
## Github.getRepositoryInvites
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.

<a name="getUserTeams"/>
## Github.getUserTeams
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| page       | Number     | Page number of the results to fetch. (optional)
| perPage    | Number     | A custom page size up to 100. Default is 30. (optional)

<a name="promoteUser"/>
## Github.promoteUser
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| user       | String     | The user name (required)

<a name="suspendUser"/>
## Github.suspendUser
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| user       | String     | The user name (required)

<a name="unfollowUserUser"/>
## Github.unfollowUserUser
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| user       | String     | The user name (required)

<a name="unsuspendUser"/>
## Github.unsuspendUser
Method description

| Field      | Type       | Description
|------------|------------|----------
| accessToken| credentials| The access_token obtained from Github.
| user       | String     | The user name (required)

<a name="updateUser"/>
## Github.updateUser
Method description

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

