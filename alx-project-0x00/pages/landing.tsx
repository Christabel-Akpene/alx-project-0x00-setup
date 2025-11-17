import Card from "@/components/Card"
import Button from "@/components/Button"

const Landing: React.FC = () => {
    return (
        <div>
            <h1 className="text-xl font-extralight">Landing Page</h1>
            <Card/>
            <h4>
                Button Component
            </h4>
            <div className="flex items-center space-x-2">
                <Button title="Small" shape="rounded-sm" size="small" styles=""/>
                <Button title="Medium" shape="rounded-md" size="medium" styles=""/>
                <Button title="Large" shape="rounded-full" size="large" styles=""/>
            </div>
        </div>
    )
}

export default Landing