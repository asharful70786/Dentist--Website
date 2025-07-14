import React, { useState } from 'react'

const faqs = [
  {
    question: "At what age should my child first see an orthodontist?",
    answer:
      "The American Association of Orthodontists recommends that children have their first orthodontic evaluation by age 7. Early examination allows us to detect and evaluate problems and determine the optimum time for treatment.",
  },
  {
    question: "How long does orthodontic treatment typically take?",
    answer:
      "Treatment time varies depending on the individual case, but most comprehensive orthodontic treatments take between 12-36 months. Some minor cases may be completed in as little as 6 months, while more complex cases may take longer.",
  },
  {
    question: "Do braces hurt?",
    answer:
      "There may be some initial discomfort when braces are first placed or adjusted, but this typically subsides within a few days. Modern braces are more comfortable than ever, and we provide tips and solutions to minimize any discomfort.",
  },
  {
    question: "Are there options for adults who don't want visible braces?",
    answer:
      "Absolutely! We offer several discreet options including clear ceramic braces, lingual braces (placed behind the teeth), and clear aligner systems like Invisalign®. During your consultation, we'll discuss which option would work best for your specific needs.",
  },
]

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null)

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index)
  }

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900">Frequently Asked Questions</h2>
          <div className="mt-2 w-24 h-1 bg-blue-600 mx-auto rounded-full"></div>
        </div>

        <div className="space-y-6">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-gray-200 rounded-xl shadow-sm bg-white">
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full text-left px-6 py-4 font-semibold text-gray-800 hover:bg-gray-100 flex justify-between items-center"
              >
                <span>{faq.question}</span>
                <span className="ml-4 text-blue-600">{activeIndex === index ? '-' : '+'}</span>
              </button>
              {activeIndex === index && (
                <div className="px-6 pb-6 text-gray-600">{faq.answer}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
