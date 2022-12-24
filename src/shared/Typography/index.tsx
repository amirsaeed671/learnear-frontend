import { cva, type VariantProps, cx } from 'class-variance-authority'

const typography = cva(['text-white', 'font-semibold'], {
  variants: {
    intent: {
      p: ['text-md'],
      h1: ['text-5xl font-bold'],
      h2: ['text-4xl font-bold'],
      h3: ['text-3xl font-bold'],
      h4: ['text-2xl font-bold'],
      h5: ['text-xl font-bold'],
      h6: ['text-lg font-bold'],
    },
  },
  defaultVariants: {
    intent: 'p',
  },
})

export interface TypographyProps
  extends React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLParagraphElement>,
      HTMLParagraphElement
    >,
    Omit<VariantProps<typeof typography>, 'intent'>,
    Required<Pick<VariantProps<typeof typography>, 'intent'>> {}

export default function Typography({
  children,
  intent,
  className,
  ...props
}: TypographyProps) {
  return (
    <p {...props} className={cx(typography({ intent }), className)}>
      {children}
    </p>
  )
}
