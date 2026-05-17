export default function TemporaryOff() {
    return (
        <div className="min-h-dvh flex items-center justify-center bg-primary">
            <div className="text-center px-6">
                <h1 className="text-4xl font-bold tracking-tight text-primary-foreground sm:text-5xl">
                    Offline
                </h1>
                <p className="mt-2 text-sm text-primary-foreground/40">
                    Service is temporarily unavailable. some deployments will be deleted after a set time period.
                </p>
            </div>
        </div>
    )
}
