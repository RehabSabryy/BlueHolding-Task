import React from 'react'

export default function SectionTitle({ sectionH4, sectionParagraph }) {
  return (
    <div className="flex flex-col justify-center items-center">
    <h4 className="text-4xl text-[#363636] font-semibold">
       {sectionH4}
    </h4>
    <p className="text-[#8D8D8D] text-2xl text-center py-5">
        {sectionParagraph}
    </p>
  </div>
    )
}
