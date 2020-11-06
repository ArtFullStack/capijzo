<template>
    <div class="row separateModal align-items-center m-0">
        <div class="col-md-5 mx-auto">
            <div class="card card-block justify-content-center">
                <div class="card-body">
                    <div class="card_header d-flex justify-content-between">
                        <h2 class="title">Share</h2>
                        <div class="discard">
                            <router-link to="/dashboard">
                                Close
                            </router-link>
                        </div>
                    </div>

                    <div class="form-group text-left my-4">
                        <div class="row align-items-end">
                            <div class="col-md-8">
                                <label for="email">Invite Someone</label>
                                <div class="input-group permissionAddon member_permission">
                                    <input type="email" class="form-control" id="email" aria-describedby="emailHelp"
                                           placeholder="Add Email">
                                    <div class="drop-addon">
                                        <button class="btn btn-default permissionDropdown" type="button"
                                                id="permissionDropdown0"
                                                data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                            Can view <img src="/assets/images/Arrow_icon.svg" alt="">
                                        </button>
                                        <div class="dropdown-menu"
                                             aria-labelledby="permissionDropdown0">
                                            <a class="dropdown-item owner" href="#">Make owner</a>
                                            <a class="dropdown-item" href="#">Can view</a>
                                            <a class="dropdown-item" href="#">Can use</a>
                                            <a class="dropdown-item" href="#">Can edit</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-4">
                                <router-link to="/dashboard">
                                    <button type="button" id="add-category-button" class="btn btn-default">Invite
                                    </button>
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <label>Members</label>

                    <div class="members">
                        <div class="member d-flex justify-content-between">
                            <div class="member-info d-flex align-items-center">
                                <div class="member_image mr-3">
                                    <img src="/assets/user-images/user1.png" alt="">
                                </div>
                                <div class="member_name">
                                    <span>Richard Smith</span>
                                </div>
                            </div>
                            <div class="member_permission">
                                <span class="owner">Owner</span>
                            </div>
                        </div>
                        <div class="member d-flex justify-content-between">
                            <div class="member-info d-flex align-items-center">
                                <div class="member_image mr-3">
                                    <img src="/assets/user-images/user2.png" alt="">
                                </div>
                                <div class="member_name">
                                    <span>Kathryn Murphy</span>
                                </div>
                            </div>
                            <div class="member_permission">
                                <button class="btn btn-default permissionDropdown" type="button"
                                        id="permissionDropdown2"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Can view <img src="/assets/images/Arrow_icon.svg" alt="">
                                </button>
                                <div class="dropdown-menu"
                                     aria-labelledby="permissionDropdown2">
                                    <a class="dropdown-item owner" href="#">Make owner</a>
                                    <a class="dropdown-item" href="#">Can view</a>
                                    <a class="dropdown-item" href="#">Can use</a>
                                    <a class="dropdown-item" href="#">Can edit</a>
                                    <hr>
                                    <a class="dropdown-item" href="#">Delete</a>
                                </div>
                            </div>
                        </div>
                        <div class="member d-flex justify-content-between">
                            <div class="member-info d-flex align-items-center">
                                <div class="member_image mr-3">
                                    <img src="/assets/user-images/user3.png" alt="">
                                </div>
                                <div class="member_name">
                                    <span>Anthony James</span>
                                </div>
                            </div>
                            <div class="member_permission">
                                <button class="btn btn-default permissionDropdown" type="button"
                                        id="permissionDropdown3"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Can edit <img src="/assets/images/Arrow_icon.svg" alt="">
                                </button>
                                <div class="dropdown-menu"
                                     aria-labelledby="permissionDropdown3">
                                    <a class="dropdown-item owner" href="#">Make owner</a>
                                    <a class="dropdown-item" href="#">Can view</a>
                                    <a class="dropdown-item" href="#">Can use</a>
                                    <a class="dropdown-item" href="#">Can edit</a>
                                    <hr>
                                    <a class="dropdown-item" href="#">Delete</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {}
</script>
