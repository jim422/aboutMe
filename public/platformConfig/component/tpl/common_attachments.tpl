<th data-bind="visible: head_visible">
    <span data-bind="text: friendly_name"></span>：
</th>
<td>
    <div class="js_uploadPic">
        <div data-bind="visible: readonly == false">
            <div class="js_upload">jj</div>

        </div>
        <ul class="js_list uploadlist_smallthumb clearfix thumb_mini_list" style="width:100%;">
        </ul>
    </div>
    <p class="validateItem">
        <label class="validateLabel" data-bind="text: validate_tip" style="color:#ff0000"></label>
    </p>
    <div data-bind="visible: content_tip, text: content_tip"></div>

</td>