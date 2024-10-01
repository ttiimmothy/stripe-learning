/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import TimelineStep from "@/components/order/TimelineStep";
import React, {useState} from 'react'

const CheckoutSuccess = () => {
  const steps = [
    {
      status: 'pending',
      label: 'Pending',
      description: 'Your order has been created and is awaiting processing.',
      icon: { iconName: 'edit-2-line', bgColor: 'red-500', textColor: 'gray-800' },
    },
    {
      status: 'processing',
      label: 'Processing',
      description: 'Your order is currently being processed.',
      icon: { iconName: 'loader-line', bgColor: 'yellow-500', textColor: 'yellow-800' },
    },
    {
      status: 'shipped',
      label: 'Shipped',
      description: 'Your order has been shipped.',
      icon: { iconName: 'truck-line', bgColor: 'blue-800', textColor: 'blue-100' },
    },
    {
      status: 'completed',
      label: 'Completed',
      description: 'Your order has been successfully completed.',
      icon: { iconName: 'check-line', bgColor: 'green-800', textColor: 'white' },
    },
  ]
  const [isCompleted, setIsCompleted] = useState([false, false, false, false])
  const [isCurrent, setIsCurrent] = useState([true, false, false, false])
  return (
    <div>
      {steps.map((step,index) => (<TimelineStep step={step} icon={step.icon} description={step.description} isCompleted={isCompleted[index]} isCurrent={isCurrent[index]} isLastStep={index == steps.length - 1} 
      key={`step${index}`}/>))}
    </div>
  )
}

export default CheckoutSuccess
