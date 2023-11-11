import { For } from 'solid-js'
import { SimpleLayout } from '~/components/SimpleLayout'

const faqs = [
  {
    id: 1,
    question: "What's the best thing about Switzerland?",
    answer:
      "I don't know, but the flag is a big plus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cupiditate laboriosam fugiat."
  }
  // More questions...
]

export default function Example() {
  return (
    <SimpleLayout
      title="Frequently asked questions"
      intro="Have a different question and can’t find the answer you’re looking
      for? Reach out to our support team"
    >
      <div class="mt-20">
        <dl class="space-y-16 sm:grid sm:grid-cols-2 sm:gap-x-6 sm:gap-y-16 sm:space-y-0 lg:gap-x-10">
          <For each={faqs}>
            {(faq) => (
              <div>
                <dt class="text-base font-semibold leading-7 text-gray-900">
                  {faq.question}
                </dt>
                <dd class="mt-2 text-base leading-7 text-gray-600">
                  {faq.answer}
                </dd>
              </div>
            )}
          </For>
        </dl>
      </div>
    </SimpleLayout>
  )
}
