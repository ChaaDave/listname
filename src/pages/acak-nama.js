import { Button, Stack  } from "@mui/material"
import { useState } from "react";

export function AcakNama(props){
    const { listItems } = props
    const [selectedItem, setSelectedItem] = useState([])
    const [isLoading, setIsLoading] = useState(false)

    function getRndInteger(min, max) {
        return Math.floor(Math.random() * (max - min) ) + min;
    }

    function getRandomName(){
        console.log(listItems)
        const total = listItems.length 
        const randomId = getRndInteger(0, total)
        return listItems[randomId].name
    } 
    let findDuplicates = arr => arr.filter((item, index) => arr.indexOf(item) !==index)

    function randomItem(){
        setIsLoading(true)
        setTimeout(() => {
            const listRandomNama = [
                getRandomName(),
                getRandomName(),
                getRandomName()
            ]

            const dup = findDuplicates(listRandomNama)
            
            if(dup.length > 0){
                randomItem()
            } else {
                setSelectedItem(listRandomNama)
                setIsLoading(false)
            }

            setIsLoading(false)
        }, 100)
    }

    return (
        <div>
            <Stack direction={'row'} alignItems='center' spacing={2}>
                <Button 
                variant='outlined' 
                size='small' 
                onClick={() => randomItem()}
                disabled={isLoading}
                
                >
                    {isLoading ? 'Loading ... ' : 'acak'}
                </Button>
            </Stack>
            <Stack>
                <div>
                    Presenter 1 : {selectedItem[0]}
                </div>
                <div>
                    Presenter 2 : {selectedItem[1]}
                </div>
                <div>
                    Moderator : {selectedItem[2]}
                </div>
            </Stack>
            
        </div>
    )
}