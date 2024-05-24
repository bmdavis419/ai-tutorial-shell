import { Label } from "@radix-ui/react-label"
import { Card, CardContent, CardTitle } from "../ui/card"
import { Input } from "../ui/input"
import { Separator } from "../ui/separator"

export const SearchFood: React.FC = () => {
    return <Card className="w-full bg-neutral-900 p-8 flex flex-col gap-4">
        <CardTitle>Search Food</CardTitle>

        <CardContent>
            <div>
                <Label>Name</Label>
                <Input type="text" placeholder="steak" />
            </div>
            <div className="py-4 flex flex-col gap-2">
                <div>
                    <div className="flex w-full justify-between items-center py-2">
                        <h2><span className="text-neutral-100 font-bold">Steak</span> - 900 calories</h2>
                        <FoodType type="meat" />
                    </div>
                    <Separator />
                </div>
                <div>
                    <div className="flex w-full justify-between items-center py-2">
                        <h2><span className="text-neutral-100 font-bold">Strawberries</span> - 100 calories</h2>
                        <FoodType type="meat" />
                    </div>
                    <Separator />
                </div>

            </div>
        </CardContent>
    </Card>
}

const FoodType: React.FC<{
    type: "fruit" | "meat" | "pastry" | "dairy" | "other"
}> = (props) => {
    const { type } = props

    if (type === "fruit") {
        return <div className="border py-1 px-3 border-red-300 text-red-300 rounded-md">Fruit</div>
    }

    if (type === "meat") {
        return <div className="border py-1 px-3 border-purple-300 text-purple-300 rounded-md">Fruit</div>
    }
    if (type === "pastry") {
        return <div className="border py-1 px-3 border-neutral-300 text-neutral-300 rounded-md">Fruit</div>
    }
    if (type === "dairy") {
        return <div className="border py-1 px-3 border-yellow-300 text-yellow-300 rounded-md">Fruit</div>
    }
    if (type === "other") {
        return <div className="border px-3 py-1 border-pink-300 text-pink-300 rounded-md">Fruit</div>
    }
}