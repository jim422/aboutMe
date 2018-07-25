<th>
    <span data-bind="text: friendly_name"></span>:
</th>
<td>
    <!-- ko foreach: user_input -->
    <div>
        <input type="text" data-bind="value: link, event: { blur: $parent.validate.bind($parent) }" class="form-control">
    </div>
    <!-- /ko -->
    <button class="btn btn-primary btn-sm" data-bind="click: addInputEl, visible: user_input().length < 10">添加</button>
    <button class="btn btn-danger btn-sm" data-bind="click: deleteInputEl, visible: user_input().length > 1">删除</button>
    <p class="validateItem">
        <label class="validateLabel" data-bind="text: validate_tip" style="color:#ff0000"></label>
    </p>
</td>
<td>

</td>