import {  Button, Card, CardContent, IconButton, List, ListItem, ListItemText, TextField, Typography } from "@mui/material";
import { Container, Stack } from "@mui/system";
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { useEffect, useState } from "react";
//import { link } from "react-router-dom";
import { AcakNama } from "./acak-nama";
export default function ListNamePage(){
    const [listName,  setListName] = useState([
        {name: 'John'},
        {name: 'Charlos'},
        {name: 'Faerero'},
        {name: 'Dave'}
    ])

    const [inputName, setInputName] = useState('')
    const [isModeEdit, setIsModeEdit] = useState(false)
    const [editIndex, setEditIndex] = useState()
    
    function addListName(){
        const prev = [...listName]
        prev.push({
            name: inputName
        })
        setListName(prev)
        setInputName('')
    }

    function editListname(){
        const prev = [...listName]
        prev[editIndex].name = inputName
        setListName(prev)
        setInputName('')
        setIsModeEdit(false)
    }

    function setModeEditFor(index){
        setEditIndex(index)
        setIsModeEdit(true)
        setInputName(listName[index].name)
    }
    
    function deleteListname(index){
        const prev = [...listName]
        prev.splice(index, 1)
        setListName(prev)
    }

    function actionListName(){
        isModeEdit ? editListname() : addListName()
    }

    function onKeydownForm(e) {
        if (e.key === 'Enter'){
            actionListName()
        }
    }

    useEffect(() => {
    console.log(listName)
     })

    return (
    <Container>
        <Card>
            <CardContent>
                <Stack spacing={3}>
                    <Typography variant="h4" align='center'>
                        List Nama
                    </Typography>
                    <Stack direction='row' spacing={3}>
                        <TextField 
                            variant='outlined' 
                            placeholder="Nama baru" 
                            size="small"
                            value={inputName}
                            onChange={(e) => setInputName(e.target.value)}
                            oneKeyDown={onKeydownForm}

                       />
                        <Button 
                            variant='contained'
                            onClick={() => actionListName()}
                        >
                            {isModeEdit ? 'Edit': 'Tambah'}
                      </Button>
                    </Stack>
                    <List>
                    {
                        listName.map((item, index)=>(
                            <ListItem
                            key={index}
                                secondaryAction={
                                    <Stack direction="row" spacign={2}>
                                      <IconButton edge="end" aria-label="edit" onClick={() => setModeEditFor(index)}>
                                        <EditIcon />
                                        </IconButton>

                                       <IconButton edge="end" aria-label="delete" onClick={() => deleteListname(index)}>
                                        <DeleteIcon />
                                       </IconButton>
                                     </Stack>
                                 }
                                >
                                    <ListItemText
                                        primary={
                                            editIndex === index  && isModeEdit
                                            ? <TextField value={inputName} size= 'small' onChange={(e) => setInputName(e.target.value)} oneKeyDown={onKeydownForm}  ></TextField> 
                                            : item.name
                                    }
                                    />
                            </ListItem>
                        ))
                    }
                    </List>
                    
                    Total nama : {listName.length}

                    <AcakNama listItems={listName} />
                </Stack>
            </CardContent>
        </Card>
    </Container>
    )
 }