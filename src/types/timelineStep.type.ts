export type TimelineStepIcon = {
  iconName:string
  bgColor:string
  textColor:string
}
export type Step = {
  status: string,
  label: string,
  description: string,
  icon: TimelineStepIcon
}