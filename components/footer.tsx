export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t border-border">
      <div className="container mx-auto max-w-6xl text-center text-muted-foreground">
        <p>{currentYear} Yensel Leon</p>
      </div>
    </footer>
  )
}
