import { cn } from '@/lib/utils'
import { Button } from '@/components/ui/button'
import Link from 'next/link'

export default function IntegrationsSection() {
    return (
        <section>
            <div className="bg-muted dark:bg-background py-24 md:py-32">
                <div className="mx-auto max-w-5xl px-6">
                    <div className="grid items-center sm:grid-cols-2">
                        <div className="dark:bg-muted/50 relative mx-auto w-fit">
                            <div className="bg-radial to-muted dark:to-background absolute inset-0 z-10 from-transparent to-75%"></div>
                            
                            {/* Первая линия */}
                            <div className="mx-auto mb-2 flex w-fit justify-center gap-2">
                                <IntegrationCard>
                                    {/* Gemini */}
                                    <svg viewBox="0 0 48 48" className="size-8">
                                        <circle cx="24" cy="24" r="24" fill="#00BCD4" />
                                        <path d="M14 24a10 10 0 0020 0 10 10 0 00-20 0z" fill="#fff"/>
                                    </svg>
                                </IntegrationCard>
                                <IntegrationCard>
                                    {/* Replit */}
                                    <svg viewBox="0 0 48 48" className="size-8">
                                        <circle cx="24" cy="24" r="24" fill="#F26207" />
                                        <path d="M18 14h12v20H18z" fill="#fff"/>
                                    </svg>
                                </IntegrationCard>
                            </div>

                            {/* Вторая линия */}
                            <div className="mx-auto my-2 flex w-fit justify-center gap-2">
                                <IntegrationCard>
                                    {/* Magic UI */}
                                    <svg viewBox="0 0 48 48" className="size-8">
                                        <circle cx="24" cy="24" r="24" fill="#7C4DFF" />
                                        <path d="M14 20h20v8H14z" fill="#fff"/>
                                    </svg>
                                </IntegrationCard>
                                <IntegrationCard
                                    borderClassName="shadow-black-950/10 shadow-xl border-black/25 dark:border-white/25"
                                    className="dark:bg-white/10">
                                    {/* Вставляем ссылку-логотип */}
                                    <img
                                        src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%2Fid%2FOIP.0HN280BhxnzOHuacFJDipAAAAA%3Fpid%3DApi&f=1&ipt=cf7842e1050c9ec938a9b76c119ee693231d1c9bed95f13ccfee2cafb3ebd1c0&ipo=images"
                                        alt="Custom Logo"
                                        className="size-8 object-contain rounded"
                                    />
                                </IntegrationCard>
                                <IntegrationCard>
                                    {/* VSCodium */}
                                    <svg viewBox="0 0 48 48" className="size-8">
                                        <circle cx="24" cy="24" r="24" fill="#007ACC" />
                                        <path d="M16 16l16 8-16 8z" fill="#fff"/>
                                    </svg>
                                </IntegrationCard>
                            </div>

                            {/* Третья линия */}
                            <div className="mx-auto flex w-fit justify-center gap-2">
                                <IntegrationCard>
                                    {/* MediaWiki */}
                                    <svg viewBox="0 0 48 48" className="size-8">
                                        <circle cx="24" cy="24" r="24" fill="#F8DB4D" />
                                        <text x="50%" y="55%" textAnchor="middle" fontSize="12" fill="#000">MW</text>
                                    </svg>
                                </IntegrationCard>
                                <IntegrationCard>
                                    {/* Google PaLM */}
                                    <svg viewBox="0 0 48 48" className="size-8">
                                        <circle cx="24" cy="24" r="24" fill="#34A853" />
                                        <text x="50%" y="55%" textAnchor="middle" fontSize="12" fill="#fff">PaLM</text>
                                    </svg>
                                </IntegrationCard>
                            </div>
                        </div>

                        {/* Текстовый блок */}
                        <div className="mx-auto mt-6 max-w-lg space-y-6 text-center sm:mt-0 sm:text-left">
                            <h2 className="text-balance text-3xl font-semibold md:text-4xl">
                                Интегрируйтесь с вашими любимыми инструментами
                            </h2>
                            <p className="text-muted-foreground">
                                Легко интегрируйтесь с популярными платформами и сервисами, чтобы улучшить свой рабочий процесс.
                            </p>

                            <Button
                                variant="outline"
                                size="sm"
                                asChild>
                                <Link href="#">Пробный период</Link>
                            </Button>
                            <Button
                                variant="secondary"
                                size="sm"
                                asChild>
                                <Link href="#">Демо</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

const IntegrationCard = ({
    children,
    className,
    borderClassName
}: {
    children: React.ReactNode
    className?: string
    borderClassName?: string
}) => {
    return (
        <div className={cn('bg-background relative flex size-20 rounded-xl dark:bg-transparent', className)}>
            <div
                role="presentation"
                className={cn('absolute inset-0 rounded-xl border border-black/20 dark:border-white/25', borderClassName)}
            />
            <div className="relative z-20 m-auto size-fit *:size-8">{children}</div>
        </div>
    )
}
