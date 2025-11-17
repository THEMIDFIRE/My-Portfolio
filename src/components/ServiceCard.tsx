import { Card, CardDescription, CardHeader, CardTitle } from "./ui/card";

export default function ServiceCard({ title, description }: { title: string, description: string }) {
    return (
        <Card className='shadow-md dark:bg-slate-800'>
            <CardHeader>
                <CardTitle>{title}</CardTitle>
                <CardDescription>{description}</CardDescription>
            </CardHeader>
        </Card>
    )
}
