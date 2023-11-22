import Body from "@/app/body";
import {AuthContextProvider} from "@/context/AuthContext";

export const metadata = {
    title: 'FoodStiks',
    description: 'O melhor delivery da cidade!',
}

export default function RootLayout({children}: {
    children: React.ReactNode
}) {
    return (
        <html lang="en">
        <AuthContextProvider>

            <Body>{children}</Body>
        </AuthContextProvider>
        </html>
    )
}
