import { Button, Card, List, ListItem, Stack } from "@mui/material";
import { Container } from "@mui/system";
import React, { useState } from 'react';



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
        <Container sx={{ my: 40 }} align="center" color='#F653A6'>
            <Card sx={{ maxWidth: 500 }}>
                <div><h3>Acak Nama</h3></div>
                <Stack>
                    <List>
                    <ListItem>
                        <Container>
                            Presenter 1 : {selectedItem[0]}
                            </Container>
                        </ListItem>
                    </List>
                    <List>
                    <ListItem>
                        <Container>
                            Presenter 2 : {selectedItem[1]}
                            </Container>
                        </ListItem>
                    </List>
                    <List>
                    <ListItem>
                        <Container>
                            Moderator : {selectedItem[2]}
                        </Container>
                        </ListItem>
                    </List>
                </Stack>
                <Button

                    margin="3"
                    variant='outlined'
                    size='small'
                    onClick={() => randomItem()}
                    disabled={isLoading}
                >
                    {isLoading ? 'Loading..' : 'Acak'}
                </Button>
                <div>
                    
                </div><br />

            </Card>
        </Container>
    )
}
