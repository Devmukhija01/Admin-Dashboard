import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import { Container, Typography, Paper, Grid, Button, TextField, IconButton, Box } from '@mui/material';
import { Delete, Edit } from '@mui/icons-material';

const initialTasks = [
  { id: 'task-1', content: 'Charge My Phone' },
  { id: 'task-2', content: 'Drink Water Daily' },
  { id: 'task-3', content: 'Keep Smiling' },
];

const Kanban = () => {
  const [tasks, setTasks] = useState(initialTasks);
  const [isEditing, setIsEditing] = useState(null);
  const [editContent, setEditContent] = useState('');
  const [newTaskContent, setNewTaskContent] = useState('');

  const onDragEnd = (result) => {
    const { destination, source } = result;
    if (!destination) {
      return;
    }

    const reorderedTasks = Array.from(tasks);
    const [removed] = reorderedTasks.splice(source.index, 1);
    reorderedTasks.splice(destination.index, 0, removed);

    setTasks(reorderedTasks);
  };

  const handleEdit = (id) => {
    const task = tasks.find(task => task.id === id);
    setIsEditing(id);
    setEditContent(task.content);
  };

  const handleSave = (id) => {
    const updatedTasks = tasks.map(task => 
      task.id === id ? { ...task, content: editContent } : task
    );
    setTasks(updatedTasks);
    setIsEditing(null);
    setEditContent('');
  };

  const handleDelete = (id) => {
    const updatedTasks = tasks.filter(task => task.id !== id);
    setTasks(updatedTasks);
  };

  const handleSort = (order) => {
    const sortedTasks = [...tasks].sort((a, b) => {
      if (order === 'asc') {
        return a.content.localeCompare(b.content);
      } else {
        return b.content.localeCompare(a.content);
      }
    });
    setTasks(sortedTasks);
  };

  const handleAddTask = () => {
    if (newTaskContent.trim()) {
      const newTask = {
        id: `task-${tasks.length + 1}`,
        content: newTaskContent.trim()
      };
      setTasks([...tasks, newTask]);
      setNewTaskContent('');
    }
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Kanban Board
      </Typography>
      <Box display="flex" alignItems="center" mb={2}>
        <TextField
          label="New Task"
          variant="outlined"
          value={newTaskContent}
          onChange={(e) => setNewTaskContent(e.target.value)}
          fullWidth
          style={{ marginRight: 16 }}
        />
        <Button
          variant="contained"
          color="primary"
          onClick={handleAddTask}
        >
          Add Task
        </Button>
      </Box>
      <Box display="flex" justifyContent="flex-start" mb={2}>
        <Button variant="outlined" onClick={() => handleSort('asc')} style={{ marginRight: 8 }}>
          Sort Ascending
        </Button>
        <Button variant="outlined" onClick={() => handleSort('desc')}>
          Sort Descending
        </Button>
      </Box>
      <DragDropContext onDragEnd={onDragEnd}>
        <Droppable droppableId="tasks">
          {(provided) => (
            <Grid
              container
              spacing={2}
              {...provided.droppableProps}
              ref={provided.innerRef}
            >
              {tasks.map((task, index) => (
                <Draggable key={task.id} draggableId={task.id} index={index}>
                  {(provided) => (
                    <Grid item xs={12} ref={provided.innerRef} {...provided.draggableProps} {...provided.dragHandleProps}>
                      <Paper style={{ padding: 16, marginBottom: 8 }}>
                        {isEditing === task.id ? (
                          <div>
                            <TextField
                              value={editContent}
                              onChange={(e) => setEditContent(e.target.value)}
                              fullWidth
                            />
                            <Button onClick={() => handleSave(task.id)} variant="contained" color="primary" style={{ marginTop: 8 }}>
                              Save
                            </Button>
                          </div>
                        ) : (
                          <div>
                            {task.content}
                            <IconButton onClick={() => handleEdit(task.id)} style={{ marginLeft: 8 }}>
                              <Edit />
                            </IconButton>
                            <IconButton onClick={() => handleDelete(task.id)} style={{ marginLeft: 8 }}>
                              <Delete />
                            </IconButton>
                          </div>
                        )}
                      </Paper>
                    </Grid>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </Grid>
          )}
        </Droppable>
      </DragDropContext>
    </Container>
  );
};

export default Kanban;
