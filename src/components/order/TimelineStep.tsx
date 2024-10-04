import {OrderFragmentFragment} from "@/generated/graphql/graphql";
import {Step, TimelineStepIcon} from "@/types/timelineStep.type";
import React from 'react'

const TimelineStep = ({step, icon, order, description, isCompleted, isCurrent, isLastStep}:{step: Step, icon:TimelineStepIcon,order?: OrderFragmentFragment, description: string, isCompleted: boolean, isCurrent:boolean, 
isLastStep: boolean}) => {
  const iconBgColor = isCompleted || isCurrent ? `bg-${icon.bgColor}` : 'bg-gray-200';
  const iconTextColor = isCompleted || isCurrent ? 'text-white' : `text-${icon.textColor}`;
  const connectorColor = isCompleted ? 'bg-blue-500' : 'bg-gray-200';
  const labelTextColor = isCompleted || isCurrent ? 'text-gray-900' : 'text-gray-500';
  const descriptionTextColor = isCompleted || isCurrent ? 'text-gray-900' : 'text-gray-500';
  return (
    <li className="relative mb-6 sm:mb-0 sm:pl-10">
      <div className="flex items-center">
        <div className={`z-10 flex items-center justify-center size-8 ${iconBgColor} ${iconTextColor} rounded-full ring-0 ring-white dark:ring-gray-900 shrink-0`}>
          <i className={`ri-${icon.iconName} text-xl`}></i>
        </div>
        {!isLastStep && (<div className={`hidden sm:flex w-full h-0.5 ${connectorColor} dark:bg-gray-700`}></div>)}
      </div>
    <div className="mt-3 sm:pe-8">
      {/* <h3 className={`font-semibold text-lg ${labelTextColor}`}>
        {step.label}
      </h3> */}
      <time className="block mb-2 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
        {order && order.updatedAt ? new Date(order.updatedAt).toLocaleString() : 'Time'}
      </time>
      <p className={`text-base font-normal ${descriptionTextColor} dark:text-gray-400`}>
        {description}
      </p>
    </div>
    </li>
  )
}

export default TimelineStep
