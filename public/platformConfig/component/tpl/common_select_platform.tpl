<th>
    <span data-bind="text: friendly_name"></span>:
</th>
<td>
    <span data-bind="text: platform_name"></span>
    <button data-bind="click: showPlatformList, visible: !readonly(), text: value() ? '修改' : '请选择' " class="btn btn-primary btn-sm"></button>
    <p class="validateItem">
        <label class="validateLabel" data-bind="text: validate_tip" style="color:#ff0000"></label>
    </p>
</td>
<td></td>