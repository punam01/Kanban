import React, { useState, useEffect } from 'react';
import { fetchTicketsData } from '../../services/apiService';
import KanbanColumn from '../KanbanColumn/KanbanColumn'
import '../KanbanBoard/KanbanBoard.css'

const KanbanBoard = ({ groupBy, sortBy }) => {
  const [data, setData] = useState({ tickets: [], users: [] });

  useEffect(() => {
    const fetchData = async () => {
      const result = await fetchTicketsData();
      setData(result);
    };
    fetchData();
  }, []);

  const priorityNames = {
    4: 'Urgent',
    3: 'High',
    2: 'Medium',
    1: 'Low',
    0: 'No priority',
  };

  const groupTickets = (tickets, groupBy) => {
    return tickets.reduce((groups, ticket) => {
      const key = groupBy === 'userId' ? ticket[groupBy] : ticket[groupBy];
      if (!groups[key]) groups[key] = [];
      groups[key].push(ticket);
      return groups;
    }, {});
  };

  const sortTickets = (tickets, sortBy) => {//orderby
    if (sortBy === 'priority') {
      return tickets.sort((a, b) => b.priority - a.priority);
    } else if (sortBy === 'title') {
      return tickets.sort((a, b) => a.title.localeCompare(b.title));
    }
    return tickets;
  };

  const groupedTickets = groupTickets(data.tickets, groupBy);

  const sortedGroupedTickets = sortBy ? Object.keys(groupedTickets).reduce((acc, key) => {
        acc[key] = sortTickets(groupedTickets[key], sortBy);
        return acc;
      }, {})
    : groupedTickets;

  return (
    <div className="kanban-board-component">
      <div className="kanban-board-columns">
        {Object.entries(sortedGroupedTickets).map(([key, tickets]) => (
          <KanbanColumn
            key={key}
            title={
              groupBy === 'userId'
                ? data.users.find((user) => user.id === key)?.name || 'Unassigned'
                : (groupBy==='priority'?priorityNames[key]:key)
            }
            tickets={tickets}
            users={data.users}
            priorityNames={priorityNames} 
          />
        ))}
      </div>
    </div>
  );
};

export default KanbanBoard;
