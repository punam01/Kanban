import React from "react";

import TicketCard from '../TicketCard/TicketCard';
import '../KanbanColumn/KanbanColumn.css'
const KanbanColumn = ({ title, tickets, users }) => {
  const generateRandomColor = () => {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  };

  const randomColor = generateRandomColor();
  
  return (
    <div className="kanban-column-component">
      <div className="kanban-column-component-header">
        <div className="kanban-column-component-header-left">
          <span className="dot" style={{
            "backgroundColor": randomColor,
            "color": "#fff",
            "display": "flex",
            "justifyContent": "center",
            "alignItems": "center",
            "fontSize": "12px",
            "fontWeight": "bold",
            "width": "20px",
            "height": "20px",
            "borderRadius": "50%",
          }}

          >{title.charAt(0).toUpperCase()}</span>

          <span className="title">{title}</span>
          <span className="length">{tickets.length}</span>
        </div>
        <div className="kanban-column-component-header-right">
          <svg className="add" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M8.75 4C8.75 3.58579 8.41421 3.25 8 3.25C7.58579 3.25 7.25 3.58579 7.25 4V7.25H4C3.58579 7.25 3.25 7.58579 3.25 8C3.25 8.41421 3.58579 8.75 4 8.75H7.25V12C7.25 12.4142 7.58579 12.75 8 12.75C8.41421 12.75 8.75 12.4142 8.75 12V8.75H12C12.4142 8.75 12.75 8.41421 12.75 8C12.75 7.58579 12.4142 7.25 12 7.25H8.75V4Z" fill="#5C5C5E" />
          </svg>
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 6.5C3.39782 6.5 3.77936 6.65804 4.06066 6.93934C4.34196 7.22064 4.5 7.60218 4.5 8C4.5 8.39782 4.34196 8.77936 4.06066 9.06066C3.77936 9.34196 3.39782 9.5 3 9.5C2.60218 9.5 2.22064 9.34196 1.93934 9.06066C1.65804 8.77936 1.5 8.39782 1.5 8C1.5 7.60218 1.65804 7.22064 1.93934 6.93934C2.22064 6.65804 2.60218 6.5 3 6.5ZM8 6.5C8.39782 6.5 8.77936 6.65804 9.06066 6.93934C9.34196 7.22064 9.5 7.60218 9.5 8C9.5 8.39782 9.34196 8.77936 9.06066 9.06066C8.77936 9.34196 8.39782 9.5 8 9.5C7.60218 9.5 7.22064 9.34196 6.93934 9.06066C6.65804 8.77936 6.5 8.39782 6.5 8C6.5 7.60218 6.65804 7.22064 6.93934 6.93934C7.22064 6.65804 7.60218 6.5 8 6.5ZM13 6.5C13.3978 6.5 13.7794 6.65804 14.0607 6.93934C14.342 7.22064 14.5 7.60218 14.5 8C14.5 8.39782 14.342 8.77936 14.0607 9.06066C13.7794 9.34196 13.3978 9.5 13 9.5C12.6022 9.5 12.2206 9.34196 11.9393 9.06066C11.658 8.77936 11.5 8.39782 11.5 8C11.5 7.60218 11.658 7.22064 11.9393 6.93934C12.2206 6.65804 12.6022 6.5 13 6.5Z" fill="#5C5C5E" />
          </svg>

        </div>

      </div>

      {tickets.length > 0 ? (
        tickets.map((ticket) => (
          <TicketCard key={ticket.id} ticket={ticket} user={users.find((user) => user.id === ticket.userId)} />
        ))
      ) : (
        <p>No tickets available</p>
      )}
    </div>
  );
}

export default KanbanColumn;
