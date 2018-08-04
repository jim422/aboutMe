<th>
    <span data-bind="text: friendly_name"></span>:
</th>
<td>
    <!-- ko foreach: user_input -->
    <div class="uk-margin">
        <div class="uk-inline">
            <a class="uk-form-icon uk-form-icon-flip" href="#" uk-icon="icon: link"></a>
            <input class="uk-input" type="text"
                   data-bind="value: link, event: { blur: $parent.validate.bind($parent) }">
        </div>
    </div>
    <!-- /ko -->
    <p class="validateItem">
        <label class="validateLabel" data-bind="text: validate_tip" style="color:#ff0000"></label>
    </p>
    <div class="add-link-button">
        <button class="uk-button uk-button-primary uk-button-small" data-bind="click: addInputEl, visible: user_input().length < 10">添加</button>
        <button class="uk-button uk-button-danger uk-button-small" data-bind="click: deleteInputEl, visible: user_input().length > 1">删除</button>
    </div>


</td>
<td>

</td>