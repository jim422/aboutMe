<div class="modal fade" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true" id="{* id *}">
    <div class="modal-dialog modal-dialog-centered {* className *}" role="document">
        <div class="modal-content">
            <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLongTitle">
                    {* title *}
                </h5>
                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
            <div class="modal-body">
                {* content *}
            </div>
            <div class="modal-footer" data-bind="visible: showFooter">
                <button type="button" class="btn btn-secondary" data-dismiss="modal" >{* onCancelText *}</button>
                <button type="button" class="btn btn-primary">{* onOkText *}</button>
            </div>
        </div>
    </div>
</div>