<template>
     <!-- Navbar -->
  
  <!-- /.navbar -->
  <HeaderComponent/>
  <SidebarComponent/>
  <!-- Content Wrapper. Contains page content -->
  <div class="content-wrapper">
    <!-- Content Header (Page header) -->
    <div class="content-header">
      <div class="container-fluid">
        <div class="row mb-2">
          <div class="col-sm-6">
            <h1 class="m-0"><b class="text-primary"><marquee behavior="" direction="">ຍິນດີຕ້ອນຮັບເຂົ້າສູ່ລະບົບ</marquee></b></h1>
          </div><!-- /.col -->
          <div class="col-sm-6">
            <ol class="breadcrumb float-sm-right">
              <li class="breadcrumb-item"><router-link to="/dashboard" href="#">ໜ້າຫຼັກ</router-link></li>
              <li class="breadcrumb-item active">Dashboard</li>
            </ol>
          </div><!-- /.col -->
        </div><!-- /.row -->
      </div><!-- /.container-fluid -->
    </div>
    <!-- /.content-header -->

    <!-- Main content -->
    <section class="content">
      <div class="container-fluid">
        <!-- Small boxes (Stat box) -->
        <div class="row">
          <div class="col-lg-3 col-6">
            <!-- small box -->
            <div class="small-box bg-info">
              <div class="inner">
                <h4 class="text-bold">{{ sum_income }}</h4>

                <p>ລາຍຮັບທັງໝົດ</p>
              </div>
              <div class="icon">
                <i class="ion ion">₭</i>
              </div>
              <router-link to="/income_details" class="small-box-footer">ລາຍລະອຽດ <i class="fas fa-arrow-circle-right"></i></router-link>
            </div>
          </div>
          <!-- ./col -->
          <div class="col-lg-3 col-6">
            <!-- small box -->
            <div class="small-box bg-danger">
              <div class="inner">
                <h4 class="text-bold">{{ sum_expense }}</h4>

                <p>ລາຍຈ່າຍທັງໝົດ</p>
              </div>
              <div class="icon">
                <i class="ion">₭</i>
              </div>
              <router-link to="/expense_details" class="small-box-footer">ລາຍລະອຽດ <i class="fas fa-arrow-circle-right"></i></router-link>
            </div>
          </div>
          <!-- ./col -->
          <div class="col-lg-3 col-6">
            <!-- small box -->
            <div class="small-box bg-warning">
              <div class="inner">
                <h4 class="text-bold">{{ sum_remainings }}</h4>

                <p>ເງິນທີ່ຍັງເຫຼືອ</p>
              </div>
              <div class="icon">
                <i class="ion ion-person-add"></i>
              </div>
              <a href="#" class="small-box-footer">ລາຍລະອຽດ <i class="fas fa-arrow-circle-right"></i></a>
            </div>
          </div>
          <!-- ./col -->
          <div class="col-lg-3 col-6">
            <!-- small box -->
            <div class="small-box bg-success">
              <div class="inner">
                <h4 class="text-bold">{{ sum_income_this_month }}</h4>

                <p>ລາຍຈ່າຍເດືອນນີ້</p>
              </div>
              <div class="icon">
                <i class="ion">₭</i>
              </div>
              <a href="#" class="small-box-footer">ລາຍລະອຽດ <i class="fas fa-arrow-circle-right"></i></a>
            </div>
          </div>
          <div class="col-lg-3 col-6">
            <!-- small box -->
            <div class="small-box bg-info">
              <div class="inner">
                <h4 class="text-bold">{{ sum_income_this_month }}</h4>

                <p>ລາຍຮັບເດືອນນີ້</p>
              </div>
              <div class="icon">
                <i class="ion">₭</i>
              </div>
              <a href="#" class="small-box-footer">ລາຍລະອຽດ <i class="fas fa-arrow-circle-right"></i></a>
            </div>
          </div>
          <div class="col-lg-3 col-6">
            <!-- small box -->
            <div class="small-box bg-success">
              <div class="inner">
                <h4 class="text-bold">{{ sum_income_today }}</h4>

                <p>ລາຍຮັບມື້ນີ້</p>
              </div>
              <div class="icon">
                <i class="ion">₭</i>
              </div>
              <a href="#" class="small-box-footer">ລາຍລະອຽດ <i class="fas fa-arrow-circle-right"></i></a>
            </div>
          </div>
          <div class="col-lg-3 col-6">
            <!-- small box -->
            <div class="small-box bg-danger">
              <div class="inner">
                <h4 class="text-bold">{{ sum_expense_today }}</h4>

                <p>ລາຍຈ່າຍມື້ນີ້</p>
              </div>
              <div class="icon">
                <i class="ion">₭</i>
              </div>
              <a href="#" class="small-box-footer">ລາຍລະອຽດ <i class="fas fa-arrow-circle-right"></i></a>
            </div>
          </div>
          <!-- ./col -->
        </div>
        <!-- /.row -->
        
        <div class="row">
          <div class="col-12 col-sm-6 col-md-3">
            <div class="info-box">
              <span class="info-box-icon bg-info elevation-1"><i class="fas fa-book"></i></span>

              <div class="info-box-content">
                <span class="info-box-text">ແຜນການທັງໝົດ</span>
                <span class="info-box-number">
                  {{ count_all_plans }}
                </span>
              </div>
              <!-- /.info-box-content -->
            </div>
            <!-- /.info-box -->
          </div>
          <!-- /.col -->
          <div class="col-12 col-sm-6 col-md-3">
            <div class="info-box mb-3">
              <span class="info-box-icon bg-danger elevation-1"><i class="fas fa-book"></i></span>

              <div class="info-box-content">
                <span class="info-box-text">ແຜນການທີ່ສຳເລັດແລ້ວ</span>
                <span class="info-box-number">{{ count_plan_success }}</span>
              </div>
              <!-- /.info-box-content -->
            </div>
            <!-- /.info-box -->
          </div>
          <!-- /.col -->

          <!-- fix for small devices only -->
          <div class="clearfix hidden-md-up"></div>

          <div class="col-12 col-sm-6 col-md-3">
            <div class="info-box mb-3">
              <span class="info-box-icon bg-warning elevation-1"><i class="fas fa-book"></i></span>

              <div class="info-box-content">
                <span class="info-box-text">ແຜນການທີ່ຍັງບໍ່ສຳເລັດ</span>
                <span class="info-box-number">{{ count_plan_not_success }}</span>
              </div>
              <!-- /.info-box-content -->
            </div>
            <!-- /.info-box -->
          </div>
          <!-- /.col -->
          <div class="col-12 col-sm-6 col-md-3">
            <div class="info-box mb-3">
              <span class="info-box-icon bg-success elevation-1"><i class="fas fa-table"></i></span>

              <div class="info-box-content">
                <span class="info-box-text">ຈຳນວນມື້</span>
                <span class="info-box-number">{{ count_days }}</span>
              </div>
              <!-- /.info-box-content -->
            </div>
            <!-- /.info-box -->
          </div>
          <!-- /.col -->
        </div>
        <!-- Main row -->
        
        <!-- /.row (main row) -->
      </div><!-- /.container-fluid -->
    </section>
    <!-- /.content -->
  </div>
</template>

<script>
import HeaderComponent from './includes/HeaderComponent.vue';
import SidebarComponent from './includes/SidebarComponent.vue';
import axios from 'axios';
export default {
    name: "DashboardComponent",
    components: {
      HeaderComponent,
      SidebarComponent
    },
    data(){
      return{
        sum_income: 0,
        sum_expense: 0,
        sum_remainings: 0,
        sum_income_today: 0,
        sum_expense_today: 0,
        sum_income_this_month: 0,
        sum_expense_this_month: 0,
        count_all_plans: 0,
        count_plan_success: 0,
        count_plan_not_success: 0,
        count_days:0

      }
    },
    mounted(){
      this.SumAllIncome();
      this.SumAllExpense();
      this.SumAllRemaining();
      this.SumIncomeToday();
      this.SumExpenseToday();
      this.SumIncomeThisMonth();
      this.SumExpenseThisMonth();
      this.CountAllPlans();
      this.CountPlanSuccess();
      this.CountPlanNotSuccess();
      this.CountDays();
    },
    
    methods: {
      async SumAllIncome(){
        axios.get('https://nodejsbackenddailies.onrender.com/api/sum-all-income')
        .then(response => {
          this.sum_income = response.data.sum_income;
        })
        .catch(error => {
          console.log("Error", error);
        })
      },
      async SumAllExpense(){
        axios.get('https://nodejsbackenddailies.onrender.com/api/sum-all-expense')
        .then(response => {
          this.sum_expense = response.data.sum_expense;
        })
        .catch(error => {
          console.log("Error", error);
        })
      },
      async SumAllRemaining(){
        axios.get('https://nodejsbackenddailies.onrender.com/api/sum-all-remainings')
        .then(response => {
          this.sum_remainings = response.data.sum_remainings;
        })
        .catch(error => {
          console.log("Error", error);
        })
      },
      async SumIncomeToday(){
        axios.get('https://nodejsbackenddailies.onrender.com/api/sum-income-today')
        .then(response => {
          this.sum_income_today = response.data.sum_income_today;
        })
        .catch(error => {
          console.log("Error", error);
        })
      },
      async SumExpenseToday(){
        axios.get('https://nodejsbackenddailies.onrender.com/api/sum-expense-today')
        .then(response => {
          this.sum_expense_today = response.data.sum_expense_today;
        })
        .catch(error => {
          console.log("Error", error);
        })
      },
      async SumIncomeThisMonth(){
        axios.get('https://nodejsbackenddailies.onrender.com/api/sum-income-this-month')
        .then(response => {
          this.sum_income_this_month = response.data.sum_income_this_month;
        })
        .catch(error => {
          console.log("Error", error);
        })
      },
      async SumExpenseThisMonth(){
        axios.get('https://nodejsbackenddailies.onrender.com/api/sum-expense-this-month')
        .then(response => {
          this.sum_expense_this_month = response.data.sum_expense_this_month;
        })
        .catch(error => {
          console.log("Error", error);
        })
      },
      async CountAllPlans(){
        axios.get('https://nodejsbackenddailies.onrender.com/api/count-all-plan')
        .then(response => {
          this.count_all_plans = response.data.count_all_plans;
        })
        .catch(error => {
          console.log("Error", error);
        })
      },
      async CountPlanSuccess(){
        axios.get('https://nodejsbackenddailies.onrender.com/api/count-plan-success')
        .then(response => {
          this.count_plan_success = response.data.count_plan_success;
        })
        .catch(error => {
          console.log("Error", error);
        })
      },
      async CountPlanNotSuccess(){
        axios.get('https://nodejsbackenddailies.onrender.com/api/count-plan-not-success')
        .then(response => {
          this.count_plan_not_success = response.data.count_plan_not_success;
        })
        .catch(error => {
          console.log("Error", error);
        })
      },
      async CountDays(){
        axios.get('https://nodejsbackenddailies.onrender.com/api/count-days')
        .then(response => {
          this.count_days = response.data.count_days;
        })
        .catch(error => {
          console.log("Error", error);
        })
      },
    }
}
</script>