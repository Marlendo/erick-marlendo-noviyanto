import { useEffect, useState } from "react";
import { Button } from "./button";

export function ButtonGroup({
    items,
    onChange
}: {
    items: string[];
    onChange: (e: string) => void;
}) {

    const [active, setActive] = useState(items?.[0] || '');

    useEffect(() => {
        onChange(active);
    }, [active])

    return (
        <div className="flex flex-row">
            {
                items.map((label, index) => (
                    <div className="m-2" key={`button-group-${index}`}>
                        <Button
                            label={label}
                            active={active === label}
                            onClick={() => {
                                setActive(label)
                            }} />
                    </div>
                ))
            }
        </div>
    )
}