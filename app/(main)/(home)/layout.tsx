const HomeLayout = ({ children }: { children: React.ReactNode }) => <div className="h-full w-full bg-(--color-background) lg:rounded-4xl lg:p-5 p-2.5 pt-12.5 lg:pt-5 overflow-auto grid lg:grid-cols-2 gap-2.5 [&::-webkit-scrollbar]:hidden">
    {children}
</div>

export default HomeLayout;