/* eslint-disable @typescript-eslint/no-unused-vars */
"use client"
import TimelineStep from "@/components/order/TimelineStep"
import React, {useEffect, useState} from 'react'

const CheckoutSuccess = () => {
  const steps = [
    {
      status: 'pending',
      label: 'Pending',
      description: 'Your order has been created and is awaiting processing.',
      icon: { iconName: 'time-line', bgColor: 'red-500', textColor: 'gray-800' },
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
      icon: { iconName: 'check-line', bgColor: 'green-800', textColor: 'black' },
    },
  ]
  const [isCompleted, setIsCompleted] = useState([false, false, false, false])
  const [isCurrent, setIsCurrent] = useState(0)
  return (
    <div className="section__container">
    <h2 className="font-semibold mb-4 text-2xl">Payment {steps[isCurrent].status}</h2>
    <div className="mb-4">Order Id: {}</div>
    <div className="mb-8">Status: {steps[isCurrent].status}</div>
    <ol className="flex">
      {steps.map((step,index) => (
      <TimelineStep step={step} icon={step.icon} description={step.description} isCompleted={isCompleted[index]} isCurrent={index === isCurrent} isLastStep={index == steps.length - 1} 
      key={`step${index}`}/>))}
    </ol>
    </div>
  )
}

export default CheckoutSuccess
