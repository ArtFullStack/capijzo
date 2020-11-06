<template>
    <div class="row separateModal align-items-center m-0">
        <div class="col-md-5 mx-auto">
            <div class="card card-block justify-content-center">
                <div class="card-body">
                    <div class="card_header d-flex justify-content-between">
                        <h2 class="title">Invite Team Member</h2>
                        <div class="discard">
                            <router-link to="/settings/team-members">
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
                                <router-link to="/settings/team-members">
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
                                <div class="member_name">
                                    <span>alan.marshall@mail.com</span>
                                </div>
                            </div>
                            <div class="member_permission">
                                <span class="owner">Administrator</span>
                            </div>
                        </div>
                        <div class="member d-flex justify-content-between">
                            <div class="member-info d-flex align-items-center">
                                <div class="member_name">
                                    <span>fionna.oliver@mail.com</span>
                                </div>
                            </div>
                            <div class="member_permission">
                                <span>Manager</span>
                            </div>
                        </div>
                        <div class="member d-flex justify-content-between">
                            <div class="member-info d-flex align-items-center">
                                <div class="member_name">
                                    <span>amanda.barrett@mail.com</span>
                                </div>
                            </div>
                            <div class="member_permission">
                                <span>User</span>
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

