<template>
  <section class="home-container">
    <Card>
      <Row>
        <Col span="4">
        <Input
          v-model="searchForm.name"
          placeholder="Enter something..."
        />
        </Col>
        <Col span="2"><Button
          type="primary"
          icon="ios-search"
        >Search</Button></Col>
      </Row>
      <Row style="margin:20px 0">
        <Table
          :columns="columns1"
          :data="data1"
        ></Table>
      </Row>
      <Row style="text-align:right">
        <Page :total="100" show-total show-elevator show-sizer/>
      </Row>

    </Card>
  </section>
</template>
<script>
export default {
  data() {
    return {
      searchForm: {
        name: ""
      },
      columns1: [
        {
          title: "Name",
          key: "name"
        },
        {
          title: "Age",
          key: "age"
        },
        {
          title: "Address",
          key: "address"
        }
      ],
      data1: [
        {
          name: "John Brown",
          age: 18,
          address: "New York No. 1 Lake Park",
          date: "2016-10-03"
        },
        {
          name: "Jim Green",
          age: 24,
          address: "London No. 1 Lake Park",
          date: "2016-10-01"
        },
        {
          name: "Joe Black",
          age: 30,
          address: "Sydney No. 1 Lake Park",
          date: "2016-10-02"
        },
        {
          name: "Jon Snow",
          age: 26,
          address: "Ottawa No. 2 Lake Park",
          date: "2016-10-04"
        }
      ]
    };
  },
  methods: {}
};
</script>