<template>
    <div class="settings-page pb-5">
        <div class="settings-page-header">
            <SettingsHeader/>
        </div>
        <div class="settings-container">
            <div class="settings-main pt-5">
                <div class="row">
                    <div class="col-md-3">
                        <SettingsSidebar/>
                    </div>
                    <div class="col-md-9">
                        <div class="settings-content">
                            <h2 class="settings-content-title">Subscription</h2>
                            <div class="container-fluid p-0 mt-5 subscription-page">
                                <div class="row">
                                    <div class="col-md-10 subscription-section p-3">
                                       <div class="row justify-content-between">
                                           <div class="col-md-6">
                                               <p class="subscription-section-title">Capijzo Free</p>
                                           </div>
                                           <div class="col-md-6">
                                               <p class="current-plan text-right">Your Current Plan</p>
                                           </div>
                                       </div>
                                        <div class="row">
                                            <div class="col">
                                                <p class="subscription-section-desc">For Starters</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col">
                                                <p class="subscription-section-rate">Free</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-4">
                                                <p>- Up to 2 Categories</p>
                                            </div>
                                            <div class="col-md-4">
                                                <p>- Up to 350 Words in a snippet</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-4">
                                                <p>- Up to 3 Snippets per Category</p>
                                            </div>
                                            <div class="col-md-4">
                                                <p>- Daily Statistics</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mt-4">
                                    <div class="col-md-10 subscription-section p-3">
                                        <div class="row justify-content-between">
                                            <div class="col-md-6">
                                                <p class="subscription-section-title">Capijzo Premium</p>
                                            </div>
                                            <div class="col-md-6">
                                                <p class="current-plan text-right">
                                                    <button class="btn btn-default">
                                                        <span>Upgrade</span>
                                                    </button>
                                                </p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col">
                                                <p class="subscription-section-desc">For professionals</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col">
                                                <p class="subscription-section-rate">$3.99</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-4">
                                                <p>- Up to 25 Categories</p>
                                            </div>
                                            <div class="col-md-4">
                                                <p>- Up to 5000 Words in a snippet</p>
                                            </div>
                                            <div class="col-md-4">
                                                <p>- Unlimited labels</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-4">
                                                <p>- Up to 100 Snippets per Category</p>
                                            </div>
                                            <div class="col-md-4">
                                                <p>- Image & video in a snippet</p>
                                            </div>
                                            <div class="col-md-4">
                                                <p>- Snippet sharing</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row mt-4">
                                    <div class="col-md-10 subscription-section p-3">
                                        <div class="row justify-content-between">
                                            <div class="col-md-6">
                                                <p class="subscription-section-title">Capijzo Business</p>
                                            </div>
                                            <div class="col-md-6">
                                                <p class="releasing-soon text-right">Releasing Soon</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <p class="subscription-section-desc">For business and teams</p>
                                            </div>
                                            <div class="col-md-6">
                                                <p class="text-right mb-0">
                                                    <button class="btn" type="button" data-toggle="collapse" data-target="#multiCollapseExample2" aria-expanded="false" aria-controls="multiCollapseExample2">
                                                        <img src="/assets/images/Arrow_icon.svg" width="20" alt="">
                                                    </button>
                                                </p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col">
                                                <p class="subscription-section-rate">-.--</p>
                                            </div>

                                        </div>
                                        <div class="row collapse multi-collapse" id="multiCollapseExample2"">
                                            <div class="col">
                                                <div class="row">
                                                    <div class="col-md-4">
                                                        <p>- Unified accounts & teams</p>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <p>- Team sharing - category & label</p>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <p>- And many more…</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-4">
                                                        <p>- Unified billing</p>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <p>- Access control sharing</p>
                                                    </div>
                                                </div>
                                                <div class="row">
                                                    <div class="col-md-4">
                                                        <p>- Unified team & individual statistics</p>
                                                    </div>
                                                    <div class="col-md-4">
                                                        <p>- Team activity log</p>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-10">
                                        <div class="line-account py-4">
                                            <hr>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-10">
                                        <div class="row mb-3">
                                            <div class="col">
                                                <h5>Billing Information</h5>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col">
                                                <p class="mb-0">No billing information saved on this account.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-10">
                                        <div class="line-account py-4">
                                            <hr>
                                        </div>
                                    </div>
                                </div>
                                <div class="row">
                                    <div class="col-md-10">
                                        <div class="row mb-3">
                                           <div class="col">
                                               <h5>Receipt</h5>
                                           </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <p>January 03,2020</p>
                                            </div>
                                            <div class="col-md-6">
                                                <p class="download-pdf">Download PDF</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <p>January 03,2020</p>
                                            </div>
                                            <div class="col-md-6">
                                                <p class="download-pdf">Download PDF</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <p>January 03,2020</p>
                                            </div>
                                            <div class="col-md-6">
                                                <p class="download-pdf">Download PDF</p>
                                            </div>
                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <p>January 03,2020</p>
                                            </div>
                                            <div class="col-md-6">
                                                <p class="download-pdf">Download PDF</p>
                                            </div>
                                        </div>
                                    </div>
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
    import SettingsHeader from '../../layouts/SettingsHeader'
    import SettingsSidebar from '../../layouts/SettingsSidebar'
    export default {
        components: {
            SettingsHeader,
            SettingsSidebar
        }
    }
</script>

<style scoped>

</style>
