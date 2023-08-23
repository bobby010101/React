import React, { useState } from 'react';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Collapse from '@mui/material/Collapse';
import { Checkbox } from '@mui/material';

interface Department {
    name: string;
    subDepartments: string[];
  }
  
  const departments: Department[] = [
    {
      name: 'customer_service',
      subDepartments: ['support', 'customer_success'],
    },
    {
      name: 'design',
      subDepartments: ['graphic_design', 'product_design','web_design'],
    },
    // ... Add more departments and sub-departments
  ];

const Tree: React.FC = () => {
    const [expandedDepartments, setExpandedDepartments] = useState<string[]>([]);
  const [selectedSubDepartments, setSelectedSubDepartments] = useState<string[]>([]);

  const handleDepartmentClick = (departmentName: string) => {
    if (expandedDepartments.includes(departmentName)) {
      setExpandedDepartments(expandedDepartments.filter(item => item !== departmentName));
    } else {
      setExpandedDepartments([...expandedDepartments, departmentName]);
    }
  };

  const handleSubDepartmentCheckboxChange = (subDept: string) => {
    if (selectedSubDepartments.includes(subDept)) {
      setSelectedSubDepartments(selectedSubDepartments.filter(item => item !== subDept));
    } else {
      setSelectedSubDepartments([...selectedSubDepartments, subDept]);
    }
  };

  
  

    return(
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh',}}>
      <List>
      {departments.map((department) => (
        <div key={department.name}>
          <ListItem
            button
            onClick={() => handleDepartmentClick(department.name)}
            style={{
              display: 'flex',
              alignItems: 'center',
              cursor: 'pointer',
              color:'black',
              backgroundColor: expandedDepartments.includes(department.name) ? '#f0f0f0' : 'transparent',
            }}
          >
            {expandedDepartments.includes(department.name) ? <ExpandMoreIcon /> : <ChevronRightIcon />}
            <ListItemText
              primary={`${department.name} (${department.subDepartments.length})`}
            />
          </ListItem>
          <Collapse in={expandedDepartments.includes(department.name)} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {department.subDepartments.map((subDept) => (
                <ListItem
                  key={subDept}
                  style={{ paddingLeft: '20px', borderTop: '1px solid #e0e0e0',
color:'black' }}
                >
                  <Checkbox
                    checked={selectedSubDepartments.includes(subDept)}
                    onChange={() => handleSubDepartmentCheckboxChange(subDept)}
                  />
                  <ListItemText primary={subDept} />
                </ListItem>
              ))}
            </List>
          </Collapse>
        </div>
      ))}
    </List>
        </div>
    
    );
};
export default Tree;