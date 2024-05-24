"use client"

import { Card, CardContent, CardTitle } from "../ui/card"
import { Input } from "../ui/input"
import { Label } from "../ui/label"
import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select"


export const CreateFood: React.FC = () => {

    return <Card className="w-full bg-neutral-900 p-8 flex flex-col gap-4">
        <CardTitle>Create Food</CardTitle>
        <CardContent className="flex flex-col gap-2">
            <div className="flex flex-col gap-1">
                <Label>Name</Label>
                <Input type="text" placeholder="steak" />
            </div>
            <div className="flex flex-col gap-1">
                <Label>Calories</Label>
                <Input type="number" placeholder="steak" />
            </div>
            <div className="flex flex-col gap-1">
                <Label>Type</Label>
                <Select>
                    <SelectTrigger className="">
                        <SelectValue placeholder="Fruit" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectItem value="fruit">Fruit</SelectItem>
                        <SelectItem value="meat">Meat</SelectItem>
                        <SelectItem value="pastry">Pastry</SelectItem>
                        <SelectItem value="dairy">Dairy</SelectItem>
                        <SelectItem value="other">Other</SelectItem>
                    </SelectContent>
                </Select>

            </div>
        </CardContent>
    </Card>
}