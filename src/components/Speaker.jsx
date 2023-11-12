import speakerQuery from '~/graphql/speaker.query'
import graphql from '~/lib/graphql.server'
import { Show } from 'solid-js'
import { GitHubIcon } from './SocialIcons'

export default function Speaker(props) {
  const [user] = graphql(speakerQuery.gql, {
    login: props.person
  })

  return (
    <Show when={user}>
      <img
        class="aspect-[4/5] w-52 flex-none rounded-2xl object-cover"
        src={user().user.avatarUrl}
        alt=""
      />

      <div class="max-w-xl flex-auto">
        <h3 class="text-lg font-semibold leading-8 tracking-tight text-gray-900">
          {user().user.name}
        </h3>
        {/* <p class="text-base leading-7 text-gray-600">{person.role}</p> */}
        <p class="mt-6 text-base leading-7 text-gray-600">{user().user.bio}</p>
        <ul role="list" class="mt-6 flex gap-x-6">
          <li>
            <a href={user().user.url} class="text-gray-400 hover:text-gray-500">
              <span class="sr-only">GitHub</span>
              <GitHubIcon class="w-5 h-5" />
            </a>
          </li>
        </ul>
      </div>
    </Show>
  )
}
