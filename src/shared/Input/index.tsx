import * as React from 'react'
import { cva, VariantProps } from 'class-variance-authority'

const input = cva('', {
  variants: {},
})

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof input> {}

export default function Input({ children, ...props }: InputProps) {
  return <input {...props}>{children}</input>
}
