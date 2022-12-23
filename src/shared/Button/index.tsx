import { cva, VariantProps } from 'class-variance-authority'

const button = cva('', {
  variants: {
    intent: {
      primary: ['bg-black', 'text-white'],
      secondary: ['bg-white', 'text-black'],
    },
    size: {
      medium: ['py-2', 'px-4'],
    },
  },
})

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof button> {}

export default function Button({ size, children, ...props }: ButtonProps) {
  return (
    <button className={button({ size })} {...props}>
      {children}
    </button>
  )
}
