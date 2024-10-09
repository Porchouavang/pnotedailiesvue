<template>
    <!-- Navbar -->

    <!-- /.navbar -->
    <HeaderComponent />
    <SidebarComponent />
    <!-- Content Wrapper. Contains page content -->
    <div class="content-wrapper">
        <!-- Content Header (Page header) -->
        <div class="content-header">
            <div class="container-fluid">
                <div class="row mb-2">
                    <div class="col-sm-6">
                        <h1 class="m-0"><b class="text-primary">
                                <marquee behavior="" direction="">ຍິນດີຕ້ອນຮັບເຂົ້າສູ່ລະບົບ</marquee>
                            </b></h1>
                    </div><!-- /.col -->
                    <div class="col-sm-6">
                        <ol class="breadcrumb float-sm-right">
                            <li class="breadcrumb-item"><router-link to="/dashboard" href="#">ໜ້າຫຼັກ</router-link></li>
                            <li class="breadcrumb-item active">ແອັດມິນ</li>
                        </ol>
                    </div><!-- /.col -->
                </div><!-- /.row -->
                <div class="row">
                    <div class="col-md-6">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="d-flex mb-1">
                                    <input type="text" required v-model="searchQueryEight_Nine" class="form-control"
                                        placeholder="8-9">
                                    <button @click="SearchDaily" class="btn btn-primary ml-2"><i
                                            class="fas fa-search"></i></button>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="d-flex mb-1">
                                    <input type="text" required v-model="searchQueryThirteen_Fourteen" class="form-control"
                                        placeholder="13-14">
                                    <button @click="SearchDaily" class="btn btn-primary ml-2"><i
                                            class="fas fa-search"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="col-md-6">
                        <div class="row">
                            <div class="col-md-6">
                                <div class="d-flex mb-1">
                                    <select name="" id="" class="form-control" v-model="searchQueryDays">
                                                <option value="ຈັນ">-- ຈັນ --</option>
                                                <option value="ອັງຄານ">-- ອັງຄານ --</option>
                                                <option value="ພຸດ">-- ພຸດ --</option>
                                                <option value="ພະຫັດ">-- ພະຫັດ --</option>
                                                <option value="ສຸກ">-- ສຸກ --</option>
                                                <option value="ເສົາ">-- ເສົາ --</option>
                                                <option value="ທິດ">-- ທິດ --</option>
                                    </select>
                                    <button @click="SearchDaily" class="btn btn-primary ml-2"><i
                                            class="fas fa-search"></i></button>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="d-flex mb-1">
                                    <input type="" required v-model="searchQueryDate" class="form-control"
                                        placeholder="ຊອກຫາ...">
                                    <button @click="SearchDaily" class="btn btn-primary ml-2"><i
                                            class="fas fa-search"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div><!-- /.container-fluid -->
        </div>
        <!-- /.content-header -->

        <!-- Main content -->
        <section class="content">
            <div class="container">
                <!-- Small boxes (Stat box) -->
                <button class="btn btn-primary mb-2" data-toggle="modal" data-target="#modal-add-daily"><i class="fas fa-plus mr-2"></i>ເພີ່ມໃໝ່</button>
                <div class="overflow-auto">
                    <table class="table table-striped table-hover w-100">
                        <thead>
                            <tr>
                                <th>ລຳດັບ</th>
                                <th>5-6</th>
                                <th>6-7</th>
                                <th>7-8</th>
                                <th>8-9</th>
                                <th>9-10</th>
                                <th>10-11</th>
                                <th>11-12</th>
                                <th>12-13</th>
                                <th>13-14</th>
                                <th>14-15</th>
                                <th>15-16</th>
                                <th>16-17</th>
                                <th>17-18</th>
                                <th>18-19</th>
                                <th>19-20</th>
                                <th>20-21</th>
                                <th>21-22</th>
                                <th>22-23</th>
                                <th>23-5</th>
                                <th>ວັນ</th>
                                <th>ວັນທີ່</th>
                                <th>ອັບເດດ</th>
                                <th>ປຸ່ມຄຳສັ່ງ</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr v-if="none_data">
                                <td class="text-danger text-bold">ຂໍອະໄພ ຂໍ້ມູນທີ່ຄົ້ນຫາບໍ່ພົບໃນລະບົບ</td>
                            </tr>
                            <tr v-else v-for="(daily, index) in dailies" :key="daily.DL_ID">
                                <td>{{ index + 1 }}</td>
                                <td>{{ daily.five_six }}</td>
                                <td>{{ daily.six_seven }}</td>
                                <td>{{ daily.seven_eight }}</td>
                                <td>{{ daily.eight_nine }}</td>
                                <td>{{ daily.nine_ten }}</td>
                                <td>{{ daily.ten_eleven }}</td>
                                <td>{{ daily.eleven_twelve }}</td>
                                <td>{{ daily.twelve_thirteen }}</td>
                                <td>{{ daily.thirteen_fourteen }}</td>
                                <td>{{ daily.fourteen_fifteen }}</td>
                                <td>{{ daily.fifteen_sixteen }}</td>
                                <td>{{ daily.sixteen_seventeen }}</td>
                                <td>{{ daily.seventeen_eighteen }}</td>
                                <td>{{ daily.eighteen_nineteen }}</td>
                                <td>{{ daily.nineteen_twenty }}</td>
                                <td>{{ daily.twenty_twentyone }}</td>
                                <td>{{ daily.twentyone_twentytwo }}</td>
                                <td>{{ daily.twentytwo_twentythree }}</td>
                                <td>{{ daily.twentythree_five }}</td>
                                <td>{{ daily.days }}</td>
                                <td>{{ daily.created_at }}</td>
                                <td>{{ daily.updated_at }}</td>
                                <td>
                                    <button class="btn btn-sm btn-success" @click="ShowDailyItem(daily.DL_ID)" data-toggle="modal" data-target="#modal-edit-daily"><i class="fas fa-edit"></i></button>
                                    <button @click="ConfirmDelete(daily.DL_ID)" class="btn btn-sm btn-danger"><i class="fas fa-trash"></i></button>
                                </td>
                            </tr>

                        </tbody>
                    </table>
                </div>
                <div class="modal fade" id="modal-add-daily">
                    <div class="modal-dialog modal-xl">
                        <div class="modal-content">
                            <div class="modal-header bg-primary">
                                <h4 class="modal-title">ຟອມເພີ່ມການບັນທຶກປະຈຳວັນ</h4>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <form enctype="multipart/form-data" @submit.prevent="CreateDaily">
                                <div class="modal-body">
                                    <div class="row">
                                        <div class="form-group ml-3 mb-3">
                                            <label for="exampleInputEmail1">5-6:<span
                                                    class="text-danger">*</span></label>
                                            <input type="text" class="form-control" required v-model="five_six"
                                                id="exampleInputEmail1" placeholder="ກະລຸນາປ້ອນຊື່">
                                        </div>
                                        <div class="form-group ml-3 mb-3">
                                            <label for="exampleInputEmail1">6-7:<span
                                                    class="text-danger">*</span></label>
                                            <input type="text" class="form-control" required v-model="six_seven"
                                                id="exampleInputEmail1" placeholder="ກະລຸນາປ້ອນຊື່">
                                        </div>
                                        <div class="form-group ml-3 mb-3">
                                            <label for="exampleInputEmail1">7-8:<span
                                                    class="text-danger">*</span></label>
                                            <input type="text" class="form-control" required v-model="seven_eight"
                                                id="exampleInputEmail1" placeholder="ກະລຸນາປ້ອນຊື່">
                                        </div>
                                        <div class="form-group ml-3 mb-3">
                                            <label for="exampleInputEmail1">8-9:<span
                                                    class="text-danger">*</span></label>
                                            <input type="text" class="form-control" required v-model="eight_nine"
                                                id="exampleInputEmail1" placeholder="ກະລຸນາປ້ອນຊື່">
                                        </div>
                                        <div class="form-group ml-3 mb-3">
                                            <label for="exampleInputEmail1">9-10:<span
                                                    class="text-danger">*</span></label>
                                            <input type="text" class="form-control" required v-model="nine_ten"
                                                id="exampleInputEmail1" placeholder="ກະລຸນາປ້ອນຊື່">
                                        </div>
                                        <div class="form-group ml-3 mb-3">
                                            <label for="exampleInputEmail1">10-11:<span
                                                    class="text-danger">*</span></label>
                                            <input type="text" class="form-control" required v-model="ten_eleven"
                                                id="exampleInputEmail1" placeholder="ກະລຸນາປ້ອນຊື່">
                                        </div>
                                        <div class="form-group ml-3 mb-3">
                                            <label for="exampleInputEmail1">11-12:<span
                                                    class="text-danger">*</span></label>
                                            <input type="text" class="form-control" required v-model="eleven_twelve"
                                                id="exampleInputEmail1" placeholder="ກະລຸນາປ້ອນຊື່">
                                        </div>
                                        <div class="form-group ml-3 mb-3">
                                            <label for="exampleInputEmail1">12-13:<span
                                                    class="text-danger">*</span></label>
                                            <input type="text" class="form-control" required v-model="twelve_thirteen"
                                                id="exampleInputEmail1" placeholder="ກະລຸນາປ້ອນຊື່">
                                        </div>
                                        <div class="form-group ml-3 mb-3">
                                            <label for="exampleInputEmail1">13-14:<span
                                                    class="text-danger">*</span></label>
                                            <input type="text" class="form-control" required v-model="thirteen_fourteen"
                                                id="exampleInputEmail1" placeholder="ກະລຸນາປ້ອນຊື່">
                                        </div>
                                        <div class="form-group ml-3 mb-3">
                                            <label for="exampleInputEmail1">14-15:<span
                                                    class="text-danger">*</span></label>
                                            <input type="text" class="form-control" required v-model="fourteen_fifteen"
                                                id="exampleInputEmail1" placeholder="ກະລຸນາປ້ອນຊື່">
                                        </div>
                                        <div class="form-group ml-3 mb-3">
                                            <label for="exampleInputEmail1">15-16:<span
                                                    class="text-danger">*</span></label>
                                            <input type="text" class="form-control" required v-model="fifteen_sixteen"
                                                id="exampleInputEmail1" placeholder="ກະລຸນາປ້ອນຊື່">
                                        </div>
                                        <div class="form-group ml-3 mb-3">
                                            <label for="exampleInputEmail1">16-17:<span
                                                    class="text-danger">*</span></label>
                                            <input type="text" class="form-control" required v-model="sixteen_seventeen"
                                                id="exampleInputEmail1" placeholder="ກະລຸນາປ້ອນຊື່">
                                        </div>
                                        <div class="form-group ml-3 mb-3">
                                            <label for="exampleInputEmail1">17-18:<span
                                                    class="text-danger">*</span></label>
                                            <input type="text" class="form-control" required v-model="seventeen_eighteen"
                                                id="exampleInputEmail1" placeholder="ກະລຸນາປ້ອນຊື່">
                                        </div>
                                        <div class="form-group ml-3 mb-3">
                                            <label for="exampleInputEmail1">18-19:<span
                                                    class="text-danger">*</span></label>
                                            <input type="text" class="form-control" required v-model="eighteen_nineteen"
                                                id="exampleInputEmail1" placeholder="ກະລຸນາປ້ອນຊື່">
                                        </div>
                                        <div class="form-group ml-3 mb-3">
                                            <label for="exampleInputEmail1">19-20:<span
                                                    class="text-danger">*</span></label>
                                            <input type="text" class="form-control" required v-model="nineteen_twenty"
                                                id="exampleInputEmail1" placeholder="ກະລຸນາປ້ອນຊື່">
                                        </div>
                                        <div class="form-group ml-3 mb-3">
                                            <label for="exampleInputEmail1">20-21:<span
                                                    class="text-danger">*</span></label>
                                            <input type="text" class="form-control" required v-model="twenty_twentyone"
                                                id="exampleInputEmail1" placeholder="ກະລຸນາປ້ອນຊື່">
                                        </div>
                                        <div class="form-group ml-3 mb-3">
                                            <label for="exampleInputEmail1">21-22:<span
                                                    class="text-danger">*</span></label>
                                            <input type="text" class="form-control" required v-model="twentyone_twentytwo"
                                                id="exampleInputEmail1" placeholder="ກະລຸນາປ້ອນຊື່">
                                        </div>
                                        <div class="form-group ml-3 mb-3">
                                            <label for="exampleInputEmail1">22-23:<span
                                                    class="text-danger">*</span></label>
                                            <input type="text" class="form-control" required v-model="twentytwo_twentythree"
                                                id="exampleInputEmail1" placeholder="ກະລຸນາປ້ອນຊື່">
                                        </div>
                                        <div class="form-group ml-3 mb-3">
                                            <label for="exampleInputEmail1">23-5:<span
                                                    class="text-danger">*</span></label>
                                            <input type="text" class="form-control" required v-model="twentythree_five"
                                                id="exampleInputEmail1" placeholder="ກະລຸນາປ້ອນຊື່">
                                        </div>
                                        
                                        <div class="form-group ml-3 mb-3">
                                            <label for="exampleInputEmail1">ວັນ:<span
                                                    class="text-danger">*</span></label>
                                            <select name="" id="" class="form-control" required v-model="days">
                                                <option value="ຈັນ">-- ຈັນ --</option>
                                                <option value="ອັງຄານ">-- ອັງຄານ --</option>
                                                <option value="ພຸດ">-- ພຸດ --</option>
                                                <option value="ພະຫັດ">-- ພະຫັດ --</option>
                                                <option value="ສຸກ">-- ສຸກ --</option>
                                                <option value="ເສົາ">-- ເສົາ --</option>
                                                <option value="ທິດ">-- ທິດ --</option>
                                            </select>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div class="modal-footer justify-content-between">
                                    <button type="button" class="btn btn-danger" data-dismiss="modal"><i
                                            class="fas fa-times mr-1"></i>ຍົກເລີກ</button>
                                    <button type="submit" class="btn btn-primary"><i class="fas fa-print mr-1"></i>
                                        ບັນທຶກ</button>
                                </div>
                            </form>
                        </div>
                        <!-- /.modal-content -->
                    </div>
                    <!-- /.modal-dialog -->
                </div>
                <div class="modal fade" id="modal-edit-daily">
                    <div class="modal-dialog modal-xl">
                        <div class="modal-content">
                            <div class="modal-header bg-info">
                                <h4 class="modal-title">ຟອມແກ້ໄຂການບັນທຶກປະຈຳວັນ</h4>
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">&times;</span>
                                </button>
                            </div>
                            <form enctype="multipart/form-data" @submit.prevent="UpdateDaily">
                                <div class="modal-body">
                                    <div class="row">
                                        <div class="form-group ml-3 mb-3">
                                            <label for="exampleInputEmail1">5-6:<span
                                                    class="text-danger">*</span></label>
                                            <input type="text" class="form-control" required v-model="update_five_six"
                                                id="exampleInputEmail1" placeholder="ກະລຸນາປ້ອນຊື່">
                                        </div>
                                        <div class="form-group ml-3 mb-3">
                                            <label for="exampleInputEmail1">6-7:<span
                                                    class="text-danger">*</span></label>
                                            <input type="text" class="form-control" required v-model="update_six_seven"
                                                id="exampleInputEmail1" placeholder="ກະລຸນາປ້ອນຊື່">
                                        </div>
                                        <div class="form-group ml-3 mb-3">
                                            <label for="exampleInputEmail1">7-8:<span
                                                    class="text-danger">*</span></label>
                                            <input type="text" class="form-control" required v-model="update_seven_eight"
                                                id="exampleInputEmail1" placeholder="ກະລຸນາປ້ອນຊື່">
                                        </div>
                                        <div class="form-group ml-3 mb-3">
                                            <label for="exampleInputEmail1">8-9:<span
                                                    class="text-danger">*</span></label>
                                            <input type="text" class="form-control" required v-model="update_eight_nine"
                                                id="exampleInputEmail1" placeholder="ກະລຸນາປ້ອນຊື່">
                                        </div>
                                        <div class="form-group ml-3 mb-3">
                                            <label for="exampleInputEmail1">9-10:<span
                                                    class="text-danger">*</span></label>
                                            <input type="text" class="form-control" required v-model="update_nine_ten"
                                                id="exampleInputEmail1" placeholder="ກະລຸນາປ້ອນຊື່">
                                        </div>
                                        <div class="form-group ml-3 mb-3">
                                            <label for="exampleInputEmail1">10-11:<span
                                                    class="text-danger">*</span></label>
                                            <input type="text" class="form-control" required v-model="update_ten_eleven"
                                                id="exampleInputEmail1" placeholder="ກະລຸນາປ້ອນຊື່">
                                        </div>
                                        <div class="form-group ml-3 mb-3">
                                            <label for="exampleInputEmail1">11-12:<span
                                                    class="text-danger">*</span></label>
                                            <input type="text" class="form-control" required v-model="update_eleven_twelve"
                                                id="exampleInputEmail1" placeholder="ກະລຸນາປ້ອນຊື່">
                                        </div>
                                        <div class="form-group ml-3 mb-3">
                                            <label for="exampleInputEmail1">12-13:<span
                                                    class="text-danger">*</span></label>
                                            <input type="text" class="form-control" required v-model="update_twelve_thirteen"
                                                id="exampleInputEmail1" placeholder="ກະລຸນາປ້ອນຊື່">
                                        </div>
                                        <div class="form-group ml-3 mb-3">
                                            <label for="exampleInputEmail1">13-14:<span
                                                    class="text-danger">*</span></label>
                                            <input type="text" class="form-control" required v-model="update_thirteen_fourteen"
                                                id="exampleInputEmail1" placeholder="ກະລຸນາປ້ອນຊື່">
                                        </div>
                                        <div class="form-group ml-3 mb-3">
                                            <label for="exampleInputEmail1">14-15:<span
                                                    class="text-danger">*</span></label>
                                            <input type="text" class="form-control" required v-model="update_fourteen_fifteen"
                                                id="exampleInputEmail1" placeholder="ກະລຸນາປ້ອນຊື່">
                                        </div>
                                        <div class="form-group ml-3 mb-3">
                                            <label for="exampleInputEmail1">15-16:<span
                                                    class="text-danger">*</span></label>
                                            <input type="text" class="form-control" required v-model="update_fifteen_sixteen"
                                                id="exampleInputEmail1" placeholder="ກະລຸນາປ້ອນຊື່">
                                        </div>
                                        <div class="form-group ml-3 mb-3">
                                            <label for="exampleInputEmail1">16-17:<span
                                                    class="text-danger">*</span></label>
                                            <input type="text" class="form-control" required v-model="update_sixteen_seventeen"
                                                id="exampleInputEmail1" placeholder="ກະລຸນາປ້ອນຊື່">
                                        </div>
                                        <div class="form-group ml-3 mb-3">
                                            <label for="exampleInputEmail1">17-18:<span
                                                    class="text-danger">*</span></label>
                                            <input type="text" class="form-control" required v-model="update_seventeen_eighteen"
                                                id="exampleInputEmail1" placeholder="ກະລຸນາປ້ອນຊື່">
                                        </div>
                                        <div class="form-group ml-3 mb-3">
                                            <label for="exampleInputEmail1">18-19:<span
                                                    class="text-danger">*</span></label>
                                            <input type="text" class="form-control" required v-model="update_eighteen_nineteen"
                                                id="exampleInputEmail1" placeholder="ກະລຸນາປ້ອນຊື່">
                                        </div>
                                        <div class="form-group ml-3 mb-3">
                                            <label for="exampleInputEmail1">19-20:<span
                                                    class="text-danger">*</span></label>
                                            <input type="text" class="form-control" required v-model="update_nineteen_twenty"
                                                id="exampleInputEmail1" placeholder="ກະລຸນາປ້ອນຊື່">
                                        </div>
                                        <div class="form-group ml-3 mb-3">
                                            <label for="exampleInputEmail1">20-21:<span
                                                    class="text-danger">*</span></label>
                                            <input type="text" class="form-control" required v-model="update_twenty_twentyone"
                                                id="exampleInputEmail1" placeholder="ກະລຸນາປ້ອນຊື່">
                                        </div>
                                        <div class="form-group ml-3 mb-3">
                                            <label for="exampleInputEmail1">21-22:<span
                                                    class="text-danger">*</span></label>
                                            <input type="text" class="form-control" required v-model="update_twentyone_twentytwo"
                                                id="exampleInputEmail1" placeholder="ກະລຸນາປ້ອນຊື່">
                                        </div>
                                        <div class="form-group ml-3 mb-3">
                                            <label for="exampleInputEmail1">22-23:<span
                                                    class="text-danger">*</span></label>
                                            <input type="text" class="form-control" required v-model="update_twentytwo_twentythree"
                                                id="exampleInputEmail1" placeholder="ກະລຸນາປ້ອນຊື່">
                                        </div>
                                        <div class="form-group ml-3 mb-3">
                                            <label for="exampleInputEmail1">23-5:<span
                                                    class="text-danger">*</span></label>
                                            <input type="text" class="form-control" required v-model="update_twentythree_five"
                                                id="exampleInputEmail1" placeholder="ກະລຸນາປ້ອນຊື່">
                                        </div>
                                        
                                        <div class="form-group ml-3 mb-3">
                                            <label for="exampleInputEmail1">ວັນ:<span
                                                    class="text-danger">*</span></label>
                                            <select name="" id="" class="form-control" required v-model="update_days">
                                                <option value="ຈັນ">-- ຈັນ --</option>
                                                <option value="ອັງຄານ">-- ອັງຄານ --</option>
                                                <option value="ພຸດ">-- ພຸດ --</option>
                                                <option value="ພະຫັດ">-- ພະຫັດ --</option>
                                                <option value="ສຸກ">-- ສຸກ --</option>
                                                <option value="ເສົາ">-- ເສົາ --</option>
                                                <option value="ທິດ">-- ທິດ --</option>
                                            </select>
                                        </div>
                                        
                                    </div>
                                </div>
                                <div class="modal-footer justify-content-between">
                                    <button type="button" class="btn btn-danger" data-dismiss="modal"><i
                                            class="fas fa-times mr-1"></i>ຍົກເລີກ</button>
                                    <button type="submit" class="btn btn-info"><i class="fas fa-print mr-1"></i>
                                        ບັນທຶກ</button>
                                </div>
                            </form>
                        </div>
                        <!-- /.modal-content -->
                    </div>
                    <!-- /.modal-dialog -->
                </div>
                <!-- /.row (main row) -->
            </div><!-- /.container-fluid -->
        </section>
        <!-- /.content -->
    </div>
</template>

<script>
import axios from 'axios';
import Swal from 'sweetalert2';
import HeaderComponent from './includes/HeaderComponent.vue';
import SidebarComponent from './includes/SidebarComponent.vue';
export default {
    name: "DailyComponent",
    components: {
        HeaderComponent,
        SidebarComponent
    },
    data() {
        return {
            five_six: '',
            six_seven: '',
            seven_eight: '',
            eight_nine: '',
            nine_ten: '',
            ten_eleven: '',
            eleven_twelve: '',
            twelve_thirteen: '',
            thirteen_fourteen: '',
            fourteen_fifteen: '',
            fifteen_sixteen: '',
            sixteen_seventeen: '',
            seventeen_eighteen: '',
            eighteen_nineteen: '',
            nineteen_twenty: '',
            twenty_twentyone: '',
            twentyone_twentytwo: '',
            twentytwo_twentythree: '',
            twentythree_five: '',
            days: '',

            update_five_six: '',
            update_six_seven: '',
            update_seven_eight: '',
            update_eight_nine: '',
            update_nine_ten: '',
            update_ten_eleven: '',
            update_eleven_twelve: '',
            update_twelve_thirteen: '',
            update_thirteen_fourteen: '',
            update_fourteen_fifteen: '',
            update_fifteen_sixteen: '',
            update_sixteen_seventeen: '',
            update_seventeen_eighteen: '',
            update_eighteen_nineteen: '',
            update_nineteen_twenty: '',
            update_twenty_twentyone: '',
            update_twentyone_twentytwo: '',
            update_twentytwo_twentythree: '',
            update_twentythree_five: '',
            update_days: '',

            Daily_ID: null,
            dailies: [],
            searchQueryEight_Nine: '',
            searchQueryThirteen_Fourteen: '',
            searchQueryDays: '',
            searchQueryDate: '',
            none_data: false
        }

    },

    created() {
        this.ShowDailies();
    },

    methods: {

        // Function Show Admin
        async ShowDailies() {
            try {
                const response = await axios.get('http://localhost:3000/api/select-daily');
                if (Array.isArray(response.data)) {
                    this.dailies = response.data;
                    
                } else {
                    console.error('Invalid error', response.data);
                }
            } catch (error) {
                console.error('Error admins', error);
            }
        },

        // Function Create Admin
        async CreateDaily() {
            try {
                const response = await axios.post('http://localhost:3000/api/create-daily', {
                    five_six: this.five_six,
                    six_seven: this.six_seven,
                    seven_eight: this.seven_eight,
                    eight_nine: this.eight_nine,
                    nine_ten: this.nine_ten,
                    ten_eleven: this.ten_eleven,
                    eleven_twelve: this.eleven_twelve,
                    twelve_thirteen: this.twelve_thirteen,
                    thirteen_fourteen: this.thirteen_fourteen,
                    fourteen_fifteen: this.fourteen_fifteen,
                    fifteen_sixteen: this.fifteen_sixteen,
                    sixteen_seventeen: this.sixteen_seventeen,
                    seventeen_eighteen: this.seventeen_eighteen,
                    eighteen_nineteen: this.eighteen_nineteen,
                    nineteen_twenty: this.nineteen_twenty,
                    twenty_twentyone: this.twenty_twentyone,
                    twentyone_twentytwo: this.twentyone_twentytwo,
                    twentytwo_twentythree: this.twentytwo_twentythree,
                    twentythree_five: this.twentythree_five,
                    days: this.days
                });
                console.log(response.data);
                this.ShowDailies();
                this.ShowSuccessMessage();
                this.ResetDaily_Form();
            } catch (error) {
                console.error('Error create admin', error);
                this.ShowErrorMessage();
            }
        },

        // Function Reset Admin Form
        async ResetDaily_Form() {
            this.five_six = '',
            this.six_seven = '',
            this.seven_eight = '',
            this.eight_nine = '',
            this.nine_ten = '',
            this.ten_eleven = '',
            this.eleven_twelve = '',
            this.twelve_thirteen = '',
            this.thirteen_fourteen = '',
            this.fourteen_fifteen = '',
            this.fifteen_sixteen = '',
            this.sixteen_seventeen = '',
            this.seventeen_eighteen = '',
            this.eighteen_nineteen = '',
            this.nineteen_twenty = '',
            this.twenty_twentyone = '',
            this.twentyone_twentytwo = '',
            this.twentytwo_twentythree = '',
            this.twentythree_five = '',
            this.days = ''
        },

        async SearchDaily() {
            const params = new URLSearchParams();
            if(this.searchQueryEight_Nine){
                params.append('eight_nine',this.searchQueryEight_Nine);
            }
            if(this.searchQueryThirteen_Fourteen){
                params.append('thirteen_fourteen',this.searchQueryThirteen_Fourteen)
            }
            if(this.searchQueryDays){
                params.append('days',this.searchQueryDays)
            }
            if(this.searchQueryDate){
                params.append('created_at',this.searchQueryDate)
            }

            fetch(`http://localhost:3000/api/search-daily?${params.toString()}`)
                .then((response) => response.json())
                .then((data) => {
                    this.dailies = data;
                    this.none_data = data.length === 0;
                })
                .catch((error) => {
                    console.error('Search error', error);
                    this.none_data = true;
                });
        },

        async ConfirmDelete(Daily_ID) {
            Swal.fire({
                title: 'ຕ້ອງການລຶບແທ້ ຫຼື ບໍ່?',
                text: 'ທ່ານແນ່ໃຈບໍ ທີ່ຈະລຶບລະຫັດທີ່:' + Daily_ID,
                icon: 'warning',
                showCancelButton: true,
                cancelButtonText: 'ຍົກເລີກ',
                confirmButtonColor: '#d33',
                cancelButtonColor: '#3085d6',
                confirmButtonText: 'ຢືນຢັນ!'
            }).then((result) => {
                if (result.isConfirmed) {
                    this.DeleteDaily(Daily_ID);
                }
            });
        },

        async DeleteDaily(Daily_ID) {
            try {
                const response = await axios.put(`http://localhost:3000/api/delete-daily/${Daily_ID}`);
                console.log(response.data);
                Swal.fire({
                    title: 'ລົບລ້າງ!',
                    text: 'ຂໍ້ມູນໄດ້ຖືກລຶບສຳເລັດແລ້ວ',
                    icon: 'success',
                    timer: 2000,
                    timerProgressBar: true,
                    didOpen: () => {
                        Swal.showLoading();
                    }
                }).then(() => {
                    this.ShowDailies();
                });
            } catch (error) {
                console.error('Error deleting admin', error);
                Swal.fire({
                    title: 'ລົບລ້າງບໍ່ໄດ້!',
                    text: 'ຂໍ້ມູນທີ່ຕ້ອງການລຶບເກີດຂໍ້ຜິດພາດ',
                    icon: 'error',
                    timer: 2000,
                    timerProgressBar: true,
                    didOpen: () => {
                        Swal.showLoading();
                    }
                });
            }
        },

        // Function Show Admin Item
        async ShowDailyItem(Daily_ID) {
            this.Daily_ID = Daily_ID;
            try {
                const response = await axios.get(`http://localhost:3000/api/daily/${Daily_ID}`);
                
                    this.update_five_six = response.data.five_six
                    this.update_six_seven = response.data.six_seven
                    this.update_seven_eight = response.data.seven_eight
                    this.update_eight_nine = response.data.eight_nine
                    this.update_nine_ten = response.data.nine_ten
                    this.update_ten_eleven = response.data.ten_eleven
                    this.update_eleven_twelve = response.data.eleven_twelve
                    this.update_twelve_thirteen = response.data.twelve_thirteen
                    this.update_thirteen_fourteen = response.data.thirteen_fourteen
                    this.update_fourteen_fifteen = response.data.fourteen_fifteen
                    this.update_fifteen_sixteen = response.data.fifteen_sixteen
                    this.update_sixteen_seventeen = response.data.sixteen_seventeen
                    this.update_seventeen_eighteen = response.data.seventeen_eighteen
                    this.update_eighteen_nineteen = response.data.eighteen_nineteen
                    this.update_nineteen_twenty = response.data.nineteen_twenty
                    this.update_twenty_twentyone = response.data.twenty_twentyone
                    this.update_twentyone_twentytwo = response.data.twentyone_twentytwo
                    this.update_twentytwo_twentythree = response.data.twentytwo_twentythree
                    this.update_twentythree_five = response.data.twentythree_five
                    this.update_days = response.data.days
            } catch (error) {
                console.error(error.response.data);
            }
        },

        // Function Update Admin
        async UpdateDaily() {
            try {
                const response = await axios.put(`http://localhost:3000/api/update-daily/${this.Daily_ID}`, {
                    five_six: this.update_five_six,
                    six_seven: this.update_six_seven,
                    seven_eight: this.update_seven_eight,
                    eight_nine: this.update_eight_nine,
                    nine_ten: this.update_nine_ten,
                    ten_eleven: this.update_ten_eleven,
                    eleven_twelve: this.update_eleven_twelve,
                    twelve_thirteen: this.update_twelve_thirteen,
                    thirteen_fourteen: this.update_thirteen_fourteen,
                    fourteen_fifteen: this.update_fourteen_fifteen,
                    fifteen_sixteen: this.update_fifteen_sixteen,
                    sixteen_seventeen: this.update_sixteen_seventeen,
                    seventeen_eighteen: this.update_seventeen_eighteen,
                    eighteen_nineteen: this.update_eighteen_nineteen,
                    nineteen_twenty: this.update_nineteen_twenty,
                    twenty_twentyone: this.update_twenty_twentyone,
                    twentyone_twentytwo: this.update_twentyone_twentytwo,
                    twentytwo_twentythree: this.update_twentytwo_twentythree,
                    twentythree_five: this.update_twentythree_five,
                    days: this.update_days
                });
                console.log(response.data);
                this.$router.push('/dailies');
                this.ShowUpdateMessage();
                this.ShowDailies();
            } catch (error) {
                console.error(error.response.data)
                this.ShowErrorMessage();
            }
        },
        async ShowUpdateMessage() {
            Swal.fire({
                title: "ແກ້ໄຂສຳເລັດ",
                text: "ຂໍ້ມູນຖືກແກ້ໄຂສຳເລັດແລ້ວ",
                icon: "success",
                timer: 2000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading();
                }
            });
        },

        async ShowSuccessMessage() {
            Swal.fire({
                title: "ບັນທຶກສຳເລັດ",
                text: "ຂໍ້ມູນຖືກບັນທຶກສຳເລັດແລ້ວ",
                icon: "success",
                timer: 2000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading();
                }
            });
        },

        async ShowErrorMessage() {
            Swal.fire({
                title: "ເກີດຂໍ້ຜິດພາດ",
                text: "ກະລຸນາລອງໃໝ່ອີກຄັ້ງ",
                icon: "warning",
                timer: 2000,
                timerProgressBar: true,
                didOpen: () => {
                    Swal.showLoading();
                }
            });
        },

    }
}
</script>