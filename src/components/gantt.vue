<template>
  <vh-gantt
    :source="data"
    :coloumns="dataColumns"
    :startDate="startdate"
    :endDate="enddate"
  ></vh-gantt>
</template>
<script>
import { formatDate, addDays } from '../utils/date.util';
export default {
  data() {
    return {
      startdate: new Date(),
      enddate: addDays(new Date(), 30),
      dataColumns: [
        {
          field: 'name',
          title: 'Task',
          width: 200
        },
        {
          field: 'status',
          title: 'Status',
          width: 90
        },
        {
          field: 'date',
          title: 'Date',
          width: 120,
          format: (item) => item ? formatDate(item) : ''
        },
        {
          field: 'due',
          title: 'Due',
          width: 90
        }
      ],
      data: [
        {
          name: 'Task 1',
          date: addDays(new Date(), 3),
          status: 'done',
          due: '5'
        },
        {
          name: 'Task 1',
          date: addDays(new Date(), -1),
          status: 'Test',
          due: 50
        },
        {
          name: 'Task 1',
          date: '',
          status: 'done',
          due: 15
        },
        {
          name: 'Task 1',
          date: '',
          status: 'done',
          due: 50
        },
        {
          name: 'Task 1',
          date: '',
          status: 'done',
          due: 50
        },
        {
          name: 'Task 1',
          date: '',
          status: 'done',
          due: ''
        },
        {
          name: 'Task 1',
          date: '',
          status: 'done',
          due: ''
        },
        {
          name: 'Task 1',
          date: '',
          status: 'done',
          due: ''
        },
        {
          name: 'Task 1',
          date: '',
          status: 'done',
          due: ''
        },
        {
          name: 'Task 1',
          date: '',
          status: 'done',
          due: ''
        },
        {
          name: 'TTask 1',
          date: '',
          status: 'done',
          due: '5'
        },
        {
          name: 'Tassddf',
          date: '',
          status: 'Test',
          due: ''
        },
        {
          name: 'Task 1',
          date: '',
          status: 'done',
          due: ''
        },
        {
          name: 'Task 1',
          date: '',
          status: 'done',
          due: ''
        },
        {
          name: 'Task 1',
          date: '',
          status: 'done',
          due: ''
        },
        {
          name: 'Task 1',
          date: '',
          status: 'done',
          due: ''
        },
        {
          name: 'Task 1',
          date: '',
          status: 'done',
          due: ''
        },
        {
          name: 'Task 1',
          date: '',
          status: 'done',
          due: ''
        },
        {
          name: 'Task 1',
          date: '',
          status: 'done',
          due: ''
        },
        {
          name: 'Task 1',
          date: '',
          status: 'done',
          due: ''
        },
        {
          name: 'TTask 1',
          date: '',
          status: 'done',
          due: '5'
        },
        {
          name: 'tin tài khoản',
          date: '',
          status: 'Test',
          due: ''
        },
        {
          name: 'Task 1',
          date: '',
          status: 'done',
          due: ''
        },
        {
          name: 'Task 1',
          date: '',
          status: 'done',
          due: ''
        },
        {
          name: 'Task 1',
          date: '',
          status: 'done',
          due: ''
        },
        {
          name: 'Task 1',
          date: '',
          status: 'done',
          due: ''
        },
        {
          name: 'Task 1',
          date: '',
          status: 'done',
          due: ''
        },
        {
          name: 'Task 1',
          date: '',
          status: 'done',
          due: ''
        },
        {
          name: 'Task 1',
          date: '',
          status: 'done',
          due: ''
        },
        {
          name: 'Heets',
          date: '',
          status: 'done',
          due: ''
        }
      ]
    }
  },
  setup() {

  },
}
</script>