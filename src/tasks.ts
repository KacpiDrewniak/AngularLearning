export interface Task {
  id: number;
  day: string;
  text: string;
  reminder: boolean;
}

export const tasks: Task[] = [
  {
    id: 1,
    day: '12/02/2014',
    text: 'Meeting at school',
    reminder: false,
  },
  {
    id: 2,
    day: '12/12/2014',
    text: 'Ridding a horse',
    reminder: false,
  },
  {
    id: 3,
    day: '12/11/2014',
    text: 'Holidays',
    reminder: false,
  },
  {
    id: 4,
    day: '10/11/2014',
    text: 'Learning programming',
    reminder: false,
  },
  {
    id: 5,
    day: '10/01/2014',
    text: 'Kappa',
    reminder: false,
  },
];
