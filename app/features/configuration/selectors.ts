import type { Config } from '.'

export const getDiscordWidgetLink = (
  config: Config
): Config['discord']['widgetUrl'] => config.discord.widgetUrl

export const getDiscordChatLink = (
  config: Config
): Config['discord']['chatUrl'] => config.discord.chatUrl

export const getGithubDiscussionsLink = (
  config: Config
): Config['github']['discussionsUrl'] => config.github.discussionsUrl

export const getGithubNewIssueLink = (
  config: Config
): Config['github']['newIssue'] => config.github.newIssue
